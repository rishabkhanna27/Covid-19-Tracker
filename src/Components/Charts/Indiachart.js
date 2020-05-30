import React, {  useState, useEffect } from 'react';
import { Line} from 'react-chartjs-2';
import styles from './Chart.module.css';

import { fetchDailyData } from '../Tabs/India';

export const Charts = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  
  // console.log(dailyData);
  const lineChart = (
    dailyData.length ? (
      <Line 
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.totalconfirmed),
            label: 'Infected',
            fill: true,
            borderColor: 'rgba(75,192,192,1)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 7,
            pointRadius: 2,
            pointHitRadius: 10,
          }, {
            data: dailyData.map((data) => data.totaldeceased),
            label: 'Deaths',
            borderColor: 'red',
            fill: true,
            // backgroundColor:'red',
            pointBackgroundColor: '#fff',
            pointBorderColor: 'red',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 7,
            pointRadius: 2,
            pointHitRadius: 10,          
          }, {
            data: dailyData.map((data) => data.totalrecovered),
            label: 'Recovered',
            borderColor: 'green',
            fill: true,
            // backgroundColor:'lightgreen',
            pointBackgroundColor: '#fff',
            pointBorderColor: 'green',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 7,
            pointRadius: 2,
            pointHitRadius: 10,          
          },
            
          ],
        }}
      />
    ) : null
  );

  return (
<div className="chartt">
    <div className={styles.container}>
      { lineChart}
    </div>
    </div>
  );
};

export default Charts;
