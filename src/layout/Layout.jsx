import * as React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer"

const Layout = ()=>{
    return(
        <div className="overflow-x-hidden mx-auto" style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
export default Layout