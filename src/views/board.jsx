import * as React from 'react';
import Button from '@mui/material/Button';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const proyectos = [
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


const Board = () => {    
    return (
        <div className='mx-10'>
            <div className='flex flex-col justify-between m-auto items-center py-5'>
                <div className="items-center py-5">
                    <h2 className='text-6xl font-bold'>$56,00</h2>
                </div>
                <div className='flex flex-row border-2 gap-5 p-3 text-center bg-white shadow-sm rounded-lg items-center w-2/3 lg:w-1/3'>
                    <div className='flex flex-col text-xl font-bold w-1/2'>
                        <div>
                            <p className='m-0'>Te deben</p>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <FaArrowUp className='text-emerald-500'/>
                            <p className='text-emerald-500'>58,30</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-xl font-bold w-1/2'>
                        <div>
                            <p className='m-0'>Debes</p>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <FaArrowDown className='text-rose-600'/>
                            <p className='text-rose-600'>1,40</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-14 relative'>
                <div className='flex flex-col justify-between p-7 gap-4 lg:flex-row'>
                    <h1 className='text-4xl font-bold m-2 text-center lg:text-left'>Mis proyectos</h1>
                    <Button variant="contained" startIcon={<IoIosAddCircleOutline/>}>Crear Proyecto</Button>
                </div>
                <div className='flex flex-col gap-4'>
                {proyectos.map((pro,index) => 
                    (
                        <Link to={"/proyecto/" + pro.id} key={index} state={pro}>
                            <div key={index} className='flex justify-between bg-white shadow-sm m-3 p-4 rounded-sm hover:shadow-lg transition-all'>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-2xl'>{pro.nombre}</p>
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
            
        </div>

    );
};

export default Board;