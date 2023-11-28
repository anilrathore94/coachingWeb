import React,{useContext, useEffect, useState} from "react"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Dashboard from "../component/ui/dashboard";
import {Sidebar} from '../comman/Sidebar';
import Headers from "../comman/header";
import Categories from "../component/ui/category"
import LoginPage from "../component/ui/login";
import Users from "../component/ui/user";
import Books from "../component/ui/books";
import Poster from "../component/ui/poster";
import Notfound from "../component/ui/notFound/notFound";
import { ProfileContext } from "../component/ui/contextProvider.js";
import News from "../component/ui/news";
import SubAdmin from "../component/ui/subadmins";
import AddsubAdmin from "../component/ui/subadmins/AddSubadmin";
import Review from "../component/ui/review";
import Cart from "../component/ui/cart";
import Support from "../component/ui/support";
import TrendingTitles from "../component/ui/trendingtitles";
import PromotionAndOffer from "../component/ui/promotion & offer";
import AdminInfo from "../component/ui/adminInfo";
import SocialMedia from "../component/ui/socialmedia";
import CurrentAffairs from "../component/ui/currentaffairs";
import TestSeries from "../component/ui/testseries";
import BookFiles from "../component/ui/bookfiles";
import Design from "../component/ui/design/index.js";
import PreviousYearPapers from "../component/ui/previousyearpaper/index.js";
import Typing from "../component/ui/typing/index.js";
import DataTranslatePage from "../component/ui/datatranslate/index.js";

const Routes = () => {
  const [routes,setRoutes] = useState([
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
    {
      path:"/users",
      element:<Users/>
    },
    {
      path:"/categories",
      element:<Categories/>
    },
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path:"/books",
      element:<Books/>
    },
    {
      path:"/bookfiles",
      element:<BookFiles/>
    },
    {
      path:"/currentaffairs",
      element:<CurrentAffairs/>
    },
    {
      path:"/testseries",
      element:<TestSeries/>
    },
    {
      path:"/previousyearpaper",
      element:<PreviousYearPapers/>
    },
    {
      path:"/design",
      element:<Design/>
    },
    {
      path:"/typingData",
      element:<Typing/>
    },
    {
      path:"/datatranslate",
      element:<DataTranslatePage/>
    },
    {
      path:"/posters",
      element:<Poster/>
    },
    {
      path:"/news",
      element:<News/>
    },
    {
      path:"/subadmins",
      element:<SubAdmin/>
    },
    {
      path:"/add-subadmins",
      element:<AddsubAdmin/>
    },
    {
      path:"/reviews",
      element:<Review/>
    },
    {
      path:"/carts",
      element:<Cart/>
    },
     {
      path:"/support",
      element:<Support/>
    },
    {
      path:"/trendingtitles",
      element:<TrendingTitles/>
    },
    {
      path:"/promotion-and-offers",
      element:<PromotionAndOffer/>
    },
    {
      path:"/admin-information",
      element:<AdminInfo/>
    },
    {
      path:"/social-media",
      element:<SocialMedia/>
    },
    {
      path:"/*",
      element:<Notfound/>
    }
  ])
  const token = localStorage.getItem('token');
  const [profileState] = useContext(ProfileContext);
  useEffect(()=>{
      // let token = localStorage.getItem("token")
      // console.log("tokentoken",token,profileState)
      // if(!token || !profileState.token){
      //   window.location.replace("/")
      // }

  },[])
    
    let Routes =  routes.map((route,i)=>{
        return {
          path:route.path,
          element:route.path == "/" || route.path == "/*" ?route.element:(
            <>
            <Headers/>
            <div id="layoutSidenav">
            <Sidebar/>
            {route.element}
            </div>
            </>
          )
        }
      // }
      
    })
    const router = createBrowserRouter(
        Routes
      );
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}

export default Routes