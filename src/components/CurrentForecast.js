import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';
import moment from 'moment';

const CurrentForeCast = props => {
    const {city,currentDate,windSpeed,clouds,tempCur,tempMin,tempMax,weatherMain,weatherIcon,weatherDesc} = props;
    let formatCurrentDate = moment().format('YYYY-MM-DD, ddd');

    return ( 
        <Card className={`currentForeCastContainer ${weatherIcon}`}>
            <CardBody >
                <Row>
                    <Col xs="7">
                        <h1>{formatCurrentDate}</h1>
                        <h1>{city} </h1>
                        <h2>{tempCur}°C</h2>
                        <CardText className="tempText">Min: {tempMin}°C / Max: {tempMax}°C</CardText>
                    </Col>
                    <Col xs="5">
                        <CardImg className="weatherIcon txt-right" src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt={weatherMain} />
                        
                        <h4>{weatherMain}</h4>
                        <CardText className="weatherDesc">{weatherDesc}</CardText>
                        <CardText>Wind Speed: {windSpeed} </CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default CurrentForeCast;