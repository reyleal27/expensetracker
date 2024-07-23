import React from 'react';
import homeBg from '../../assets/img/homebg.png';

import s from './BgImgWrapper.module.css';


const BgImgWrapper = () => {
    return (
        <>
            <img src={homeBg} alt='homepageBg' className={s.imgBg} />
     
        </>
    )
};

export default BgImgWrapper;
