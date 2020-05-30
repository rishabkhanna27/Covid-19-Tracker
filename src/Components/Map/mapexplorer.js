import ChoroplethMap from './choropleth';
import {
  MAP_META,
  MAP_STATISTICS,
  MAP_TYPES,
  MAP_VIEWS,
} from '../../constants';
import {
  formatDate,
  formatNumber,
  formatLastUpdated,
} from '../../utils/commonfunctions';

import React, {useState, useMemo} from 'react';
const getRegionFromState = (state) => {
  if (!state) return;
  const region = {...state};
  return region;
};
function MapExplorer({
  mapName,
  states,
  stateTestData,
  regionHighlighted,
  setRegionHighlighted,
  mapOption,
  isCountryLoaded = true,
}) {
  const [currentMap] = useState({
    name: mapName,
    stat: MAP_STATISTICS.TOTAL,
    view:
      MAP_META[mapName].mapType === MAP_TYPES.COUNTRY
        ? MAP_VIEWS.STATES
        : MAP_VIEWS.DISTRICTS,
  });
  const currentMapMeta = MAP_META[currentMap.name];

  const [statistic, currentMapData] = useMemo(() => {
    let currentMapData = {};
    let statistic = {};
    {
      const dataTypes = ['confirmed', 'active', 'recovered', 'deceased'];
      statistic = dataTypes.reduce((acc, dtype) => {
        acc[dtype] = {total: 0, max: 0};
        return acc;
      }, {});
      if (currentMapMeta.mapType === MAP_TYPES.COUNTRY) {
        if (currentMap.view === MAP_VIEWS.STATES) {
          currentMapData = states.reduce((acc, state) => {
            acc[state.state] = {};
            dataTypes.forEach((dtype) => {
              let typeCount =
                parseInt(state[dtype !== 'deceased' ? dtype : 'deaths']) || 0;
              if (state.state !== 'Total') {
                statistic[dtype].total += typeCount;
                if (typeCount > statistic[dtype].max) {
                  statistic[dtype].max = typeCount;
                }
              }
              acc[state.state][dtype] = typeCount;
            });
            return acc;
          }, {});
        } 
      } else if (currentMapMeta.mapType === MAP_TYPES.STATE) {
        currentMapData[currentMap.name].Total = {};
        const stateData = states.find(
          (state) => currentMap.name === state.state
        );
        dataTypes.forEach((dtype) => {
          currentMapData[currentMap.name].Total[dtype] =
            parseInt(stateData[dtype !== 'deceased' ? dtype : 'deaths']) || 0;
        });
      }
    }
    return [statistic, currentMapData];
  }, [currentMap, currentMapMeta.mapType, states]);

  const [hoveredRegion, panelRegion] = useMemo(() => {
    if (!regionHighlighted.district) {
      const state = getRegionFromState(
        states.find((state) => regionHighlighted.state === state.state)
      );
      return [state, state];
    } 
  }, [
    states,
    regionHighlighted.state,
    regionHighlighted.district,
  ]);
  const testObj = stateTestData[panelRegion.state];
  return (
    <div
      className={`MapExplorer  ${
        'stickied' 
      }`}>
      <div className="header">
        <h1>
          {(currentMap.name)} {('Map')}
        </h1>
        <br></br>
      </div>
      <div className="map-stats">
        <div
          className={`stats ${
            mapOption === 'confirmed' 
          }`}
        >
          <h5>{window.innerWidth <= 769 ? ('Cnfmd') : ('Confirmed')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(panelRegion.confirmed)}</h1>
            <h6>{`+${formatNumber(panelRegion.deltaconfirmed)}`}</h6>
          </div>
        </div>
        <div
          className={`stats is-blue ${
            mapOption === 'active' 
          }`}
        >
          <h5>{window.innerWidth <= 769 ? ('Actv') : ('Active')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(panelRegion.active)}</h1>
            <h6>{` `}</h6>
          </div>
        </div>
        <div
          className={`stats is-green ${
            mapOption === 'recovered' 
          }`}
        >
          <h5>{window.innerWidth <= 769 ? ('Rcvrd') : ('Recovered')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(panelRegion.recovered)}</h1>
            <h6>{`+${formatNumber(panelRegion.deltarecovered)}`}</h6>
          </div>
        </div>
        <div
          className={`stats is-gray  ${
            mapOption === 'deceased' 
          }`}
        >
          <h5>{window.innerWidth <= 769 ? ('Dcsd') : ('Deceased')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(panelRegion.deaths)}</h1>
            <h6>{`+${formatNumber(panelRegion.deltadeaths)}`}</h6>
          </div>
        </div>

        <div
          className="stats is-purple tested "
        >
          <h5>{('Tested')}</h5>
          <div className="stats-bottom">
            <h1>{formatNumber(testObj?.totaltested)}</h1>
          </div>
        </div>
      </div>

      <div className="meta fadeInUp" >
        <h2>
          {hoveredRegion.district
            ? (hoveredRegion.district) +
              (hoveredRegion.district === 'Unknown'
                ? ` (${(hoveredRegion.state)})`
                : '')
            : (hoveredRegion.state)}
        </h2>
        {currentMapMeta.mapType !== MAP_TYPES.STATE &&
          panelRegion.lastupdatedtime && (
          <b>  <div className="last-update">
              <p className="last">{('Last updated')}<br></br>
                {isNaN(Date.parse(formatDate(panelRegion.lastupdatedtime)))
                  ? ''
                  : formatLastUpdated(panelRegion.lastupdatedtime) +
                    ' ' +
                    ('ago')}
              </p>
            </div></b>
          )}
      </div>
      <div>
        {mapOption && (
          <ChoroplethMap
            statistic={statistic}
            currentMap={currentMap}
            mapData={currentMapData}
            regionHighlighted={regionHighlighted}
            setRegionHighlighted={setRegionHighlighted}
            mapOption={mapOption}
            isCountryLoaded={isCountryLoaded}
          />
        )}
      </div>
      </div>
  );
}
export default React.memo(MapExplorer);