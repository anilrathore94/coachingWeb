import React, { useState, useEffect } from "react"; 

const Personal = () => {
  
 
  return (
     
     <div className="profile-main-clint">
       <div className="profile-inner">
          <div className="profile-form">
                <h3>Edit Profile Here</h3>
                <div className="form-pro">
                   <form>
                      <div className="row">
                          <div className="col-lg-6">
                               <label className="label-width">First Name</label>
                               <input type="text" name="fname" className="inhight"></input>
                          </div>
                          <div className="col-lg-6">
                               <label className="label-width" >Last Name</label>
                               <input type="text" name="lname" className="inhight"></input>
                          </div>
                      </div>
                       
                      <div className="row">
                          <div className="col-lg-6 lab-gen">
                               <label className="label-width" >Gender</label>
                               <input type="radio" name="gender" value="Male"/>
                               <label>Male</label>
                               <input type="radio" name="gender" value="Female"/>
                               <label>Female</label>
                               <input type="radio" name="gender" value="Other"/>
                               <label>Other</label>
                          </div>
                          <div className="col-lg-6">
                               <label className="label-width">Profile Image</label>
                               <input type="file" name="image" ></input>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-lg-6">
                               <label className="label-width" >Mobile No.</label>
                               <input type="tel" name="mobile" className="inhight" />
                          </div>
                          <div className="col-lg-6">
                               <label className="label-width">DOB</label>
                               <input type="date" name="date" className="inhight"></input>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-lg-6">
                               <label className="label-width" >Address 1</label>
                               <input type="text" name="address1" className="inhight"/>
                          </div>
                          <div className="col-lg-6">
                               <label className="label-width">Address 2</label>
                               <input type="text" name="address2" className="inhight"></input>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-lg-6">
                               <label className="label-width" >City</label>
                               <input type="text" name="city" className="inhight"/>
                          </div>
                          <div className="col-lg-6">
                               <label className="label-width">State</label>
                               <input type="text" name="state" className="inhight"></input>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-lg-6">
                               <label className="label-width" >Countary</label>
                               <input type="text" name="countart" className="inhight"/>
                          </div>
                          <div className="col-lg-6">
                               <label className="label-width">Pincode</label>
                               <input type="text" name="pincode" className="inhight"></input>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-lg-12 sub">
                              <input type="submit" value="submit" name="submit"/>
                          </div>
                      </div>

                      </form>
                </div>
          </div>
       </div>
     </div>
    
  );
};

export default Personal;
