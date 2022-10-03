import React from 'react';
import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '@splidejs/splide/dist/css/splide.min.css';
import placeholder from '../../assets/img/placeholder.jpg';
import './Veg.scss';

const Veg = () => {
  const [veg, setVeg] = useState([]);

  useEffect(() => {
    getVeg();
  }, [])

  const getVeg = async () =>{
    const storage = localStorage.getItem('vegetarian');

    if(storage){
      setVeg(JSON.parse(storage))
    }else{
      const API = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`);
      const data = await API.json();
      setVeg(data.recipes);
      localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
    }

  }
  
  const blockAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }

  return (
    <motion.section initial={'hidden'} whileInView={'visible'} className="vegetarian">
      <motion.div variants={blockAnimation} className="vegetarian__container">
        <h3 className="vegetarian__heading heading">Our Vegetarian Picks</h3>
        <Splide options={{perPage: 4,arrows: true,pagination: false,drag: 'free',gap: '2rem',}}>
          {veg.map((recipe) =>{
            return(
              <SplideSlide key={recipe.id}>
                <Link to={'/recipe/' + recipe.id} className='vegeterian__link'>
                  <div className="vegetarian__card">
                    <div className="vegetarian__gradient gradient"></div>
                    {recipe.image == undefined ? <img src={placeholder} alt={recipe.title} className="popular__img" /> : <img src={recipe.image} alt={recipe.title} className="popular__img" />}
                    <h4 className='vegetarian__title card-title'>{recipe.title}</h4>
                  </div>
                </Link>
              </SplideSlide>
            )
          })}
        </Splide>
      </motion.div>
    </motion.section>
  )
}

export default Veg