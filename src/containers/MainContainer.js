import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

import { fetchCurrentForecast, fetchFiveDaysForecast } from '../redux/actions/storeActions';

import LoadingContainer from '../components/loading/LoadingContainer';
import LocationForm from '../components/LocationForm';
import CurrentForecast from '../components/CurrentForecast';
import ForecastContainer from './ForecastContainer';

export class MainContainer extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        fetchCurrentForecast: PropTypes.func.isRequired,
        fetchFiveDaysForecast: PropTypes.func.isRequired
    };

    state = {
        city: ''
    }

    componentDidMount() { //default load Hong Kong weather
        this.props.fetchCurrentForecast('Hong Kong');
        this.props.fetchFiveDaysForecast('Hong Kong');
    }

    searchCity = () => {
        // console.log(this.state.city);
        this.props.fetchCurrentForecast(this.state.city);
        this.props.fetchFiveDaysForecast(this.state.city);
        this.setState({
            city: ''
        })
    }

    searchCityKeyPress = (e) => {
        if (e.keycode === 13 || e.key === 'Enter'){
            this.props.fetchCurrentForecast(this.state.city);
            this.props.fetchFiveDaysForecast(this.state.city);
            this.setState({
                city: ''
            })
        }
    }

    changeHandler = (e) =>{
        e.preventDefault();
        let city = e.target.value;  //get the value from the input
        this.setState({
            city
        });
    }

    render() {
        const { ajaxStatus, currentForeCastData, fiveDaysForeCastData } = this.props;
        const { city } = this.state;

        return (
            <div className="container">
                <h1 className="header">Weather App </h1>
                <LoadingContainer loading={ajaxStatus.isLoading}>
                    <LocationForm
                        changeHandler={this.changeHandler}
                        searchCity={this.searchCity}
                        searchCityKeyPress={this.searchCityKeyPress}
                        city={city}
                    />
                    {ajaxStatus.isServerError === true && <Alert color="danger">
                        {ajaxStatus.serverMessage}
                    </Alert>}
                    <div className="dashboard">
                        <CurrentForecast
                            key={currentForeCastData.id}
                            currentDate={currentForeCastData.dt}
                            timezone={currentForeCastData.timezone}
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

    // console.log(state);

    return {
        ajaxStatus: state.ajaxStatus,
        currentForeCastData: state.store.currentForeCastData,
        fiveDaysForeCastData: state.store.fiveDaysForeCastData
    };
};

export default connect(
    mapStateToProps,
    { 
        fetchCurrentForecast,
        fetchFiveDaysForecast
    }
)(MainContainer);
