import React, {useState, useEffect} from "react";
const MonthlyCurrent = (props)=>{
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
{/* <div className="row cur-inn">
      <div className="col-lg-2">
        <div className="date-cu">
          <p>January 2023 </p>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF + PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>EDITABLE FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>FREE</p>
          </a>
        </div>
      </div>
      </div> */}
      {/*======================== end ==============================*/}

     {/*======================== end ==============================*/}
{/* <div className="row cur-inn">
      <div className="col-lg-2">
        <div className="date-cu">
          <p>February 2023 </p>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF + PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>EDITABLE FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>FREE</p>
          </a>
        </div>
      </div>
      </div> */}
      {/*======================== end ==============================*/}


      {/*======================== end ==============================*/}
{/* <div className="row cur-inn">
      <div className="col-lg-2">
        <div className="date-cu">
          <p>March 2023 </p>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF + PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>EDITABLE FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PREMIUM</p>
          </a>
        </div>
      </div>
      </div> */}
      {/*======================== end ==============================*/}


      {/*======================== end ==============================*/}
{/* <div className="row cur-inn">
      <div className="col-lg-2">
        <div className="date-cu">
          <p>April 2023 </p>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF + PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>EDITABLE FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PREMIUM</p>
          </a>
        </div>
      </div>
      </div> */}
      {/*======================== end ==============================*/}



      {/*======================== end ==============================*/}
{/* <div className="row cur-inn">
      <div className="col-lg-2">
        <div className="date-cu">
          <p>May 2023 </p>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF + PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>EDITABLE FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PREMIUM</p>
          </a>
        </div>
      </div>
      </div> */}
      {/*======================== end ==============================*/}


      {/*======================== end ==============================*/}
{/* <div className="row cur-inn">
      <div className="col-lg-2">
        <div className="date-cu">
          <p>June 2023 </p>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PDF + PPT <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>EDITABLE FILE <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
          </a>
        </div>
      </div>

      <div className="col-lg-2">
        <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
            <p>PREMIUM</p>
          </a>
        </div>
      </div>
      </div> */}
      {/*======================== end ==============================*/}



    
  </div>
   )
}
export default MonthlyCurrent;