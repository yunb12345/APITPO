import * as React from 'react';
import Button from '@mui/material/Button';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomBox from "../components/box";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const Board = () => { 

    const proyects = [
        {
            id:1,
            nombre:'Proyecto 1',
            descripcion:'ejemplo1',
            fecha:'Junio 10, 2018',
            balance:-180
        },
        {
            id:2,
            nombre:'Proyecto 2',
            descripcion:'ejemplo2',
            fecha:'Junio 7, 2018',
            balance:880
        },
        {
            id:3,
            nombre:'Proyecto 3',
            descripcion:'ejemplo3',
            fecha:'Agosto 10, 2018',
            balance:10000
        },

    ]
    let totalBalance = 0;
    let balanceNegativo = 0;
    let balancePositivo = 0;
  
    proyects.forEach(proyecto => {
        totalBalance += proyecto.balance;
        if (proyecto.balance < 0) {
          balanceNegativo+=proyecto.balance;
        } else if (proyecto.balance > 0) {
          balancePositivo+=proyecto.balance;
        }
    });

    const [proyectos, setProyectos] = React.useState(proyects);

    const [rows, setRows] = React.useState(proyectos);

    const [newProyecto, setNewProyecto] = React.useState({
        id: proyectos[proyectos.length-1].id + 1,
        nombre:'',
        descripcion:'',
        fecha:'',
        balance:0
    })
    const [openCreateProyect, setOpenCreateProyect] = React.useState(false);
    const createProyect = () => setOpenCreateProyect(true);
    const handleCloseProyect = () => setOpenCreateProyect(false);

    const handleAddProyecto = () => {
        if(newProyecto.nombre !== "" && newProyecto.descripcion !== ""){
            const meses = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            
            const fecha = new Date();
            const dia = fecha.getDate();
            const mes = meses[fecha.getMonth()];
            const año = fecha.getFullYear();
            newProyecto.fecha = `${mes} ${dia}, ${año}`
            setProyectos([...proyectos, { id: newProyecto.id, nombre: newProyecto.nombre, descripcion: newProyecto.descripcion, fecha: newProyecto.fecha, balance: newProyecto.balance}]);
            setNewProyecto({ nombre: '', descripcion: '', fecha: '', balance: 0 });
            handleCloseProyect();
        }
        
    }

    return (
        <div className='mx-10'>
            <div className='flex flex-col justify-between m-auto items-center py-5'>
                <div className="items-center py-5">
                    <h2 className='text-6xl font-bold'>${totalBalance}</h2>
                </div>
                <div className='flex flex-row border-2 gap-5 p-3 text-center bg-white shadow-sm rounded-lg items-center w-2/3 lg:w-1/3'>
                    <div className='flex flex-col text-xl font-bold w-1/2'>
                        <div>
                            <p className='m-0'>Te deben</p>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <FaArrowUp className='text-emerald-500'/>
                            <p className='text-emerald-500'>{balancePositivo}</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-xl font-bold w-1/2'>
                        <div>
                            <p className='m-0'>Debes</p>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <FaArrowDown className='text-rose-600'/>
                            <p className='text-rose-600'>{balanceNegativo}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-14 relative'>
                <div className='flex flex-col justify-between p-7 gap-4 lg:flex-row'>
                    <h1 className='text-4xl font-bold m-2 text-center lg:text-left'>Mis proyectos</h1>
                    <Button variant="contained" onClick={createProyect} startIcon={<IoIosAddCircleOutline/>}>Crear Proyecto</Button>
                </div>
                <div className='flex flex-col gap-4'>
                {proyectos.map((pro,index) => 
                    (
                        <Link to={"/proyecto/" + pro.id} key={index} state={pro}>
                            <div key={index} className='flex justify-between bg-white shadow-sm m-3 p-4 rounded-sm hover:shadow-lg transition-all'>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-2xl'>{pro.nombre}</p>
                                    <p className='font-bold text-lg text-stone-500'>{pro.descripcion}</p>
                                    <p>{pro.fecha}</p>
                                </div>
                                <div className=' content-center'>
                                    <p className={pro.balance > 0 ? 'text-emerald-500 text-xl' : 'text-rose-600 text-xl'}>{pro.balance}</p>
                                </div>
                            </div>
                        </Link>
                    )
                )}
                </div>
            </div>
            <Modal open= {openCreateProyect} onClose={handleCloseProyect}>
                <CustomBox moreStyles={{width:400}}>
                    <h2>Crear Proyecto</h2>
                    <TextField
                    label="Nombre"
                    value={newProyecto.nombre}
                    onChange={(e) => setNewProyecto({ ...newProyecto, nombre: e.target.value })}
                    fullWidth
                    />
                    <TextField
                    label="Descripcion"
                    value={newProyecto.descripcion}
                    onChange={(e) => setNewProyecto({ ...newProyecto, descripcion: e.target.value })}
                    fullWidth
                    sx={{ mt: 2 }}
                    />
                    <Button onClick={handleAddProyecto} variant="contained" sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}>
                    Añadir
                    </Button>
                </CustomBox>
            </Modal>
        </div>

    );
};

export default Board;