import React from 'react';
import { Card, CardImg, CardText, CardBody, Row, Col } from 'reactstrap';
import moment from 'moment';
  
const ForecastDetails = props => {
    const {date,tempCur,tempMin,tempMax,weatherMain,weatherIcon,weatherDesc,windSpeed} = props;
    let formatDate = moment(date).format('YYYY-MM-DD, dddd hh:mm A');

    return ( 
      <React.Fragment>
            <Card className="forecastDetails">
                <CardBody>
                    <Row>
                        <Col>
                            <h5 className="weatherDate">{formatDate}</h5>
                            <CardImg src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt={weatherMain} /> 
                            <h2>{tempCur}°C</h2>
                            <CardText>{tempMin}°C / <b>{tempMax}°C</b></CardText>
                        </Col>
                        <Col>
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