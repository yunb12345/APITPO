import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Login = () =>{

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const logintest = {
        usuario: "test",
        contraseña: "test"
    }


    const navigate = useNavigate();
    const handleLogin = () => {
        if(user === logintest.usuario && pass === logintest.contraseña){
            console.log("sesion iniciada");
            navigate("/board");
        } else {
            console.log("error");
            setOpenError(true);
        }
    };
    const [openError, setOpenError] = React.useState(false);
    const handleCloseError = () => setOpenError(false);


    return(
        <div className="bg-apigray h-screen overflow-x-hidden flex flex-wrap justify-center transition-all">
            <div className="my-10 flex flex-wrap bg-slate-100 justify-center items-center w-2/3">
                <div className='flex flex-col items-center gap-4 m-auto px-10 w-2/3'>
                    <div className='flex flex-wrap items-center text-center justify-center'>
                        <h1 className='font-bold text-2xl'>Log in</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 m-auto lg:w-2/3'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" value={user} onChange={(e) => setUser(e.target.value)}/>
                        <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-4 pt-4'>
                        <button onClick={handleLogin} className="bg-apiyellow px-8 py-2 rounded-lg lg:px-20 hover:bg-apiyellowhover shadow-md transition-all">
                            Loguear
                        </button>
                        <span>No tenes cuenta? <Link to="/register" className='underline text-green-500'>Registrate</Link></span>
                    </div>
                </div>
            </div>
            <Modal open={openError} onClose={handleCloseError}>
                <Box sx={{ ...style, width: 400 }}>
                    <h2>Usuario o contraseña incorrecta</h2>
                </Box>
            </Modal>
        </div>
    )
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default Login;