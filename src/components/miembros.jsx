import * as React from 'react';
import Table from "./tabletran";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CustomBox from "./box";

const Miembros = (props) => {
    const {tablaColumna,tablaContenido} = props;
    
    const [integrantes, setIntegrantes] = React.useState(tablaContenido);
    const [openIntegrante, setOpenIntegrante] = React.useState(false);
    const [newIntegrante, setNewIntegrante] = React.useState('');
    

    const handleOpenIntegrante = () => setOpenIntegrante(true);
    const handleCloseIntegrante = () => setOpenIntegrante(false);

    /*
    const handleAddIntegrante = () => {
        if (newIntegrante.trim()) {
          setIntegrantes([...integrantes, {name: newIntegrante}]);
          setNewIntegrante('');
          handleCloseIntegrante();
        }
      };
    */

    const handleAddIntegrante = () => {
        const nuevoId = integrantes.length > 0 ? integrantes[integrantes.length - 1].id + 1 : 1; // Genera un nuevo id
        setIntegrantes([...integrantes, { id: nuevoId, name: newIntegrante, transacciones:0}]);
        setNewIntegrante('');
        handleCloseIntegrante();
    };

    return(
        <div>
            <div className=''>
                <Table data={integrantes} columns={tablaColumna}/>
                <div className='flex justify-center'>
                    <Button variant="contained" onClick={handleOpenIntegrante} style={{
                            borderRadius: "10px", width: "40%", backgroundColor: "#FAFF0F", color: "black",
                            height: "50px", marginBottom: "30px", marginLeft: "50px", marginRight: "40px", textAlign:"center",
                    }}>
                    Añadir Miembro
                    </Button>
                </div>
            </div>
            <Modal open={openIntegrante} onClose={handleCloseIntegrante}>
                <CustomBox moreStyles={{width:400}}>
                    <h2 className='py-5'>Añadir Integrante</h2>
                    <TextField
                    label="Nombre del Integrante"
                    value={newIntegrante}
                    onChange={(e) => setNewIntegrante(e.target.value)}
                    fullWidth
                    />
                    <Button onClick={handleAddIntegrante} variant="contained" sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}>
                    Añadir
                    </Button>
                </CustomBox>
            </Modal>
        </div>
    )
}
export default Miembros;