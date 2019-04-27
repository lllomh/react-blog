import React from 'react';
import {P_ARTICLE_DETAIL} from '../../api/api';

import {filterTime} from "../../utils/filter";


require('./new.css');
class Detail extends React.Component {
    constructor(props){
        super(props);
        console.log("参数:"+props);
        this.state= {
            params: "",
            data:{}
        };

    }

    async init(){
        await this.setState({params:this.props.match.params});
         let data = {
             id:this.state.params.id
         };
         let res = await window.http.post(P_ARTICLE_DETAIL,data);
         await this.setState({data:res.data.data});
    }

    async componentDidMount() {
       await  this.init();
       console.log(this.state.data)
    }
    render() {
        return (
            <div className={'detaCentont'}>
                <article className="blogs">
                    <h1 className="t_nav"><span>您当前的位置：<a href="/">首页</a>&nbsp;&gt;&nbsp;<a
                        href="/news/s/">慢生活</a>&nbsp;&gt;&nbsp;<a href="/news/s/">日记</a></span><a href="/" className="n1">网站首页</a><a href="/" className="n2">日记</a></h1>
                    <div className="index_about">
                        <h2 className="c_titile">{this.state.data.title}</h2>
                        <p className="box_c"><span className="d_time">发布时间：{filterTime(this.state.data.newstime)}</span><span>编辑：{this.state.data.username}</span><span>互动QQ群：<a
                            href="javascript:;">290078353</a></span>
                        </p>
                        <ul className="infos" dangerouslySetInnerHTML = {{ __html:this.state.data.newstext }}>

                        </ul>
                        <div className="keybq">
                            <p><span>关键字词</span>：爱情,犯错,原谅,分手</p>

                        </div>
                        <div className="ad"></div>
                        <div className="nextinfo">
                            <p>上一篇：<a href="/news/s/2013-09-04/606.html">程序员应该如何高效的工作学习</a></p>
                            <p>下一篇：<a href="/news/s/2013-10-21/616.html">柴米油盐的生活才是真实</a></p>
                        </div>
                        <div className="otherlink">
                            <h2>相关文章</h2>
                            <ul>
                                <li><a href="/news/s/2013-07-25/524.html" title="现在，我相信爱情！">现在，我相信爱情！</a></li>
                                <li><a href="/newstalk/mood/2013-07-24/518.html" title="我希望我的爱情是这样的">我希望我的爱情是这样的</a></li>
                                <li><a href="/newstalk/mood/2013-07-02/335.html" title="有种情谊，不是爱情，也算不得友情">有种情谊，不是爱情，也算不得友情</a></li>
                                <li><a href="/newstalk/mood/2013-07-01/329.html" title="世上最美好的爱情">世上最美好的爱情</a></li>
                                <li><a href="/news/read/2013-06-11/213.html" title="爱情没有永远，地老天荒也走不完">爱情没有永远，地老天荒也走不完</a></li>
                                <li><a href="/news/s/2013-06-06/24.html" title="爱情的背叛者">爱情的背叛者</a></li>
                            </ul>
                        </div>
                    </div>
                    <aside className="right">
                        <div className="blank"></div>
                        <div className="news">
                            <h3>
                                <p>栏目<span>最新</span></p>
                            </h3>
                            <ul className="rank">
                                <li><a href="/" title="Column 三栏布局 个人网站模板" target="_blank">Column 三栏布局 个人网站模板</a></li>
                                <li><a href="/" title="with love for you 个人网站模板" target="_blank">with love for you 个人网站模板</a></li>
                                <li><a href="/" title="免费收录网站搜索引擎登录口大全" target="_blank">免费收录网站搜索引擎登录口大全</a></li>
                                <li><a href="/" title="做网站到底需要什么?" target="_blank">做网站到底需要什么?</a></li>
                                <li><a href="/" title="企业做网站具体流程步骤" target="_blank">企业做网站具体流程步骤</a></li>
                                <li><a href="/" title="建站流程篇——教你如何快速学会做网站" target="_blank">建站流程篇——教你如何快速学会做网站</a></li>
                                <li><a href="/" title="box-shadow 阴影右下脚折边效果" target="_blank">box-shadow 阴影右下脚折边效果</a></li>
                                <li><a href="/" title="打雷时室内、户外应该需要注意什么" target="_blank">打雷时室内、户外应该需要注意什么</a></li>
                            </ul>
                            <h3 className="ph">
                                <p>点击<span>排行</span></p>
                            </h3>
                            <ul className="paih">
                                <li><a href="/" title="Column 三栏布局 个人网站模板" target="_blank">Column 三栏布局 个人网站模板</a></li>
                                <li><a href="/" title="withlove for you 个人网站模板" target="_blank">with love for you 个人网站模板</a></li>
                                <li><a href="/" title="免费收录网站搜索引擎登录口大全" target="_blank">免费收录网站搜索引擎登录口大全</a></li>
                                <li><a href="/" title="做网站到底需要什么?" target="_blank">做网站到底需要什么?</a></li>
                                <li><a href="/" title="企业做网站具体流程步骤" target="_blank">企业做网站具体流程步骤</a></li>
                            </ul>
                        </div>
                        <div className="visitors">
                            <h3>
                                <p>最近访客</p>
                            </h3>
                            <ul>
                            </ul>
                        </div>
                    </aside>
                </article>
            </div>
        )
    }


}

export default Detail