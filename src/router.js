import React from 'react';
import {BrowserRouter  , Route, Switch} from 'react-router-dom';
import Home from './view/home/index';
import Detail from './view/home/detail';
import NoMatch from './view/404/index';



const BasicRoute = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/detail/:id" component={Detail}/>
            <Route component={NoMatch}/>
        </Switch>
    </BrowserRouter >
);



export default BasicRoute;