import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../component/ui/contextProvider.js";
import { getPermission } from "../services/subadmin.service.js";
// import Header from "../../../customComponent/Header";
// import AuthService from "../../../api/services/AuthService";
// import {
//   StoreKeys,
//   getActiveValue,
//   handleActiveValue,
// } from "../utils/StorageHandler";

export const Sidebar = () => {
  const [permissions, setPermissions] = useState([])
  const [activeTab, setActiveTab] = useState("homepage");
  const [coinNameList, setCoinNameList] = useState([]);
  const [profileState,updateProfileState] = useContext(ProfileContext);

  const myPermission = localStorage.getItem("permissions");
  const userType = localStorage.getItem("userType");

  // const permissions =profileState?profileState.permissions  : myPermission ? JSON.parse(myPermission) : [];
  const user_Id = localStorage.getItem("userId");

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(!token){
      window.location.href = "/"
    }
        if(Object.keys(profileState).length == 0 && token){
         getPermissionOnAdmin()
        }
        if(Object.keys(profileState).length > 0 && token){
          setPermissions(profileState.permissions)

         }
  }, []);
  const getPermissionOnAdmin = async() => {
    let permission = await getPermission()
    if(permission.status){
      setPermissions(permission.data.permissions)
      updateProfileState(permission.data)
    }
  }

  

//   const handleCoinTransfer = async () => {
//     await AuthService.coinTransfer().then(async (result) => {
//       if (result?.success) {
//         setCoinNameList(result?.data);
//       } else {
//         /*  alertErrorMessage(result.message); */
//       }
//     });
//   };

//   const handleGetreceive = async (coinName) => {
//     await AuthService.getReceives(coinName, user_Id).then(async (result) => {
//       console.log(result, "coinList");
//       if (result.success) {
//         try {
//           // alertSuccessMessage(result.message);
//         } catch (error) {
//           // alertErrorMessage(error);
//         }
//       } else {
//         // alertErrorMessage(result.message);
//       }
//     });
//   };

  return (
    <>
      
        <div id="layoutSidenav_nav">
          <nav className="sidenav shadow-right sidenav-light">
            <div className="sidenav-menu">
              <div className="nav accordion" id="accordionSidenav">
                <div className="sidenav-menu-heading">pages</div>
              {console.log("permissionspermissions",permissions)}
             {permissions.length>0 && permissions.includes(1) && <Link
                  to="/dashboard"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Dashboards
                </Link>}
                {permissions.length>0 && permissions.includes(2) &&<Link
                  to="/users"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  User List
                </Link>
                }
                {permissions.length>0 && permissions.includes(3) && <Link
                  to="/categories"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Category
                </Link>
                }
                {permissions.length>0 && permissions.includes(4) &&<Link
                  to="/posters"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Poster
                </Link>
                }
             
                {permissions.length>0 && permissions.includes(5) && <Link
                  to="/books"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Book Details
                </Link>
                }
                {permissions.length>0 && permissions.includes(5) && <Link
                  to="/bookfiles"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Book Files
                </Link>
                }
                  {permissions.length>0 && permissions.includes(5) && <Link
                  to="/currentaffairs"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Current Affairs
                </Link>
                }
                 {permissions.length>0 && permissions.includes(5) && <Link
                  to="/testseries"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Test Series
                </Link>
                }
                {permissions.length>0 && permissions.includes(5) && <Link
                  to="/design"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Design
                </Link>
                }
                 {permissions.length>0 && permissions.includes(5) && <Link
                  to="/previousyearpaper"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Previous year Paper
                </Link>
                }
                 {permissions.length>0 && permissions.includes(5) && <Link
                  to="/typingData"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>Typing Data
                </Link>
                }
                 {permissions.length>0 && permissions.includes(5) && <Link
                  to="/datatranslate"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>Data Translate
                </Link>
                }
                {permissions.length>0 && permissions.includes(5) && <Link
                  to="/trendingtitles"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Trending Titles
                </Link>
                }
                 {permissions.length>0 && permissions.includes(5) && <Link
                  to="/admin-information"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Admin information 
                </Link>
                }
                 {permissions.length>0 && permissions.includes(5) && <Link
                  to="/social-media"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Social Media Information 
                </Link>
                }
                {permissions.length>0 && permissions.includes(5) && <Link
                  to="/promotion-and-offers"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Promotion And Offers
                </Link>
                }
                {permissions.length>0 && permissions.includes(6) && <Link
                  to="/reviews"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Reviews
                </Link>
                }
                {permissions.length>0 && permissions.includes(6) && <Link
                  to="/carts"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Cart Details
                </Link>
                }
                {permissions.length>0 && permissions.includes(6) && <Link
                  to="/support"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Support 
                </Link>
                }
                {/* {permissions.length>0 && permissions.includes(6) && <Link
                  to="/news"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  News Section
                </Link>
                } */}
                {/* {permissions.length>0 && permissions.includes(7) && <Link
                  to="/fourth-comming-exam"
                  className="nav-link collapsed"
                  // onClick={() =>
                  //   handleActiveValue(setActiveTab, StoreKeys.main, "homepage")
                  // }
                >
                  <div className="nav-link-icon">
                    <i className="fa fa-th"></i>
                  </div>
                  Fourth Comming Exam
                </Link>
                  } */}
                {permissions.length>0 && permissions.includes(8) && <>
                    <div
                      className="nav-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSubAdmin"
                      aria-expanded="false"
                      aria-controls="collapseSubAdmin"
                    >
                      <div className="nav-link-icon">
                        <i className="fa fa-user-friends"></i>
                      </div>
                      Sub Admin
                      <div className="sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </div>
                    <div
                      className="collapse"
                      id="collapseSubAdmin"
                      data-bs-parent="#accordionSidenav"
                    >
                      <nav className="sidenav-menu-nested nav">
                        <Link
                          className="nav-link"
                          to="/subadmins"
                          // onClick={() =>
                          //   handleActiveValue(
                          //     setActiveTab,
                          //     StoreKeys.main,
                          //     "listsubadmin"
                          //   )
                          // }
                        >
                          Sub Admin List
                        </Link>
                        <Link
                          className="nav-link"
                          to="/add-subadmins"
                          // onClick={() =>
                          //   handleActiveValue(
                          //     setActiveTab,
                          //     StoreKeys.main,
                          //     "addsubadmin"
                          //   )
                          // }
                        >
                          Add New
                        </Link>
                      </nav>
                    </div>
                  </>
                  }
              </div>
            </div>
          </nav>
        </div>
    </>
  );
};

