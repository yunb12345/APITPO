import * as React from 'react';
import Table from "./tabletran";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CustomBox from "./box";
import { useThemeProps } from '@mui/material';
import { FaRegTrashAlt } from "react-icons/fa";

const Miembros = (props) => {
    const {tablaColumna,tablaContenido} = props;
    const [integrantes, setIntegrantes] = React.useState(tablaContenido);
    const [openIntegrante, setOpenIntegrante] = React.useState(false);
    const [openDeleteIntegrante, setOpenDeleteIntegrante] = React.useState(false);
    const [newIntegrante, setNewIntegrante] = React.useState('');
    

    const handleOpenIntegrante = () => setOpenIntegrante(true);
    const handleCloseIntegrante = () => setOpenIntegrante(false);

    const handleOpenDeleteIntegrante = () => setOpenDeleteIntegrante(true);
    const handleCloseDeleteIntegrante = () => setOpenDeleteIntegrante(false);


    const handleDeleteIntegrante = (user) => {
        const updated = integrantes.filter((member) => member.userName !== user);
        setIntegrantes(updated);
        handleCloseDeleteIntegrante()
    }
    const handleAddIntegrante = () => {
        const nuevoId = integrantes.length > 0 ? integrantes[integrantes.length - 1].id + 1 : 1; // Genera un nuevo id
        setIntegrantes([...integrantes, { id: nuevoId, userName: newIntegrante, transacciones:0}]);
        setNewIntegrante('');
        handleCloseIntegrante();
    };

    return(
        <div>
            <div className=''>
                <Table data={integrantes} columns={tablaColumna} expandable={false}/> {/*le paso si es expandible o no*/}
                <div className='flex justify-center'>
                    <Button variant="contained" onClick={handleOpenIntegrante} style={{
                            borderRadius: "10px", width: "40%", backgroundColor: "#FAFF0F", color: "black",
                            height: "50px", marginBottom: "30px", marginLeft: "50px", marginRight: "40px", textAlign:"center",
                    }}>
                    Añadir Miembro
                    </Button>
                    <Button variant="contained" onClick={handleOpenDeleteIntegrante} style={{
                            borderRadius: "10px", width: "40%", backgroundColor: "#FAFF0F", color: "black",
                            height: "50px", marginBottom: "30px", marginLeft: "50px", marginRight: "40px", textAlign:"center",
                    }}>
                    Eliminar Miembro
                    </Button>
                </div>
            </div>
            <Modal open={openIntegrante} onClose={handleCloseIntegrante}>
                <CustomBox moreStyles={{width:400}}>
                    <h2 className='py-5'>Añadir Miembro</h2>
                    <TextField
                    label="Nombre del Miembro"
                    value={newIntegrante}
                    onChange={(e) => setNewIntegrante(e.target.value)}
                    fullWidth
                    />
                    <Button onClick={handleAddIntegrante} variant="contained" sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}>
                    Añadir
                    </Button>
                </CustomBox>
            </Modal>
            <Modal open={openDeleteIntegrante} onClose={handleCloseDeleteIntegrante}>
                <CustomBox moreStyles={{width:400}}>
                    <h2 className='py-5'>Eliminar Miembro</h2>
                    {integrantes.map((x,i) => 
                            (
                                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                    <div>
                                        <p style={{marginTop:"10px", marginRight:"10px"}}>{x.userName}</p>
                                    </div>
                                    <Button onClick={() => handleDeleteIntegrante(x.userName)} variant="contained" sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}>
                                        Eliminar
                                    </Button>
                                </div>
                                
                            )             
                        )}
                </CustomBox>
            </Modal>
        </div>
    )
}
export default Miembros;