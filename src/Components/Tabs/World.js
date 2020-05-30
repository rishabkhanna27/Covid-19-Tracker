import React from 'react';
import {Info} from '../Cards/CardsWorld'
import {Chart} from '../Charts/Worldchart'
import {Picker} from '../Picker/Worldpicker'
import {Barr} from '../Bar/Barworld'
import {Infoo} from '../Tablecard/Tablecards'
import {FooterPage} from '../Footerfile/Footer'
import axios from 'axios';



const url = 'https://disease.sh/v2/all';
const urll = 'https://covid19.mathdro.id/api/daily';
const urlll = 'https://disease.sh/v2/countries';


export const fetchData = async (country) => {
  let ChangeUrl = url;
  if(country){
    ChangeUrl = `https://disease.sh/v2/countries/${country}`
  }

    try{
        const {data:{ cases, recovered, deaths, updated, todayCases, todayDeaths,country,active,tests }} = await axios.get(ChangeUrl);
        return { cases, recovered, deaths, updated, todayCases, todayDeaths,country,active,tests };
    }
    catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(urll);
  
      return data.map(({ confirmed, deaths, reportDate}) => ({ confirmed: confirmed.total, deaths: deaths.total, date: reportDate }));
    } catch (error) {
      return error;
    }
  }
  export const fetchCountries = async (country) => {
    try {
        const  {data} = await axios.get(urlll);
        // console.log(data);
       return data.map(({country}) => country);
    } catch (error) {
        return error;
    }
  }

export class World extends React.Component{
state={
    data:{},
    country: '',
}

async componentDidMount(){

    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
}

handleCountryChange = async(country) =>{
  const fetchedData = await fetchData(country);
//console.log(fetchedData);
  this.setState({data: fetchedData, country: country});
}
    render(){
        const {data,}=this.state;

        return(

            <div>
           <Info data={data}/>
           <Chart data={data}/>
         
        <div className="cent">
          .
        <p><b><u>GO COVID-19 <span role="img" aria-label="house">&#128548;</span></u></b></p>
         .
        </div>
           <Picker handleCountryChange={this.handleCountryChange}/>
           <Infoo data={data}/>

           <Barr data={data}/>
           <FooterPage/>
           </div>
            )
    }
}
export default World;