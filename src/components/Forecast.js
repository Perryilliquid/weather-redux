import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
  } from 'reactstrap';
import moment from 'moment';
  
const Forecast = props => {
    const {date,tempCur,tempMin,tempMax,weatherMain,weatherIcon,showThreeHours} = props;
    let curDate  = date.replace('00:00:00','');
    let formatDate = moment(curDate).format('YYYY-MM-DD, dddd');

    return ( 
      <React.Fragment>
            <Card className="forecast">
                <CardBody className="">
                    <h5 className="weatherDate">{formatDate}</h5>
                    <CardImg src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt={weatherMain} /> 
                    <h2>{tempCur}°C</h2>
                    <CardText>{tempMin}°C / <b>{tempMax}°C</b></CardText>
                    <Button color="secondary" onClick={() => showThreeHours(curDate)}>Show Details</Button>
                </CardBody>
            </Card>
        </React.Fragment>
    )    
}
 
export default Forecast