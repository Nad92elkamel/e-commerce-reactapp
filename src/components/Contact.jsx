import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='container border'
        style={{
          marginTop: "50px",
          width: "50%",
          backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.2.1184097330.1641254400')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        <h1 className='d-flex justify-content-center display-6 fw-bolder'>Contact us</h1>
        <h6 className='d-flex justify-content-center'>Just fill out the form below, or email us at support@shopeasy.com</h6>
        <form className='row' style={{ margin: "25px 85px 75 px 100px" }}>
          <label>Full Name</label>
          <input type='text' name='name' className='form-control' placeholder='Enter your Full Name' />

          <label>Email</label>
          <input type='email' name='user_email' className='form-control' placeholder='Enter your Email' />

          <label>Message</label>
          <textarea name='message' rows='4' className='form-control' placeholder='Comments/Questions' />

          <input type='submit' value='Send' className='form-control btn btn-primary' style={{ marginTop: "30px" }} />
        </form>
        <h6 className='d-flex justify-content-center' style={{ marginTop: "30px" }}>
          El Andalib St Khzema, Sousse, TN 4051
        </h6>
      </div>
      <hr />
      <footer className='fw-bolder' style={{ marginTop: "30px" }}>
        &copy; 2022 ShopEasy. All Rights Reserved.
      </footer>
    </div>


  )
}

export default Contact