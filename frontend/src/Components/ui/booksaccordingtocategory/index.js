import { Toaster } from "react-hot-toast"
import Footer from "../../../comman/Footer"
import Header from "../../../comman/Header"
import { useEffect, useState } from "react"
import SlideShow from "../homepage/Slideshow/Slideshow"
import Authentication from "../auth"
import CartList from "./../homepage/AddCart/CartList"
import Category from "../homepage/categorylist"
import CategoryPage from "./categorypage"
import BestSeller from "../homepage/bestseller"
import { getBooksAccordingToCategory } from "../../../services/book.service"
import { useParams } from "react-router-dom"

const BooksCategory = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenSingup, setIsOpenSingup] = useState(false);
    const [cartVisiable, setCartVisiable] = useState(false);
    const [getTotal,setGetTotal] = useState(0)
    const [books,setBooks] = useState([])
    const params = useParams()
    const handleOpenDialogLogin = () => {
      setIsOpenLogin(true);
    };

    useEffect(()=>{
      getBooksByCategory()
    },[params.id])
  
    const handleOpenDialogSingup = () => {
      setIsOpenSingup(true);
    };
    const modalClose = (page, boolean) => {
      if (page == "login") {
        setIsOpenLogin(boolean);
      } else {
        setIsOpenSingup(boolean);
      }
    };
    const cartVisibility = (e) => {
      setCartVisiable(!cartVisiable)
  }
  const getBooksByCategory = async() => {
    const data = {
      categoryId:params.id
    }
    const result = await getBooksAccordingToCategory(data)
    if(result.status){
      setBooks(result.data)
    }
  }
    return(
        <>
        <div className="container-fluid">
        <div className="row">
          <div className={cartVisiable ? "col-10" : "col-12"}>
        <SlideShow list={["asdadadas", "sdadadaddas", "dsadsasad"]} loginPopup = {handleOpenDialogLogin} signupPopup = {handleOpenDialogSingup}/>
        <Header cartVisibility={cartVisibility}/>
        <Authentication
                isOpenLogin={isOpenLogin}
                isOpenSingup={isOpenSingup}
                setIsOpenLogin={setIsOpenLogin}
                setIsOpenSingup={setIsOpenSingup}
                modalClose={modalClose}
              />
              <div>
        </div>
        </div>
        {cartVisiable && (
            <div className="col-2">
              <CartList getTotalOfCart = {getTotal} />
            </div>
          )}
        </div>
        </div>
        <div className="row" style={{display:"flex"}}>
        <div className="col-lg-3">
          <Category type={"category_left"} page={"/books"} width={"100%"}/>
        </div>
        <div className="col-lg-8">
          <BestSeller books={books} type={"ebooks"} />
        </div>
        </div>
        <Footer/>
        <Toaster/>
        </>
    )
}

export default BooksCategory