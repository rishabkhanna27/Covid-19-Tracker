import {MAP_META, MAP_STATISTICS, MAP_TYPES, MAP_VIEWS} from '../../constants';
import * as d3 from 'd3';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import useSWR from 'swr';
import * as topojson from 'topojson';

const colorInterpolator = (caseType, t) => {
  switch (caseType) {
    case 'confirmed':
      return d3.interpolatePurples(t * 3.0);
    default:
      return;
  }
};
const caseColor = (caseType = '') => {
  switch (caseType) {
    case 'confirmed':
      return '#066666';
    default:
      return;
  }
};
function ChoroplethMap({
  statistic,mapData,currentMap,regionHighlighted,setRegionHighlighted,mapOption,isCountryLoaded,
}) {
  const svgRef = useRef(null);

  const mapMeta = MAP_META[currentMap.name];
  const geoDataResponse = useSWR(mapMeta.geoDataFile, async (file) => {
    return await d3.json(file);
  });

  const mapScale = useMemo(() => {
      return d3
        .scaleSequential([0, Math.max(1, statistic[mapOption].max)], (t) =>
          colorInterpolator(mapOption, t)
        )
        .clamp(true);
  },
   [ statistic, mapOption]);

  useEffect(() => {
    if (!geoDataResponse.data) return;
    const geoData = geoDataResponse.data;

    const topology = topojson.feature(
      geoData,
      geoData.objects[mapMeta.graphObjectStates || mapMeta.graphObjectDistricts]
    );

    const svg = d3.select(svgRef.current);
    if (!svg.attr('viewBox')) {
      const {
        width: widthDefault,
        height: heightDefault,
      } = svgRef.current.getBoundingClientRect();
      const projection = isCountryLoaded
        ? d3.geoMercator().fitWidth(widthDefault, topology)
        : d3.geoMercator().fitSize([widthDefault, heightDefault], topology);
      const path = d3.geoPath(projection);
      const bBox = path.bounds(topology);
      const [width, height] = [+bBox[1][0], bBox[1][1]];
      svg.attr('viewBox', `0 0 ${width} ${height}`);
    }
    const bBox = svg.attr('viewBox').split(' ');
    const [width, height] = [+bBox[2], +bBox[3]];

    const projection = d3.geoMercator().fitSize([width, height], topology);
    const path = d3.geoPath(projection);

    let features =
      currentMap.stat !== MAP_STATISTICS.HOTSPOTS
        ? currentMap.view === MAP_VIEWS.STATES
          ? topojson.feature(
              geoData,
              geoData.objects[mapMeta.graphObjectStates]
            ).features
          : topojson.feature(
              geoData,
              geoData.objects[mapMeta.graphObjectDistricts]
            ).features
        : [
            ...topojson.feature(
              geoData,
              geoData.objects[mapMeta.graphObjectStates]
            ).features,
          ];

    const t = d3.transition().duration(500);
    let onceTouchedRegion = null;
    const regionSelection = svg
      .select('.regions')
      .selectAll('path')
      .data(
        currentMap.stat !== MAP_STATISTICS.HOTSPOTS ? features : [],
        (d) => d.id
      )
      .join((enter) => {
        const sel = enter
          .append('path')
          .attr('d', path)
          .attr('stroke-width', 2)
          .attr('stroke-opacity', 0)
          .style('cursor', 'pointer')
          .on('mouseenter', (d) => {
            const region = {state: d.properties.st_nm};
            if (d.properties.district) region.district = d.properties.district;
            setRegionHighlighted(region);
          })
          .on('mouseleave', (d) => {
            if (onceTouchedRegion === d) onceTouchedRegion = null;
          })
        sel.append('title');
        return sel;
      })
      .attr('pointer-events', 'none');

    regionSelection
      .transition(t)
      .attr('fill', (d) => {
        let n;
        {
          const state = d.properties.st_nm;
            n =
              mapData[state] && mapData[state][mapOption]
                ? mapData[state][mapOption]
                : 0;
        }
        const color = n === 0 ? '#ffffff00' : mapScale(n);
        return color;
      })
      .attr(
        'stroke',
        currentMap.stat === MAP_STATISTICS.ZONE
          ? '#343a40'
          : caseColor(mapOption)
      )
      .on('end', function () {
        d3.select(this).attr('pointer-events', 'all');
      });
    let meshStates = [];
    if (mapMeta.mapType === MAP_TYPES.COUNTRY) {
      meshStates = [
        topojson.mesh(geoData, geoData.objects[mapMeta.graphObjectStates]),
      ];
      meshStates[0].id = mapMeta.graphObjectStates;
    }
    let meshDistricts = [];
    svg
      .select(
        currentMap.view === MAP_VIEWS.STATES
          ? '.state'
          : '.district-borders'
      )
      .attr('fill', 'none')
      .selectAll('path')
      .data(
        currentMap.view === MAP_VIEWS.STATES ? meshStates : meshDistricts,
        (d) => d.id
      )
      .join((enter) => enter.append('path').attr('d', path))
      .transition(t)
      .attr('stroke', () => {
          return caseColor(mapOption, '500');
      });
  }, [
    geoDataResponse.data,
    mapMeta,
    currentMap,
    setRegionHighlighted,
    isCountryLoaded,
    statistic,
    mapData,
    mapOption,
    mapScale,
  ]
  );

  const highlightRegionInMap = useCallback(
    (state, district) => {
      const svg = d3.select(svgRef.current);
       
        svg
          .select('.regions')
          .selectAll('path')
          .each(function (d) {
            const highlighted =
              state === d.properties.st_nm;
            if (highlighted) this.parentNode.appendChild(this);
            d3.select(this).attr('stroke-opacity', highlighted ? 1 : 0);
          });
      
    },[]
  );

  useEffect(() => {
    if (!geoDataResponse.data) return;
    highlightRegionInMap(regionHighlighted.state);
  }, [
    geoDataResponse.data,
    highlightRegionInMap,
    regionHighlighted.state,
    mapOption,
  ]);
  return (
    <React.Fragment>
      <div className="svg-parent fadeInUp" >
        <svg id="chart" preserveAspectRatio="xMidYMid meet" ref={svgRef}>
          <g className="regions" />
          <g className="state" />
        </svg>
      </div>
    </React.Fragment>
  );
}

export default ChoroplethMap;