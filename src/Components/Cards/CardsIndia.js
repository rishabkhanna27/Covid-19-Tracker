import React, {  useState, useEffect } from 'react';
import {Card, CardDeck} from "react-bootstrap";
import CountUp from 'react-countup';
import styles from './Cards.module.css';


import { fetchData } from '../Tabs/India';

export const InfoIndia = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchData();

      setDailyData(initialDailyData);
    };
    fetchMyAPI();
    
  }, 
    
  []);
// dailyData.filter(daily =>{ 
//   return daily.statecode === "TT";
//  })
// .forEach(daily => {
//   console.log(daily);
// })
 //console.log(dailyData)
   if(!dailyData.confirmed){
     return 'loading..';
  }

//   console.log(statewise);
        return(
             <div >
               <div className={styles.container}><b><u><span role="img" aria-label="house">&#127969;</span>COVID-19 India TRACKER</u></b></div>
               <div className="center">
               <CardDeck className="text-center ">
  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Active cases</Card.Title><hr></hr>
      <Card.Text>Number of Active cases of COVID-19.<br></br>
        <b>
      <CountUp start={0} end={parseInt(dailyData.active)} duration={2.75} separator="," />
      </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-warning mb-3">
    <p>Last Updated {(dailyData.lastupdatedtime)}</p>
    </Card.Footer>
  </Card >

  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Total cases</Card.Title><hr></hr>
      <Card.Text>Number of total cases of COVID-19.<br></br>
        <b>
      <CountUp start={0} end={parseInt(dailyData.confirmed)} duration={2.75} separator="," />
      </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-primary mb-3">
    <p>Last Updated {(dailyData.lastupdatedtime)}</p>
    </Card.Footer>
  </Card >
  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Recovered cases</Card.Title><hr></hr>
      <Card.Text>
      Number of recoveries from COVID-19.<br></br>
      <b>
      <CountUp start={0} end={parseInt(dailyData.recovered)} duration={2.75} separator="," />
     </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-success mb-3">
    <p>Last Updated {(dailyData.lastupdatedtime)}</p>
    </Card.Footer>
  </Card >
  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Total Deaths</Card.Title><hr></hr>
      <Card.Text>
      
     Number of deaths caused by COVID-19.<br></br>
     <b><CountUp start={0} end={parseInt(dailyData.deaths)} duration={2.75} separator="," />
      </b>
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-danger mb-3">
    <p>Last Updated {(dailyData.lastupdatedtime)}</p>
    </Card.Footer>
  </Card >
  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Cases Today</Card.Title><hr></hr>
      <Card.Text>Number of total cases Today of COVID-19.<br></br>
        <b>
      <CountUp start={0} end={parseInt(dailyData.deltaconfirmed)} duration={2.75} separator="," />
      </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-info mb-3">
    <p>Last Updated {(dailyData.lastupdatedtime)}</p>
    </Card.Footer>
  </Card >
</CardDeck>
            </div>
            <br></br>
            <h2 className={styles.time}><u><b>Last Updated {(dailyData.lastupdatedtime)}</b></u><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></h2>
            </div>
        );
    
  };

export default InfoIndia;