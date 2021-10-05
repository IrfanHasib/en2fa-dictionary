import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;
