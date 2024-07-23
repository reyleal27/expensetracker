import React from 'react';
import s from './HomePage.module.css';
import { AllUserTab, Container,  ImageSection, WelcomePage } from 'components';

const HomePage = () => {
  return (
    <main>
      <section className={s.section}>
        <Container name={s.wrapper}>
          {/* <DecorationTab />
          <BgImgWrapper /> */}
          <ImageSection/>
          <div className={s.welcomePageWrapper}>
          <WelcomePage />
          <AllUserTab/>
          </div>
        </Container>
      </section>
    </main>
  )
};

export default HomePage;
