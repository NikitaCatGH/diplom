import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateDiscipline from './models/CreateDiscipline';
import CreateGroup from './models/CreateGroup';
import CreateTask from './models/CreateTask';
const Admin = () => {
    const [disciplineVisible, setDicsiplineVisible] = useState(false);
    const [groupVisible, setGroupVisible] = useState(false);
    const [taskVisible, setTaskVisible] = useState(false);
    return (
        <>
            <h1 className='container'>Панель администратора</h1>
            <Container className='d-flex flex-column'>
                <Button variant={"outline-dark"} className='mt-2 p-2' onClick={() => setDicsiplineVisible(true)}>Добавить дисциплину</Button>
                <Button variant={"danger"} className='mt-2 p-2' onClick={() => setDicsiplineVisible(true)}>Удалить дисциплину</Button>
                <Button variant={"outline-dark"} className='mt-2 p-2' onClick={() => setGroupVisible(true)}>Добавить Группу</Button>
                <Button variant={"danger"} className='mt-2 p-2' onClick={() => setDicsiplineVisible(true)}>Удалить Группу</Button>
                <Button variant={"outline-dark"} className='mt-2 p-2' onClick={() => setTaskVisible(true)}>Добавить Задание</Button>
                <Button variant={"danger"} className='mt-2 p-2' onClick={() => setDicsiplineVisible(true)}>Удалить Задание</Button>
                <CreateDiscipline show={disciplineVisible} onHide={() => setDicsiplineVisible(false)} />
                <CreateGroup show={groupVisible} onHide={() => setGroupVisible(false)} />
                <CreateTask show={taskVisible} onHide={() => setTaskVisible(false)} />

            </Container>
        </>
    );
};

export default Admin;