import { ArrowUpBtn } from 'components'
import React from 'react'
import s from './DecorationTab.module.css';

const DecorationTab = () => {
  return (
      <div className={s.wrapper}>
          <ArrowUpBtn />
          <div className={s.textWrapper}>
          <h6 className={s.textTitle}>Your balance</h6>
          <p className={s.textBalance}>$632.000 <span className={s.textPercent}>+1.29%</span></p>
        </div>
      </div>
  )
}

export default DecorationTab;