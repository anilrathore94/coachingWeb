import React, {useState, useEffect} from "react";

const ChangePassword = () => {
    return(
          <div className="change-password">
              <div className="change-pass-inner">

                  <div className="change-ins">
                      <h3>Change Your Password Here</h3>
                     <div className="change-form">
                        <form>
                               <label>New Password</label>
                               <input type="password" name="password" />
                               <label>Conform Password</label>
                               <input type="password" name="repassword" />
                               <input type="submit" name="submit" value="submit" className="sub-but"/>
                        </form>
                     </div>
                  </div>
                 
              </div>
          </div>
    );
};

export default ChangePassword;