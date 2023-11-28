import { useEffect, useState } from "react"
import  {ResultFunction} from "../comman/resultFunction"
import { addBookFiles } from "../services/book.service"

export const AddBookFiles = (props) => {
    const[file,setFile] = useState("")
    const[files,setFiles] = useState(["ppt","pdf","pptPdf","editable"])
    const[fileType,setFileType] = useState("")
    const [bookList, setBookList] = useState([])
    const [bookId, setBookId] = useState([])
    useEffect(()=>{
      if(props && props.bookList){
        setBookList(props.bookList)
      }
    },[props])

    const handleFileChange = (e) => {
      let pdf = e.target.files[0]
        setFile(pdf)
  }

  const handleSubmit = async() => {
    const formdata = new FormData()
    formdata.append("bookId",bookId)
    formdata.append("file",file)
    formdata.append("fileType",fileType)
    let result = await addBookFiles(formdata)
    ResultFunction(result,props.bookFiles)
  }

  return (
    <div
    class="modal"
    id="add_bookFiles"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog  alert_modal" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">
            Add Files
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
                  <label className="small mb-1">Select Book</label>
                  <select
                   class="form-control  form-control-solid"
                   onChange={(e)=>setBookId(e.target.value)}>
                    <option>Select</option>
                    {
                      bookList.map((val,i)=>{
                        console.log("bsdjfjsdsfsdfsdf",val)
                        return <option value={val._id} key={i}>{val.bookName}</option>
                      })
                    }
                  </select>
                </div>
              <div className="form-group mb-3">
                  <label className="small mb-1">Select File Type</label>
                  <select
                   class="form-control  form-control-solid"
                   onChange={(e)=>setFileType(e.target.value)}>
                    <option>Select</option>
                    {
                      files.map((val,i)=>{
                        return <option value={val} key={i}>{val}</option>
                      })
                    }
                  </select>
                </div>
          <div className="form-group mb-3">
                  <label className="small mb-1">file </label>
                  <input
                    class="form-control  form-control-solid"
                    type="file"
                    name="file"
                    // value={bookIcon}
                    placeholder=""
                    onChange={handleFileChange}
                  />
                </div>
            <button
              class="btn btn-s btn-indigo btn-block w-100"
              data-bs-dismiss="modal"
              type="button"
              onClick={() => handleSubmit()}
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

export default AddBookFiles