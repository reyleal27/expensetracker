import React from 'react';
import { Logo } from 'components';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.nav}>
                <Logo />
            </div>
        </div>
    )
};

export default Header;
