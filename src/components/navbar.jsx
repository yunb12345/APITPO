import React, {useContext } from "react";
import imguser from "../imgs/default-user-icon-8.jpg";
import logo from "../imgs/A.png";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
const NNavbar = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { user,logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
    };
    return (
        <Navbar fluid rounded className="bg-apiyellow">
            <Navbar.Brand href="/">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Splitify</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {isAuthenticated ? (
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img={imguser} rounded />
                    }
                    >
                    <Dropdown.Header>
                        <span className="block text-sm">{user.user}</span>
                    </Dropdown.Header>
                    <Link to="/board"><Dropdown.Item>Panel</Dropdown.Item></Link>
                    <Link to="/profile"><Dropdown.Item>Perfil</Dropdown.Item></Link>
                    <Link to="/transactions"><Dropdown.Item>Mis transacciones</Dropdown.Item></Link>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Cerar Sesion</Dropdown.Item>
                    </Dropdown>
                ) : (
                    <div className="flex items-center pr-5">
                        <Link to="/login" className="text-gray-700 dark:text-gray-400 dark:hover:text-white hover:text-cyan-700">
                            Iniciar Sesión
                        </Link>
                    </div>

                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to="/#seccion1" className='block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 
                text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                Inicio
                </Link>
                <Link to="/#seccion2" className='block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 
                text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                Acerca de
                </Link>
                <Link to="/#seccion3" className='block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 
                text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                Servicios
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NNavbar;