import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/createStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/weather.scss';

//loader
import Loadable from 'react-loadable';
import LoadingSpinner from './components/loading/LoadingSpinner';

const MainContainer = Loadable({
    loader: () => import('./containers/MainContainer' /* webpackChunkName: "Home" */),
    loading: LoadingSpinner
});

export default class App extends Component {
    render() {
        return (
            <MainContainer />
        );
    }
}
