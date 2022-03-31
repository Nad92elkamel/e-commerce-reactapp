import React from 'react'
import Products from './Products'
import { Carousel } from 'bootstrap'

const Home = () => {
    return (
        <div className="hero">
            <div className="d-flex justify-content-center display-8 fw-bolder">
               Get Free Shipping On Orders Over $99
            </div>
            <div className="card bg-white text-white border-0">
                <img src="https://img.cppng.com/download/2020-06/7-2-shopping-png-hd.png" class="img-fluid" alt="Image" />
                <div className="card-img-overlay">
                    <h5 className="card-title display-5 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">Check out all the trends</p>
                </div>
            </div>
            <Products />

        </div>
    )
}

export default Home