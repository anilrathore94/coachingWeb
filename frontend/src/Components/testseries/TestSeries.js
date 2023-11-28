import React, { useState, useEffect } from "react";
import Header from "../../comman/Header";
import Footer from "../../comman/Footer";
import DatePickerComponet from "../../customComponent/DatePickerComponet";
import Button from "../../customComponent/Button";
import { CategoryListGet } from "../../services/book.service";
import Category from "../ui/homepage/categorylist";
import TestContant from "./TestContant";
import { Link, useLocation, useParams } from "react-router-dom"
import { getTestSeriesAsQuery } from "../../services/testseries.service";
import SlideShow from "../ui/homepage/Slideshow/Slideshow";
import SocialIcons from "../ui/homepage/socialmedia";
import FeedbackForm from "../ui/support"
import NewsletterSubscription from "../ui/homepage/UserFeedback";

const TestSeries = () => {
    const[startDate, setStartDate] = useState(new Date());
    const[endDate, setEndDate] = useState(new Date());
    const[page,setPage] = useState("")
    const[testSeriesList,setTestSeriesList] = useState([])
    const[fileType,setFileType] = useState([])
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [customerCare, setCustomerCare] = useState(false);
    const [newsLater, setNewsLater] = useState(false);
    const [isOpenSingup, setIsOpenSingup] = useState(false);
    const location = useLocation()
    let params = useParams()

    useEffect(()=>{
        let data = {
            categoryId:params.id
        }
        getData(data)
    },[params.id])
    const getData = async(data) => { 
        let result = await getTestSeriesAsQuery(data)
        if(result.status){
            setTestSeriesList(result.data)
        }
    } 
    
  const handleOpenDialogLogin = () => {
    setIsOpenLogin(true);
  };

  const handleOpenDialogSingup = () => {
    setIsOpenSingup(true);
  };

    const handleSubmit = async() => {
        let data = {
            fromDate:startDate,
            toDate:endDate,
            fileType:fileType,
            categoryId:params.id
        }
        getData(data)
    }

    return (
        <>
                <SlideShow list={["asdadadas", "sdadadaddas", "dsadsasad"]} loginPopup={handleOpenDialogLogin} signupPopup={handleOpenDialogSingup} />
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className={"col-12"}>

                        <div className="current-aff-main">
                            <div className="current-title">
                                <h4>Test Series</h4>
                            </div>
                            <div className="current-broadcum">
                                <a href="#">Home<span><i class="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                                <a href="">Test Series</a>
                            </div>
                            <div className="current-mm">
                                <div className="row current-inner">
                                    <div className="col-lg-3 current-left">
                                        <div className="current-name">Test Series</div>
                                        <div className="current-link">
                                            <div className="current-link-inner">
                                                <div className="test-cat">
                                                    <div className="over_home">
                                                                <Category page={"/testseries"} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 current-right">
                                        <div className="current-filter">
                                            <div className="special-con">
                                                <div className="special-sub">
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className="date-filt">
                                                        <label>From Date</label>
                                                        <DatePickerComponet
                                                            selected={startDate}
                                                            onChange={(date) => setStartDate(date)}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="date-filt">
                                                        <label>Till Date</label>
                                                        <DatePickerComponet selected={endDate} onChange={(date) => setEndDate(date)} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="date-filt">
                                                        <label>Select Your Option</label>
                                                        <select
                                                        onChange={(e)=>setFileType(e.target.value)}>
                                                            <option>Select One</option>
                                                            <option value="pdf">PDF</option>
                                                            <option value="ppt">PPT</option>
                                                            <option value="pptPdf">PDF + PPT</option>
                                                            <option value="editable">EDITABLE FILE </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="date-filt">
                                                        <Button label="Submit" onClick={handleSubmit} />

                                                    </div>
                                                </div>
                                                {/* <div className="col-lg-7">

                                          </div> */}
                                            </div>
                                    <SocialIcons  />
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
                  <FeedbackForm isOpenFeedback={customerCare} />
                </p>

                                        </div>
                                        <div className="current-main">
                                            <div className="current-right">
                                                <TestContant data={testSeriesList}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default TestSeries