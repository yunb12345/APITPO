import './App.css';
import Layout from "./layout/Layout"
import Home from "./views/home";
import Registrar from "./views/registrar";
import Login from "./views/login";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Profile from "./views/profile";
import Board from "./views/board";
import Transaction from "./views/transaccion";
import Proyecto from "./views/proyecto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/board' element={<Board/>}/>
          <Route path='/transactions' element={<Transaction/>}/>
          <Route path='/proyecto' element={<Proyecto/>}/>
        </Route>
        <Route path='/register' element={<Registrar/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>


  );
}

export default App;