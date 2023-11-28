import { useState } from "react"
import hasEmptyValue from "../validations/Category"
import { HotToaster } from "../utils/Toaster"
import  {ResultFunction} from "../comman/resultFunction"
import { CategoryAdd } from "../services/book.service"

export const AddCategory = (props) => {
  const [categoryName,setCategoryName] = useState()

  const handleCategoryAdd = async() => {
    let validation = hasEmptyValue("category",categoryName)
   
    if(validation !== undefined ){
      HotToaster(false,validation)
      return false
    }
    let data = {
      categoryName:categoryName
    }
    let result = await CategoryAdd(data)
    console.log("resultresult",result)
    ResultFunction(result,props.categoryList,setCategoryName)
  }

  return (
    <div
    class="modal"
    id="add_category"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog  alert_modal" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">
            Add category
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
            <div className="form-group mb-3 ">
              <label className="small mb-1"> Category Name </label>
              <input
                class="form-control  form-control-solid"
                type="text"
                value={categoryName}
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <button
              class="btn btn-s btn-indigo btn-block w-100"
              data-bs-dismiss="modal"
              type="button"
              onClick={() => handleCategoryAdd()}
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

export default AddCategory