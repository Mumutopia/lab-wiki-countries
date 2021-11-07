import React from 'react'
import { Link } from "react-router-dom";
import countries from "./../countries.json"

export default function CountryDetails(props) {
    const {cioc} = props.match.params;
    const myCountry = countries.find((country)=> country.cioc === cioc)
    
    
  
    return (
        <div>
            <h1>Country Detail</h1>
            <h2>{myCountry.name.common}</h2>
            <h3>Capital : {myCountry.name.capital}</h3>
            <h3>Borders : </h3>
            <ul>
            {countries.filter((oneCountry) => oneCountry.borders.includes(myCountry.cca3)).map((neighbor) => {return (<li>{neighbor.name.common}</li>)} )}
                



             </ul>

        </div>
    )
}
