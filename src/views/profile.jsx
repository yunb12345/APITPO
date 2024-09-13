import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import imguser from "../imgs/default-user-icon-8.jpg";
import Grid from '@mui/material/Grid2';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';




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

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <h1 style={{ margin: "30px", fontSize: "50px", fontWeight: "bold" }}>Mi perfil</h1>
                    <Box sx={{ bgcolor: '#cfe8fc', margin: "30px", borderRadius: "28px", backgroundColor: "#d2d2d2" }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 2 }}>
                                <div>
                                    <img alt="" src={userData.Foto} style={{ width: "155px", height: "155px", borderRadius: "50%", margin: "20px" }} />
                                </div>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <div style={{ margin: "20px", fontSize: "30px" }}>
                                    <p>Usuario: {userData.Usuario}</p>
                                    <p>Nombre: {userData.Nombre}</p>
                                    <p>Apellido: {userData.Apellido}</p>
                                    <p>Email: {userData.Mail}</p>
                                </div>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", height: "77vh" }}>
                                    <Button onClick={handleOpen} variant="contained" style={{
                                        borderRadius: "30px", width: "200px", backgroundColor: "#FAFF0F", color: "black",
                                        height: "50px", margin: "20px"
                                    }}>Editar</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: "60%", height: "auto", backgroundColor: "white", color: "white", borderRadius: "30px", display: "flex", flexDirection: "column" }}>
                        <h3 style={{ color: "black", margin: "20px", fontWeight: "bold", fontSize: "20px" }}>Editar Usuario</h3>
                        <TextField
                            name="Usuario"
                            id="outlined-basic"
                            label="Usuario"
                            variant="outlined"
                            style={{ margin: "20px" }}
                            onChange={handleChange}
                            value={tempUserData.Usuario}
                            required
                        />
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
                                borderRadius: "30px", width: "200px", backgroundColor: "#FAFF0F", color: "black",
                                height: "50px", margin: "20px"
                            }}>Guardar</Button>
                        </div>
                    </Box>
                </Modal>
            </React.Fragment>
        </div>
    );
}

export default Profile;