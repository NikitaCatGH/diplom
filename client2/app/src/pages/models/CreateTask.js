import React, { useContext, useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../index';
const CreateTask = ({ show, onHide }) => {
    const { info } = useContext(Context);
    const [infoTask, setInfoTask] = useState([]);
    console.log(info.disciplines);
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"

            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить задание
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>Выбрать Дисциплину</Dropdown.Toggle>
                        <Dropdown.Menu>

                            {info.disciplines.map(disc => <Dropdown.Item key={disc.id}>{disc.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className='mt-3 mb-3' placeholder='Введите название задания' />
                    <Form.Control className='mt-3 mb-3' placeholder='Выберите файл' type="file" />


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTask;