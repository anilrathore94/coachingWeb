import React, { useState, useEffect } from "react"; 

import { Toaster } from "react-hot-toast"
import Footer from "../../../comman/Footer"
import Header from "../../../comman/Header" 
import SlideShow from "../homepage/Slideshow/Slideshow"
import Authentication from "../auth"
import CartList from "./../homepage/AddCart/CartList"

import MyOrder from "./MyOrder";
import ChangePassword from "./ChangePassword";
import UpdateMobileEmail from "./UpdateMobileEmail";
import PersonalDetails from "./Personal";
import Support from "./Support";
import Personal from "./Personal";


const Profile = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSingup, setIsOpenSingup] = useState(false);
  const [cartVisiable, setCartVisiable] = useState(false);
  const [tabSelected, setTabSelected] = useState("myprofile");

  const [getTotal, setGetTotal] = useState(0)
  const handleOpenDialogLogin = () => {
    setIsOpenLogin(true);
  };

  const handleOpenDialogSingup = () => {
    setIsOpenSingup(true);
  };
  const modalClose = (page, boolean) => {
    if (page == "login") {
      setIsOpenLogin(boolean);
    } else {
      setIsOpenSingup(boolean);
    }
  };
  const cartVisibility = (e) => {
    setCartVisiable(!cartVisiable)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={cartVisiable ? "col-10" : "col-12"}>
            <SlideShow list={["asdadadas", "sdadadaddas", "dsadsasad"]} loginPopup={handleOpenDialogLogin} signupPopup={handleOpenDialogSingup} />
            <Header cartVisibility={cartVisibility} />
            <Authentication
              isOpenLogin={isOpenLogin}
              isOpenSingup={isOpenSingup}
              setIsOpenLogin={setIsOpenLogin}
              setIsOpenSingup={setIsOpenSingup}
              modalClose={modalClose}
            />
            <div>
              <h2>Profile page</h2>
            </div>
          </div>
          {cartVisiable && (
            <div className="col-2">
              <CartList getTotalOfCart={getTotal} />
            </div>
          )}
        </div>

        <div className="profilr-outer">
          <div className="row">
            <div className="col-lg-4 profilr-main">
              <div className="profilr-left">
                <div className="profilr-image">
                  <div className="profile-image-inner">
                    <img src="images/1.jpg" />
                    <h5>Yashpal Singh</h5>
                    <h6>yshse786@gmail.com</h6>
                    <h6>7417109998</h6>
                    <h6>Active</h6>
                  </div>

                  <div className="profile-link">
                    <div className="profilr-link-inner">
                      <ul>
                        <li><a className={tabSelected == "myprofile" ? "active" : ""} href="#" onClick={() => setTabSelected("myprofile")}>My Profile</a></li>
                        <li><a className={tabSelected == "myorder" ? "active" : ""} href="#" onClick={() => setTabSelected("myorder")}>My Orders</a></li>
                        <li><a className={tabSelected == "changepassword" ? "active" : ""} href="#" onClick={() => setTabSelected("changepassword")}>Change Password</a></li>
                        <li><a className={tabSelected == "updateemail" ? "active" : ""} href="#" onClick={() => setTabSelected("updateemail")}>Update Email / Mobile No.</a></li>
                        <li><a className={tabSelected == "support" ? "active" : ""} href="#" onClick={() => setTabSelected("support")}>Support</a></li>
                        <li><a className={tabSelected == "referral" ? "active" : ""} href="#" onClick={() => setTabSelected("referral")}>Referral</a></li>
                        {/*<li><a className={tabSelected == "signout" ? "active" : ""} href="#" onClick={() => setTabSelected("signout")}>Sign Out</a></li>
                        <li><a className={tabSelected == "langauge" ? "active" : ""} href="#" onClick={() => setTabSelected("langauge")}>Langauge English</a></li>
                      */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="profile-main">
                <div className="profile-right">
                  {tabSelected == "myprofile" &&  <Personal/> }
                  {tabSelected == "myorder"  &&   <MyOrder/> } 
                   {tabSelected == "changepassword" &&  <ChangePassword/> }
                   {tabSelected == "updateemail" &&  <UpdateMobileEmail/> }
                   {tabSelected == "support" &&  <Support/> }
                   {tabSelected == "referral" &&  <div className="referral">dfgsdfgdfg</div>}
                  {/*} {tabSelected == "signout" &&  <div className="signout">change password</div> }
                   {tabSelected == "langauge" &&  <div className="langauge">dfgdfgdfg</div> } */}
                 
                 
                  
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
      <Toaster />
    </>
  )
}

export default Profile