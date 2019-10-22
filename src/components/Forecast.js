import React from 'react';
import apiConfig from '../redux/actions/config';
import {
    Card, CardImg, CardText, CardBody, Button
  } from 'reactstrap';
import moment from 'moment';
  
const Forecast = props => {
    const {date,tempCur,tempMin,tempMax,weatherMain,weatherIcon,showThreeHours} = props;
    let curDate  = date.replace('00:00:00','');
    let formatDate = moment(curDate).format('YYYY-MM-DD, ddd');

    return ( 
      <React.Fragment>
            <Card className={`forecast ${weatherIcon}`}>
                <CardBody className="">
                    <h4 className="weatherDate">{formatDate}</h4>
                    <CardImg src={`${apiConfig.openWeather.API_ICON_URL}${weatherIcon}@2x.png`} alt={weatherMain} /> 
                    <h2>{tempCur}°C</h2>
                    <CardText className="tempText">{tempMin}°C / <b>{tempMax}°C</b></CardText>
                    <Button color="secondary" onClick={() => showThreeHours(curDate)}>Show Details</Button>
                </CardBody>
            </Card>
        </React.Fragment>
    )    
}
 
export default Forecast