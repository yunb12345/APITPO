import * as React from 'react';
import Table from "./tabletran";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CustomBox from "./box";


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
        dataMiembro.map((miembro) => {
            miembro.transacciones = miembro.transacciones + newMovement.value * (parseInt(miembro.porcentaje)/100)
            console.log(miembro.transacciones);
        })
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

    const dataMiembro = [
        {
            id: 1,
            name:'Agustin',
            transacciones:200,
            porcentaje:0
        },
        {
            id:2,
            name:'Alex',
            transacciones:430,
            porcentaje:0
        }
    ];

  
    return(
        <div>
            <div className=''>
                <Table data={rows} columns={tablaColumna}/>
                <div className='flex justify-center'>
                    <Button variant="contained" onClick={handleOpenMovement} style={{
                            borderRadius: "10px", width: "40%", backgroundColor: "#FAFF0F", color: "black",
                            height: "50px", marginBottom: "30px", marginLeft: "50px", marginRight: "40px", textAlign:"center",
                    }}>
                    Añadir transaccion
                    </Button>
                </div>
                
            </div>
            <Modal open={openMovement} onClose={handleCloseMovement}>
                <CustomBox moreStyles={{width:400}}>
                    <h2>Añadir Movimiento</h2>
                    <TextField
                    label="Nombre"
                    value={newMovement.nombre}
                    onChange={(e) => setNewMovement({ ...newMovement, nameTransaccion: e.target.value })}
                    fullWidth
                    />
                    <TextField
                    type='number'
                    label="Monto"
                    value={newMovement.value}
                    onChange={(e) => setNewMovement({ ...newMovement, value: e.target.value })}
                    fullWidth
                    sx={{ mt: 2 }}
                    />
                    <TextField
                    value={newMovement.date}
                    type='date'
                    onChange={(e) => setNewMovement({ ...newMovement, date: e.target.value })}
                    fullWidth
                    sx={{ mt: 2 }}
                    />
                    {dataMiembro.map((pro,index) => 
                            (
                                <div>
                                    <p>Porcentaje de {pro.name}</p>
                                    <TextField
                                    type='number'
                                    onChange={(e) => pro.porcentaje = e.target.value }
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    />
                                </div>
                            )             
                        )}
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
                </CustomBox>
            </Modal>

            {/* Modal para mostrar la imagen del comprobante */}
            <Modal open={openImageModal} onClose={() => setOpenImageModal(false)}>
                <CustomBox moreStyles={{width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {selectedComprobante && <img src={selectedComprobante} alt="Comprobante" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                </CustomBox>
            </Modal>
        </div>
    )
}
export default TransaccionGrupo;