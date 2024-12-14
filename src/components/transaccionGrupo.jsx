import * as React from 'react';
import Table from "./tabletran";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CustomBox from "./box";
import * as miembros from '../api/miembros_api';
import * as transaccion from '../api/transaccion_api';
import { useParams } from 'react-router-dom';


const TransaccionGrupo = (props) => {
    const {tablaColumna,tablaContenido} = props;
    const [openMovement, setOpenMovement] = React.useState(false);
    const [newMovement, setNewMovement] = React.useState({
        nameTransaccion: '',
        date: '',
        value: '',
        comprobante: null,
    });
    const token = sessionStorage.getItem('access-token');
    const { id } = useParams();
    const [dataMiembro, setDataMiembro] = React.useState([]);
    React.useEffect(() => {
        setRows(tablaContenido);
        miembros.getMiembros(id,setDataMiembro);
    }, [id,setDataMiembro,tablaContenido]);

    const [rows, setRows] = React.useState(tablaContenido);
    
    const handleOpenMovement = () => setOpenMovement(true);
    const handleCloseMovement = () => {
        setNewMovement({ nameTransaccion: '', date: "", value: "", comprobante: null });
        setOpenMovement(false);
    }
    

    function validarPorcentaje(array) {
        const sumaPorcentajes = array.reduce((suma, item) => {
            const porcentaje = parseFloat(item.porcentaje);
            return !isNaN(porcentaje) ? suma + porcentaje : suma;
        }, 0);
        return sumaPorcentajes === 100;
    }
    const handleAddMovement = () => {
        if(newMovement.comprobante && newMovement.nameTransaccion !== "" && newMovement.date && newMovement.value > 0 && validarPorcentaje(dataMiembro)){
            let participantes = [];
            dataMiembro.forEach((miembro) => {
                participantes.push({id: miembro.id, porcentaje: miembro.porcentaje})
            });
            transaccion.crearTransaccion(id,newMovement.nameTransaccion,newMovement.value,newMovement.comprobante,participantes,token);
            const nuevoId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1; // Genera un nuevo id
            const newRow = {
                id:nuevoId,
                nameTransaccion:newMovement.nameTransaccion,
                date:newMovement.date,
                value:newMovement.value,
                comprobante:newMovement.comprobante,
                participantes: participantes
            };
            setRows([...rows, newRow]);
            dataMiembro.forEach((miembro) => {
                miembro.transacciones = miembro.transacciones + newMovement.value * (parseInt(miembro.porcentaje)/100);
            });
            setNewMovement({ nameTransaccion: '', date: "", value: "", comprobante: null });
            handleCloseMovement();
        }else{
            setOpenError(true);
        }
    };
    
    const [selectedComprobante, setSelectedComprobante] = React.useState(null);
    const [openImageModal, setOpenImageModal] = React.useState(false);
    const handleOpenImageModal = (comprobante) => {
      setSelectedComprobante(URL.createObjectURL(comprobante));
      setOpenImageModal(true);
    };

    const handleChangePorcentaje = (e, i) =>{
        const miembros = [...dataMiembro];
    
        miembros[i].porcentaje = e.target.value;

        setDataMiembro(miembros);
    }

    const [openError, setOpenError] = React.useState(false);
    const handleCloseError = () => setOpenError(false);

  
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
                                    <p style={{marginTop:"10px"}}>Porcentaje de {x.username}</p>
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
            <Modal open={openError} onClose={handleCloseError}>
                <CustomBox moreStyles={{width: 400 }}>
                    <h2>Complete todos los campos y/o adjunte un comprobante. Asegurese de que los porcentajes sumen 100</h2>
                </CustomBox>
            </Modal>
        </div>
    )
}
export default TransaccionGrupo;