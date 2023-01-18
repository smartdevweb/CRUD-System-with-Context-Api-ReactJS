import React from 'react'

const SingleMovie = ({title,price,image}) => {
  return (
    <div className='card'>
         <div className='photo'>
              <img src={image} alt="error" width="100%" height="300px"/>
              <div className='info'>
                    <div className='title'>
                          <h1>{title}</h1>
                    </div>
                    <div className='price'>
                          <p>{price}$</p>
                    </div>
              </div>
         </div>

    </div>
  )
}

export default SingleMovie