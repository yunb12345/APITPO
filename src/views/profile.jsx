import * as React from 'react';
import imguser from "../imgs/default-user-icon-8.jpg";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

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

const Profile = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        setTempUserData(userData);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const [userData, setUserData] = React.useState({
        Usuario: "UsuarioTest",
        Nombre: "John",
        Apellido: "Doe",
        Mail: "usuario1@test.com",
        Foto: imguser
    });
    
    const [tempUserData, setTempUserData] = React.useState(userData);
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempUserData((prevTempUserData) => ({
            ...prevTempUserData,
            [name]: value  
        }));
    };
    
    const handleSave = () => {
        setUserData(tempUserData);
        console.log("Datos guardados:", userData);
        setOpen(false); 
    };
    
    return(
        <div className='mx-5'>
            <div className='py-10 m-auto justify-center'>
                <div className='flex flex-row justify-around pt-10 w-full'>
                    <div>
                        <img alt='usr' src={imguser} className='h-20 w-20 m-5 rounded-2xl'/>
                    </div>
                    <div className='justify-center text-center content-center'>
                        <div className='flex flex-col justify-center'>
                            <p className='text-bold text-3xl'>{userData.Usuario}</p>
                            <h1 className=''>Balance</h1>
                            <h1 className='text-bold text-2xl text-emerald-500'>$850</h1>
                        </div>
                        
                    </div>
                </div>
                <div className='flex flex-col p-4 text-sm gap-2 w-full lg:w-2/3 m-auto'>
                    <div>
                        <p className='text-lg text-gray-400'>NOMBRE Y APELLIDO</p>
                        <p className='text-lg'>{userData.Nombre} {userData.Apellido}</p>
                    </div>
                    <div>
                        <p className='text-lg text-gray-400'>EMAIL</p>
                        <p className='text-lg'>{userData.Mail}</p>
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
                        name="Nombre"
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                        style={{ margin: "20px" }}
                        onChange={handleChange}
                        value={tempUserData.Nombre}
                        required
                    />
                    <TextField
                        name="Apellido"
                        id="outlined-basic"
                        label="Apellido"
                        variant="outlined"
                        style={{ margin: "20px" }}
                        onChange={handleChange}
                        value={tempUserData.Apellido}
                        required
                    />
                    <TextField
                        name="Mail"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        style={{ margin: "20px" }}
                        onChange={handleChange}
                        value={tempUserData.Mail}
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
        </div>
    );
};
export default Profile;