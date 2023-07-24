import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Header from './components/header/Header';
import Conceitos from './pages/Banco/Conceitos/Conceitos';
import Sobre from './pages/Sobre/Sobre';
import Artes from './pages/Arquivos/Artes/Artes';
import Videos from './pages/Arquivos/Videos/Videos';
import Mapas from './pages/Arquivos/Mapas/Mapas';
import Tecnico from './pages/Arquivos/Tecnico/Tecnico';
import Locais from './pages/Banco/Locais/Locais';
import Missoes from './pages/Banco/Missoes/Missoes';
import Personagens from './pages/Banco/Personagens/Personagens';
import Racas from './pages/Banco/Racas/Racas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>

     <Header/>
     <Routes>

      {/* Geral */}

     <Route path="/apocrifosrpg" element= {<Home/>} />
     <Route path="/sobre" element= {<Sobre/>} />

      {/* Menu dropdown Bacno */}

       <Route path="/conceitos" element= {<Conceitos/>} />
       <Route path="/locais" element= {<Locais/>} />
       <Route path="/missoes" element= {<Missoes/>} />
       <Route path="/personagens" element= {<Personagens/>} />
       <Route path="/racas" element= {<Racas/>} />


      {/* Menu dropdown Arquivos */}

       <Route path="/artes" element= {<Artes/>} />
       <Route path="/videos" element= {<Videos/>} />
       <Route path="/mapas" element= {<Mapas/>} />
       <Route path="/tecnico" element= {<Tecnico/>} />

     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
