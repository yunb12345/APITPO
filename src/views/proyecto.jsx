import * as React from 'react';
import { useLocation,useParams,useNavigate } from 'react-router-dom';


import Tabs from "../components/tabs";
import Miembros from "../components/miembros";
import TransaccionGrupo from "../components/transaccionGrupo";

import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CustomBox from "../components/box";
import {getProyect,updateProyect,deleteProyect,getTransaccionByProyectId} from "../api/proyect_api";
import {getMiembros} from "../api/miembros_api.jsx";

const Proyecto = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const project = location.state;  //Recibimos info del proyecto de la pagina board
    const { id } = useParams(); //id de la url
    const token = sessionStorage.getItem('access-token');

    const[dataTransaccion,setData] = React.useState([]);
    const[dataMiembro,setDataMiembro] = React.useState([]);
    const [projectName, setProjectName] = React.useState(project.nombre);  //usamos el valor recibido por el location state
    const [projectDescription, setProjectDescription] = React.useState(project.descripcion);

    React.useEffect(() =>{
        const fetchData = async() =>{
            await getProyect(id,setProjectName,setProjectDescription);
            const data = await getTransaccionByProyectId(id);
            setData(data);
            const responseMiembro = await getMiembros(id,setDataMiembro);
            setDataMiembro(responseMiembro);
        };
        fetchData();
        
    },[id]);
    const columnsTransaccion = [
        {
            name: 'Transaccion',
            selector: row => row.nameTransaccion,
            sortable: true,
        },
        {
            name: 'Fecha',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Monto',
            selector: row => "$" + row.value,
            sortable: true,
        },
        {
            name: 'Comprobante',
            cell: (row) => <span
            onClick={() => handleOpenImageModal(row, { selector: row.comprobante })}
            style={{ cursor: 'pointer' }}
            >
                ticket
            </span>,
            sortable: true,
        },
        
    ];
    //

    /*tabla para miembros*/
    const columnsMiembro = [
        {
            name:'Usuario',
            selector: row => row.username,
            sortable: true,
        },
        {
            name:'Nombre',
            selector: row => row.name,
            sortable: true,
        },
        {
            name:'Apellido',
            selector: row => row.lastName,
            sortable: true,
        },
        {
            name:'Transacciones',
            selector: row => "$" + row.balance,
            sortable: true,
        },
    ];
    //
    /*columnas para el tab*/
    const tabsN = [{
        name:"Transacciones"
    },
    {
        name:"Miembros"
    }
        
    ];

    const tabsContent = [
        <TransaccionGrupo 
            tablaColumna={columnsTransaccion} 
            tablaContenido={dataTransaccion} 
            expandable={true} 
        />,
        <Miembros 
            tablaColumna={columnsMiembro} 
            tablaContenido={dataMiembro} 
        />,
    ];
    
    const [openEdit, setOpenEdit] = React.useState(false);


    const [openB, setOpenB] = React.useState(false); // Estado para controlar el modal de "Borrar"

    // Función para abrir el modal de borrar
    const handleOpenB = () => {
        setOpenB(true);
    };
    
    // Función para cerrar el modal de borrar
    const handleCloseB = () => {
        setOpenB(false);
    };

    const handleBorrar = async () => {
        try{
            const response = await deleteProyect(token,id);
            if(response.status===200){
                navigate("/board");
            }
        }
        catch(error) {
            console.error('Error al eliminar el proyecto:', error);
        }
    }


    const [TempProjectName, setTempProjectName] = React.useState(projectName);
    const [TempProjectDescription, setTempProjectDescription] = React.useState(projectDescription);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    
    const handleUpdateProject = () => {
        updateProyect(token,id,TempProjectName,TempProjectDescription);
        setProjectName(TempProjectName);
        setProjectDescription(TempProjectDescription);
        handleCloseEdit();
    };
        

    const [selectedComprobante, setSelectedComprobante] = React.useState(null);
    const [openImageModal, setOpenImageModal] = React.useState(false);
    const handleOpenImageModal = (cell) => {
        setSelectedComprobante(cell.comprobante);
        setOpenImageModal(true);
    };

    return(
        <div className="h-screen">
            <div className="flex flex-col py-10 justify-center gap-4 text-center">
                <div>
                    <h1 className="text-bold text-2xl">{projectName}</h1>
                    <p>{projectDescription}</p>
                </div>
                <div className="flex justify-center gap-4">
                    <Button variant="outlined" onClick={handleOpenB} startIcon={<FaRegTrashAlt />}>
                        Eliminar
                    </Button>
                    <Button variant="contained" startIcon={<FaEdit/>} onClick={handleOpenEdit}>
                        Editar
                    </Button>
                </div>
            </div>
            <div>
                <Tabs tabs={tabsN} content={tabsContent}>
                </Tabs>
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
                        Esta acción eliminará este proyecto. ¿Quieres continuar?
                    </p>
                    <Button variant="outlined" onClick={handleBorrar} color="error" style={{ width: "45%" }}>
                        Borrar
                    </Button>
                    <Button variant="contained" onClick={handleCloseB} style={{ width: "45%" }}>
                        Cancelar
                    </Button>
                </Box>
            </Modal>
            <Modal open={openEdit} onClose={handleCloseEdit}>
                <CustomBox moreStyles={{width: 400}}>
                    <h2>Editar Proyecto</h2>
                    <TextField
                    label="Nombre del Proyecto"
                    value={TempProjectName}
                    onChange={(e) => setTempProjectName(e.target.value)}
                    fullWidth
                    />
                    <TextField
                    label="Descripción del Proyecto"
                    value={TempProjectDescription}
                    onChange={(e) => setTempProjectDescription(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ mt: 2 }}
                    />
                    <Button onClick={handleUpdateProject} variant="contained" sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}>
                    Guardar
                    </Button>
                </CustomBox>
            </Modal>
            <Modal open={openImageModal} onClose={() => setOpenImageModal(false)}>
                <CustomBox moreStyles={{width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {selectedComprobante && <img src={selectedComprobante} alt="Comprobante" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                </CustomBox>
            </Modal>
        </div>
    );
}

export default Proyecto;