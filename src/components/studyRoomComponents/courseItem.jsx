import React, {useContext} from 'react';
import classes from "../studyRoomComponents/coursesList/CoursesList.module.css";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/context";



const CourseItem = ({course}) => {
    const navigate = useNavigate()
    const {isAuth} = useContext(AuthContext)

    return (
        <div onClick={() => {
            isAuth ? navigate(`/course/${course.id}`) : navigate(`/login`)
        }} key={course.id} className={classes.mainCourseContainer}>
            <div className={classes.preview}></div>
            <div className={classes.info}>
                <h3 className={classes.title}>{course.title}</h3>
                <p className={classes.description}>{course.description}</p>
                <div className={classes.tags}>
                    {course.tags.map((tag, index) =>
                        <span key={index} className={classes.tag}>{tag}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseItem;