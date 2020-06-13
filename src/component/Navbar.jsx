import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
import '../styles/index.css';
import IcoNav from '../assets/IcoNav.png';
class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="fondonav navbar navbar-expand-lg navbar-dark ">
                <a className="navbar-brand" href="#">
                    <img src={IcoNav} width="30" height="30" class="d-inline-block align-top"></img>
                    App-Lend
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><span className={this.getNavLinkClass("/")}><NavLink to="/">Inicio</NavLink></span> <span className="sr-only">(current)</span></a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Maestros
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/MaestrosAltas")}><NavLink to="/MaestrosAltas">Agregar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/MaestrosEditar")}><NavLink to="/MaestrosEditar">Editar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/MaestrosEliminar")}><NavLink to="/MaestrosEliminar">Eliminar</NavLink></span>
                                </a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Alumnos
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/AlumnosAltas")}><NavLink to="/AlumnosAltas">Agregar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/AlumnosEditar")}><NavLink to="/AlumnosEditar">Editar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/AlumnosEliminar")}><NavLink to="/AlumnosEliminar">Eliminar</NavLink></span>
                                </a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Materias
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/MateriasAlta")}><NavLink to="/MateriasAlta">Agregar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/MateriasEditar")}><NavLink to="/MateriasEditar">Editar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/MateriasEliminar")}><NavLink to="/MateriasEliminar">Eliminar</NavLink></span>
                                </a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Inventario
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/InventarioAltas")}><NavLink to="/InventarioAltas">Agregar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/InventarioEditar")}><NavLink to="/InventarioEditar">Editar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/InventarioEliminar")}><NavLink to="/InventarioEliminar">Eliminar</NavLink></span>
                                </a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Prestamos
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/PrestamosPrestar")}><NavLink to="/PrestamosPrestar">Prestar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/PrestamosEditar")}><NavLink to="/PrestamosEditar">Editar</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/PrestamosEntregar")}><NavLink to="/PrestamosEntregar">Entregar</NavLink></span>
                                </a>
                            </div>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Consultas
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/CporMaestro")}><NavLink to="/CporMaestro">Por Maestro</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/CporAlumno")}><NavLink to="/CporAlumno">Por Alumno</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/CporPrestamo")}><NavLink to="/CporPrestamo">Por Prestamo</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/CgMaestro")}><NavLink to="/CgMaestro">General Maestro</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/CgAlumno")}><NavLink to="CgAlumno/">General Alumno</NavLink></span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <span className={this.getNavLinkClass("/CbajasInv")}><NavLink to="/CbajasInv">Bajas de Inventario</NavLink></span>
                                </a>
                            </div>
                        </li>

                        
                        
                    </ul>
                    
                </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;