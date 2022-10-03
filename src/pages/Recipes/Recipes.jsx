import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/img/placeholder.jpg';
import './Recipes.scss';

const Recipes = () => {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearched(recipes.results);
  }

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <section className="recipes">
      {searched.map((searched) =>{
        return(
          <div className="recipes__card" key={searched.id}>
            <Link to={'/recipe/' + searched.id} id='#recipesHover' className='recipes__link hover-link'>
            {searched.image == undefined ? <img src={placeholder} alt={searched.title} className="recipes__img" /> : <img src={searched.image} alt={searched.title} className="recipes__img" />}
            </Link>
            <Link to={'/recipe/' + searched.id} className='recipes__link'><h4 className='recipes__title hover-title'>{searched.title}</h4></Link>
          </div>
        )
      })}
    </section>
  )
}

export default Recipes