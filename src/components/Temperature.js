import React from 'react';

const Temperature = props => {

    const {tempAll} = props;

    return ( 
        <React.Fragment>
            <h2>{tempAll.temp}°C</h2>
            {/* <span>Min: {tempMin}°C / Max: {tempMax}°C</span> */}
        </React.Fragment>
     );
}
 
export default Temperature;