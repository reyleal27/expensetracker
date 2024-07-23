import { BgImgWrapper, DecorationTab } from 'components'
import React from 'react'
import s from './ImageSection.module.css';
const ImageSection = () => {
    return (
        <div className={s.wrapper}>
            <BgImgWrapper />
            <div className={s.decorationTabWrapper}>
            <DecorationTab />
            </div>
        </div>
    )
};

export default ImageSection;
