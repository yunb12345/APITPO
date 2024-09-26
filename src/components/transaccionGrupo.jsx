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
    const handleCloseMovement = () => {
        setNewMovement({ nameTransaccion: '', date: "", value: "", comprobante: null });
        setOpenMovement(false);
    }
    

    function validarPorcentaje(array) {
        console.log(array)
        const sumaPorcentajes = array.reduce((suma, item) => {
            const porcentaje = parseFloat(item.porcentaje);
            return !isNaN(porcentaje) ? suma + porcentaje : suma;
        }, 0);
        return sumaPorcentajes === 100;
    }
    const handleAddMovement = () => {
        console.log(validarPorcentaje(dataMiembro))
        if(newMovement.comprobante && newMovement.nameTransaccion !== "" && newMovement.date && newMovement.value > 0 && validarPorcentaje(dataMiembro)){
            console.log(newMovement.comprobante);
            let participantes = []
            dataMiembro.map((miembro) => {
                participantes.push({nombre: miembro.name, porcentaje: miembro.porcentaje})
            })
            console.log(participantes)
            const newRow = {
                nameTransaccion:newMovement.nameTransaccion,
                date:newMovement.date,
                value:newMovement.value,
                comprobante:newMovement.comprobante,
                participantes: participantes
            };
            setRows([...rows, newRow]);
            dataMiembro.map((miembro) => {
                miembro.transacciones = miembro.transacciones + newMovement.value * (parseInt(miembro.porcentaje)/100)
            })
            
            setNewMovement({ nameTransaccion: '', date: "", value: "", comprobante: null });
            handleCloseMovement();
        }
    };
    
    const [selectedComprobante, setSelectedComprobante] = React.useState(null);
    const [openImageModal, setOpenImageModal] = React.useState(false);
    const handleOpenImageModal = (comprobante) => {
      setSelectedComprobante(URL.createObjectURL(comprobante));
      setOpenImageModal(true);
    };

    const [dataMiembro,setDataMiembro] = React.useState([
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
    ]);

    const handleChangePorcentaje = (e, i) =>{
        const miembros = [...dataMiembro];
        console.log(e)
    
        miembros[i].porcentaje = e.target.value;

        setDataMiembro(miembros);
    }

  
    return(
        <div>
            <div className=''>
                <Table data={rows} columns={tablaColumna} expandable={true}/>
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
                    <h2 style={{marginBottom:"10px"}}>Añadir Movimiento</h2>
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
                    {dataMiembro.map((x,i) => 
                            (
                                <div>
                                    <p style={{marginTop:"10px"}}>Porcentaje de {x.name}</p>
                                    <TextField
                                    type='number'
                                    onChange={(e) => handleChangePorcentaje(e, i)}
                                    fullWidth
                                    sx={{ mt: 2 }}
                                    />
                                </div>
                            )             
                        )}
                    <div style={{display:'flex', justifyContent:"space-between"}}>
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
                    </div>
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