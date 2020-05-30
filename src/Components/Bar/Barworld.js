import React from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './Bar.module.css';

export const Barr = ({ data: { cases, recovered, deaths, country }}) => { 

  const barChart = (
    cases ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [cases, recovered, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
        }}
      />
    ) : null
  );

  return (

    <div>
    <div className={styles.container}>
      {barChart}
    </div>
    </div>
  );
};

export default Barr;
