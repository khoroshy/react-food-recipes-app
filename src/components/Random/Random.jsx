import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import dairy from '../../assets/img/icons/dairy-free.png';
import gluten from '../../assets/img/icons/gluten-free.png';
import healthy from '../../assets/img/icons/healthy.png';
import popular from '../../assets/img/icons/popular.png';
import veg from '../../assets/img/icons/vegetarian.png';
import './Random.scss';

const Random = () => {

    const [random, setRandom] = useState([]);


    useEffect(() => {
      getRandom();
    },[])

    // Reason to make this async was to make sure that we have the data first before rendering everything out
    const getRandom = async () =>{
        const storage = localStorage.getItem('random');

        if(storage){
          setRandom(JSON.parse(storage))
        }else{
          const API = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`);
          const data = await API.json();
          setRandom(data.recipes);
          localStorage.setItem('random', JSON.stringify(data.recipes));
        }
    }

  return (
    <motion.section whileInView={{opacity: 1,}} initial={{opacity: 0,}} className='random'>{random.map((recipe) =>{
      return(
        <div  key={recipe.id} className='random__card'>
          <img src={recipe.image} alt={recipe.title} width='665px' className="random__img" />
          <div className="random__details">
            <p className="random__today">Don't know what to cook?</p>
            <Link to={'/recipe/' + recipe.id} className='popular__link'><h1 className="random__title">Try {recipe.title}</h1></Link>
            <div className="random__icons">
              {recipe.vegetarian == true && <img src={veg} alt="Vegetarian meal" title='Vegetarian meal' className='random__ico' /> }
              {recipe.dairyFree == true && <img src={dairy} alt="Dairy-free meal" title='Does not contain mammal milk' className='random__ico' /> }
              {recipe.glutenFree == true && <img src={gluten} alt="Gluten-free meal" title='Gluten-free meal' className='random__ico' /> }
              {recipe.veryHealthy == true && <img src={healthy} alt="Very healthy meal" title='Very healthy meal' className='random__ico' /> }
              {recipe.veryPopular == true && <img src={popular} alt="Very popular meal" title='Very popular meal' className='random__ico' /> }
            </div>
            <p className="random__text" dangerouslySetInnerHTML={{__html: `${recipe.summary}`}}></p>
            <Link to={'/recipe/' + recipe.id} className='random__link'>Learn more →</Link>
          </div>
        </div>
      );
    })}</motion.section>
  )
}


export default Random