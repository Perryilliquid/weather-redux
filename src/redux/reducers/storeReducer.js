import weatherDummy from '../../dummyData/weather';
import forecastDummy from '../../dummyData/forecast';

export const PROFILE_FETCH_DETAILS = 'aspire/loan/fetchDetails';
export const FETCH_CURRENT_FORECAST = 'weather/fetchCurrentForecast';
export const FETCH_FIVE_DAYS_FORECAST = 'weather/fetchFiveDaysForecast';

const initialState = {
    currentForeCastData: weatherDummy,
    fiveDaysForeCastData: forecastDummy
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case PROFILE_FETCH_DETAILS: {
            return {
                ...state,
                profile: action.details
            };
        }
        case FETCH_CURRENT_FORECAST: {
            return {
                ...state,
                currentForeCastData: action.currentForeCastData
            };
        }
        case FETCH_FIVE_DAYS_FORECAST: {
            return {
                ...state,
                fiveDaysForeCastData: action.fiveDaysForeCastData
            };
        }
        default:
            return state;
    }
}