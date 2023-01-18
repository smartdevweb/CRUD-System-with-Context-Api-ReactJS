import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';

const EditMovies = () => {
    const [movies,setMovies] = useContext(MovieContext);

    const {url} = useParams();

    const editItems = movies.find(p=>p.id == url);

    const id = movies.id

    const [img, setImg] = useState(editItems.img);
    const [title, setTitle] = useState(editItems.title);
    const [price, setPrice] = useState(editItems.price);

    const updatedMovies = {id, img, title, price }

    const updateMovies = (id, updatedMovies) => {
        setMovies(movies.map((movies) => movies.id === id ? updatedMovies : movies))
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovies(id, updatedMovies);
        navigate('/listboard');
    }

  return (
    <>
      <div className='editmovies'>

           <div className='main-box'>
             
            
                <form className='editform' onSubmit={handleSubmit}>
                     <div className='image'>
                          <input type='text' value={editItems.img} onChange={(e)=> setImg(e.target.value)}/>
                     </div>

                     <div className='title'>
                          <input type='text' value={editItems.title} onChange={(e)=> setTitle(e.target.value)}/>
                     </div>

                     <div className='price'>
                           <input type='text' value={editItems.price} onChange={(e)=> setPrice(e.target.value)}/>
                     </div>

                     <div className='buton'>
                          <button className='button-41' >Edit</button>
                     </div>
                </form>
            

           </div>

      </div>
    </>
  )
}

export default EditMovies