import React from 'react';
import classes from "./LastCourses.module.css";
import Button from "../UI/button/Button";
import {Link} from "react-router-dom";

const LastCourses = ({courses}) => {

    if(courses.length == 0){
        courses = [{
            id: 0,
            title: 'title',
            description: 'description',
            tags: [
                "tag1",
                "tag2"
            ]
        },
            {
                id: 1,
                title: 'title',
                description: 'description',
                tags: [
                    "tag1",
                    "tag2"
                ]
            },
            {
                id: 2,
                title: 'title',
                description: 'description',
                tags: [
                    "tag1",
                    "tag2"
                ]
            }
        ]
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h2 className={classes.lastHeader}>Выберите занятие для себя</h2>
                <div className={classes.content__container}>
                    {courses.map((course, index)=>{
                        return(
                            <div key={index} className={classes.courseBox}>
                                <div className={classes.thumb}></div>
                                <div className={classes.info}>
                                    {/*<p className={classes.authdate}>Author &bull; date</p>*/}
                                    <h3 className={classes.title}>{course.title}</h3>
                                    <p className={classes.description}>{course.description}</p>
                                    <div className={classes.tags}>
                                        {course.tags.map((tag, index) =>
                                            <span key={index} className={classes.tag}>{tag}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.viewMoreBlock}>
                    <Link to="/courses"><Button>Посмотреть больше</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default LastCourses;