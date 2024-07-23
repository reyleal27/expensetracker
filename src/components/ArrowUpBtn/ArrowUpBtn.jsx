import React from 'react'
import s from './ArrowUpBtn.module.css';
import { MdOutlineArrowOutward } from "react-icons/md";

const ArrowUpBtn = () => {
  return (
      <button type="button" className={s.btn}>
          {/* <svg className={s.icon} width={18} height={18}>
              <use href={arrowIcon} className={s.arrowIcon}></use>
          </svg> */}
          <MdOutlineArrowOutward className={s.icon} />
    </button>
  )
}

export default ArrowUpBtn;

