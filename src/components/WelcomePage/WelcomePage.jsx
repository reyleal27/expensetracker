import React from 'react';
import s from './WelcomePage.module.css';
import { Button } from 'components';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <section className={s.wrapper}>
            <p className={s.text}>Expense Log</p>
            <h2 className={s.welcomeText}>Manage Your <span className={s.textStyle}>Finances</span> Masterfully</h2>
            <p className={s.textParagraph}>ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.</p>
            <div className={s.btnWrapper}>
                <Link to='/register'>
                    <Button text='Sign Up' /> 
                </Link>
                <Link to='/login'>
                <Button text='Sign In' isPrimaryButton={false} />
                </Link>
            </div>
        </section>
    )
};

export default WelcomePage;

