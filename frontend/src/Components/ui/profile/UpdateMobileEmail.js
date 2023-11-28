import React, {useState, useEffect} from "react";

const UpdateMobileEmail = () =>{
    return(
        <div className="change-password">
        <div className="change-pass-inner">

            <div className="change-ins">
                <h3>Update Mobile and Email</h3>
               <div className="change-form">
                  <form>
                         <label>Email</label>
                         <input type="email" name="email" />
                         <label>Mobile Number</label>
                         <input type="tel" name="mobile" />
                         <input type="submit" name="submit" value="submit" className="sub-but"/>
                  </form>
               </div>
            </div>
           
        </div>
    </div>
    );
};
export default UpdateMobileEmail;