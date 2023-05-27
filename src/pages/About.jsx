import React from 'react';
import AboutUs from "../components/UI/aboutUsBlock/AboutUs";
import Team from "../components/UI/ourTeam/Team";

const About = () => {
    return (
        <>
            <AboutUs/>
            <Team/>
            <div className="feedback-block">
                <h2 className="feedback__title">Нам доверяют</h2>
                <p className="feedback__text">Главная ценность, которой мы обладаем — это наша репутация и доверие наших клиентов.</p>
                <div className="feedback-block__comments-block">
                    <div className="comments-block__item">
                        <h3 className="comment__name">Алексей | email@gmail.com</h3>
                        <p className="comment__text">На платформе очень удобно заниматься, у сайта красивый интерфейс, с которым приятно работать. Материал изложен просто и понятно, куратор отвечает быстро, а возникшие вопросы можно уточнить.</p>
                    </div>
                    <div className="comments-block__item">
                        <h3 className="comment__name">Елена | email@gmail.com</h3>
                        <p className="comment__text">На платформе очень удобно заниматься, у сайта красивый интерфейс, с которым приятно работать. Материал изложен просто и понятно, куратор отвечает быстро, а возникшие вопросы можно уточнить.</p>
                    </div>
                    <div className="comments-block__item">
                        <h3 className="comment__name">Мария | email@gmail.com</h3>
                        <p className="comment__text">На платформе очень удобно заниматься, у сайта красивый интерфейс, с которым приятно работать. Материал изложен просто и понятно, куратор отвечает быстро, а возникшие вопросы можно уточнить.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;