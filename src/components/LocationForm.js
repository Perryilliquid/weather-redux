import React from 'react';
import required from '../utils/validators';

const LocationForm = props => {

    const { changeHandler, searchCity, searchCityKeyPress, city } = props;

    return ( 
        <div className="locationForm">
            <input name="city" placeholder="Hong Kong" onChange={changeHandler} required/>
            <button 
                onClick={searchCity}
                onKeyPress={(e) => searchCityKeyPress}
                disabled={!city}> Search </button>
        </div>
    );
}
 
export default LocationForm;