import './App.css';
import Layout from "./layout/Layout"
import Home from "./views/home";
import Registrar from "./views/registrar";
import Login from "./views/login";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route path='/registrar' element={<Registrar/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>


  );
}

export default App;