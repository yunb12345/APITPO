import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import imgadd from "../imgs/plus.png";
import Button from '@mui/material/Button';
import { IoIosAddCircleOutline } from "react-icons/io";


const projects = [
    "Proyecto 1",
    "Proyecto 2",
    "Proyecto 3",
    "Proyecto 4",
    "Proyecto 5",
    "Proyecto 6",
];
const proyectos = [
    {
        nombre:'Proyecto 1',
        fecha:'Junio 10, 2018',
        balance:'-180'
    },
    {
        nombre:'Proyecto 2',
        fecha:'Junio 7, 2018',
        balance:'880'
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
                        <div>
                            <p className='text-emerald-500'>58,30</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-xl font-bold w-1/2'>
                        <div>
                            <p className='m-0'>Debes</p>
                        </div>
                        <div>
                            <p className='text-rose-600'>1,40</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-14 relative'>
                <div className='flex justify-between p-7'>
                    <h1 className='text-3xl font-bold m-2'>Mis proyectos</h1>
                    <Button variant="contained" startIcon={<IoIosAddCircleOutline/>}>Agregar</Button>
                </div>
                

                <div className='flex flex-col gap-4'>
                {proyectos.map(pro => 
                    (
                        <div className='flex justify-between bg-white shadow-sm m-3'>
                            <div className='flex flex-col'>
                                <p>{pro.nombre}</p>
                                <p>{pro.fecha}</p>
                            </div>
                            <div>
                                <p>{pro.balance}</p>
                            </div>
                        </div>
                    )
                )}
                </div>
            </div>
            
        </div>

    );
};

export default Board;