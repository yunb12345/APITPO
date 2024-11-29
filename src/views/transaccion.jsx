import * as React from 'react';
import Tabla from "../components/tabletran";
import {getTransaccionByUserId} from "../api/transaccion_api";
import { AuthContext } from "../components/authContext";
import Modal from '@mui/material/Modal';
import CustomBox from "../components/box"

const Transaccion = () =>{
    const { user } = React.useContext(AuthContext); //datos del usuario logueado
    const[datat,setDatat] = React.useState([]);
    React.useEffect(() =>{
        const fetchData = async() =>{
            const data = await getTransaccionByUserId(user.id);
            setDatat(data);
            console.log(datat)
        };
        if(user){
            fetchData();
        }
    },[user]);

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
            selector: (row) => <span onClick={() => handleOpenImageModal(row, { selector: row.comprobante })}>ticket</span>,
            sortable: true,
        },
    ];

    const [selectedComprobante, setSelectedComprobante] = React.useState(null);
    const [openImageModal, setOpenImageModal] = React.useState(false);
    const handleOpenImageModal = (comprobante) => { 
      setSelectedComprobante(comprobante.comprobante);
      setOpenImageModal(true);
    };


    return(
        <div className='mx-5 lg:mx-20 h-screen'>
            <div className='py-10'>
                <h1 className='text-center text-4xl font-bold'>Transacciones</h1>
            </div>
            <div>
                <Tabla data={datat} columns={columnst}>
                </Tabla>
            </div>
            {/* Modal para mostrar la imagen del comprobante */}
            <Modal open={openImageModal} onClose={() => setOpenImageModal(false)}>
                <CustomBox moreStyles={{width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {selectedComprobante && <img src={selectedComprobante} alt="Comprobante" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                </CustomBox>
            </Modal>
        </div>
    );
}
export default Transaccion;