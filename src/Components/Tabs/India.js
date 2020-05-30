import React from 'react';
import {InfoIndia} from '../Cards/CardsIndia'
import {Charts} from '../Charts/Indiachart'
import {Home} from '../../Components/Map/home'
import {FooterPage} from '../Footerfile/Footer'
import axios from 'axios';

const url = 'https://api.covid19india.org/data.json';
const urll = 'https://api.covid19india.org/data.json';

export const fetchData = async () => {
  try{
   const {data:{ statewise }} = await axios.get(url);
   return(statewise[0]);
  }
  catch(error)
  {
    console.log(error);
  }
};

 export const fetchDailyData = async () => {
  try{
    const {data:{ cases_time_series}} = await axios.get(urll);
    return cases_time_series; 
  }
   catch(error)
   {
     console.log(error);
   }
  };

export class India extends React.Component{
  
  state=
  {
    data:{},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }
  render(){
    const {data,}=this.state;
     return(
        <div className="india">
          <div className="upper">
        <InfoIndia data={data}/>
        <Charts data={data}/> 
        </div>
        <div className="cent">
          .
        <p><b><u>GO COVID-19 <span role="img" aria-label="house">&#128548;</span></u></b></p>
         .
        </div>
        <Home/>
        <FooterPage/>
        </div>
    )
  }
}
export default India;