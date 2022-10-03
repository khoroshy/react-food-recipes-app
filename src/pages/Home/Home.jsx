import React from 'react';
import {Random, Popular, Veg, Book} from '../../components';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Random />
      <Popular />
      <Book />
      <Veg />
    </>
  )
}

export default Home