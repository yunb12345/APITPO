import * as React from 'react';
import imguser from "../imgs/default-user-icon-8.jpg";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import CustomBox from "../components/box";

import { AuthContext } from "../components/authContext";
const proyectos = [
    {
        nombre:'Proyecto 1',
        fecha:'Junio 10, 2018',
        balance:-180
    },
    {
        nombre:'Proyecto 2',
        fecha:'Junio 7, 2018',
        balance:880
    },
    {
        nombre:'Proyecto 3',
        fecha:'Agosto 10, 2018',
        balance:10000
    },
    {
        nombre:'Proyecto 4',
        fecha:'Diciembre 25, 2018',
        balance:-210
    },
    {
        nombre:'Proyecto 5',
        fecha:'Septiempre 20, 2018',
        balance:-750
    },
]
let totalBalance = 0;
proyectos.forEach(proyecto => {
    totalBalance += proyecto.balance;
});

const Profile = () => {
    const { user,updateUser } = React.useContext(AuthContext); //datos del usuario logueado

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        setTempUserData(userData);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const [userData, setUserData] = React.useState({
        user: user.user,
        name: user.name,
        lastName: user.lastName,
        mail: user.mail,
        pass: user.pass
    });
    
    const [tempUserData, setTempUserData] = React.useState(userData);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempUserData((prevTempUserData) => ({
            ...prevTempUserData,
            [name]: value
        }));
    };

    function validarMail(mail) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(mail);
      }
    
    const handleSave = () => {
        if(tempUserData.user != "" && tempUserData.name != "" && tempUserData.lastName != "" && validarMail(tempUserData.mail) && tempUserData.pass != ""){
            updateUser(tempUserData);
            setOpen(false); 
        }else{
            setOpenError(true)
        }
    };

    const [openError, setOpenError] = React.useState(false);
    const handleCloseError = () => setOpenError(false);
    
    return(
        <div className='mx-5'>
            <div className='py-10 m-auto justify-center'>
                <div className='flex flex-row justify-around pt-10 w-full'>
                    <div>
                        <img alt='usr' src={imguser} className='h-20 w-20 m-5 rounded-2xl'/>
                    </div>
                    <div className='justify-center text-center content-center'>
                        <div className='flex flex-col justify-center'>
                            <p className='text-bold text-3xl'>{user.user}</p>
                            <h1 className=''>Balance</h1>
                            <h1 className='text-bold text-2xl text-emerald-500'>${totalBalance}</h1>
                        </div>
                        
                    </div>
                </div>
                <div className='flex flex-col p-4 text-sm gap-2 w-full lg:w-2/3 m-auto'>
                    <div>
                        <p className='text-lg text-gray-400'>NOMBRE Y APELLIDO</p>
                        <p className='text-lg'>{user.name} {user.lastName}</p>
                    </div>
                    <div>
                        <p className='text-lg text-gray-400'>EMAIL</p>
                        <p className='text-lg'>{user.mail}</p>
                    </div>
                    <div>
                        <p className='text-lg text-gray-400'>CONTRASEÑA</p>
                        <p className='text-lg'>***********</p>
                    </div>
                </div>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <Button variant="outlined" color="error">
                        Borrar
                    </Button>
                    <Button variant="contained" onClick={handleOpen}>Editar</Button>
                </div>
            </div>
            <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "60%", height: "auto", backgroundColor: "white", color: "white", borderRadius: "30px", display: "flex", flexDirection: "column" }}>
                    <h3 className='text-black m-5 font-bold text-lg'>Editar Usuario</h3>
                    <TextField
                        name="user"
                        id="outlined-basic"
                        label="Usuario"
                        variant="outlined"
                        style={{ margin: "20px" }}
                        onChange={handleChange}
                        value={tempUserData.user}
                        required
                    />
                    <TextField
                        name="name"
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                        style={{ margin: "20px" }}
                        onChange={handleChange}
                        value={tempUserData.name}
                        required
                    />
                    <TextField
                        name="lastName"
                        id="outlined-basic"
                        label="Apellido"
                        variant="outlined"
                        style={{ margin: "20px" }}
                        onChange={handleChange}
                        value={tempUserData.lastName}
                        required
                    />
                    <TextField
                        name="mail"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        style={{ margin: "20px" }}
                        onChange={handleChange}
                        value={tempUserData.mail}
                    />
                    <TextField
                        type="pass"
                        name="Contraseña"
                        id="outlined-basic"
                        label="Contraseña"
                        variant="outlined"
                        style={{ margin: "20px" }}
                        onChange={handleChange}
                        value={tempUserData.pass}
                    />
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                        <Button onClick={handleSave} variant="contained" style={{
                            borderRadius: "10px", width: "200px", backgroundColor: "#1fd655", color: "white",
                            height: "50px", margin: "20px"
                        }}>Guardar</Button>
                    </div>
                </Box>
            </Modal>
            <div className='py-5'>
                <div className='flex flex-row justify-between py-10'>
                    <h1 className='text-2xl'>Ultimas 5 transacciones</h1>
                    <Link to="/transactions"><Button>Ver Más</Button></Link>
                </div>
                <div>
                    <div className='flex flex-col gap-4'>
                        {proyectos.map((pro,index) => 
                            (
                                <div key={index} className='flex justify-between bg-white shadow-sm m-3 p-4 rounded-sm'>
                                    <div className='flex flex-col'>
                                        <p className='font-bold'>{pro.nombre}</p>
                                        <p>{pro.fecha}</p>
                                    </div>
                                    <div className=' content-center'>
                                        <p className={pro.balance > 0 ? 'text-emerald-500' : 'text-rose-600'}>{pro.balance}</p>
                                    </div>
                                </div>
                            )
                        )}
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
};
export default Profile;