import moment from "moment"
import { imageUrl } from "../../services/dataurl";
const Papers = (props) => {
    console.log("propspropspropsorps",props);
    return(
        <>
        <ul className="row ebok-ul" style={{display:"flex",flexDirection:"row"}}>
            <li className="col-lg-3" tabIndex="-1" style={{ display: 'inline-block',fontSize:"bold" }}>
                <div className="papers">
                    Date
                </div>
                </li>
                <li className="col-lg-3" tabIndex="-1" style={{ display: 'inline-block' }}>
                <div className="papers">
                    Exam Type
                </div>
                </li>
                <li className="col-lg-3" tabIndex="-1" style={{ display: 'inline-block' }}>
                <div className="papers">
                    Subject
                </div>
                </li>
                <li className="col-lg-3" tabIndex="-1" style={{ display: 'inline-block' }}>
                <div className="papers">
                    File
                </div>
                </li>
                </ul>


        {/* <div className="row" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <div className="col-md-2">
            Subject/Topic
        </div>
        <div className="col-md-2">
            Subject/Topic
        </div>
        <div className="col-md-2">
            Subject/Topic
        </div><div className="col-md-2">
            Subject/Topic
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <div className="plan-fr">
            PLAN
          </div>
        </div>
     </div> */}
        {
            props && props.data.map((item,i)=>{
                return <div className="row cur-inn">
                    <div className="col-lg-12" style={{display:"flex",justifyContent:"space-between"}}>
                    <div className="date-cu">
                        <p>{moment(item.createdAt).format("DD-MM-YYYY")}</p>
                    </div>
                    <div className="date-cu">
                        <p>{item.examType} </p>
                    </div>
                    <div className="date-cu">
                        <p>{item.subject} </p>
                    </div>
                    <div className="date-cu">
                        <a href={imageUrl+item.file} className="btn btn-primary" target="_blank">
                        <p>{item.file} </p>
                        </a>
                    </div>
                    </div>
             {/* <div className="col-lg-2">
          <div className="curr-but">
          <a href="https://ab2software.com/sample.pdf" className="current-img" download>
              <p>{item.subject} <span><i class="fa fa-download" aria-hidden="true"></i></span></p>
            </a>
          </div>
        </div> */}
        </div>
  })
}
        </>
    )
}

export default Papers