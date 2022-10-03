import React from 'react';
import {Home, Recipes, Recipe, Error, Contact, About} from '../pages'
import {Header, Footer, Success} from '../components';
import { Route,Routes } from 'react-router-dom';

const Pages = () => {
  return (
    <div className="wrapper">
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/recipes/:search' element={<Recipes />} />
        <Route path='/success' element={<Success />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    <Footer />
    </div>
  )
}

export default Pages