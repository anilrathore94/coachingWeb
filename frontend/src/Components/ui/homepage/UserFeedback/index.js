import React, { useState } from 'react';
import { AddUserFeedBack } from '../../../../services/feedback.service';
import { HotToaster } from '../../../../utils/Toaster';
import EmptyState from "../../../../utils/emyptState"

const NewsletterSubscription = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!name || !email || !message ){
      HotToaster(false,"All fields are required")
      return false
    }
    let data = {
      name:name,
      emailId:email,
      message:message
    }
    let result = await AddUserFeedBack(data)
    if(result && result.status){
      HotToaster(result.status,result.message)
      EmptyState([setEmail,setName,setMessage])
      // setEmail("")
      // setName("")
      // setMessage("")
    }
  }

  return (
    <div id="fpi_feedback" style={{ fontSize: '11px', width: '360px' }}>
      {/* <div id="fpi_title">
        <h2>
          <img src="https://www.upkar.in/images/feedback.png" alt="Feedback" />
        </h2>
      </div> */}
      <div id="fpi_content">
        <div id="fpi_header_message" className='newstitle'>
          <h6>Newsletter Subscription</h6>                    
        </div>
        <form>
            <div className="field ename">
              <input
                type="text"
                name="txtnname"
                id="txtnname"
                className="form-field input-error"
                placeholder="Name"
                onChange={(e)=>{
                  setName(e.target.value)
                }}
                value={name}
              />
            </div>
            <div className="field eemail">
              <input
                type="email"
                name="txtnemail"
                id="txtnemail"
                className="form-field input-error"
                placeholder="Email"
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                value={email}
                required
              />
            </div>
            {/*<div className="field eemail">
              <input
                type="text"
                name="txtnmessage"
                id="txtnmessage"
                className="form-field input-error"
                placeholder="message"
                onChange={(e)=>{
                  setMessage(e.target.value)
                }}
                value={message}
              />
              </div> */}
            <div className="field-button" style={{ position: 'relative' }}>
              <button className="btn-blue esub" type="submit" onClick={handleSubmit}>
              Subscribe Now
              
              </button>
              <span className="loader"></span>
            </div>
            <span id="nmsg"></span>
          </form>
          
      </div>
    </div>
  );
};

export default NewsletterSubscription;
