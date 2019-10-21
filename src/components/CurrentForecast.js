import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';
import moment from 'moment';
import Temperature from '../components/Temperature';

class CurrentForeCast extends Component {
    
    constructor(props){
        super(props);
    }

    state = {
        tempCur: '',
        tempMin: '',
        tempMax: ''
    }

    render() { 
        const {city, tempAll, weatherAll} = this.props;
        const {tempCur,tempMax,tempMin} = this.state;
            
        // console.log(tempAll);
        // if (currentForeCastData != ''){
        //     const weather = currentForeCastData.wind.speed;
        //     console.log(weather);
        // }
        
        const formatCurrentDate = moment().format('YYYY-MM-DD, dddd hh:mm A');
        // console.log(currentForeCastData);

        return ( 
            <Card className="currentForeCastContainer">
                <CardBody >
                    {/* <CardImg className="weatherIcon txt-right" src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt={weatherMain} /> */}
                    <h1>{city} </h1>
                    <p>{formatCurrentDate}</p>
                    {/* <p><span>lat: {lat} lot: {lot}</span></p> */}
                    {/* <h2>{tempCur}°C</h2>// <span>Min: {tempMin}°C / Max: {tempMax}°C</span>
                    // <h4>{weatherMain}</h4>
                    // <CardText className="weatherDesc">{weatherDesc}</CardText>
                    // <CardText>Wind Speed: {windSpeed} </CardText> */}
                    {/* <Temperature tempAll={tempAll} /> */}
                    
                </CardBody>
            </Card>
         );
    }
}
 
export default CurrentForeCast;