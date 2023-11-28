import React,{useState, useEffect} from "react";
import Header from "../../comman/Header";
import Footer from "../../comman/Footer";
import HindiEnglish from "./HindiEnglish";
import EnglishHindi from "./Form";
import { Toaster } from "react-hot-toast";
const DataTranslate =() =>{
    const [tabSelected, setTabSelected] = useState ("Hindi to English");
    return(
        
        <>
        <div className="container-fluid">
     <div className="row">
         <div className={"col-12"}>
             <Header />
             <div className="current-aff-main">
                 <div className="current-title">
                     <h4>Data Translate</h4>
                 </div>
                 <div className="current-broadcum">
                     <a href="#">Home<span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                     <a href="#">Data Translate</a>
                 </div>
                 <div className="current-mm">
                 <div className="row current-inner">                        
                     <div className="col-lg-2 current-left">
                     <div className="current-name">Data Translate</div>
                         <div className="current-link">
                             <div className="current-link-inner">
                                 <ul>
                                     <li><a className={tabSelected == "Hindi to English" ? "active" : ""} href="#" onClick={() => setTabSelected("Hindi to English")}>Hindi to English</a></li>
                                     <li><a className={tabSelected == "English to Hindi" ? "active" : ""} href="#" onClick={() => setTabSelected("English to Hindi")}>English to Hindi</a></li>
                                    

                                 </ul>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-10 current-right">
                         
                         <div className="current-main">
                             <div className="current-right">
                              <EnglishHindi type={tabSelected}/>
                              {/* {tabSelected == "englishhindi" && <HindiEnglish/>}  */}
                             
                                 

                             </div>
                         </div>
                     </div>
                     </div>
                 </div>
             </div>
             <Footer />
         </div>
     </div>
     <Toaster/>
 </div>

 </>
    )
}
export default DataTranslate