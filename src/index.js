import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import Header from './components/header';
import Footer from './components/footer';
import https from './api/server';
window.http = https;
require('./css/base.css');
require('./css/m.css');
ReactDOM.render(
    <div className={'containers'}>
        <Header/>
        {/*<Router/>*/}
        <Footer/>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

