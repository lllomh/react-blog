import React from 'react';
import {BrowserRouter  , Route, Switch} from 'react-router-dom';
import Home from './view/home/index';
import Detail from './view/home/detail';



const BasicRoute = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail/:title" component={Detail}/>
        </Switch>
    </BrowserRouter >
);



export default BasicRoute;