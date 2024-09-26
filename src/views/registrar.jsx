import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import CustomBox from "../components/box";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


const Registrar =()=>{

    const [nombre, setNombre] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");

    function validarMail(mail) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(mail);
    }

    const navigate = useNavigate();
    const handleRegister = () => {
        if(nombre != "" && pass != "" && validarMail(email)){
            navigate("/board");
        } else {
            console.log("error");
            setOpenError(true);
        }
    };
    const [openError, setOpenError] = React.useState(false);
    const handleCloseError = () => setOpenError(false)

    return(
        <div className="bg-apigray h-screen overflow-x-hidden flex flex-wrap justify-center">
            <div className="mx-10 my-10 flex flex-wrap bg-slate-100">
                <div className="bg-apiyellow justify-center content-center w-full lg:w-1/3">
                    <div className="flex flex-col px-10 justify-center lg:gap-4">
                        <div className="flex flex-col justify-center text-center gap-2">
                            <div>
                                <h1 className="text-lg lg:text-2xl lg:font-bold">Bienvenido!</h1>
                            </div>
                            <div>
                                <p className="text-xs">Para seguir con nosotros por favor logueate</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center py-4">
                            <Link to="/login">
                                <button className="bg-transparent border border-black px-5 py-1 rounded-lg lg:px-10 lg:py-2 hover:bg-black hover:text-white transition-all">
                                    Loguear
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center content-center text-center m-auto lg:w-2/3">
                    <div className="px-10">
                        <div className='py-0 lg:py-5'>
                            <h1 className='text-xl lg:text-4xl font-bold'>Crear Cuenta</h1>
                        </div>
                        <div className='flex flex-wrap py-5 gap-4 justify-center'>
                            <TextField 
                            id="outlined-basic" 
                            label="Nombre" 
                            variant="outlined" 
                            size="small"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            />
                            <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            size="small"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                size="small"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <div className='py-5'>
                            <button onClick={handleRegister} className="bg-apiyellow px-8 py-2 rounded-lg lg:px-20 hover:bg-apiyellowhover shadow-md transition-all">
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={openError} onClose={handleCloseError}>
                <CustomBox moreStyles={{width: 400 }}>
                    <h2>Complete todos los campos con datos válidos</h2>
                </CustomBox>
            </Modal>
        </div>
    );
}
export default Registrar;