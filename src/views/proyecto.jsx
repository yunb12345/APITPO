import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import editimg from "../imgs/pencil.png";
import trashimg from "../imgs/trashcan.png";

function createData(nombre, monto, fecha, comprobante) {
  return { nombre, monto, fecha, comprobante };
}

const Proyecto = () => {
  const [integrantes, setIntegrantes] = React.useState([{ nombre: 'Integrante 1' }]);
  const [openIntegrante, setOpenIntegrante] = React.useState(false);
  const [newIntegrante, setNewIntegrante] = React.useState('');

  const [openEdit, setOpenEdit] = React.useState(false);
  const [projectName, setProjectName] = React.useState('Proyecto 1');
  const [projectDescription, setProjectDescription] = React.useState('Descripcion del proyecto');

  const [TempProjectName, setTempProjectName] = React.useState(projectName);
  const [TempProjectDescription, setTempProjectDescription] = React.useState(projectDescription);

  

  const [openMovement, setOpenMovement] = React.useState(false);
  const [newMovement, setNewMovement] = React.useState({
    nombre: '',
    monto: '',
    fecha: '',
    comprobante: null,
  });

  const [rows, setRows] = React.useState([
    createData('Agustin', "$159", "1/1/01", 24),
    createData('Mateo', "$237", "2/2/02", 37),
    createData('Santiago', "$262", "3/3/03", 24),
    createData('Alex', "$305", "4/4/04", 67),
    createData('Federico', "$356", "5/5/05", 49),
  ]);

    
    const [selectedComprobante, setSelectedComprobante] = React.useState(null);
    const [openImageModal, setOpenImageModal] = React.useState(false);
  
    
    const handleOpenImageModal = (comprobante) => {
      console.log("test");
      setSelectedComprobante(URL.createObjectURL(comprobante));
      setOpenImageModal(true);
    };

  const handleOpenIntegrante = () => setOpenIntegrante(true);
  const handleCloseIntegrante = () => setOpenIntegrante(false);

  const handleAddIntegrante = () => {
    if (newIntegrante.trim()) {
      setIntegrantes([...integrantes, { nombre: newIntegrante }]);
      setNewIntegrante('');
      handleCloseIntegrante();
    }
  };
  

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleUpdateProject = () => {
    setProjectName(TempProjectName);
    setProjectDescription(TempProjectDescription);
    handleCloseEdit();
  };

  const handleOpenMovement = () => setOpenMovement(true);
  const handleCloseMovement = () => setOpenMovement(false);

  const handleAddMovement = () => {
    if (newMovement.nombre && newMovement.monto && newMovement.fecha && newMovement.comprobante) {
      console.log(newMovement.comprobante)
      const newRow = createData(newMovement.nombre, newMovement.monto, newMovement.fecha, newMovement.comprobante);
      setRows([...rows, newRow]);
      setNewMovement({ nombre: '', monto: '', fecha: '', comprobante: null });
      handleCloseMovement();
    }


  };

  return (
    <div style={{ display: "flex" }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <h1 style={{ margin: "30px", fontSize: "50px", fontWeight: "bold" }}>{projectName}</h1>
            <div style={{ display: 'flex' }}>
              <img
                alt=""
                src={editimg}
                style={{ width: "5vh", height: "5vh", marginTop: "20px", marginLeft: "20px", cursor: 'pointer' }}
                onClick={handleOpenEdit}
              />
              <img alt="" src={trashimg} style={{ width: "5vh", height: "5vh", marginTop: "20px", marginLeft: "20px" }} />
            </div>
          </div>
          <h3 style={{ margin: "30px", fontSize: "30px" }}>{projectDescription}</h3>
          <Box sx={{ bgcolor: '#cfe8fc', margin: "30px", borderRadius: "28px", backgroundColor: "#d2d2d2" }}>
            <p style={{ marginTop: "30px", marginLeft: "30px", marginRight: "30px", fontSize: "40px", fontWeight: "bold" }}>Balance Total</p>
            <p style={{ marginTop: "30px", marginLeft: "30px", marginRight: "30px", fontSize: "40px", fontWeight: "bold" }}>$8127</p>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Box sx={{
                bgcolor: '#cfe8fc',
                margin: "30px",
                borderRadius: "28px",
                backgroundColor: "#d2d2d2",
                height: "42vh",
              }}>
                <p style={{ marginTop: "30px", marginLeft: "30px", marginRight: "30px", fontSize: "40px", fontWeight: "bold", textAlign: "center" }}>Integrantes</p>
                <Box sx={{
                  width: "95%",
                  height: "75%",
                  overflowX: "hidden",
                  overflowY: "auto",
                  "&::-webkit-scrollbar": {
                    width: 10,
                    marginRight: 20
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "grey",
                    borderRadius: 2
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "black",
                    borderRadius: 2
                  }
                }}>
                  {integrantes.map((integrante, index) => (
                    <p key={index} style={{ marginBottom: "30px", marginLeft: "30px", marginRight: "30px", fontSize: "30px" }}>{integrante.nombre}</p>
                  ))}
                  <Button variant="contained" onClick={handleOpenIntegrante} style={{
                    borderRadius: "30px", width: "80%", backgroundColor: "#FAFF0F", color: "black",
                    height: "50px", marginBottom: "30px", marginLeft: "50px", marginRight: "40px"
                  }}>Añadir Integrante</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ bgcolor: '#cfe8fc', margin: "30px", borderRadius: "28px", backgroundColor: "#d2d2d2", height: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", height: "25%" }}>
                  <p style={{ fontWeight: "bold", fontSize: "40px", marginLeft: "30px", marginRight: "30px" }}>Movimientos</p>
                  <Button variant="contained" onClick={handleOpenMovement} style={{
                    borderRadius: "30px", backgroundColor: "#FAFF0F", color: "black",
                    height: "50px", marginTop: "10px", marginLeft: "30px", marginRight: "30px"
                  }}>Nuevo Movimiento</Button>
                </div>
                <TableContainer sx={{
                  overflowY: "auto",
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  borderRadius: "28px",
                  height: "60%",
                  maxHeight: "40vh",
                  width: "auto",
                  "&::-webkit-scrollbar": {
                    width: 10,
                    marginRight: 20,
                    marginLeft: 20,
                    marginBottom: 20
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "grey",
                    borderRadius: 2
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "black",
                    borderRadius: 2
                  }
                }}>
                  <Table aria-label="simple table" style={{ backgroundColor: "#d2d2d2", fontSize: "30px" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ fontSize: "30px" }}>Integrante</TableCell>
                        <TableCell align="right" style={{ fontSize: "30px" }}>Monto</TableCell>
                        <TableCell align="right" style={{ fontSize: "30px" }}>Fecha</TableCell>
                        <TableCell align="right" style={{ fontSize: "30px" }}>Comprobante</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.nombre} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row" style={{ fontSize: "20px" }}>
                            {row.nombre}
                          </TableCell>
                          <TableCell align="right" style={{ fontSize: "20px" }}>{row.monto}</TableCell>
                          <TableCell align="right" style={{ fontSize: "20px" }}>{row.fecha}</TableCell>
                          <TableCell align="right" style={{ fontSize: "20px" }}>
                            <button onClick={() => { handleOpenImageModal(row.comprobante) }}>{row.comprobante.name}</button>
                            </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Modal para añadir integrante */}
        <Modal open={openIntegrante} onClose={handleCloseIntegrante}>
          <Box sx={{ ...style, width: 400 }}>
            <h2>Añadir Integrante</h2>
            <TextField
              label="Nombre del Integrante"
              value={newIntegrante}
              onChange={(e) => setNewIntegrante(e.target.value)}
              fullWidth
            />
            <Button onClick={handleAddIntegrante} variant="contained" sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}>
              Añadir
            </Button>
          </Box>
        </Modal>

        {/* Modal para editar nombre y descripción del proyecto */}
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

        {/* Modal para añadir movimiento */}
        <Modal open={openMovement} onClose={handleCloseMovement}>
          <Box sx={{ ...style, width: 400 }}>
            <h2>Añadir Movimiento</h2>
            <TextField
              label="Nombre"
              value={newMovement.nombre}
              onChange={(e) => setNewMovement({ ...newMovement, nombre: e.target.value })}
              fullWidth
            />
            <TextField
              label="Monto"
              value={newMovement.monto}
              onChange={(e) => setNewMovement({ ...newMovement, monto: e.target.value })}
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Fecha"
              value={newMovement.fecha}
              onChange={(e) => setNewMovement({ ...newMovement, fecha: e.target.value })}
              fullWidth
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              component="label"
              sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}
            >
              Adjuntar Comprobante
              <input
                type="file"
                hidden
                onChange={(e) => setNewMovement({ ...newMovement, comprobante: e.target.files[0] })}
              />
            </Button>
            <Button onClick={handleAddMovement} variant="contained" sx={{ mt: 2, backgroundColor: '#FAFF0F', color: 'black' }}>
              Añadir
            </Button>
          </Box>
        </Modal>

        {/* Modal para mostrar la imagen del comprobante */}
        <Modal open={openImageModal} onClose={() => setOpenImageModal(false)}>
            <Box sx={{ ...style, width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {selectedComprobante && <img src={selectedComprobante} alt="Comprobante" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
            </Box>
        </Modal>

      </React.Fragment>
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
