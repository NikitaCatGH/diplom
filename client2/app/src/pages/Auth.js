import React, { useContext, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../index';
const Auth = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useContext(Context);
    const enter = (login, pass) => {
        const l = "LoginAdmin";
        const p = "Password";

        if (l == login && p == pass) {
            console.log("kruto", 'login', login, 'pas', pass);
            return user.Auth = true;
        }
        else {
            console.log("ploho", 'login', login, 'pas', pass);
            return alert("неверные данные");
        }
    };

    return (
        <Container className='mt-3'>
            <h1>Вход в панель администратора</h1>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Введите логин</Form.Label>
                    <Form.Control placeholder="Введите логин" value={login} onChange={e => setLogin(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={enter}>
                    Войти
                </Button>
            </Form>

        </Container>
    );
};

export default Auth;