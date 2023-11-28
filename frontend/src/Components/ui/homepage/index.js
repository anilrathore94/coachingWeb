import React, { useState, useEffect } from "react";
import Banner from "../../../customComponent/Banner";
import Footer from "../../../comman/Footer";
import PromotionAndOffer from "./promotion&Offer";
import {
  bookListGet,
  getPromotionAndOffer,
  posterListGet,
  trendingTitleAndImages,
} from "../../../services/book.service";
import Category from "./categorylist";
import BestSeller from "./bestseller";
import Authentication from "../auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SocialIcons from "./socialmedia";
import CartList from "./AddCart/CartList";
import FeedbackForm from "../support";
import NewsletterSubscription from "./UserFeedback";
import Slidehow from "./Slideshow/Slideshow";
import Header from "../../../comman/Header";
import { getAllSocialMediaUrl } from "../../../services/socialmedia.service"

const Home = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSingup, setIsOpenSingup] = useState(false);
  const [posterList, setPosterList] = useState([]);
  const [cartVisiable, setCartVisiable] = useState(false);
  const [customerCare, setCustomerCare] = useState(false);
  const [newsLater, setNewsLater] = useState(false);
  const [noOfCart, setNoOfcart] = useState(0)
  const [bookList, setBookList] = useState([])
  const [promotionAndOffer, setPromotionAndOffer] = useState([])
  const [trendingTitleImages, setTrendingTitleImages] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    getPoster();
    getBooks()
    getPromotionAndIffer()
    getTitleImages()
  }, []);
  const getBooks = async () => {
    const result = await bookListGet()
    if (result.status && result.data) {
      setBookList(result.data)
    }
  }
  const getTitleImages = async () => {
    const result = await trendingTitleAndImages()
    if (result.status) {
      setTrendingTitleImages(result.data)
    }
  }
  const getPromotionAndIffer = async () => {
    let result = await getPromotionAndOffer()
    if (result.status) {
      setPromotionAndOffer(result.data)
    }
  }
  const getTotal = (number) => {
    setNoOfcart(number)
  }
  const getPoster = async () => {
    const result = await posterListGet();
    if (result.status && result.data) {
      setPosterList(result.data);
    }
  };

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
  return (
    
      <div className="container-fluid">
        <div className="row">
          <div className={"col-12"}>
            <div className="row">
              <div className={cartVisiable ? "col-10" : "col-12"}>
                <Slidehow list={["asdadadas", "sdadadaddas", "dsadsasad"]} loginPopup={handleOpenDialogLogin} signupPopup={handleOpenDialogSingup} />
                <Header cartVisibility={cartVisibility} />

                <div style={{ height: "127px" }}></div>

                <p className="mt10 carebutt download-C1">
                  <a
                    onClick={() => {
                      setNewsLater(!newsLater);
                      setCustomerCare(false);
                    }}
                    className="pup-login"
                  >
                    <img src="images/newsletter.jpg" />
                  </a>
                </p>
                <p
                  className="mt100 carebutt download-C"
                  style={{ marginTop: "0px", height: "0px" }}
                >
                  <a
                    onClick={() => {
                      setNewsLater(false);
                      setCustomerCare(!customerCare);
                    }}
                    className="pup-login"
                  >
                    <img src="images/support.jpg" />
                  </a>
                  {newsLater && <NewsletterSubscription />}
                </p>

                <div className="banner">
                  <div className="mid">
                    <div className="banner_left">
                      <div id="banner">
                        <Banner list={posterList} />
                      </div>
                    </div>
                            <Category type={"banner_right"} page={"books"}  />
                    <div className="cb"></div>
                  </div>
                  <Authentication
                    isOpenLogin={isOpenLogin}
                    isOpenSingup={isOpenSingup}
                    setIsOpenLogin={setIsOpenLogin}
                    setIsOpenSingup={setIsOpenSingup}
                    modalClose={modalClose}
                  />
                  <FeedbackForm isOpenFeedback={customerCare} />
                </div>

                <div className="cb"></div>

                <SocialIcons  />
                <BestSeller type="NEW ARRIVALS" books={bookList} sideImages={trendingTitleImages} />
                <BestSeller type="BEST SELLERS" books={bookList} sideImages={trendingTitleImages} />
                <BestSeller type="UPCOMING EXAM BOOKS" books={bookList} sideImages={trendingTitleImages} />

                <PromotionAndOffer promotionoffer={promotionAndOffer} />
              </div>
              {cartVisiable ? (
                <div className="col-2 cart-right">
                  <CartList getTotalOfCart={getTotal} />
                </div>
              )
                : <></>
              }
            </div>
        <Footer /> 

          </div>
        </div>
        <Toaster />
      </div> 
  );
};

export default Home;
