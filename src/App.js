import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MaestrosAltas from './component/MaestrosAltas';
import MaestrosEditar from './component/MaestrosEditar';
import MaestrosEliminar from './component/MaestrosEliminar'

import AlumnosAltas from './component/AlumnosAltas';
import AlumnosEditar from './component/AlumnosEditar';
import AlumnosEliminar from './component/AlumnosEliminar';

import MateriasAlta from './component/MateriasAlta';
import MateriasEditar from './component/MateriasEditar';
import MateriasEliminar from './component/MateriasEliminar';

import InventarioAltas from './component/InventarioAltas';
import InventarioEditar from './component/InventarioEditar';
import InventarioEliminar from './component/InventarioEliminar';

import PrestamosPrestar from './component/PrestamosPrestar';
import PrestamosEditar from './component/PrestamosEditar';
import PrestamosEntregar from './component/PrestamosEntregar';

import CporMaestro from './component/CporMaestro';
import CporAlumno from './component/CporAlumno';
import CporPrestamo from './component/CporPrestamo';
import CgMaestro from './component/CgMaestro';
import CgAlumno from './component/CgAlumno';
import CbajasInv from './component/CbajasInv';



import Alumnos from './component/Alumnos';
import Grados from './component/Grados';
import Materias from './component/Materias';
import Inicio from './component/Inicio';


import './styles/App.css';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/MaestrosAltas" exact component={MaestrosAltas}/>
          <Route path="/MaestrosEditar" exact component={MaestrosEditar}/>
          <Route path="/MaestrosEliminar" exact component={MaestrosEliminar}/>

          <Route path="/AlumnosAltas" exact component={AlumnosAltas}/>
          <Route path="/AlumnosEditar" exact component={AlumnosEditar}/>
          <Route path="/AlumnosEliminar" exact component={AlumnosEliminar}/>

          <Route path="/MateriasAlta" exact component={MateriasAlta}/>
          <Route path="/MateriasEditar" exact component={MateriasEditar}/>
          <Route path="/MateriasEliminar" exact component={MateriasEliminar}/>

          <Route path="/InventarioAltas" exact component={InventarioAltas}/>
          <Route path="/InventarioEditar" exact component={InventarioEditar}/>
          <Route path="/InventarioEliminar" exact component={InventarioEliminar}/>

          <Route path="/PrestamosPrestar" exact component={PrestamosPrestar}/>
          <Route path="/PrestamosEditar" exact component={PrestamosEditar}/>
          <Route path="/PrestamosEntregar" exact component={PrestamosEntregar}/>

          <Route path="/CporMaestro" exact component={CporMaestro}/>
          <Route path="/CporAlumno" exact component={CporAlumno}/>
          <Route path="/CporPrestamo" exact component={CporPrestamo}/>
          <Route path="/CgMaestro" exact component={CgMaestro}/>
          <Route path="/CgAlumno" exact component={CgAlumno}/>
          <Route path="/CbajasInv" exact component={CbajasInv}/>

          <Route path="/alumnos" exact component={Alumnos} />
          <Route path="/materias" exact component={Materias} />
          <Route path="/grados" exact component={Grados} />
          <Route path="/test" exact component={() => <h1>Principal</h1>} />
          <Route path="/mantenimiento" exact component={() => <h1>ESTAMOS EN MANTENIMIENTO</h1>} />
          <Route path="*" component={() => <h1>404 Not FOUND</h1>} />
          
        </Switch>
      </BrowserRouter>
  );
}

export default App;
