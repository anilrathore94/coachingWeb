import React,{useContext, useEffect, useState} from "react"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "../Components/ui/homepage";
import NotFound from "../Components/ui/notFound";
import Cart from "../Components/ui/cart";
import BookDetails from "../Components/ui/bookdetails";
import BooksCategory from "../Components/ui/booksaccordingtocategory";
import Checkout from "../Components/ui/checkout";
import Profile from "../Components/ui/profile";
import CurrentAffairs from "../Components/ui/currentaffairs";
import Design from "../Components/design";
import EbookAndNotes from "../Components/ebook/EbookAndNotes";
import PreviousYearPaper from "../Components/previousyearpaper/PreviousYearPaper";
import TestSeries from "../Components/testseries/TestSeries";
import Typing from "../Components/typing";
import DataTranslate from "../Components/datatranslate/DataTranslate";
 


const Routes = () => {
  const [routes,setRoutes] = useState([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/bookdetails/:id",
      element:<BookDetails/>
    },
    {
      path:"/books/:id",
      element:<BooksCategory/>
    },
    {
      path:"/checkout",
      element:<Checkout/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/currentaffairs",
      element:<CurrentAffairs/>
    },
    {
      path:"/design",
      element:<Design/>
    },

    {
      path:"/ebooks",
      element:<EbookAndNotes/>
    },
    {
      path:"/ebooks/:id",
      element:<EbookAndNotes/>
    },

    {
      path:"/previousyearpaper",
      element:<PreviousYearPaper/>
    },
    {
      path:"/previousyearpaper/:id",
      element:<PreviousYearPaper/>
    },
    {
      path:"/testseries",
      element:<TestSeries/>
    },
    {
      path:"/testseries/:id",
      element:<TestSeries/>
    },
    {
      path:"/typing",
      element:<Typing/>
    },

    {
      path:"/datatranslate",
      element:<DataTranslate/>
    },


    {
        path:"/*",
        element:<NotFound/>
      }

  ])
    
    let Routes =  routes.map((route,i)=>{
        return {
          path:route.path,
          element:route.path == "/" || route.path == "/*" ?route.element:(
            <>
            {/* <Headers/>
            <div id="layoutSidenav">
            <Sidebar/> */}
            {route.element}
            {/* </div> */}
            </>
          )
        }
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