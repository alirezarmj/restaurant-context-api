import { Helmet } from "react-helmet";


import React from 'react'
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <div >
        <Helmet>
            <title>Reasturant App</title>
            <meta name="description" content="A Context Api React App to Manage Cart in A Resturant App"/>
        </Helmet>
        <Navbar/>
        <main className="bg-gray-800 min-h-screen">
            {children}
        </main>
    </div>
  )
}

export default Layout