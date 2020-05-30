import React from 'react';
import {Card, CardDeck} from "react-bootstrap";
import CountUp from 'react-countup';
import styles from './Cards.module.css';

export  const Info = ({ data: { cases, recovered, deaths, updated, active, todayCases} }) => {
   if(!cases){
     return 'loading..';
   }
        return(
             <div>
               <div className={styles.container}><b><u><span role="img" aria-label="house">&#127757;</span>COVID-19 WORLD TRACKER</u></b></div>
               <div className="center">
  <CardDeck className="text-center ">
    <Card className="indiacard">
    <Card.Body>
      <Card.Title>Active cases</Card.Title><hr></hr>
      <Card.Text>Number of Active cases of COVID-19.<br></br>
        <b>
      <CountUp start={0} end={active} duration={2.75} separator="," />
      </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-warning mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >

    <Card className="indiacard">
    <Card.Body>
      <Card.Title>Total cases</Card.Title><hr></hr>
      <Card.Text>Number of total cases of COVID-19.<br></br>
        <b>
      <CountUp start={0} end={cases} duration={2.75} separator="," />
      </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-primary mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >
    <Card className="indiacard">
    <Card.Body>
      <Card.Title>Recovered cases</Card.Title><hr></hr>
      <Card.Text>
      Number of recoveries from COVID-19.<br></br>
      <b>
      <CountUp start={0} end={recovered} duration={2.75} separator="," />
     </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-success mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >
    <Card className="indiacard">
    <Card.Body>
      <Card.Title>Total Deaths</Card.Title><hr></hr>
      <Card.Text>
      
     Number of deaths caused by COVID-19.<br></br>
     <b><CountUp start={0} end={deaths} duration={2.75} separator="," />
      </b>
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-danger mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >
    <Card className="indiacard">
    <Card.Body>
      <Card.Title>Cases Today</Card.Title><hr></hr>
      <Card.Text>Number of total cases Today of COVID-19.<br></br>
        <b>
      <CountUp start={0} end={todayCases} duration={2.75} separator="," />
      </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-info mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >
</CardDeck>
            </div>
            <br></br>
            <h2 className={styles.time}><u><b>Last Updated {new Date(updated).toDateString()}</b></u><a href="https://github.com/rishabkhanna27" className="text-dark"><p className="git">||-Rishab_Khanna-||</p></a></h2>
            </div>
        );
    
  };

export default Info;