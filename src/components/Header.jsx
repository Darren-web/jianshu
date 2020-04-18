import React, { Component } from 'react';

import Style from './../less/header.less'

class Header extends Component {
    render() {
        return (
            <div className={Style.header_containner}>
                <div className={Style.header_content}>
                    <a href="/" className={Style.header_logo_a}><div className={Style.header_logo}></div></a>
                    <div className={Style.header_center}>
                        <ul>
                            <li><a href="/">首页</a></li>
                            <li><div className={Style.toDownloadApp}>下载APP</div></li>
                            <li><input type="text"/></li>
                        </ul>
                        <ul className={Style.right}>
                            <li className={Style.right}><a href="/" className={Style.header_font}>Aa</a></li>
                            <li className={Style.right}><a href="/" className={Style.header_login}>登录</a></li>
                        </ul>
        
                    </div>
                    <div className={Style.header_right}>
                        <ul>
                            <li><a href="/" className={Style.header_register}>注册</a></li>
                            <li><a href="/" className={Style.header_write}>写文章</a></li>
                        </ul>
                    </div>
                </div> 
            </div>
        ); 
    }
}

export default Header;