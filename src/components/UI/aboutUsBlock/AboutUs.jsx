import React from 'react';
import classes from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h1 className={classes.title}>О нас</h1>
                <div className={classes.info}>
                    <img className={classes.img} alt="image" src="https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0="/>
                    <p className={classes.text}>Наша компания была создана в 2016 для помощи в развитии цифровой журналистики. Мы успешно прошли последнее последние годы, обучив более 20 000 учеников в наших 6 филиалах расположенных по всей Беларуси. За это время мы создали десятки новых долгосрочных и краткосрочных образовательных программ, запустили онлайн-направление. Так же мы включили обучение телевизионным специальностям в нашу программу, пусть это направление уже давно не является хэдлайнером.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;