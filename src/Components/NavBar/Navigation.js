import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            
            <div>
            <Navbar bg="dark" expands="lg">
            <Navbar.Brand className="text-white">RK
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Covid-19-Tracker/">Covid India</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Covid-19-Tracker/World">Covid World</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Covid-19-Tracker/About">About Covid-19</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Covid-19-Tracker/MythBusters">Myth Busters</NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Covid-19-Tracker/Form">Test Yourself</NavLink>
            </Nav>   
            </Navbar.Collapse>
            </Navbar>
            </div>
           
        )
    }
}
export default Navigation;