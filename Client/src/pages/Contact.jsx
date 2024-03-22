import React from 'react'
import {FaEnvelope } from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
       <div className="container" id="contact1">
          <h1 id="get_in_touch" className="sec_heading">Get In Touch! </h1>
  <p>Contact Us for help or Send us some feedback</p>

  <div className='contactcontent'>
  <div className="mx-4 contacticon">
    <a href="#">
    <FaEnvelope/>
  
        </a>
  </div>
  <div className="mx-4 contacticon">
    <a href="mailto:wingsred2022@gmail.com">
    <FaPhoneAlt/>
  </a>
  </div>
  </div>
  </div><br/><br/>
  <div className="container">
  <div className="row">
      <div className="col-md-6" id="contact_animation">
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_86eeqlid.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
      </div>
      <div className="col-md-6">
          <div id="msg">
      <form method="POST" action="https://formspree.io/f/xknydwza" autoComplete="off">
    <div className="form-row">
      <div className="form-group col-md-6">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" name="name" placeholder="Name" autoComplete="off" required/>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Email" autoComplete="off" required/>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="subject" >Subject</label>
      <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter subject here" autoComplete="off" required/>
    </div>
    <div className="form-group">
      <label htmlFor="message" >Message</label>
      <textarea name="message" rows="5" cols="20" className="form-control" id="message" placeholder="Enter your messages, queries here..." autoComplete="off" required></textarea>
    </div>
    <br/>
    <div className="contactbtn d-flex">
    <button type="submit" className="mb-5 btn btn-danger" >Submit</button>
    </div>
  </form>
  </div>
      </div>
  </div>
  </div><br/>
    </div>
  )
}

export default Contact
