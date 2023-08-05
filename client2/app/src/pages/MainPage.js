import React from 'react';
import MainFon from '../static/MainFon.jpg';
import Logo from '../static/Logo.jpg';
import { Container } from 'react-bootstrap';


const MainPage = () => {
    return (
        <>
            <div className={'d-flex justify-content-center align-items-center '} style={{
                backgroundImage: `url(${Logo})`,
                height: 250

            }}>

                <h1 className="text-white font-monospace">Главная страница портала</h1>
            </div>
            <Container className="d-flex justify-content-center align-items-center mt-5" style={{ width: 600 }}>
                <p className='fs-3'>Добро пожаловать на мой электронный портал, дорогие студенты! Здесь вы найдете всю необходимую информацию о курсах, которые я преподаю, а также задания, которые необходимо выполнить. Я надеюсь, что этот портал станет для вас удобным инструментом для обучения и поможет вам достичь успеха в своей учебе. Если у вас есть какие-либо вопросы, не стесняйтесь обращаться ко мне. Желаю вам продуктивного обучения!</p>
            </Container>
            <Container className="d-flex justify-content-center align-items-center mt-5" style={{ width: 600 }}>
                e-mail: kit-2003@mail.ru
            </Container>
        </>
    );
};

export default MainPage;




{/* <img src={MainFon} width={250} height={250} alt='Large Pizza'>

</img> */}