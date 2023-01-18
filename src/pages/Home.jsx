import React from 'react'


const Home = () => {
  return (
    <>
       <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.ytimg.com/vi/_e9y729xeck/maxresdefault.jpg" className=" d-block w-100 photo" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://media.gettyimages.com/id/1349082537/photo/a-view-of-the-film-poster-is-seen-at-focus-features-premiere-of-last-night-in-soho-at-academy.jpg?s=612x612&w=gi&k=20&c=LfnlzJNTRh6lq8LHzs59TphFDmc8a61nQOydjHriLYw=" className="d-block w-100 photo " alt="..." />
          </div> 
          <div className="carousel-item">
            <img src="https://i.ytimg.com/vi/wSjGGPnKv5I/maxresdefault.jpg" className="d-block w-100 photo" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon position-absolute top-50 me-5  " aria-hidden="true" />
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon position-absolute top-50 ms-5 " aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Home