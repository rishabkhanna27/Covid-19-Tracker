import React from 'react';
import {Card, CardDeck} from "react-bootstrap";
import CountUp from 'react-countup';
import styles from './Tablecards.module.css';

export  const Infoo = ({data:{ cases, recovered, deaths, updated, todayCases, todayDeaths,country,active,tests }}) => {
   if(!cases){
     return 'loading..';
   }
        return(
             <div>
               <div className={styles.container}></div>
               <div className="center">
  <CardDeck className="text-center ">
  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Active cases</Card.Title><hr></hr>
      <Card.Text>Number of active cases of COVID-19.<br></br>
        <b>
      <CountUp start={0} end={active} duration={2.75} separator="," />
      </b>
      
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-secondary mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >
  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Today cases</Card.Title><hr></hr>
      <Card.Text>Number of cases of COVID-19 today.<br></br>
        <b>
      <CountUp start={0} end={todayCases} duration={2.75} separator="," />
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
    <Card.Footer className="card text-white bg-dark mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >
  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Deaths Today</Card.Title><hr></hr>
      <Card.Text>
      
     Number of deaths caused by COVID-19 Today.<br></br>
     <b><CountUp start={0} end={todayDeaths} duration={2.75} separator="," />
      </b>
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-danger mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >
  <Card className="indiacard">
    <Card.Body>
      <Card.Title>Tests Done</Card.Title><hr></hr>
      <Card.Text>
      
     Number of Tests done of COVID-19.<br></br>
     <b><CountUp start={0} end={tests} duration={2.75} separator="," />
      </b>
      </Card.Text>
    </Card.Body><hr></hr>
    <Card.Footer className="card text-white bg-info mb-3">
    <p>Last Updated {new Date(updated).toDateString()}</p>
    </Card.Footer>
  </Card >
</CardDeck>
            </div>
            </div>
        );
    
  };

export default Infoo;