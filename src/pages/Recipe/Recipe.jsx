import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dairy from '../../assets/img/icons/dairy-free.png';
import gluten from '../../assets/img/icons/gluten-free.png';
import healthy from '../../assets/img/icons/healthy.png';
import popular from '../../assets/img/icons/popular.png';
import veg from '../../assets/img/icons/vegetarian.png';
import placeholder from '../../assets/img/placeholder.jpg'
import './Recipe.scss'; 

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const [loaded, setLoaded] = useState(false);

  const fetchDetails = async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const dataInfo = await data.json();
    setDetails(dataInfo);
    setLoaded(true)
  }
  
  useEffect(() => {
    fetchDetails(params.id);
  }, [params.id])

  return (
    <section className="recipe">
      {loaded 
      ? 
      <div className="recipe__container">
      {details.image == undefined ? <img src={placeholder} alt={details.title} className="recipe__img noImg" /> : <img src={details.image} alt={details.title} className="recipe__img" />},
        <div className="recipe__details">
        <h2 className="recipe__title">{details.title}</h2>
          <div className="recipe__icons">
            {details.vegetarian == true && <img src={veg} alt="Vegetarian meal" title='Vegetarian meal' className='recipe__ico' /> }
            {details.dairyFree == true && <img src={dairy} alt="Dairy-free meal" title='Does not contain mammal milk' className='random__ico' /> }
            {details.glutenFree == true && <img src={gluten} alt="Gluten-free meal" title='Gluten-free meal' className='random__ico' /> }
            {details.veryHealthy == true && <img src={healthy} alt="Very healthy meal" title='Very healthy meal' className='random__ico' /> }
            {details.veryPopular == true && <img src={popular} alt="Very popular meal" title='Very popular meal' className='random__ico' /> }
          </div>
          <h3 className="recipe__heading">About</h3>
          <p className="recipe__text" dangerouslySetInnerHTML={{__html: details.summary}}></p>
          <h3 className="recipe__heading">How to Cook</h3>
          <div className="recipe__button-container">
            <button className={activeTab == 'instructions' ? 'current' : ''} onClick={() => setActiveTab('instructions')}>Instructions</button>
            <button className={activeTab == 'ingredients' ? 'current' : ''}onClick={() => setActiveTab('ingredients')}>Ingredients</button>
          </div>
          <div className="recipe__info">
          {activeTab == 'instructions' && (<p className="recipe__instruction" dangerouslySetInnerHTML={{__html: details.instructions}}></p>)}
          {activeTab == 'ingredients' &&
          (<ul className="recipe__ingredients">
              {details.extendedIngredients.map((ingredient) => {
                return(
                  <li key={ingredient.id} className="recipe__ingredient">{ingredient.original}</li>
                )
              })}
            </ul>)
          }
          </div>
        </div>
      </div> 
      :
        <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      }     
    </section>
  )
}

export default Recipe