import * as React from 'react';
import { useLocation } from 'react-router-dom';

import Tabs from "../components/tabs";
import Miembros from "../components/miembros";
import TransaccionGrupo from "../components/transaccionGrupo";

import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CustomBox from "../components/box";

const Proyecto = () =>{

    const location = useLocation();
    const project = location.state;  //Recibimos info del proyecto de la pagina board

    /*tabla para transaccion*/
    const dataTransaccion = [
        {
            id: 1,
            nameTransaccion:'Pago rueda',
            date: '"2015-03-25"',
            value: 321,
            comprobante:"default",
            participantes:[
                {
                    nombre:"Bam",
                    porcentaje:50,
                },
                {
                    nombre:"shkhs",
                    porcentaje:50,
                },
            ],
        },
        {
            id: 2,
            nameTransaccion:'Pago motor',
            date: '"2015-03-25"',
            value: 500,
            comprobante:"default",
            participantes:[
                {
                    nombre:"Bam",
                    porcentaje:60,
                },
                {
                    nombre:"shkhs",
                    porcentaje:20,
                },
                {
                    nombre:"Mat",
                    porcentaje:20,
                },
            ],
        },
    ]
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
            cell: (row) => <span onClick={() => handleOpenImageModal(row, { selector: row.comprobante.name })}>{row.comprobante.name}</span>,
            sortable: true,
        },
        
    ];
    //

    /*tabla para miembros*/
    const columnsMiembro = [
        {
            name:'Usuario',
            selector: row => row.userName,
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
            selector: row => "$" + row.transacciones,
            sortable: true,
        },
    ];

    const dataMiembro = [
        {
            id: 1,
            userName:'Bam',
            name:'Agustin',
            lastName:'Yoon',
            transacciones:200,
        },
        {
            id:2,
            userName:'shkh',
            name:'Alex',
            lastName:'Yoon',
            transacciones:430,
        }
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

    //contenido de los tabs
    const tabsContent = [<TransaccionGrupo tablaColumna={columnsTransaccion} tablaContenido={dataTransaccion} expandable={true}/>,
    <Miembros tablaColumna={columnsMiembro} tablaContenido={dataMiembro}/>]

    const [openEdit, setOpenEdit] = React.useState(false);
    const [projectName, setProjectName] = React.useState(project.nombre);  //usamos el valor recibido por el location state
    const [projectDescription, setProjectDescription] = React.useState(project.descripcion);

    const [TempProjectName, setTempProjectName] = React.useState(projectName);
    const [TempProjectDescription, setTempProjectDescription] = React.useState(projectDescription);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    
    const handleUpdateProject = () => {
        setProjectName(TempProjectName);
        setProjectDescription(TempProjectDescription);
        handleCloseEdit();
    };
        

    const [selectedComprobante, setSelectedComprobante] = React.useState(null);
    const [openImageModal, setOpenImageModal] = React.useState(false);
    const handleOpenImageModal = (cell) => {
        console.log(cell);
        setSelectedComprobante(URL.createObjectURL(cell.comprobante));
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
                    <Button variant="outlined" startIcon={<FaRegTrashAlt />}>
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