import React, {useEffect, useState} from 'react';
import {useFetch} from "../../../hooks/useFetch";
import CourseService from "../../../API/CourseService";
import Pagination from "../../UI/pagination/Pagination";
import Loader from "../../UI/loader/Loader";
import classes from "./CoursesList.module.css";

const CoursesList = ({courses}) => {

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
            {courses.map((course)=>{
                return(
                    <div key={course.id} className={classes.mainCourseContainer}>
                        <div className={classes.preview}></div>
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

    );
};

export default CoursesList;