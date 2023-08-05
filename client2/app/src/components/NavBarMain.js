import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const NavBarMain = () => {

    const { user } = useContext(Context);
    return (
        <>
            <Navbar style={{
                backgroundColor: "#054545"
            }} variant="dark" >
                <Container >
                    <Navbar.Brand href="/">Главная страница портала</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to='/discipline'>
                            <Button style={{
                                backgroundColor: "#065757"
                            }}  >Дисциплины</Button>
                        </NavLink>
                        <NavLink to='/auth'>
                            <Button style={{
                                backgroundColor: "#065757"
                            }} className='ml-3'>Панель администратора</Button>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBarMain;