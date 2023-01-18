import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';
import { v4 as uuidv4 } from 'uuid';

const AddMovies = () => {
  const [img,setImg] = useState("");
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [movies,setMovies] = useContext(MovieContext);

  const updateImg = (e)=>{
    setImg(e.target.value)
}

  const updateTitle = (e)=>{
      setTitle(e.target.value)
  }
  const updatePrice = (e)=>{
      setPrice(e.target.value)
  }
  const navigate = useNavigate();
  const addMovie=(e)=>{
      e.preventDefault();
     setMovies(prevMovies=>[...prevMovies,{id:uuidv4(), img:img,title:title,price:price}]);
     navigate('/movies');
     
  }
  return (
     <div className='dashPage'>

          <div className='main-box'>

            <Link to='/listboard'><button className='btnlist'>Movies ListBoard</button></Link>

               <div className='dashBox'>
                  <form onSubmit={addMovie}>
                     <div className='image'>
                          <p>Photo:</p>
                          <input onChange={updateImg} type='text'></input>
                     </div>

                     <div className='title'>
                           <p>Title:</p>
                           <input onChange={updateTitle} type='text'></input>
                     </div>

                     <div className='price'>
                           <p>Price:</p>
                           <input onChange={updatePrice} type='text'></input>
                     </div>

                     <div className='buton'>
                           <button className='button-32'>ADD</button>
                     </div>
                  </form>
               </div>

          </div>

     </div>
  )
}

export default AddMovies