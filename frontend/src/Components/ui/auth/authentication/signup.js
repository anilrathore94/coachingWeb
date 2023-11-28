import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { userSignUp } from "../../../../services/auth.service";
import { HotToaster } from "../../../../utils/Toaster";
import { Country, State, City }  from 'country-state-city';
const Signup  = (props) => {
    const [isOpenSingup, setIsOpenSingup] = useState(false);
    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [signId, setSignId] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [pMode, setPMode] = useState("")
    const [state, setState] = useState("")

    useEffect(()=>{
        setIsOpenSingup(props.isOpenSingup)
    },[props])
    
      const handleCloseDialogSingup = () => {
        props.modalClose("signup",false)
        setIsOpenSingup(false);
      };
      const handleChange = (e) => {
            let {name,value} = e.target
            switch(name){
                case "name":
                    return setName(value);
                case "mobile":
                    return setMobileNumber(value);
                case "lemail":
                    return setSignId(value);
                case "password":
                    return setPassword(value);
                case "cpassword":
                    return setCPassword(value);
                case "prepration_mode":
                    return setPMode(value);
                case "txtrstate":
                    return setState(value);
                default:   
            }
      }
      const EmpytState = () => {
        setName("");
        setMobileNumber("");
        setSignId("");
        setPassword("");
        setCPassword("");
        setPMode("");
        setState("");
      }

      const handleSignup = async(e) => {
        e.preventDefault()
        let data = {
            name:name,
            signId:signId,
            password:password,
            state:state,
            pMode:pMode
        }
        const result = await userSignUp(data)
        HotToaster(result.status,result.message)
        if(result.status){
            setIsOpenSingup(false);
            EmpytState()
        }
      }
      const signUpModal = () => {
        props.modalClose("login",true)
        props.modalClose("signup",false)
      }
    return (
        <Dialog open={isOpenSingup} onClose={handleCloseDialogSingup}>
        {/* <DialogTitle>Dialog Title</DialogTitle> */}
        <DialogActions>
          <Button onClick={handleCloseDialogSingup}>Close</Button>
        </DialogActions>
        
        <DialogContent>
          
            <div id="fancybox-wrap" className="loginpop fl borR log-img">
              <div className="left form-style rs bgw">
                <div className="ab-image" >
                  <div className="ab-image-inner"></div>
                </div>
                <div className="w100 fl">
                  <form  >
                    <div>
                      <div className="log-top">
                        <div className="log-top-inner">
                          <h3>Welcome! Signup here.</h3>
                          <p>To signup, please enter your details below.</p>
                        </div>
                      </div>
                      <div className="w100 fl">
                        <div className="w100 fl signup-name log-in">
                          <b className="pb5 fl mr10 w100">
                            <input
                              type="text"
                              title="name"
                              required
                              className="w100"
                              id="name"
                              name="name"
                              value={name}
                              onChange={handleChange}
                              placeholder="Name"
                            />
                          </b>
                        </div>
                        {/* <div className="w33 fl signup-mob log-in">
                          <b className="pb5 fl w100 ">
                            <input
                              type="tel"
                              title="Mobile Number"
                              required
                              className="w100"
                              id="mobile"
                              name="mobile"
                              placeholder="Mobile Number"
                              value={mobileNumber}
                              onChange={handleChange}
                            />
                          </b>
                        </div> */}
                      </div>
                      <div className="w100 fl">
                        <span className="pb5 fl log-in w100 ">
                          <b className="pb5 fl w100">
                            <input
                              type="email"
                              title="Email Address"
                              required
                              className="w100"
                              id="lemail"
                              name="lemail"
                              placeholder="E-mail / Mobile"
                              value={signId}
                              onChange={handleChange}
                            />
                          </b>
                        </span>
                      </div>
                      <div className="w100 fl">
                        <div className="w33 fl signup-pass log-in">
                          <b className="pb5 fl mr10 w100">
                            <input
                              type="password"
                              title="Password"
                              required
                              className="w100"
                              id="pass"
                              name="password"
                              placeholder="Password"
                              value={password}
                              onChange={handleChange}
                            />
                          </b>
                        </div>
                        <div className="w33 fl signup-cpass log-in">
                          <b className="pb5 fl w100 ">
                            <input
                              type="password"
                              title="Conform Password"
                              required
                              className="w100"
                              id="cpass"
                              name="cpassword"
                              placeholder="Conform Password"
                              value={cPassword}
                              onChange={handleChange}
                            />
                          </b>
                        </div>
                      </div>
                      <div className="w100 fl">
                        {/* <div className="w33 fl signup-name log-in">
                          <b className="pb5 fl mr10 w100">
                            <select id="prepration_mode" name="prepration_mode" value={pMode}
                            onChange={handleChange}
                            >
                              <option value=""> -- Preparation Mode --</option>
                              <option value="Hindi">Hindi</option>
                              <option value="English">English</option>
                            </select>
                          </b>
                        </div> */}
                        <div className="w33 fl signup-mob">
                          <b className="pb5 fl w100 ">
                          <input
                              type="tel"
                              title="Mobile No."
                              required
                              className="w100"
                              id="mon"
                              name="mob"
                              placeholder="Mobile No."                             
                            />
                          </b>
                        </div>
                        <div className="w33 fl signup-mob">
                          <b className="pb5 fl w100 ">
                            <select name="txtrstate" id="txtrstate" value={state}
                            onChange={handleChange}
                            >
                              <option value=""> --- Select State --- </option>
                              {State.getStatesOfCountry("IN").map((state,index)=>{
                                return <option value={state.name}>{state.name}</option>
                              })}
                              {/* Add other state options */}
                            </select>
                          </b>
                        </div>
                      </div>
                      <div className="textlink w100 fl">
                        <div className="checkbox">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            value="1"
                          />
                          <label htmlFor="remember">I agree with </label>
                        </div>
                        &nbsp; | &nbsp;{" "}
                        <a href="pop-forgot-password.html">
                          Terms &amp; Conditions.
                        </a>
                      </div>
                      <div
                        style={{ textAlign: "center" }}
                        className="red"
                        id="lmsg"
                      ></div>
                      <div className="w100 fl">
                        <b className="pb5 fl ar">
                          <input
                            type="submit"
                            value="Register Now"
                            className="logpop " 
                            onClick={handleSignup}
                          />
                          <span className="fa-right">
                            {" "}
                            {/* <FontAwesomeIcon icon={faLongArrowRight} /> */}
                          </span>
                        </b>
                      </div>
                      <p className="notemsg w100 fl">
                        If you already have an account, please{" "}
                        <span  onClick={signUpModal}>
                         <u><a >LOGIN HERE</a></u>
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          
        </DialogContent>
        
      </Dialog>
    )
}
export default Signup