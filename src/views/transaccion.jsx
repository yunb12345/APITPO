import * as React from 'react';
import Tabla from "../components/tabletran";
import {getTransaccionByUserId} from "../api/transaccion_api";
import { AuthContext } from "../components/authContext";

const Transaccion = () =>{
    const { user } = React.useContext(AuthContext); //datos del usuario logueado
    const[datat,setDatat] = React.useState([]);
    //const token = sessionStorage.getItem('access-token');
    React.useEffect(() =>{
        const fetchData = async() =>{
            const data = await getTransaccionByUserId(user.id);
            setDatat(data);
        };
        if(user){
            fetchData();
        }
    },[user,setDatat]);

    const columnst = [
        {
            name: 'Nombre del proyecto',
            selector: row => row.projectTitle,
            sortable: true,
        },
        {
            name: 'Nombre Transaccion',
            selector: row => row.transactionName,
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