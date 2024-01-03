
import React, { useState } from 'react';
import "../Assets/Css/contact/contact .css";
import { LinkedIn, Whatsapp, gmail } from '../Assets/Image/image';

const ContactForm = () => {
  

  return (
    <div className="contact-form-container wrapper" id='Contact'>
      <h2>Contact Me</h2>

     <div className="contactLinks">

        <div className='Links'>
            <h2><span><img src={LinkedIn} alt="linkedIn" /></span>Linked-In </h2>
           <a href="https://www.linkedin.com/in/adith-sukumar-ka/"><p>www.linkedin.com/in/adith-sukumar-ka</p> </a>
        </div>
        <div className='Links'>
            <h2><span><img src={gmail} alt="gmail" /></span>E-Mail </h2>
            <a href="mailto:kaadith092@gmail.com"> <p>kaadith092@gmail.com</p></a>
        </div>
        <div className='Links'>
            <h2><span><img src={Whatsapp} alt="Whatsapp" /></span>Whatsapp</h2>
            <a href=" https://wa.me/7592922246"><p>7592922246</p></a>
        </div>

     </div>






     
    </div>
  );
};

export default ContactForm;
