import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import imgadd from "../imgs/plus.png";

const projects = [
    "Proyecto 1",
    "Proyecto 2",
    "Proyecto 3",
    "Proyecto 4",
    "Proyecto 5",
    "Proyecto 6",
];

const Board = () => {
    return (
        <div style={{ position: "relative", paddingBottom: "60px" }}>
            <h1 style={{ margin: "30px", fontSize: "50px", fontWeight: "bold" }}>Mis proyectos</h1>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="auto" style={{ display: "flex", flexWrap: "wrap", alignItems: 'center', justifyContent: 'center' }}>
                    {projects.map((project, index) => (
                        <Box 
                            key={index} 
                            sx={{ bgcolor: '#cfe8fc', margin: "30px", borderRadius: "28px", backgroundColor: "#d2d2d2", height: "180px", width: "215px", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                            <h1 style={{ margin: "30px", fontSize: "3vh", fontWeight: "bold" }}>{project}</h1>
                        </Box>
                    ))}
                    <Box 
                        sx={{ bgcolor: '#cfe8fc', margin: "30px", borderRadius: "28px", backgroundColor: "#d2d2d2", height: "180px", width: "215px", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                        <img alt="" src={imgadd} style={{ width: "155px", height: "155px", borderRadius: "50%", margin: "20px" }} />
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Board;