import React from 'react';

//创建一个类 ComponentHeader 相当于继承react里component的子类
//export default 输出这个类

class ComponentFooter  extends React.Component{
    //render() 解析类的一个输出
    render(){
        return(
            <footer>
                <p>Design by DanceSmile <a href="http://www.miitbeian.gov.cn/" target="_blank">蜀ICP备11002373号-1</a> <a href="/">网站统计</a></p>
            </footer>
        );
    }
}

export default ComponentFooter