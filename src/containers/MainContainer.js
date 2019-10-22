import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentForecast, fetchFiveDaysForecast } from '../redux/actions/storeActions';
import LoadingContainer from '../components/loading/LoadingContainer';
import CurrentForecast from '../components/CurrentForecast';
import ForecastContainer from './ForecastContainer';

export class MainContainer extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        fetchCurrentForecast: PropTypes.func.isRequired,
        fetchFiveDaysForecast: PropTypes.func.isRequired
    };

    state = {
        city: 'Hong Kong',
    }

    componentDidMount() {
        this.props.fetchCurrentForecast(this.state.city);
        this.props.fetchFiveDaysForecast(this.state.city);
    }

    searchCity = () =>{      
        this.props.fetchCurrentForecast(this.state.city);
        this.props.fetchFiveDaysForecast(this.state.city);
    }

    changeHandler = (e) =>{
        let city = e.target.value;  //get the value from the input
        this.setState({
            city
        });
    }

    render() {
        const { ajaxStatus, currentForeCastData, fiveDaysForeCastData } = this.props;

        return (
            <div className="container">
                <h1 className="header">Weather App </h1>
                <LoadingContainer loading={ajaxStatus.isLoading}>
                    <div className="locationForm">
                        <input name="city" placeholder="Hong Kong" onChange={this.changeHandler} />
                        <button onClick={this.searchCity}> <i className="fas fa-search"></i> </button>
                    </div>
                    <div className="dashboard">
                        <CurrentForecast
                            key={currentForeCastData.id}
                            currentDate={currentForeCastData.timezone}
                            city={currentForeCastData.name +  ", " + currentForeCastData.sys.country}
                            lat={currentForeCastData.coord.lat}
                            lot={currentForeCastData.coord.lon}
                            windSpeed={currentForeCastData.wind.speed}
                            clouds={currentForeCastData.clouds.all}
                            tempCur={currentForeCastData.main.temp}
                            tempMin={currentForeCastData.main.temp_min}
                            tempMax={currentForeCastData.main.temp_max}
                            weatherMain={currentForeCastData.weather[0].main}
                            weatherIcon={currentForeCastData.weather[0].icon}
                            weatherDesc={currentForeCastData.weather[0].description}
                        />
                        <ForecastContainer
                            fiveDaysForeCastData={fiveDaysForeCastData}
                        />
                    </div>
                </LoadingContainer>
            </div>
        );
    }
}

const mapStateToProps = state => {

    console.log(state);

    return {
        ajaxStatus: state.ajaxStatus,
        currentForeCastData: state.store.currentForeCastData,
        fiveDaysForeCastData: state.store.fiveDaysForeCastData,
        byThreeHoursForecastData: state.store.byThreeHoursForecastData
    };
};

export default connect(
    mapStateToProps,
    { 
        fetchCurrentForecast,
        fetchFiveDaysForecast
    }
)(MainContainer);
