import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
        <div style={{minHeight: '100vh'}} > 
        <Routes>
          <Route path= '/home' element={<Home />}  />
          <Route path= '/' element={<Login />}  />
          <Route path= '/login' element={<Login />}  />
          <Route path= '/cadastrousuario' element={<CadastroUsuario />}  />
          <Route path= '/temas' element={<ListaTema />}  />
          <Route path= '/postagens' element={<ListaPostagem />}  />
        </Routes>
        </div>
      <Footer />
    </Router>
    
  );
}

export default App;
