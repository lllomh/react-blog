import React from 'react';

import one from '../../images/e5e39b1148811261c78b933805d07232.png';
import two from '../../images/1f8aea2172f6eb987c3de3f7ba474eb1.png';
import thee from '../../images/03.jpg'
import fowe from '../../images/04.jpg'



require('./new.css');
class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            data: ""
        };

    }
    async componentDidMount() {
       await this.setState({data:this.props.match.params});

         console.log( this.state.data,'1212')
    }
    render() {
        return (
            <div className={'detaCentont'}>
                <article className="blogs">
                    <h1 className="t_nav"><span>您当前的位置：<a href="/index.html">首页</a>&nbsp;&gt;&nbsp;<a
                        href="/news/s/">慢生活</a>&nbsp;&gt;&nbsp;<a href="/news/s/">日记</a></span><a href="/" className="n1">网站首页</a><a href="/" className="n2">日记</a></h1>
                    <div className="index_about">
                        <h2 className="c_titile">{this.state.data.title}</h2>
                        <p className="box_c"><span className="d_time">发布时间：2013-09-08</span><span>编辑：杨青</span><span>互动QQ群：<a
                            href="http://wp.qq.com/wpa/qunwpa?idkey=d4d4a26952d46d564ee5bf7782743a70d5a8c405f4f9a33a60b0eec380743c64">280998807</a></span>
                        </p>
                        <ul className="infos">
                            <p>进一好友空间，再一次看到她置顶的那一篇《他和她的故事》爱情在他俩的生活中经历了不少分分合合，但最后俩人还是走在了一起。当今天再一次阅读的时候，我没有第一次那么感性，我注重他们俩曲折的过程，其中出现过第三者...</p>
                            <p>如果我是她，对于他当初的脚踏两只船、尽管仍然说爱但亦然离开而选择别人，我很肯定我是无法原谅他的，也许你会说是因为我不是真正爱他吧，我也不知道，这是不是因为爱得不够深，不能包容他的过错...我是很小气的人，就像很多人说的那样，一年365天，你364天对她好，只要有一天对她不好，她也会在n天也许n年后提出来，你哪天对我不好。</p>
                            <p><img src={one} alt="分手"/></p>
                            <p>大学时跟我分分合合的男朋友，却是这么一个爱犯错的人。跟他交往，会有意无意的伤到我自尊，至今我也那么认为那伤害了我的自尊。在我骨子里有一种骄傲和很强的自尊，而他却偏偏伤了一次又一次。他的朋友都说我小气，我至今也觉得如果我不小气，那就是我傻！</p>
                            <p>我认为大学时的恋爱，是毕业前进入社会的一次恋爱实习。参杂了很多的疑问和抉择。就像工作，从销售到文员到编辑到技术员，最后才知道什么工作适合自己。找一个人陪你恋爱实习，也许很简单，也许很难。</p>
                            <p>这么多年过去了，当初分手都会舍不得那段4年的感情，后来也是时间煮了这段记忆。现在我们各自有了各自的生活，他也找到了他心仪的女孩，我能感觉出他们俩很相爱，当初最后一次分手的过渡时间，无论有多么的不舍与难熬，现在看看都是正确的。</p>
                            <p><img src={two} alt="分手"/></p>
                            <p>为何我会毅然放弃，因为在我心里，那些过去的伤，那些不好的记忆永远都抹不去，我无法面对，哪怕是当初妥协了，我想最后我也一定会再一次选择放弃....</p>
                            <p>我觉得爱情也可以重新来过，只是换换主角罢了...</p>
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
                                <li><a href="/newstalk/mood/2013-07-24/518.html" title="我希望我的爱情是这样的">我希望我的爱情是这样的</a>
                                </li>
                                <li><a href="/newstalk/mood/2013-07-02/335.html"
                                       title="有种情谊，不是爱情，也算不得友情">有种情谊，不是爱情，也算不得友情</a></li>
                                <li><a href="/newstalk/mood/2013-07-01/329.html" title="世上最美好的爱情">世上最美好的爱情</a></li>
                                <li><a href="/news/read/2013-06-11/213.html" title="爱情没有永远，地老天荒也走不完">爱情没有永远，地老天荒也走不完</a>
                                </li>
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
                                <li><a href="/" title="with love for you 个人网站模板" target="_blank">with love for you
                                    个人网站模板</a></li>
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
                                <li><a href="/" title="withlove for you 个人网站模板" target="_blank">with love for you
                                    个人网站模板</a></li>
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