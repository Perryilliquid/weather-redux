import currentDummy from '../../dummyData/weather';
import forecastDummy from '../../dummyData/forecast';

export const FETCH_CURRENT_FORECAST = 'weather/fetchCurrentForecast';
export const FETCH_FIVE_DAYS_FORECAST = 'weather/fetchFiveDaysForecast';
export const FETCH_BY_THREE_HOURS_FORECAST = 'weather/fetchByThreeHoursForecast';

const initialState = {
    currentCityId: 1819729,
    currentForeCastData: currentDummy,
    fiveDaysForeCastData: forecastDummy,
    byThreeHoursForecastData: {}
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_CURRENT_FORECAST: {
            return {
                ...state,
                currentCityId: action.currentCityId,
                currentForeCastData: action.currentForeCastData
            };
        }
        case FETCH_FIVE_DAYS_FORECAST: {
            return {
                ...state,
                fiveDaysForeCastData: action.fiveDaysForeCastData
            };
        }
        case FETCH_BY_THREE_HOURS_FORECAST: {
            return {
                ...state,
                byThreeHoursForecastData: action.byThreeHoursForecastData
            };
        }
        default:
            return state;
    }
}