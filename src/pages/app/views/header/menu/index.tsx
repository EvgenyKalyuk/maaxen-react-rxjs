import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export default () => (
    <nav>
        <ul styleName="menu">
            <li className="p-2">
                <NavLink to="/">
                    Main
                </NavLink>
            </li>
            <li className="p-2">
                <NavLink to="/apartment">
                    Apartment list
                </NavLink>
            </li>
            <li className="p-2">
                <NavLink to="/contacts">
                    Contacts
                </NavLink>
            </li>
        </ul>
    </nav>
);
