import React from 'react';
import './public.css';

// import { Link } from 'react-router-dom';
export default () => {
  const addPost = () => {
    console.log('adds');
    
  }
  const AddCategory = () => {
    console.log('adds');
    
  }
  return (
  <div>
    <div className="adds">
      <input className="button-add" type="button" name="button" value="Add category" onClick={addPost} />
      <input className="button-add" type="button" name="button" value="add post" onClick={AddCategory} />
    </div>
    <div className="card">

    
    </div>
  </div>
  )
};