import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Search = (props) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/recipes/' + input)
    console.log(123);
  };


  return (
    <form className={props.formClass} onSubmit={handleSubmit}>
      <input onChange={(e) => setInput(e.target.value)} type="text" className={props.inputClass} value={input} placeholder='Search for a recipe and hit enter...'/>
    </form>
  )
}

export default Search