import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../Tabs/World';
import styles from './picker.module.css';

export const Picker = ({handleCountryChange}) => {
    const[ fetchedCountries, setFetchedCountries]= useState([]);
    useEffect(() => {
    const fetchApi = async() => {
        setFetchedCountries(await  fetchCountries());
    }
    fetchApi();
}, [setFetchedCountries]);
// console.log(fetchedCountries);

return (
    <div>
      <h1 className={styles.divv}><b><span role="img" aria-label="house">&#9898;</span><u>Search Country</u><span role="img" aria-label="house">&#9898;</span></b></h1>
    <FormControl className={styles.formControl}>
      
      <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
    </div>
    
  )
}
export default Picker;