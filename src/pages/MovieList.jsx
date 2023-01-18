import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import SingleMovie from '../components/SingleMovie'

const MovieList = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
     <div className='main-box'>
          <div className='hero-box'>
                 {movies.map((fd,i)=>(
                      <SingleMovie title={fd.title} price={fd.price} image={fd.img} key={i}/>
                 ))}
          </div>
     </div>
  )
}

export default MovieList