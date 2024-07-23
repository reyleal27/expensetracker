import React from 'react';
import logoDesktopTablet  from 'assets/logo/Logodesktop.png';
import logoMobile from 'assets/logo/LogoMobile.png'
import { Link } from 'react-router-dom';
import s from './Logo.module.css'

const Logo = () => {

  return (
    <div className={s.logoWrapper}>
      <Link to="/">
        <img
          src={logoMobile}
          className={s.logoMobile}
          alt="logo"
          width={226}
          height={26}
        />
        <img
          src={logoDesktopTablet}
          className={s.logoDesktop}
          alt="expensetracker logo"
          width={207}
          height={23}
        />
      </Link>
    </div>
  );
};

export default Logo;
