import React from 'react';
import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '@splidejs/splide/dist/css/splide.min.css';
import placeholder from '../../assets/img/placeholder.jpg'
import './Popular.scss';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () =>{
    const storage = localStorage.getItem('popular');

    if(storage){
      setPopular(JSON.parse(storage));
    }else{
      const API = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await API.json();
      setPopular(data.recipes);
      localStorage.setItem('popular', JSON.stringify(data.recipes));
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

  const [image, setImage] = useState(true);
  
  return (
    <motion.section initial={'hidden'} whileInView={'visible'} className="popular">
      <h3 className="popular__heading heading">Trending Now</h3>
      <motion.div variants={blockAnimation} className="popular__container">
        <Splide options={{perPage: 3,arrows: true,pagination: false,drag: 'free',gap: '2rem',}}>
        {popular.map((recipe) =>{
          return(
            <SplideSlide key={recipe.id}>
              <Link to={'/recipe/' + recipe.id} className='popular__link'>
                <div className="popular__card">
                  <div className="popular__gradient gradient"></div>
                  {recipe.image == undefined ? <img src={placeholder} alt={recipe.title} className="popular__img" /> : <img src={recipe.image} alt={recipe.title} className="popular__img" />}
                  <h4 className='popular__title card-title'>{recipe.title}</h4>
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

export default Popular