import * as React from 'react';
import Tabla from "../components/tabletran";

const datat = [
    {
      id: 1,
      title: 'Proyecto1',
      date: '"2015-03-25"',
      value: 321,
      comprobante: "test"
    },
    {
        id: 2,
        title: 'Proyecto2',
        date: '"2018-01-12"',
        value: 489,
        comprobante: "test2"
    },
]
const columnst = [
	{
		name: 'Nombre del proyecto',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Fecha',
		selector: row => row.date,
		sortable: true,
	},
	{
		name: 'Monto',
		selector: row => row.value,
		sortable: true,
	},
    {
		name: 'Comprobante',
		selector: row => row.comprobante.name,
		sortable: true,
	},
    
];

const Transaccion = () =>{
    return(
        <div className='mx-5 lg:mx-20 h-screen'>
            <div className='py-10'>
                <h1 className='text-center text-4xl font-bold'>Transacciones</h1>
            </div>
            <div>
                <Tabla data={datat} columns={columnst}>
                </Tabla>
            </div>
        </div>
    );
}
export default Transaccion;