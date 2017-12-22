/**
 * Created by zhoupeng on 2017/12/8.
 */
import React from 'react';
import './header.less';

function Header(props) {
    return (
        <div className="components-header clearfix">
            <img src="/image/logo.png" alt="" width="40" className="-col-auto"/>
            <h1 className="caption">React Music Player</h1>
        </div>
    )
}

export default Header;