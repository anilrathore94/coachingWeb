import { HotToaster } from "../utils/Toaster"

export const ResultFunction = (result,fun,state) => {
    if(result.status){
        HotToaster(result.status,result.message)
        fun()
      }
      else{
        HotToaster(result.status,result.message)
      }
}