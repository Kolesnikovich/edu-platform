import React from 'react';
import classes from "./CoursesList.module.css";
import CourseItem from "../courseItem";

const CoursesList = ({courses}) => {

    // if(courses.length == 0){
    //     courses = [{
    //         id: 0,
    //         title: 'title',
    //         description: 'description',
    //         tags: [
    //             "tag1",
    //             "tag2"
    //         ]
    //     },
    //         {
    //             id: 1,
    //             title: 'title',
    //             description: 'description',
    //             tags: [
    //                 "tag1",
    //                 "tag2"
    //             ]
    //         },
    //         {
    //             id: 2,
    //             title: 'title',
    //             description: 'description',
    //             tags: [
    //                 "tag1",
    //                 "tag2"
    //             ]
    //         }
    //     ]
    // }


    return (
        <div className={classes.wrapper} >
            {courses ? courses.map((course, index)=>{
                return(
                    <div key={index}>
                        <CourseItem course={course}/>
                    </div>
                )
            })
            : <h2>No content</h2>}
        </div>

    );
};

export default CoursesList;