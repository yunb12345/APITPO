import './App.css';
import Layout from "./layout/Layout"
import Home from "./views/home";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </Router>


  );
}

export default App;