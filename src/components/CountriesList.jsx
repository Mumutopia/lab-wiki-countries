import React, { Component } from 'react'
import { Link } from "react-router-dom";
import countries from "./../countries.json"

export default class CountriesList extends Component {
state = {
    countriesList: [...countries]
}

    render() {
        return (
            <div>
                <h1>Countries List :</h1>
                {this.state.countriesList.map((country,i) => {
                    return (
                        <Link key={i} to={"/country/" + country.cioc}>
                            <p>{country.name.common}</p>
                        </Link>
                    );
                })}
            </div>
        )
    }
}


