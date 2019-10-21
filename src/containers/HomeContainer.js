import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProfileDetails, fetchCurrentForecast, fetchFiveDaysForecast } from '../redux/actions/storeActions';
import LoadingContainer from '../components/loading/LoadingContainer';
import EditProfileModal from './store/EditProfileModal';
import CurrentForecast from '../components/CurrentForecast';
import FiveDaysForecastContainer from './ForecastContainer';
import weatherDummy from '../dummyData/weather';

export class HomeContainer extends Component {
    static propTypes = {
        ajaxStatus: PropTypes.object.isRequired,
        profile: PropTypes.object.isRequired,
        fetchProfileDetails: PropTypes.func.isRequired,
        fetchCurrentForecast: PropTypes.func.isRequired,
        fetchFiveDaysForecast: PropTypes.func.isRequired
    };

    state = {
        showModal: false,
        city: 'Hong Kong',
        currentCityId: 1819729, //Hong Kong Id
    }

    componentDidMount() {
        this.props.fetchProfileDetails(1);
        this.props.fetchCurrentForecast(this.state.city);
    }

    searchCity = () =>{
        console.log(this.state.city);
        this.props.fetchCurrentForecast(this.state.city);
    }

    // callCurrentForecastAPI = () => {

    //     this.props.fetchCurrentForecast(this.state.city);

    //     if (this.props.currentForeCastData){
    //         this.setState({
    //             currentForeCastData: this.props.currentForeCastData,
    //             currentCityId: this.props.currentCityId
    //         })
    //         console.log("props: " + this.state.currentForeCastData.wind.speed);
    //     }
    // }

    changeHandler = (e) =>{
        //get the value from the input
        let city = e.target.value;
    //store the value in the state property
        this.setState({
        city
        });
        
    }

    render() {
        const { ajaxStatus, profile, currentCity, currentForeCastData, fiveDaysForecastData } = this.props;
        // const { currentForeCastData } = this.state;

        // if (!currentForeCastData.wind){
        //     console.log(currentForeCastData.wind.speed);
        // }
        console.log("temp: " + currentForeCastData.wind);

        return (
            <div className="container">
                <h1 className="header">Weather App </h1>
                <LoadingContainer loading={ajaxStatus.isLoading}>
                    <div className="locationForm">
                        <input name="city" placeholder="Hong Kong" defaultValue="Hong Kong" onChange={this.changeHandler} />
                        <button onClick={this.searchCity}> <i className="fas fa-search"></i> </button>
                    </div>
                    <div className="dashboard">
                        { !currentForeCastData.isEmpty && <CurrentForecast
                            key={currentForeCastData.id}
                            currentDate={currentForeCastData.dt}
                            city={currentForeCastData.name}
                            windSpeed={currentForeCastData.wind}
                            clouds={currentForeCastData.clouds}
                            tempAll={currentForeCastData.main}
                            weatherAll={currentForeCastData.weather}
                        />} 
                        {/* {!fiveDaysForecastData.isEmpty && <FiveDaysForecastContainer 
                            fiveDaysForecastData={fiveDaysForecastData}
                        />} */}
                    </div>
                </LoadingContainer>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        ajaxStatus: state.ajaxStatus,
        profile: state.store.profile,
        currentCityId: state.store.currentCityId,
        currentForeCastData: state.store.currentForeCastData,
        fiveDaysForecastData: state.store.fiveDaysForecastData
    };
};

export default connect(
    mapStateToProps,
    { 
        fetchProfileDetails,
        fetchCurrentForecast,
        fetchFiveDaysForecast
    }
)(HomeContainer);
