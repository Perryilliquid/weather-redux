import React from 'react';
import apiConfig from '../redux/actions/config';

import { Card, CardImg, CardText, CardBody, Row, Col } from 'reactstrap';
import moment from 'moment';
  
const ForecastDetails = props => {
    const {date,tempCur,tempMin,tempMax,weatherMain,weatherIcon,weatherDesc,windSpeed} = props;
    let formatDate = moment(date).format('YYYY-MM-DD, ddd hh:mm A');

    return ( 
      <React.Fragment>
            <Card className={`forecastDetails ${weatherIcon}`}>
                <CardBody>
                    <Row>
                        <Col md="7">
                            <h5 className="weatherDate">{formatDate}</h5>
                            <CardImg src={`${apiConfig.openWeather.API_ICON_URL}${weatherIcon}@2x.png`} alt={weatherMain} /> 
                            <h2>{tempCur}°C</h2>
                            <CardText>{tempMin}°C / <b>{tempMax}°C</b></CardText>
                        </Col>
                        <Col md="5">
                            <h4>{weatherMain}</h4>
                            <CardText className="weatherDesc">{weatherDesc}</CardText>
                            <CardText>Wind Speed: {windSpeed} </CardText>
                        </Col>
                    </Row>
                    
                </CardBody>
            </Card>
        </React.Fragment>
    )    
}
 
export default ForecastDetails