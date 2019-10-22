import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Forecast from '../components/Forecast';  //Show Forecast Preview by 5 days
import ForecastDetails from '../components/ForecastDetails';    //Show Details by 3 hours

class ForecastContainer extends Component {
    constructor (props){
        super(props);
        this.state = {
            threeHoursData: {}
        }
    }

    static propTypes = {
        fiveDaysForeCastData: PropTypes.object.isRequired,
    };

    showThreeHours = (selectedDate) => {
        const threeHoursData = this.props.fiveDaysForeCastData.list.filter(F => F.dt_txt.includes(selectedDate));
        this.setState({
            threeHoursData
        });
    }

    render() {
        const { fiveDaysForeCastData} = this.props;
        const { threeHoursData} =  this.state;
        let fiveDaysData = fiveDaysForeCastData.list.filter(F => F.dt_txt.includes('00:00:00'));
        
        return (
            <React.Fragment>
                <h2>Coming Five Days</h2>
                <div className="forecastContainer">
                    {
                        Object.values(fiveDaysData).map((item, index) =>{
                            return(
                                <Forecast
                                    key={index}
                                    date={item.dt_txt}
                                    windSpeed={item.wind.speed}
                                    clouds={item.clouds}
                                    tempCur={item.main.temp}
                                    tempMin={item.main.temp_min}
                                    tempMax={item.main.temp_max}
                                    weatherMain={item.weather[0].main}
                                    weatherIcon={item.weather[0].icon}
                                    showThreeHours={this.showThreeHours}
                                />
                            )
                        })
                    }
                </div>
                {threeHoursData && <div className="foreCastDetailsContainer">
                    {
                        Object.values(threeHoursData).map((item, index) =>{
                            return (
                                <ForecastDetails
                                    key={index}
                                    date={item.dt_txt}
                                    windSpeed={item.wind.speed}
                                    clouds={item.clouds}
                                    tempCur={item.main.temp}
                                    tempMin={item.main.temp_min}
                                    tempMax={item.main.temp_max}
                                    weatherMain={item.weather[0].main}
                                    weatherIcon={item.weather[0].icon}
                                    weatherDesc={item.weather[0].description}
                                />
                            )
                        })
                    }
                    </div>
                }
            </React.Fragment>
         );
    }
}
 
export default ForecastContainer;
