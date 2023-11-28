import { useEffect, useState } from "react"
import { PosterAdd } from "../services/book.service"
import { HotToaster } from "../utils/Toaster"
import { NewsAdd } from "../services/news.service"
import { ResultFunction } from "../comman/resultFunction"
import { addAdminInformation, updateAdminInformation } from "../services/admin.service"

const UpdateAdminInfo = (props) =>{
    const [emailId,setEmailId] = useState("")
    const [mobileNum,setMobileNum] = useState([])
    const [mbLength,setMbLength] = useState(0)
    const [address,setAddress] = useState("")
    const [id,setId] = useState("")


    useEffect(()=>{
      console.log("prospropsoprpsors",props)
            if(props && Object.keys(props.admindata).length>0){
                setEmailId(props.admindata.emailId)
                setAddress(props.admindata.address)
                setMobileNum(props.admindata.mobileNumber)
                setMbLength(props.admindata.mobileNumber.length-1)
                setId(props.admindata._id)
            }
    },[props])

    const handleMobileNumberChange = (e,index) => {
        console.log("targettargettarget",e.target.value,index);
        let value = e.target.value
        setMobileNum((prevMobileNumbers) => {
          const updatedMobileNumbers = [...prevMobileNumbers];
          updatedMobileNumbers[index] = value;
          return updatedMobileNumbers;
        });
    }
    const handleMob = () => {
        let html=[]
        let i=0
        for(i;i<=mbLength;i++){
            html.push(
                <div className="form-group mb-2" key={i}>
                <input
                className="form-control"
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                // value={mobileNum[i]}
                required
                onChange={(e)=>{
                    handleMobileNumberChange(e,mbLength)
                }}
              />
                  </div>

            )
        }
        return html
    }
    const handleAdminInfoChange = async() => {
        let data = {
            id:id,
            emailId:emailId,
            mobileNum:mobileNum,
            address:address
        }
        let result = await updateAdminInformation(data)
        ResultFunction(result,props.getData)
        // ResultFunction(result,props.allNews)
        // setHeading("")
        // setNews("")
    }

    return (
        <div
        class="modal"
        id="update_admininfo"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog  alert_modal" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Add Admin Info
              </h5>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
              <div className="form-group mb-3">
                     <input
                        className="form-control"
                        type="email"
                        required
                        placeholder="Email Address"
                        name="heading"
                        value={emailId}
                        onChange={(e)=>{setEmailId(e.target.value)}}
                      />
                    </div>
                    
                    {handleMob()}
                      {/* <input
                        className="form-control"
                        type="text"
                        placeholder="Mobile Number"
                        name="mobile"
                        required
                        value={mobileNum}
                        onChange={(e)=>{
                            handleMobileNumberChange(e)
                        }}
                      /> */}
                      <div className="form-group mb-1">
                        <button type="button" className="btn btn-primary" onClick={()=>{
                            setMbLength(mbLength+1)
                        }}>Add more +</button>
                      </div>
                <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Address"
                        name="address"
                        required
                        value={address}
                        onChange={(e)=>{
                            setAddress(e.target.value)
                        }}
                      />
                    </div>
                <button
                  class="btn btn-s btn-indigo btn-block w-100"
                  data-bs-dismiss="modal"
                  type="button"
                  onClick={() => handleAdminInfoChange()}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
            )
}
export default UpdateAdminInfo