import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MovieContext } from '../context/MovieContext'
import logo from '../img/logo.png'

const Nav = () => {
   const [movies,setMovies] = useContext(MovieContext)
  let activeStyle = {
     color:"yellow",
  };

  let activeClassName = "underline";
  return (
     <header>
          <div className='logo'>
                <Link to="/"><img src={logo} alt="error" /></Link>
          </div>

          <div className='nav'>
                <ul>
                   <li><NavLink to="/" style={({ isActive }) =>isActive ? activeStyle : undefined}><i className="fa-solid fa-house" />Home</NavLink></li>
                   <li><NavLink to="/movies" style={({ isActive }) =>isActive ? activeStyle : undefined}><i className="fa-solid fa-film"></i>Movie({movies.length})</NavLink></li>
                </ul>
          </div>

          <div className='dashboard'>
                <Link className='dashbtn' to='/add'>Dashboard</Link>
          </div>
     </header>
   )
}

export default Nav