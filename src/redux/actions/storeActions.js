import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    SERVER_ERROR,
    RESET_STATUS
} from '../reducers/ajaxStatusReducer';
import {
    FETCH_CURRENT_FORECAST,
    FETCH_FIVE_DAYS_FORECAST
} from '../reducers/storeReducer';
import axios from 'axios';
import apiConfig from './config';

//Get Current Forecast, default is Hong Kong

export function fetchCurrentForecast(city) {
    return async dispatch => {
        const apiCity = city.replace(/\s/g, "+");
        let cityUrl = `${apiConfig.openWeather.API_URL}/weather?q=${apiCity}&${apiConfig.openWeather.PARAM}&appid=${apiConfig.openWeather.API_KEY}`;

        dispatch({
            type: FETCH_PENDING
        });

        try {
            const response = await axios.get(cityUrl);

            if (response.data){
                dispatch({
                    type: FETCH_CURRENT_FORECAST,
                    currentForeCastData: response.data
                });
    
                dispatch({
                    type: FETCH_COMPLETE
                });
            }
        } catch (error) {

            console.log("error: " + error);

            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function fetchFiveDaysForecast(city) {
    return async dispatch => {
        const apiCity = city.replace(/\s/g, "+");
        let forecastUrl = `${apiConfig.openWeather.API_URL}/forecast?q=${apiCity}&${apiConfig.openWeather.PARAM}&appid=${apiConfig.openWeather.API_KEY}`;

        dispatch({
            type: FETCH_PENDING
        });

        try {
            const response = await axios.get(forecastUrl);

            if (response.data){
                dispatch({
                    type: FETCH_FIVE_DAYS_FORECAST,
                    fiveDaysForeCastData: response.data
                });

                dispatch({
                    type: FETCH_COMPLETE
                });
            }    
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function resetAjaxStatus() {
    return (dispatch) => {
        dispatch({
            type: RESET_STATUS
        })
    }
}