import React from 'react';
import {Link} from 'react-router-dom';
import {P_ARTICLE_LIST} from '../../api/api';
import {filterTime} from '../../utils/filter';

import one from '../../images/01.jpg';
import two from '../../images/02.jpg';
import thee from '../../images/03.jpg'
import fowe from '../../images/04.jpg'
import fowe001 from '../../images/001.png'


require('./index.css');

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            timer:'1111',
            datas:[],
            recommend:[],
            wedter:{}
        };
        this.list= [];

    }

    /**
     * @获取列表
     * @returns {Promise<void>}
     */
    async getList (){
        let res = await window.http.post(P_ARTICLE_LIST);
        let resdtae = res.data.data;
        this.setState({ datas: resdtae })
    }
    recommend(){
        let arr =[];
        for(let i = 0; i < 8;i++){
            arr.push(this.state.datas[i])
        }
        this.setState({ recommend: arr })
    }
     async componentDidMount(){
         await this.getList();
         this.recommend()
    }

    render() {
        return (
            <div className={'contores'}>
                <div className="banner">
                    <section className="box">
                        <ul className="texts">
                            <p>打了死结的青春，捆死一颗苍白绝望的灵魂。</p>
                            <p>为自己掘一个坟墓来葬心，红尘一梦，不再追寻。</p>
                            <p>加了锁的青春，不会再因谁而推开心门。</p>
                        </ul>
                        <div className="avatar"><a href="#"><span>杨青</span></a></div>
                    </section>
                </div>
                <div className="template">
                    <div className="box">
                        <h3>
                            <p><span>个人博客</span>模板 Templates</p>
                        </h3>
                        <ul>
                            <li><a href="/" target="_blank"><img alt="" src={one}/></a><span>仿新浪博客风格·梅——古典个人博客模板</span></li>
                            <li><a href="/" target="_blank"><img alt="" src={two}/></a><span>黑色质感时间轴html5个人博客模板</span></li>
                            <li><a href="/" target="_blank"><img alt="" src={thee}/></a><span>Green绿色小清新的夏天-个人博客模板</span></li>
                            <li><a href="/" target="_blank"><img alt="" src={fowe}/></a><span>女生清新个人博客网站模板</span></li>
                            <li><a href="/" target="_blank"><img alt="" src={two}/></a><span>黑色质感时间轴html5个人博客模板</span></li>
                            <li><a href="/" target="_blank"><img alt="" src={one}/></a><span>Green绿色小清新的夏天-个人博客模板</span></li>
                        </ul>
                    </div>
                </div>
                <article>
                    <h2 className="title_tj">
                        <p>文章<span>推荐</span></p>
                    </h2>
                    <div className="bloglist left">
                        {this.state.datas.map((list,i) => {
                            return (
                                <div className={'asc'}  key={i}>
                                    <h3>{list.title}</h3>
                                    <figure><img alt="" src={fowe001}/></figure>
                                    <ul>
                                        <Link className="readmore" to={`/detail/${list.id}`}>阅读全文>></Link>
                                        <p dangerouslySetInnerHTML = {{ __html:list.smalltext }}></p>
                                    </ul>
                                    <p className="dateview"><span>{filterTime(list.newstime)}</span><span>作者：{list.username}</span><span>个人博客：[<a href="#">{list.classname}</a>]</span></p>
                                </div>
                            )
                        })}
                    </div>
                    <aside className="right">
                        <div className="weather">
                            <span>苏州</span><br/>
                        </div>
                        <div className="news">
                            <h3>
                                <p>最新<span>文章</span></p>
                            </h3>
                            <ul className="rank">
                                {this.state.datas.map((list,i) => {
                                    return (
                                        <li key={i}><Link to={`/detail/${list.id}`}>{list.title}</Link></li>
                                    )
                                })}
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
                            <h3 className="links">
                                <p>友情<span>链接</span></p>
                            </h3>
                            <ul className="website">
                                <li><a href="/">个人博客</a></li>
                                <li><a href="/">谢泽文个人博客</a></li>
                                <li><a href="/">3DST技术网</a></li>
                                <li><a href="/">思衡网络</a></li>
                            </ul>
                        </div>
                        <a href="/" className="weixin"> </a>
                    </aside>
                </article>
            </div>
        )
    }
}

export default Home