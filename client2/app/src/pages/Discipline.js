import React from 'react';
import { Button } from 'react-bootstrap';

const Discipline = () => {
    return (
        <div className="container">
            <h1 >Выберите дисциплину</h1>
            <div className='d-flex flex-row bd-highlight mb-3 ' ></div>
            <Button className="mr-3">МДК 01.01</Button>
            <Button className="mr-3">МДК 01.02</Button>
            <Button className="mr-3">МДК 02.01</Button>
            <Button className="mr-3">МДК 02.02</Button>
            <div className='text-center fs-3'>
                <p className="text-center fs-1 mt-3">МДК 01.01</p>
                <p>Задание №1</p>
                <p>Разделение прав доступа в проекте. Командная подготовка модулей общего проекта</p>
                <object><embed src="https://docs.google.com/document/d/1aADRQ652y5_zU9ewgOL4saCWK4scQXkf2xxYIjCdLgo/" width="700" height="800" /></object>
                <p>Задания разные</p>
                <p>Задания разные</p>
            </div>
        </div>
    );
};

export default Discipline;