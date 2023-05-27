import React from 'react';
import classes from "./PopularCourses.module.css";

const PopularCourses = ({courses}) => {

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
        <div className={classes.container}>
            <h2>Лучшие курсы</h2>
            <div className={classes.coursesWrapper}>
                <div className={classes.mainCourseContainer}>
                    <div className={classes.preview}></div>
                    <div className={classes.info}>
                        {/*<p className={classes.authdate}>Author &bull; date</p>*/}
                        <h3 className={classes.title}>{courses[0].title}</h3>
                        <p className={classes.description}>{courses[0].description}</p>
                        <div className={classes.tags}>
                            {courses[0].tags.map((tag, index) =>
                                <span key={index} className={classes.tag}>{tag}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className={classes.sideContainer}>
                    <div className={classes.courseContainer}>
                        <div className={classes.smallPreview}></div>
                        <div className={classes.sideInfo}>
                            {/*<p className={classes.authdate}>Author &bull; date</p>*/}
                            <h3 className={classes.title}>{courses[1].title}</h3>
                            <p className={classes.description}>{courses[1].description}</p>
                            <div className={classes.tags}>
                                {courses[1].tags.map((tag, index) =>
                                    <span key={index} className={classes.tag}>{tag}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={classes.courseContainer}>
                        <div className={classes.smallPreview}></div>
                        <div className={classes.sideInfo}>
                            {/*<p className={classes.authdate}>Author &bull; date</p>*/}
                            <h3 className={classes.title}>{courses[2].title}</h3>
                            <p className={classes.description}>{courses[2].description}</p>
                            <div className={classes.tags}>
                                {courses[2].tags.map((tag, index) =>
                                    <span key={index} className={classes.tag}>{tag}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;