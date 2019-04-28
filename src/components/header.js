import React from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';

import NoMatch from "../view/404";
import Home from '../view/home/index';
import Detail from "../view/home/detail";

//创建一个类 ComponentHeader 相当于继承react里component的子类
//export default 输出这个类

 class ComponentHeader extends React.Component{
    //render() 解析类的一个输出
    render(){
        return (
            <BrowserRouter>
            <header>
                <div id="logo"><a href="/"/></div>
                <h2 id="mnavh"><span className="navicon"/></h2>
                <nav className="topnav" id="topnav">
                    <Link to="/">
                            <span>首页</span>
                            <span className="en">Protal</span>
                    </Link>
                    <a href="about.html">
                        <span>关于我</span>
                        <span className="en">About</span>
                    </a>
                    <a href="newlist.html">
                        <span>慢生活</span>
                        <span className="en">Life</span>
                    </a>
                    <a href="moodlist.html"><span>碎言碎语</span>
                        <span className="en">Doing</span>
                    </a>
                    <a href="share.html">
                        <span>模板分享</span>
                        <span className="en">Share</span>
                    </a>
                    <a href="knowledge.html">
                        <span>学无止境 </span>
                        <span className="en">Learn</span>
                    </a>
                    <a href="book.html">
                        <span>留言版</span>
                        <span className="en">Gustbook</span>
                    </a>
                </nav>
            </header>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/detail/:id" component={Detail}/>
                    <Route component={NoMatch}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default ComponentHeader