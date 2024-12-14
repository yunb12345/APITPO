import * as React from 'react';
import imguser from "../imgs/default-user-icon-8.jpg";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import CustomBox from "../components/box";
import { AuthContext } from "../components/authContext";
import {getUser,updateUser,deleteUser} from "../api/profile_api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    
    const navigate = useNavigate();
    const {logout} = React.useContext(AuthContext);
    const token = sessionStorage.getItem('access-token');
    const { user } = React.useContext(AuthContext); //datos del usuario logueado
    const [perfil, setPerfil] = React.useState({});
    React.useEffect(() => {
        if(user){
            getUser(user.id,setPerfil);
        }
    },[user,setPerfil]);
    
    // handle para ventanas
    const [open, setOpen] = React.useState(false);
    const [openB, setOpenB] = React.useState(false); // Estado para controlar el modal de "Borrar"

    // Función para abrir el modal de borrar
    const handleOpenB = () => {
        setOpenB(true);
    };
    
    // Función para cerrar el modal de borrar
    const handleCloseB = () => {
        setOpenB(false);
    };

    const handleOpen = () => {
        setOpen(true);
        setTempUserData(perfil);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const [tempUserData, setTempUserData] = React.useState({});
    
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
    
    const handleBorrar = async () => {
        try{
            const response = await deleteUser(user.id);
            if(response.status===200){
                logout();
                navigate("/");
            }
        }
        catch(error) {
            console.error('Error al eliminar el usuario:', error);
        }
    }
    
    // para editar el perfil
    const handleSave = async () => {
        //if(tempUserData.user !== "" && tempUserData.name !== "" && tempUserData.lastName !== "" && validarMail(tempUserData.mail) && tempUserData.pass !== ""){
        if(tempUserData.user !== "" && validarMail(tempUserData.mail) && tempUserData.pass !== ""){
            const userData = {
                username:tempUserData.user,
                /*
                name:tempUserData.name,
                lastName:tempUserData.lastName,
                */
                email:tempUserData.mail,
                password:tempUserData.pass
            };
            const updatedProfile = await updateUser(token,user.id,userData);
            console.log(updatedProfile);
            setPerfil(updatedProfile);
            setOpen(false); 
        }else{
            setOpenError(true)
        }
    };

    const [openError, setOpenError] = React.useState(false);
    const handleCloseError = () => setOpenError(false);
    
    return(
        <div className='mx-5'>
            <div className='py-10 m-auto justify-center min-h-screen'>
                <div className='flex flex-row justify-around pt-10 w-full'>
                    <div>
                        <img alt='usr' src={imguser} className='h-20 w-20 m-5 rounded-2xl'/>
                    </div>
                    <div className='justify-center text-center content-center'>
                        <div className='flex flex-col justify-center'>
                            <p className='text-bold text-3xl'>{perfil.user}</p>
                            <h1 className=''>Monto invertido en proyectos</h1>
                            <h1 className='text-bold text-2xl text-slate-500'>${perfil.balance}</h1>
                        </div>
                        
                    </div>
                </div>
                <div className='flex flex-col p-4 text-sm gap-2 w-full lg:w-2/3 m-auto'>
                    <div>
                        <p className='text-lg text-gray-400'>EMAIL</p>
                        <p className='text-lg'>{perfil.mail}</p>
                    </div>
                    <div>
                        <p className='text-lg text-gray-400'>CONTRASEÑA</p>
                        <p className='text-lg'>***********</p>
                    </div>
                </div>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <Button variant="outlined" onClick={handleOpenB} color="error">
                        Borrar
                    </Button>

                    <Button variant="contained" onClick={handleOpen}>Editar</Button>
                </div>
            </div>
            <Modal open={openB} onClose={handleCloseB} aria-labelledby="child-modal-title" aria-describedby="child-modal-description"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box                     sx={{
                        width: "400px",
                        padding: "20px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxShadow: 3, // Sombra más sutil
                    }}>
                    <h3 style={{ textAlign: "center", color: "#333" }}>¿Estás seguro de esto?</h3>
                    <p style={{ textAlign: "center", color: "#555", marginBottom: "20px" }}>
                        Esta acción eliminará permanentemente tu cuenta. ¿Quieres continuar?
                    </p>
                    <Button variant="outlined" onClick={handleBorrar} color="error" style={{ width: "45%" }}>
                        Borrar
                    </Button>
                    <Button variant="contained" onClick={handleCloseB} style={{ width: "45%" }}>
                        Cancelar
                    </Button>
                </Box>
            </Modal>
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
                        name="pass"
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
            {
                /*
            
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
            */}
            <Modal open={openError} onClose={handleCloseError}>
                <CustomBox moreStyles={{width: 400 }}>
                    <h2>Complete todos los campos con datos válidos</h2>
                </CustomBox>
            </Modal>
        </div>
    );
};
export default Profile;