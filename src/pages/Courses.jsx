import React from 'react';
import ADBlock from "../components/UI/adBlock/ADBlock";
import Loader from "../components/UI/loader/Loader";
import "../styles/Courses.css"
import LastCourses from "../components/lastCourses/LastCourses";
import AllCourses from "./studyRoomPages/allCourses/AllCourses";

const Courses = () => {
    return (
        <div>
            <ADBlock/>
            <div className="courses-info-box">
                <div className="courses-info-box__item">
                    <img src="./images/courses1.png" alt="image"/>
                    <div className="paragraph">
                        <h3 className="paragraph__title">Обучайся без ограничений</h3>
                        <p className="paragraph__text">Благодаря нашей платформе и возможности удалённого обучения вы сможете посещать занятия из любой точки. Так же наша огромная база знаний накопившая в себе лучшие материалы в этой сфере не оставит вас равнодушным.</p>
                    </div>
                </div>
                <div className="courses-info-box__item">
                    <div className="paragraph">
                        <h3 className="paragraph__title text-end">Присоединяйся к команде</h3>
                        <p className="paragraph__text">Познакомься и общайся с лучшими специалистами своего дела, которые всегда рады новым лицам в нашей большой дружной команде. Обучайся в группах и заводи новые знакомства с будщими коллегами. Изучай новое посещая факультативные собрания и лекции.</p>
                    </div>
                    <img src="./images/courses2.png" alt="image"/>
                </div>
            </div>
            <AllCourses/>
        </div>
    );
};

export default Courses;