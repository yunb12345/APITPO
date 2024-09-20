import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import imguser from "../imgs/default-user-icon-8.jpg";
import logo from "../imgs/A.png";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const navbar = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Splitify</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img={imguser} rounded />
                }
                >
                <Dropdown.Header>
                    <span className="block text-sm">Nombre de usuario</span>
                </Dropdown.Header>
                <Dropdown.Item><Link to="/board">Panel</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/profile">Perfil</Link></Dropdown.Item>
                <Dropdown.Item>Configuracion</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to="/" className='block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 
                text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                Inicio
                </Link>
                <Link to="/" className='block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 
                text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                Acerca de
                </Link>
                <Link to="/" className='block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 
                text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                Servicios
                </Link>
                <Link to="/" className='block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 
                text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                Contacto
                </Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default navbar;