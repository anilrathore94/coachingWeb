import { useEffect } from "react"
import { BookDetailsById, addBookToCart } from "../../../../services/book.service"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { imageUrl } from "../../../../services/dataurl"
import { HotToaster } from "../../../../utils/Toaster"

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState([])
  const params = useParams()
  useEffect(()=>{
      BookGet()
  },[])
  const BookGet = async() => {
    let data = {
      id:params.id
    }
      let result = await BookDetailsById(data)
    if(result.status){
       setBookDetails(result.data)
      }
  }
  const addToCart = async(item) => {
    let data = {
      bookId:item._id
    }
    let result = await addBookToCart(data)
    HotToaster(result.status,result.message)
}
    return(
        <>
           <div className="cart-main">
        <div className="container">
         <div className="broadcum">
          {console.log("bookDetailsbookDetails",bookDetails)}
             <a href="#">
                Home <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
             </a>
             <a href="#">
             MISCELLANEOUS BOOKS <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
             </a>
             <a href="#">
             {bookDetails && bookDetails.length>0 && bookDetails[0].bookName}
             </a>
         </div>
          <div className="row">
            <div className="col-lg-12 cart-left">
              <div className="cart-left-main">
                <div className="cart-top-contant">
                  <div className="cart-page-title">
                    {/* <h2>Shopping Cart</h2> */}
                    {/* design roted */}
                      {bookDetails && bookDetails.length>0 &&
                      <> 
                      <div className="cart-item-main">
                          <div className="row">
                              <div className="col-lg-4 cart-img-main">
                                 <div className="cart-img">
                                     <img src={imageUrl+bookDetails[0].bookIcon}/>
                                 </div>
                              </div>
                              <div className="col-lg-8 cart-con-main">
                                   <div className="cart-con">
                                        <h4>{bookDetails[0].bookName}</h4>
                                        <div className="dis">
                                             <span>{bookDetails[0].discount} off</span>
                                        </div>
                                        <div className="price">
                                            <span className="sale-price"><i class="fa fa-inr" aria-hidden="true"></i>{bookDetails[0].sellingPrice}</span>
                                            <span>M.R.P. : <del><i class="fa fa-inr" aria-hidden="true"></i>{bookDetails[0].MRP}</del></span>
                                        </div>
                                        <div className="auther">
                                           <span>By : {bookDetails[0].author}</span> 
                                        </div>
                                        <div className="book-important-info">
                                           <p> <strong>Code : </strong> {bookDetails[0].bookCode}</p>
                                           <p> <strong>Language : </strong> {bookDetails[0].language}</p>
                                           <p> <strong>Format : </strong> Paper Back</p>
                                           <p> <strong>ISBN : </strong> {bookDetails[0].ISBN}</p>
                                           {/* <p> <strong>Stock : </strong>  In Stock</p> */}
                                           <p> <strong>Publishing Year : </strong> 2022</p>
                                        </div>

                                        <div className="book-button">
                                             <div className="row">
                                                <div className="col-lg-4">
                                                      <div className="buy-but-main">
                                                          <a href="#" className="cart-but" onClick={()=>addToCart(bookDetails[0])}>
                                                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                             ADD To Cart
                                                          </a>
                                                      </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="buy-but-main">
                                                           <a href="#" className="cart-buy">
                                                              Buy Now
                                                           </a>
                                                        </div>
                                                </div>
                                                <div className="col-lg-4">
                                                     <div className="buy-but-main">
                                                     <a href="#" className="cart-buy">
                                                                   Book Contant
                                                           </a>  
                                                        </div>
                                                </div>
                                             </div>
                                        </div>
                                        
                                   </div>
                              </div>
                              {bookDetails[0].bookFilesData.length>0 &&
                                <div className="col-lg-8 cart-con-main">
                                  {bookDetails[0].bookFilesData.map((val,i)=>
                                    <div>
                                  <h4>{val.fileType.toUpperCase()}</h4>
                                  </div>)}
                              </div>}
                          </div>
                      </div>

                       <div className="book-details">
                           <div className="row">
                              <div className="col-lg-12">
                                  <h5>Features</h5>
                                  <p>{bookDetails[0].features}</p>
                              </div>
                           </div>
                          
                       </div>
                       </>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default BookDetails