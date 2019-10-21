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
    FETCH_FIVE_DAYS_FORECAST
} from '../reducers/storeReducer';
import axios from 'axios';

//an action is just a function
const API_KEY = '715ac60004286c422cbbbf1d407f9a12'
const API_URI = 'https://api.openweathermap.org/data/2.5'
const API_UNIT = 'metric'
const API_ICON_URI = 'https://openweathermap.org/img/wn/'
const PARAM = `type=like&sort=population&units=metric&cnt=7`

export function fetchCurrentForecast(city) {
    return async dispatch => {
        const apiCity = city.replace(/\s/g, "+");
        let cityUrl = `${API_URI}/weather?q=${apiCity}&${PARAM}&appid=${API_KEY}`;

        dispatch({
            type: FETCH_PENDING
        });

        try {
            const response = await axios.get(cityUrl);

            dispatch({
                type: FETCH_CURRENT_FORECAST,
                currentCity: response.data.id,
                currentForeCastData: response.data
            });

            dispatch({
                type: FETCH_COMPLETE
            });

        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function fetchFiveDaysForecast(cityId) {
    return async dispatch => {
        let forecastUrl = `${API_URI}/weather?id=${cityId}&${PARAM}&appid=${API_KEY}`;

        dispatch({
            type: FETCH_PENDING
        });

        try {
            const response = await axios.get(forecastUrl);
            
            dispatch({
                type: FETCH_FIVE_DAYS_FORECAST,
                fiveDaysForeCastData: response.data
            });

            dispatch({
                type: FETCH_COMPLETE
            });

        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function fetchProfileDetails(id) {
    return async (dispatch, getState) => {
        dispatch({
            type: FETCH_PENDING
        });
        try {
            const response = await axios({
                url: `https://jsonplaceholder.typicode.com/todos`,
                method: 'get'
            });

            const data = {
                id: 1,
                name: 'Gongcha',
                address: '45 Ho Tung Mau',
                city: "HCM",
                district: 'District 2',
                image: { key: 'sofa_cat', format: 'jpg'},
                phone: '1234568888',
                redInvoice: {
                    name: 'Alley',
                    address: '67 Le Loi',
                    district: 'District 1',
                    city: 'HCM',
                    taxCode: 'P12351566'
                }
            };

            dispatch({
                type: PROFILE_FETCH_DETAILS,
                details: data
            });

            dispatch({
                type: FETCH_COMPLETE
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}


export function updateStoreProfile(data) {
    return async (dispatch, getState) => {
        dispatch({
            type: SUBMIT_PENDING
        });
        try {
            const submitData = {
                name: data.name,
                address: data.address,
                city: data.city,
                district: data.district,
                image: data.image,
                phone: data.phone,
                redInvoice: {
                    name: data.companyName,
                    address: data.companyAddress,
                    district: data.companyDistrict,
                    city: data.companyCity,
                    taxCode: data.taxCode
                }
            };

            const response = await axios({
                url: `https://jsonplaceholder.typicode.com/posts/1`,
                method: 'put',
                data: submitData
            });

            dispatch({
                type: PROFILE_FETCH_DETAILS,
                details: submitData
            });

            dispatch({
                type: SUBMIT_COMPLETE
            });
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