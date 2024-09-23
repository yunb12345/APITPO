import * as React from 'react';


import Tabs from "../components/tabs";
import Miembros from "../components/miembros";
import TransaccionGrupo from "../components/transaccionGrupo";

import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const Proyecto = () =>{

/*tabla para transaccion*/
const dataTransaccion = [
    {
      id: 1,
      nameTransaccion:'Pago rueda',
      date: '"2015-03-25"',
      value: 321,
      comprobante:"default",
    },
    {
        id: 2,
        nameTransaccion:'Pago motor',
        date: '"2015-03-25"',
        value: 321,
        comprobante:"default",
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
        name:'Miembros',
        selector: row => row.name,
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
        name:'Agustin',
        transacciones:200,
    },
    {
        id:2,
        name:'Alex',
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




    

const tabsContent = [<TransaccionGrupo tablaColumna={columnsTransaccion} tablaContenido={dataTransaccion}/>,<Miembros tablaColumna={columnsMiembro} tablaContenido={dataMiembro}/>]
//





    
const [openEdit, setOpenEdit] = React.useState(false);
const [projectName, setProjectName] = React.useState('Nombre del proyecto');
const [projectDescription, setProjectDescription] = React.useState('Descripcion del proyecto');

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
                <Box sx={{ ...style, width: 400 }}>
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
                </Box>
            </Modal>
            <Modal open={openImageModal} onClose={() => setOpenImageModal(false)}>
                <Box sx={{ ...style, width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {selectedComprobante && <img src={selectedComprobante} alt="Comprobante" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                </Box>
            </Modal>
        </div>
    );
}

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

export default Proyecto;