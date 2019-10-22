import React from 'react';

const LocationForm = props => {

    const { changeHandler, searchCity } = props;

    return ( 
        <div className="locationForm">
            <input name="city" placeholder="Hong Kong" onChange={changeHandler} />
            <button onClick={searchCity}> Search </button>
        </div>
    );
}
 
export default LocationForm;