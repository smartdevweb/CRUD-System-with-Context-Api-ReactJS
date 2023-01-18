import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import { MovieProvider } from '../context/MovieContext'
import Home from '../pages/Home'
import AddMovies from '../form/AddMovies'
import EditMovies from '../form/EditMovies'
import MovieList from '../pages/MovieList'
import MoviesListBoard from '../pages/MoviesListBoard'

const AppRouter = () => {
  return (
    <BrowserRouter> 
      <MovieProvider>
        <Nav />
           <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/movies' element={<MovieList />}></Route>
                <Route path='/add' element={<AddMovies />}></Route>
                <Route path='/edit/:url' element={<EditMovies />}></Route>
                <Route path='/listboard' element={<MoviesListBoard />}></Route>
           </Routes>
      </MovieProvider>
    </BrowserRouter>
  )
}

export default AppRouter