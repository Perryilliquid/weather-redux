import React from 'react';

const LocationForm = props => {
    const { changeHandler, searchCity, searchCityKeyPress, city } = props;
    return ( 
        <div className="locationForm">
            <input name="city" placeholder="Hong Kong" 
                onChange={changeHandler} 
                onKeyPress={(e) => searchCityKeyPress(e)}
                autoFocus
            />
            <button 
                onClick={searchCity}
                disabled={!city}> Search </button>
        </div>
    );
}
 
export default LocationForm;