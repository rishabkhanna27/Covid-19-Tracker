import MapExplorer from './mapexplorer';
import Table from '../Table/table';
import {parseStateTestData} from '../../utils/commonfunctions';
import axios from 'axios';
import React, {useState, useCallback} from 'react';
import {useEffectOnce} from 'react-use';

export function Home(props) {
  const [states, setStates] = useState(null);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState(null);
  const [stateTestData, setStateTestData] = useState(null);
  const [fetched, setFetched] = useState(false);
  const [regionHighlighted, setRegionHighlighted] = useState({
    state: 'Total',
  });
  const [mapOption] = useState('confirmed');

  useEffectOnce(() => {
    getStates();
  });

  const getStates = async () => {
    try {
      const [
        {data},
        {data: stateDistrictWiseResponse},
        {data: stateTestData},
      ] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
        axios.get('https://api.covid19india.org/state_test_data.json'),
      ]);

      setStates(data.statewise);
      const testData = parseStateTestData(stateTestData.states_tested_data);
      const totalTest = data.tested[data.tested.length - 1];
      testData['Total'] = {
        source: totalTest.source,
        totaltested: totalTest.totalsamplestested,
        updatedon: totalTest.updatetimestamp.split(' ')[0],
      };
      setStateTestData(testData);
      setStateDistrictWiseData(stateDistrictWiseResponse);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };
  const onHighlightState = useCallback((state) => {
    if (!state) return setRegionHighlighted(null);
    setRegionHighlighted({state: state.state});
  }, []);

  return (
    <React.Fragment>
      <div className="Home">
        <div className="home-left">
            {fetched && (
              <MapExplorer
                mapName={'India'}
                states={states}
                districts={stateDistrictWiseData}
                stateTestData={stateTestData}
                regionHighlighted={regionHighlighted}
                setRegionHighlighted={setRegionHighlighted}
                mapOption={mapOption}
              />
            )}
        </div>
        <div className="home-left">
          {/* <React.Fragment> */}
          {stateDistrictWiseData && (
            <Table
              states={states}
              summary={false}
              districts={stateDistrictWiseData}
              regionHighlighted={regionHighlighted}
              setRegionHighlighted={setRegionHighlighted}
              onHighlightState={onHighlightState}
            />
          )}
          {/* </React.Fragment> */}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;