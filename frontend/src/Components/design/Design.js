import React from "react";
import { imageUrl } from "../../services/dataurl";

const Design =(props) =>{
    return (
        <>
           <div className="row design-main">
           <div class="special-con"><div class="special-sub"><p> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p></div></div>
             {props?.design.length>0 && props.design.map((item,i)=>{
                return <div className="col-lg-3">
                <div className="design-sub">
                    <div className="design-img">
                    <img
                        src={imageUrl+item.icon}
                        alt="img"
                        
                        />
                    </div>
                    <div className="design-file">
                    <a href="https://ab2software.com/sample.pdf" className="designa-img" download>
                        <p>EDITABLE ZIP FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
                    </a>
                    </div>
                </div>
             </div>
             })
              }
             {/* <div className="col-lg-3">
                <div className="design-sub">
                    <div className="design-img">
                    <img
                        src="http://localhost:8002/uploads/274_upkar-website-1437%20(247x391%20pix).jpg"
                        alt="img"
                        
                        />
                    </div>
                    <div className="design-file">
                    <a href="https://ab2software.com/sample.pdf" className="designa-img" download>
                        <p>EDITABLE ZIP FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
                    </a>
                    </div>
                </div>
             </div> 
             <div className="col-lg-3">
                <div className="design-sub">
                    <div className="design-img">
                    <img
                        src="http://localhost:8002/uploads/274_upkar-website-1437%20(247x391%20pix).jpg"
                        alt="img"
                        
                        />
                    </div>
                    <div className="design-file">
                    <a href="https://ab2software.com/sample.pdf" className="designa-img" download>
                        <p>EDITABLE ZIP FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
                    </a>
                    </div>
                </div>
             </div> 
             <div className="col-lg-3">
                <div className="design-sub">
                    <div className="design-img">
                    <img
                        src="http://localhost:8002/uploads/274_upkar-website-1437%20(247x391%20pix).jpg"
                        alt="img"
                        
                        />
                    </div>
                    <div className="design-file">
                    <a href="https://ab2software.com/sample.pdf" className="designa-img" download>
                        <p>EDITABLE ZIP FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
                    </a>
                    </div>
                </div>
             </div>  */}
           </div>           
        </>
    )
}
export default Design
