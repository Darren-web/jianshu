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
        
                    </div>
                    <div className={Style.header_right}>
                        <ul>
                            <li><a href="/">1</a></li>
                            <li><a href="/">2</a></li>
                            <li><a href="/">3</a></li>
                            <li><a href="/">4</a></li>
                            <li><a href="/">5</a></li>
                        </ul>
                    </div>
                </div> 
            </div>
        ); 
    }
}

export default Header;