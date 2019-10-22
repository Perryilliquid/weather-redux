import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './sass/weather.scss';

//loader
import Loadable from 'react-loadable';
import LoadingSpinner from './components/loading/LoadingSpinner';

const MainContainer = Loadable({
    loader: () => import('./containers/MainContainer'),
    loading: LoadingSpinner
});

export default class App extends Component {
    render() {
        return (
            <MainContainer />
        );
    }
}
