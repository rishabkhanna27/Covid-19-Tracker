import {STATE_ROW_STATISTICS, DISTRICT_ROW_STATISTICS} from '../../constants';
import {formatNumber} from '../../utils/commonfunctions';
import classnames from 'classnames';
import React, {useState,  useMemo} from 'react';
import * as Icon from 'react-feather';

function StateCell({state, statistic}) {
  const ArrowUp = useMemo(() => <Icon.ArrowUp />, []);

  return (
    <td >
      <span className={classnames('delta', `is-${statistic}`)}>
        {state[`delta${statistic}`] > 0 && ArrowUp}
        {state[`delta${statistic}`] > 0 && state[`delta${statistic}`]}
      </span>
      <span className="total">
        {state[statistic] === 0 ? '-' : formatNumber(state[statistic])}
      </span>
    </td>
  );
}
function PureDistrictCell({district, statistic}) {
  return (
    <td className="roo">
      <span className={classnames('delta', `is-${statistic}`)}>
        {district.delta[statistic] > 0 && <Icon.ArrowUp />}
        {district.delta[statistic] > 0 && district.delta[statistic]}
      </span>
      <span className="total">{formatNumber(district[statistic])}</span>
    </td>
  );
}

const DistrictCell = React.memo(PureDistrictCell);

function PureDistrictRow({
  district,
  state,
  sortedDistricts,
  districts,
}) {

  return (
    <tr >
      <td className="roo">
        <div className="title-chevron">
          <span className="title-icon">
            {(district)}
            <span
              data-for="district"
              data-tip={[[sortedDistricts[district].notes]]}
              data-event="touchstart mouseover"
              data-event-off="mouseleave"
              onClick={(e) => e.stopPropagation()}
            >
              {sortedDistricts[district].notes }
            </span>
          </span>
        </div>
      </td>

      {DISTRICT_ROW_STATISTICS.map((statistic) => (
        <DistrictCell
          key={statistic}
          district={districts[district]}
          statistic={statistic}
        />
      ))}
    </tr>
  );
}

const DistrictRow = React.memo(PureDistrictRow);
function Row({
  index,
  state,
  districts,
}) {
  const [sortedDistricts] = useState(districts);
  const [showDistricts, setShowDistricts] = useState(false);

  const Chevron = useMemo(
    () => (
      <span
        className={classnames(
          'dropdown',
          {rotateRightDown: showDistricts},
          {rotateDownRight: !showDistricts}
        )}
      >
        <Icon.ChevronDown />
      </span>
    ),
    [showDistricts]
  );
  return (
    <React.Fragment>
      <tr 
        onClick={
          state.statecode !== 'TT'
            ? () => {
                setShowDistricts(!showDistricts);
              }
            : null
        }
      >
        <td >
          <div className="title-chevron">
            {state.statecode !== 'TT' && Chevron}
            <span className="title-icon">
              {(state.state)}
            </span>
          </div>
        </td>

        {STATE_ROW_STATISTICS.map((statistic, index) => (
          <StateCell key={index} state={state} statistic={statistic} />
        ))}
      </tr>
      {showDistricts &&
        Object.keys(sortedDistricts).map((district, index) => (
          <DistrictRow
            key={district}
            state={state}
            district={district}
            districts={districts}
            sortedDistricts={sortedDistricts}
          />
        ))}
    </React.Fragment>
  );
}

export default React.memo(Row);