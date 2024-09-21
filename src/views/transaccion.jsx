import * as React from 'react';
import Tabla from "../components/tabletran";

const transaccion = () =>{
    return(
        <div className='mx-5 lg:mx-20 h-screen'>
            <div className='py-10'>
                <h1 className='text-center text-4xl font-bold'>Transacciones</h1>
            </div>
            <div>
                <Tabla>
                </Tabla>
            </div>
        </div>
    );
}
export default transaccion;