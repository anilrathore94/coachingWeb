import React, { useState } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Textra from "react-textra";
import { useNavigate } from "react-router-dom";
export default function SlideShow(props) {
  const [profileContainer, setProfileContainer] = useState(false);
  let email = localStorage.getItem("emailId");
  let name = localStorage.getItem("name");
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleOpenDialogLogin = () => {
    props.loginPopup(true);
    // setIsOpenLogin(true);
  };

  const handleOpenDialogSingup = () => {
    props.signupPopup(true);
    // setIsOpenSingup(true);
  };
  return (
    <div className="top-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="text">
              <Textra effect="leftRight" data={props.list} />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="social-top">
              <ul>
                <li>
                  <div className="soc-border">
                    <div className="soc-i">
                      {" "}
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="soc-e">
                      {" "}
                      <a href="mailto:test@gmail.com">test@gmail.com</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="soc-border">
                    <div className="soc-i">
                      {" "}
                      <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="soc-e">
                      {" "}
                      <a href="tel:8769840062">8769840062</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="logtop mid-log">
              <div className="fr lo-pt">
                <ul style={{ color: "#FFFFFF" }}>
                  {!email && !token ? (
                    <>
                      {" "}
                      <li
                        onClick={handleOpenDialogLogin}
                        className="print-btn pup-login"
                      >
                        <div className="soc-border">
                    <div className="soc-i">
                    <i class="fa fa-unlock" aria-hidden="true"></i>
                    </div>
                    <div className="soc-e">
                    <p style={{ color: "#fff" }}>Login</p>
                    </div>
                  </div>
                      </li>
                      <li
                        onClick={handleOpenDialogSingup}
                        className="print-btn pup-login"
                      >
                        <div className="soc-border">
                    <div className="soc-i">
                    <i class="fa fa-unlock" aria-hidden="true"></i>
                    </div>
                    <div className="soc-e">
                    <p style={{ color: "#fff" }}>Sign Up</p>
                    </div>
                  </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        className="print-btn pup-login"
                        onClick={() => {
                          setProfileContainer(!profileContainer);
                        }}
                      >
                        <i
                          style={{ color: "#fff" }}
                          className="fa fa-user fa-social"
                        ></i>
                        <p style={{ color: "#fff", marginLeft: "10px" }}>
                          {name}
                        </p>
                      </li>
                    </>
                  )}
                  {/* <li><a href="cart.html"><img src="images/img_11.png"> CHECKOUT</a></li> */}
                </ul>
                {profileContainer && (
                  <div className="user-profile">
                    <div className="user-pro-main">
                      <h6>Your Account Profile</h6>
                      <ul>
                        <li>
                          <a href="#">Your Account</a>
                        </li>
                        <li>
                          <a href="#">Your Order</a>
                        </li>
                        <li>
                          <a href="#">Login Security</a>
                        </li>
                        <li
                          onClick={() => {
                            localStorage.removeItem("emailId");
                            localStorage.removeItem("token");
                            navigate("/");
                          }}
                        >
                          <a>Sign Out</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

