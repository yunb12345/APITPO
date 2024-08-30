import logo from "../assets/logo-placeholder-3.jpg"
import Button from '@mui/material/Button';

const Navbar = () => {
    return(
    <nav className="flex items-center justify-between bg-yellow-300 px-10">
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
    )
};
export default Navbar;