import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';
import moment from 'moment';

const CurrentForeCast = props => {
    const {city,windSpeed,clouds,tempCur,tempMin,tempMax,weatherMain,weatherIcon,weatherDesc} = props;
    const formatCurrentDate = moment().format('YYYY-MM-DD, dddd');

    return ( 
        <Card className="currentForeCastContainer">
            <CardBody >
                <CardImg className="weatherIcon txt-right" src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt={weatherMain} />
                <h1>{city} </h1>
                <p>{formatCurrentDate}</p>
                <h2>{tempCur}°C</h2>
                <span>Min: {tempMin}°C / Max: {tempMax}°C</span>
                <h4>{weatherMain}</h4>
                <CardText className="weatherDesc">{weatherDesc}</CardText>
                <CardText>Wind Speed: {windSpeed} </CardText>
                <CardText>Cloud: {clouds} </CardText>
            </CardBody>
        </Card>
    );
}

export default CurrentForeCast;