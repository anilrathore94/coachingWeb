import React,{useState, useEffect} from "react";
import Header from "../../comman/Header";
import Footer from "../../comman/Footer";
import TypingForm from "./TypingForm";
import Hindi from "./Hindi";
import English from "./English";
import Sanskrit from "./Sanskrit";
import { Toaster } from "react-hot-toast";

const Typing =() =>{
    const[tabSelected, setTabSelected] = useState("hindi");
    return(
        <>
               <div className="container-fluid">
            <div className="row">
                <div className={"col-12"}>
                    <Header />
                    <div className="current-aff-main">
                        <div className="current-title">
                            <h4>Typing</h4>
                        </div>
                        <div className="current-broadcum">
                            <a href="#">Home<span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                            <a href="#">Typing</a>
                        </div>
                        <div className="current-mm">
                        <div className="row current-inner">                        
                            <div className="col-lg-2 current-left">
                            <div className="current-name">Typing</div>
                                <div className="current-link">
                                    <div className="current-link-inner">
                                        <ul>
                                            <li><a className={tabSelected == "hindi" ? "active" : ""} href="#" onClick={() => setTabSelected("hindi")}>Hindi</a></li>
                                            <li><a className={tabSelected == "english" ? "active" : ""} href="#" onClick={() => setTabSelected("english")}>English</a></li>
                                            <li><a className={tabSelected == "sanskrit" ? "active" : ""} href="#" onClick={() => setTabSelected("sanskrit")}>Sanskrit </a></li>
                                            <li><a className={tabSelected == "maths" ? "active" : ""} href="#" onClick={() => setTabSelected("maths")}>Maths</a></li>
                                            <li><a className={tabSelected == "reasoing" ? "active" : ""} href="#" onClick={() => setTabSelected("reasoing")}>Reasoing</a></li>
                                            

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 current-right">
                                
                                <div className="current-main">
                                    <div className="current-right">
                                      <TypingForm tab={tabSelected} /> 
                                     {/* {tabSelected == "reasoing" && <TypingForm/>}  
                                     {tabSelected == "hindi" && <Hindi/>} 
                                     {tabSelected == "english" && <English/>}
                                     {tabSelected == "sanskrit" && <Sanskrit/>} */}
                                     
                                        

                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
        <Toaster/>
        </>
        
    )
}
export default Typing