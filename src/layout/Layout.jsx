import { Outlet } from "react-router-dom";
import logo from "../assets/logo-placeholder-3.jpg"
import Button from '@mui/material/Button';
import { AiOutlineX } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";


const Layout = ()=>{
    return(
        <div className="overflow-x-hidden mx-auto">
            <nav className="flex items-center justify-between bg-apiyellow px-10">
                <div className="my-4 w-12 h-12 items-center object-center justify-center content-center">
                    <img src={logo} alt="" className="max-w-full"></img>
                </div>
                <div className="flex items-center flex-row gap-4">
                    <div className="flex items-center justify-center gap-4 flex-row">
                        <h1>Inicio</h1>
                        <h1>Servicios</h1>
                        <h1>Beneficios</h1>
                        <h1>Contacto</h1>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outlined">Ingresar</Button>
                        <Button variant="contained">Registrar</Button>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet/>
            </main>
            <footer className="bg-apiyellow">
                <div className="flex flex-row justify-center py-10">
                    <div className="flex flex-row px-10 items-center text-xl">
                        <div className="px-1">
                            <AiOutlineX/>
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
                    <div className="flex justify-start flex-col px-10">
                        <div className="pb-5">
                            <h2>Legal</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3>Terminos</h3>
                            <h3>Privacidad</h3>
                        </div>
                    </div>
                    <div className="flex justify-start flex-col px-10">
                        <div className="pb-5">
                            <h2>Servicios</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3>Diseño de proyectos</h3>
                            <h3>Calcular costos</h3>
                            <h3>Subida de tickets</h3>
                        </div>
                    </div>
                    <div className="flex justify-start flex-col px-10">
                        <div className="pb-5">
                            <h2>Contacto</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3>Inicio</h3>
                            <h3>Nosotros</h3>
                            <h3>Contacto</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Layout