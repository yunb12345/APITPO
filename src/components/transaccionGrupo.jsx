import * as React from 'react';
import Table from "./tabletran";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const TransaccionGrupo = (props) => {
    const {tablaColumna,tablaContenido} = props;

    const [openMovement, setOpenMovement] = React.useState(false);
    const [newMovement, setNewMovement] = React.useState({
        nameTransaccion: '',
        date: '',
        value: '',
        comprobante: null,
    });

    const [rows, setRows] = React.useState(tablaContenido);
    
    const handleOpenMovement = () => setOpenMovement(true);
    const handleCloseMovement = () => setOpenMovement(false);
  
    const handleAddMovement = () => {
        console.log(newMovement.comprobante);
        const newRow = {nameTransaccion:newMovement.nameTransaccion,date:newMovement.date,value:newMovement.value,comprobante:newMovement.comprobante};
        setRows([...rows, newRow]);
        setNewMovement({ nameTransaccion: '', date: '', value: '', comprobante: null });
        handleCloseMovement();
    };
    
    const [selectedComprobante, setSelectedComprobante] = React.useState(null);
    const [openImageModal, setOpenImageModal] = React.useState(false);
    const handleOpenImageModal = (comprobante) => {
      console.log("test");
      setSelectedComprobante(URL.createObjectURL(comprobante));
      setOpenImageModal(true);
    };

  
    return(
        <div>
            <div className=''>
                <Table data={rows} columns={tablaColumna}/>
                <Button variant="contained" onClick={handleOpenMovement} style={{
                        borderRadius: "10px", width: "20%", backgroundColor: "#FAFF0F", color: "black",
                        height: "50px", marginBottom: "30px", marginLeft: "50px", marginRight: "40px", textAlign:"end", 
                }}>
                Añadir transaccion
                </Button>
            </div>
            <Modal open={openMovement} onClose={handleCloseMovement}>
                <Box sx={{ ...style, width: 400 }}>
                    <h2>Añadir Movimiento</h2>
                    <TextField
                    label="Nombre"
                    value={newMovement.nombre}
                    onChange={(e) => setNewMovement({ ...newMovement, nameTransaccion: e.target.value })}
                    fullWidth
                    />
                    <TextField
                    label="Monto"
                    value={newMovement.value}
                    onChange={(e) => setNewMovement({ ...newMovement, value: e.target.value })}
                    fullWidth
                    sx={{ mt: 2 }}
                    />
                    <TextField
                    label="Fecha"
                    value={newMovement.date}
                    onChange={(e) => setNewMovement({ ...newMovement, date: e.target.value })}
                    fullWidth
                    sx={{ mt: 2 }}
                    />
                    <Button
                    variant="contained"
                    component="label"
                    sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}
                    >
                    Adjuntar Comprobante
                    <input
                        type="file"
                        hidden
                        onChange={(e) => setNewMovement({ ...newMovement, comprobante: e.target.files[0] })}
                    />
                    </Button>
                    <Button onClick={handleAddMovement} variant="contained" sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}>
                    Añadir
                    </Button>
                </Box>
            </Modal>

            {/* Modal para mostrar la imagen del comprobante */}
            <Modal open={openImageModal} onClose={() => setOpenImageModal(false)}>
                <Box sx={{ ...style, width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {selectedComprobante && <img src={selectedComprobante} alt="Comprobante" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                </Box>
            </Modal>
        </div>
    )
}
export default TransaccionGrupo;

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