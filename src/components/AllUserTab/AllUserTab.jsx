import React from 'react';
import user1 from '../../assets/userImg/user1.png';
import user2 from '../../assets/userImg/user2.png';
import user3 from '../../assets/userImg/user3.png';
import s from './AllUserTab.module.css';

const AllUserTab = () => {
    return (
        <section className={s.userTabWrapper}>
            <img src={user1} alt='user1' className={s.userImg} />
            <img src={user2} alt='user2' className={s.userImg} />
            <img src={user3} alt='user3' className={s.userImg} />
            <div className={s.userTextWrapper}>
                <h2 className={s.users}>1000 users +</h2>
                <p className={s.userText}>Trusted by users for reliable expense tracking!</p>
            </div>
        </section>
    )
};

export default AllUserTab;