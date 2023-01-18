import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext';

const MoviesListBoard = ({}) => {
    const [movies,setMovies] = useContext(MovieContext);

    const deleteMovies = (id)=>{
         setMovies(movies.filter(movies => movies.id !== id))
    }

  return (
    <>
       <section className='listboard'>

             <div className='main-box'>

                    <table className="table">
                         <thead>
                           <tr>
                             <th scope="col">Title</th>
                             <th scope="col">Price</th>
                             <th scope="col">Actions</th>
                           </tr>
                        
                         </thead>
                         <tbody>
                            {movies.map((fd,i)=>(
                                <tr key={i}>
                                  <td>{fd.title}</td>
                                  <td>{fd.price}</td>
                                  <td><button onClick={()=>deleteMovies(fd.id)} className='btntrash'>Delete</button>  
                                      <Link to={`/edit/${fd.id}`}><button className='btnedit'>Edit</button></Link> 
                                  </td>
                                </tr>
                            ))}
                         </tbody>
                    </table>

             </div>

       </section>
    </>
  )
}

export default MoviesListBoard