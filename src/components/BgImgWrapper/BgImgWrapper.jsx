import React from 'react';
import homeBg from '../../assets/img/homebg.png';
import homeBgTablet from '../../assets/img/homebgTablet.png';
import s from './BgImgWrapper.module.css';

import useWindowDimension from 'services/hooks/useWindowDimension';
const BgImgWrapper = () => {
    const width = useWindowDimension();
    return (
        <>
            <img src={homeBg} alt='homepageBg' className={s.imgBg} />
        {/* {width > 768 && <img src={homeBgTablet} alt='homebg' width={704}/>} */}
        </>
    )
};

export default BgImgWrapper;
