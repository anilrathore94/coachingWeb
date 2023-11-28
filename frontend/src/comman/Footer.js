import React, { useEffect, useState } from 'react';
import { AddNewsLetter } from '../services/feedback.service';
import { HotToaster } from '../utils/Toaster';
import { AdminInformation } from '../services/book.service';


const Footer = () => {
  const [name, setName] = useState("")
  const [emailId, setEmailId] = useState("")
  const [adminInfo,setAdminInfo] = useState([])

  useEffect(()=>{
      getAdmininfo()
  },[])

  const getAdmininfo = async() => {
    let result = await AdminInformation()
    if(result.status){
      setAdminInfo(result.data)
    }
    console.log("AdminInformation",result);
  }



  // const handleChange = (e) => {
  //   let {name,value} = e.target
  //   if(name == "txtnname"){
  //     setName(value)
  //   }
  //   if(name == "txtnemail"){
  //     setEmailId(value)
  //   }
  // }

  // const handleClick = async(e) => {
  //   e.preventDefault()
  //   let data = {
  //     name:name,
  //     emailId:emailId
  //   }
  //   let result = await AddNewsLetter(data)
  //   HotToaster(result.status,result.message )
  //   setName("")
  //   setEmailId("")
  // }



  return (
    <footer>
      <div className="footer">
          {/*  <section className="section-newsletter-alerts">
       <div className="wrapper">
            <div className="newsletter">
              <div className="label-news">Newsletter Subscription</div>
              <div className="form-newsletter">
                <form action="" method="post" id="newsletterfrm">
                  <div className="field">
                    <input
                      type="text"
                      name="txtnname"
                      id="txtnname"
                      value={name}
                      onChange={handleChange}
                      className="form-field input-error"
                      placeholder="Name"
                    />
                  </div>
                  <div className="field">
                    <input
                      type="email"
                      name="txtnemail"
                      id="txtnemail"
                      value={emailId}
                      onChange={handleChange}
                      className="form-field input-error"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field-button" style={{ position: 'relative' }}>
                    <button className="btn-blue" type="submit"
                    onClick={handleClick}
                    >
                      Subscribe Now
                    </button>
                    <span className="loader"></span>
                  </div>
                  <span id="nmsg"></span>
                </form>
              </div>
              <div className="cb"></div>
            </div>
            <div className="sms-alert">
               <div className="label-alert">SMS Alerts</div>
              <div className="form-sms">
                <form action="" method="post" id="smsalertfrm">
                  <div className="field">
                    <input
                      type="tel"
                      name="txtnmobile"
                      id="txtnmobile"
                      className="form-field"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="field-button">
                    <button className="btn-blue" type="submit">
                      Subscribe Now
                    </button>
                  </div>
                  <span id="nmmsg"></span>
                </form>
              </div>
              <div className="cb"></div> 
            </div>
            <div className="cb"></div>
          </div>
        </section>*/}
        <div className="w100 fl">
          <div className="mid">
            <div className="w100 fl">
              <div className="f_part1 pt15 borr">
                <div className="w100 fl">
                  <h2>Get in Touch</h2>
                </div>

                <div className="w100 fl">
                  <div className="w50p fl ">
                    <span className="icon">
                      <img src="/images/p-icon1.png" alt="Phone Icon" />
                    </span>
                  </div>
                  <div className="search_part fl">
                    <p>{adminInfo.length>0 && adminInfo[0].mobileNumber.map((item,i)=>{
                      return item + ","
                    })}</p>
                  </div>
                </div>
                <div className="w100 fl">
                  <div className="w50p fl ">
                    <span className="icon">
                      <img src="/images/m1.png" alt="Email Icon" />
                    </span>
                  </div>
                  <div className="search_part fl">
                    <p>{adminInfo.length>0 && adminInfo[0].emailId}</p>
                  </div>
                </div>
              </div>
              <div className="f_part ml20 pt15 borr">
                <h1>Our Links</h1>
                <div className="w100 fl pt20 flu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="corporate/index.html"> Home</a>
                    </li>
                    {/* <li><a href="content-for-Careers">Careers</a></li> */}
                    <li>
                      <a href="content-for-Advertise-with-us.html">Advertise with us</a>
                    </li>
                    {/* <li><a href="tech_support.php">Technical Support</a></li> */}
                    <li>
                      <a href="content-for-FAQ.html">FAQ</a>
                    </li>
                    {/* <li><a href="content-for-Shopping-Instructions">Shopping Instructions</a></li> */}
                    <li>
                      <a href="contactus.html">Contact us</a>
                    </li>
                    <li>
                      <a href="content-for-Disclaimer.html">Disclaimer</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cb"></div>
          </div>
        </div>
        <div className="cb"></div>
      </div>
      <div className="footer1">
        <div className="mid">
          <div className="w50 rs fl">
            © Copyright
            <span className="fco"> Coaching Test & Notes </span> All rights reserved.
          </div>
          <div className="w50 rs fr ar pal pvt">
            Designed and Developed by{' '}
            <a href="https://www.dextrousinfo.com/" target="_blank">
              Ab2software.com
            </a>
          </div>
        </div>
      </div>
      <p id="back-top" style={{ display: 'block', zIndex: 99999 }}>
        <a href="#top">
          <span>&nbsp;</span>
        </a>
      </p>
    </footer>
  );
};

export default React.memo(Footer);
