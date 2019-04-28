import React from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Home from '../view/home/index';

//创建一个类 ComponentHeader 相当于继承react里component的子类
//export default 输出这个类

class ComponentHeader extends React.Component{
    //render() 解析类的一个输出
    render(){
        return (
/*            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact={true} path="/" component={Home}></Route>
                    </Switch>
                </div>
            </BrowserRouter>*/

            <header>
                <div id="logo"><a href="/"/></div>
                <h2 id="mnavh"><span className="navicon"/></h2>
                <nav className="topnav" id="topnav">
                    <BrowserRouter>
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
                    </BrowserRouter>
                </nav>
            </header>







        );
    }
}

export default ComponentHeader





/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import screenfull from 'screenfull';
import avater from '../style/imgs/b1.jpg';
import SiderCustom from './SiderCustom';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import { gitOauthToken, gitOauthInfo } from '../axios';
import { queryString } from '../utils';
import { withRouter } from 'react-router-dom';
import { PwaInstaller } from './widget';
import { connectAlita } from 'redux-alita';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
    state = {
        user: '',
        visible: false,
    };
    componentDidMount() {
        const QueryString = queryString();
        const _user = JSON.parse(localStorage.getItem('user')) || '测试';
        if (!_user && QueryString.hasOwnProperty('code')) {
            gitOauthToken(QueryString.code).then(res => {
                gitOauthInfo(res.access_token).then(info => {
                    this.setState({
                        user: info
                    });
                    localStorage.setItem('user', JSON.stringify(info));
                });
            });
        } else {
            this.setState({
                user: _user
            });
        }
    };
    screenFull = () => {
        if (screenfull.enabled) {
            screenfull.request();
        }

    };
    menuClick = e => {
        console.log(e);
        e.key === 'logout' && this.logout();
    };
    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push('/login')
    };
    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    };
    render() {
        const { responsive = { data: {} }, path } = this.props;
        return (
            <Header className="custom-theme header" >
                {
                    responsive.data.isMobile ? (
                        <Popover content={<SiderCustom path={path} popoverHide={this.popoverHide} />} trigger="click" placement="bottomLeft" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
                            <Icon type="bars" className="header__trigger custom-trigger" />
                        </Popover>
                    ) : (
                        <Icon
                            className="header__trigger custom-trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                        />
                    )
                }
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    onClick={this.menuClick}
                >
                    <Menu.Item key="pwa">
                        <PwaInstaller />
                    </Menu.Item>
                    <Menu.Item key="full" onClick={this.screenFull} >
                        <Icon type="arrows-alt" onClick={this.screenFull} />
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item>
                    <SubMenu title={<span className="avatar"><img src={avater} alt="头像" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - {this.props.user.userName}</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}

export default withRouter(connectAlita(['responsive'])(HeaderCustom));









// import React from 'react';
// import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
// import Home from '../view/home/index';
//
// //创建一个类 ComponentHeader 相当于继承react里component的子类
// //export default 输出这个类
//
//  class ComponentHeader extends React.Component{
//     //render() 解析类的一个输出
//     render(){
//         return (
//             <BrowserRouter>
//                 <div>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/topics">Topics</Link>
//                         </li>
//                     </ul>
//                     <hr/>
//                     <Switch>
//                         <Route exact={true} path="/" component={Home}></Route>
//                     </Switch>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// }
//
// export default ComponentHeader