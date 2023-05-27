import React from 'react';
import Navigation from "../components/studyRoomComponents/navColomn/Navigation";
import StudyRoomRouter from "../components/StudyRoomRouter";
import "../styles/StudyRoom.css"

const StudyRoom = () => {
    return (
        <div className="study-wrapper">
            <Navigation/>
            <div className="study-content-block content-height">
                <StudyRoomRouter/>
            </div>
        </div>
    );
};

export default StudyRoom;