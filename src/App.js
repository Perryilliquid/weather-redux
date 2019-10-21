import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/createStore';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Loadable from 'react-loadable';
import LoadingSpinner from './components/loading/LoadingSpinner';
import { Route } from 'react-router-dom';

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
