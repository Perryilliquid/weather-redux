import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    SERVER_ERROR,
    SUBMIT_COMPLETE,
    SUBMIT_PENDING,
    RESET_STATUS
} from '../reducers/ajaxStatusReducer';
import {
    PROFILE_FETCH_DETAILS,
    FETCH_CURRENT_FORECAST,
    FETCH_FIVE_DAYS_FORECAST,
    FETCH_BY_THREE_HOURS_FORECAST
} from '../reducers/storeReducer';
import axios from 'axios';

//an action is just a function
const API_KEY = '715ac60004286c422cbbbf1d407f9a12'
const API_URI = 'https://api.openweathermap.org/data/2.5'
const API_UNIT = 'metric'
const API_ICON_URI = 'https://openweathermap.org/img/wn/'
const PARAM = `type=like&sort=population&units=metric`

export function fetchCurrentForecast(city) {
    return async dispatch => {
        const apiCity = city.replace(/\s/g, "+");
        let cityUrl = `${API_URI}/weather?q=${apiCity}&${PARAM}&appid=${API_KEY}`;

        dispatch({
            type: FETCH_PENDING
        });

        try {
            const response = await axios.get(cityUrl);

            if (response.data){
                dispatch({
                    type: FETCH_CURRENT_FORECAST,
                    currentCityId: response.data.id,
                    currentForeCastData: response.data
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

export function fetchFiveDaysForecast(city) {
    return async dispatch => {
        const apiCity = city.replace(/\s/g, "+");
        let forecastUrl = `${API_URI}/forecast?q=${apiCity}&${PARAM}&appid=${API_KEY}`;

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

export function fetchByThreeHoursForecast(city, selectedDate) {
    return async dispatch => {
        const apiCity = city.replace(/\s/g, "+");
        let forecastUrl = `${API_URI}/forecast?q=${apiCity}&${PARAM}&appid=${API_KEY}`;
        console.log(forecastUrl);

        // dispatch({
        //     type: FETCH_PENDING
        // });

        // try {
        //     const response = await axios.get(forecastUrl);
        //     console.log("data: " + response.data);

        //     if (response.data){
        //         dispatch({
        //             type: FETCH_BY_THREE_HOURS_FORECAST,
        //             fiveDaysForeCastData: response.data
        //         });

        //         dispatch({
        //             type: FETCH_COMPLETE
        //         });
        //     }    

        // } catch (error) {
        //     dispatch({
        //         type: SERVER_ERROR,
        //         serverStatus: error.response.status,
        //         serverMessage: error.response.data.message
        //     });
        // }
    };
}


export function resetAjaxStatus() {
    return (dispatch) => {
        dispatch({
            type: RESET_STATUS
        })
    }
}