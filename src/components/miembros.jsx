import * as React from 'react';
import Table from "./tabletran";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CustomBox from "./box";
import * as miembros from '../api/miembros_api';
import { useParams } from 'react-router-dom';

const Miembros = (props) => {
    console.log(props);
    const { id } = useParams();
    const [integrantes, setIntegrantes] = React.useState([]);
    React.useEffect(() => {
        console.log("Pido la lista de productos con mi token de sesion")
        miembros.getMiembros(id,setIntegrantes);
    }, [setIntegrantes]);

    console.log(integrantes)


    const {tablaColumna,tablaContenido} = props;
    //const [integrantes, setIntegrantes] = React.useState(tablaContenido);
    //const [integrantes, setIntegrantes] = miembros;
    const [openIntegrante, setOpenIntegrante] = React.useState(false);
    const [openDeleteIntegrante, setOpenDeleteIntegrante] = React.useState(false);
    const [newIntegrante, setNewIntegrante] = React.useState('');
    

    const handleOpenIntegrante = () => setOpenIntegrante(true);
    const handleCloseIntegrante = () => setOpenIntegrante(false);

    const handleOpenDeleteIntegrante = () => setOpenDeleteIntegrante(true);
    const handleCloseDeleteIntegrante = () => setOpenDeleteIntegrante(false);


    const handleDeleteIntegrante = async (user) => {
        const miembroEliminado = await miembros.eliminarMiembro(id,user);
        const updated = integrantes.filter((member) => member.username !== user);
        setIntegrantes(updated);
        handleCloseDeleteIntegrante()
    }
    const handleAddIntegrante = async () => {
        //const nuevoId = integrantes.length > 0 ? integrantes[integrantes.length - 1].id + 1 : 1; // Genera un nuevo id
        
        const miembroCreado = await miembros.agregarMiembro(id,newIntegrante);
        console.log(miembroCreado);
        setIntegrantes([...integrantes,miembroCreado]);
        setNewIntegrante('');
        handleCloseIntegrante();
    };

    return(
        <div>
            <div className=''>
                <Table data={integrantes} columns={tablaColumna} expandable={false}/> {/*le paso si es expandible o no*/}
                <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <Button variant="contained" onClick={handleOpenIntegrante} style={{
                            borderRadius: "10px", width: "40%", backgroundColor: "#FAFF0F", color: "black",
                            height: "50px", marginBottom: "30px", marginLeft: "50px", marginRight: "40px", textAlign:"center",
                    }}>
                    Añadir Miembro
                    </Button>
                    <Button variant="contained" onClick={handleOpenDeleteIntegrante} style={{
                            borderRadius: "10px", width: "40%", backgroundColor: "#FF4C4C", color: "white",
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
                    label="Nombre de usuario"
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
                                        <p style={{marginTop:"10px", marginRight:"10px"}}>{x.username}</p>
                                    </div>
                                    <Button onClick={() => handleDeleteIntegrante(x.username)} variant="contained" sx={{ mt: 2, backgroundColor: '#FF4C4C', color: 'white' }}>
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