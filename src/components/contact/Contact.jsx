

import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='wrapper'>
  <div className='title'>
    <h1>Contact Us</h1>
  </div>
  <div className='contact-form'>
    <div className="input-fields">
      <input   type="text" class="input" placeholder="Name"/>
      <input type="text" class="input" placeholder="Email Address"/>
      <input type="text" class="input" placeholder="Phone"/>
      <input type="text" class="input" placeholder="Subject of Message"/>
    </div>
    <div className="msg">
      <textarea placeholder="Write Us a Message"></textarea>
      <div class="con-btn">send</div>
    </div>
  </div>
</div>
  )
}

export default Contact
