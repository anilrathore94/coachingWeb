import { useEffect, useState } from "react"
import { PosterAdd } from "../services/book.service"
import { HotToaster } from "../utils/Toaster"

const AddPoster = (props) =>{
    const [categoryList,setCategoryList] = useState([])
    const [posterIcon,setPosterIcon] = useState("")
    const [encodedIcon,setEncodedIcon] = useState("")
    const [categoryId,setCategoryId] = useState("")

    useEffect(()=>{
        if(props && props.categoryList){
            setCategoryList(props.categoryList)
        }

    },[props])

    const handlePosterImage = (e) => {
        let image = e.target.files[0]
        if(image){
            const imgata = URL.createObjectURL(e.target.files[0]);
            setPosterIcon(image)
            setEncodedIcon(imgata)
          }
          else{
            setPosterIcon("")
            setEncodedIcon("")
          }
        
    }
    const handlePosterChange = async() => {
        let formdata = new FormData()
            formdata.append("categoryId",categoryId)
            formdata.append("posterIcon",posterIcon)
            let result = await PosterAdd(formdata)
            resultfunction(result)
    }
    const resultfunction = (result) => {
        if(result.status){
          HotToaster(result.status,result.message)
          props.callingPosterApiAgainAfterAddNewOne()
          setCategoryId("")
        }
        else{
          HotToaster(result.status,result.message)
        //   setCategoryName("")
        }
      }

    return (
        <div
        class="modal"
        id="add_poster"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog  alert_modal" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Add poster
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
                {console.log("handlePosterChange",categoryList)}
                        <select 
                        className="form-control"
                        onChange={(e)=>{setCategoryId(e.target.value)}}
                        >
                            <option value="">Select</option>
                            {categoryList.length>0 &&
                            categoryList.map((category,i)=>{
                                return <option value={category._id}>{category.categoryName}</option>
                            })}
                        </select>
                    </div>
                <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="file"
                        placeholder="poster image"
                        name="poster"
                        onChange={handlePosterImage}
                      />
                      <div className="form-control">
                        <img src={encodedIcon} alt="no image choosed" width="100px" height="100px"/>
                      </div>
                    </div>
                <button
                  class="btn btn-s btn-indigo btn-block w-100"
                  data-bs-dismiss="modal"
                  type="button"
                  onClick={() => handlePosterChange()}
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
export default AddPoster