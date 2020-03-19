import * as React from 'react';

import LOGO_PNG_SRC from 'assets/images/logo.png';

import Menu from './menu';

import './styles.scss';

export default () => (
    <header styleName="header">
        <div>
            <img src={LOGO_PNG_SRC} alt="logo" />
        </div>
        <div>
            <Menu />
        </div>
        <div>
            property
        </div>
    </header>
);
