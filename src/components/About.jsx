import React from 'react'

const About = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='heading' style={{ marginTop: "30px" }}> <span>ABOUT</span> US </h1>
        <div className='row'>
          <div className='image'>
            <img src="https://easyshopway.com/wp-content/uploads/2020/02/logo-easy.png" class="img-fluid" alt="About Image" />
          </div>
          <div className='content card bg-black text-white border-0'>
            <h1>What makes our Website special ?</h1>
            <p>It's an awesome website for shopping and it contains different categories of products. 
              You can see all the details that review different products, which is convenient especially if you would rather not go out due to covid.
              In addition, our Website offers to customers a free shipping of products and everything is easy to manipulate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About