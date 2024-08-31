import { AiOutlineX } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";



const Footer = ()=>{
    return(
        <footer className="bg-yellow-300">
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
    )
};
export default Footer;