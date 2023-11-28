import { Toaster } from "react-hot-toast"
import Footer from "../../../comman/Footer"
import Header from "../../../comman/Header"
import BookSection from "./booksection"
import { useState } from "react"
import SlideShow from "../homepage/Slideshow/Slideshow"
import Authentication from "../auth"
import CartList from "./../homepage/AddCart/CartList"


const BookDetails = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenSingup, setIsOpenSingup] = useState(false);
    const [cartVisiable, setCartVisiable] = useState(false);
    const [getTotal,setGetTotal] = useState(0)
    const handleOpenDialogLogin = () => {
      setIsOpenLogin(true);
    };
  
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
        <BookSection/>
        </div>
        {cartVisiable && (
            <div className="col-2">
              <CartList getTotalOfCart = {getTotal} />
            </div>
          )}
        </div>
        </div>
        <Footer/>
        <Toaster/>
        </>
    )
}

export default BookDetails