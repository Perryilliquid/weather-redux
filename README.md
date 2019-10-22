This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## FE Tech Test - Perry Cheung

In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Project Description
It is a Weather App which is using OpenWeather API and using React + Redux + SASS + WEBPACK. 
- Users can type the city/town in the search bar (default is Hong Kong), it will return the current weather and coming 5 days forecast. 
- Users can select the days with "Show Details" button and it will return the current day forecast by 3 hours.
- It support on Desktop / Tablet / Mobile.

### OpenWeather API.
- Getting Current Weather
  api.openweathermap.org/data/2.5/weather?q=London
- Getting 5 Days Forecast
  api.openweathermap.org/data/2.5/forecast?q=London,us 

### React + Redux Flow
1. When Page loaded, it will load the default City (Hong Kong) and the call the API action, e.g. fetchCurrentForeCast(city).
2. User click the Search Button, it will call the API action, e.g. fetchCurrentForeCast(city)
4. If it returns data from API, using dispatch method to store the "CurrentForeCastData" and "FiveDaysForeCastData" in the store (global State). E.g.
      dispatch({
          type: FETCH_CURRENT_FORECAST,
          currentForeCastData: response.data
      });
3. If it return null or empty, it will show the Server Response Message under the form
4. MainContainer will detect the global state data is updated and pass the updated data to child components, e.g. CurrentForecastContainer.
5. User can select one of the "Show Details", it will pass the "selectedDate" and filter the fiveDaysForecastContainer and retun the select date weather details (by 3 hours).
