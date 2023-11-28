import React, {useState, useEffect} from "react";
const WeeklyCurrent = (props)=>{
    return(
        <div className="current-affier-show">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
            <div className="plan-fr">
              PLAN
            </div>
          </div>
       </div>
       {console.log("sdjhsdjhvsdhsdfsd",props)}
  
  {/*======================== end ==============================*/}
  {
  props && props.data.map((item,i)=>{
    return <div className="row cur-inn">
        <div className="col-lg-2">
          <div className="date-cu">
            <p>{item._id} </p>
          </div>
        </div>
          {
            item.documents.map((val,i)=>{
             return  <div className="col-lg-2">
          <div className="curr-but">
            <a href="https://ab2software.com/sample.pdf" className="current-img" download>
              <p>{val.fileType.toUpperCase()} <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
            </a>
          </div>
        </div>
            })
          }
        </div>
  })
}
  
  
  
  
        
      </div>
    )
}
export default WeeklyCurrent;