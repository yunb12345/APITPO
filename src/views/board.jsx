import * as React from 'react';
import Button from '@mui/material/Button';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import CustomBox from "../components/box";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {getProyectos,crearProyecto} from '../api/board_api';
import {AuthContext} from '../components/authContext';

const Board = () => {
    const [proyectos, setProyectos] = React.useState([]);
    const {user} = React.useContext(AuthContext);
    const token = sessionStorage.getItem('access-token');
    React.useEffect(() => {
        if(user){
            getProyectos(user.id,setProyectos);
        }

    }, [user,setProyectos]);

    let totalBalance = 0;
    
    proyectos.forEach(proyecto => {
        totalBalance += proyecto.balance;
    });

    const [newProyecto, setNewProyecto] = React.useState({
        nombre:'',
        descripcion:'',
        fecha:'',
        balance:0
    });
    const [openCreateProyect, setOpenCreateProyect] = React.useState(false);
    const createProyect = () => setOpenCreateProyect(true);
    const handleCloseProyect = () => setOpenCreateProyect(false);

    const handleAddProyecto = async () => {
        try{
            if(newProyecto.nombre !== "" && newProyecto.descripcion !== ""){
                const createdProyect = await crearProyecto(token,user.id,newProyecto.nombre,newProyecto.descripcion);
                setProyectos([...proyectos, createdProyect]);
                setNewProyecto({ nombre: '', descripcion: '', fecha: '', balance: 0 });
                handleCloseProyect();
            }
        }
        catch(error){
            console.error("Error al crear el proyecot",error);
        }
    }

    return (
        <div className='mx-10 min-h-screen'>
            <div className='flex flex-col justify-between m-auto items-center py-5'>
                <div className="flex flex-col items-center py-7 content-center gap-5 text-center">
                    <h2 className='text-4xl lg:text-5xl font-bold'>Costo total de todos los proyectos</h2>
                    <h2 className='text-4xl text-slate-700 lg:text-5xl font-bold'>${totalBalance}</h2>
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
                                    <p className='font-bold text-2xl'>{pro.proyectName}</p>
                                    <p className='font-bold text-lg text-stone-500'>{pro.proyectDesc}</p>
                                    <p>{pro.fecha}</p>
                                </div>
                                <div className=' content-center'>
                                    <p className='text-slate-600 text-xl'>${pro.balance}</p>
                                </div>
                            </div>
                        </Link>
                    )
                )}
                </div>
            </div>
            <Modal open= {openCreateProyect} onClose={handleCloseProyect}>
                <CustomBox moreStyles={{width:400}}>
                    <h2 className='py-5'>Crear Proyecto</h2>
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