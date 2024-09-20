import * as React from 'react';
import { Outlet } from "react-router-dom";
import { AiOutlineX } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Navbar from "../components/navbar";

const Layout = ()=>{
    return(
        <div className="overflow-x-hidden mx-auto" style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <footer className="bg-apiyellow" style={{marginTop:"auto"}}>
                <div className="flex flex-wrap items-center justify-center py-10">
                    <div className="flex flex-row px-10 items-center text-2xl lg:text-3xl gap-4">
                        <div className="px-1">
                            <AiOutlineX className=''/>
                        </div>
                        <div className="px-1">
                            <AiOutlineYoutube/>
                        </div>
                        <div className="px-1">
                            <AiOutlineInstagram/>
                        </div>
                        <div className="px-1">
                            <AiOutlineLinkedin/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Layout