import React from 'react';
import useWindowDimensions from 'services/hooks/useWindowDimension';
import { Logo } from 'components';
import s from './Header.module.css';

const Header = ({ menuActive, setMenuActive }) => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.nav}>
                <Logo />
            </div>
        </div>
    )
};

export default Header;
