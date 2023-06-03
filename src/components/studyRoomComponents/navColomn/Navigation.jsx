import React, {useState} from 'react';
import classes from "./Navigation.module.css";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faBookBookmark, faBookOpen, faHome, faPlus, faTasks, faUser} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <ol className={classes.items}>
                    <NavLink to="/study-room/all-courses" className={classes.link}>
                        <li className={classes.item}>
                            <span className={classes.item__icon}><FontAwesomeIcon icon={faBookBookmark} /></span>
                            <span className={classes.item__text}>Все курсы</span>
                        </li>
                    </NavLink>
                    <NavLink to="/study-room/profile" className={classes.link}>
                        <li className={classes.item}>
                            <span className={classes.item__icon}><FontAwesomeIcon icon={faUser} /></span>
                            <span className={classes.item__text}>Профиль</span>
                        </li>
                    </NavLink>
                    <NavLink to="/study-room/my-courses" className={classes.link}>
                        <li className={classes.item}>
                            <span className={classes.item__icon}><FontAwesomeIcon icon={faHome} /></span>
                            <span className={classes.item__text}>Мои курсы</span>
                        </li>
                    </NavLink>
                    <NavLink to="/study-room/add-course" className={classes.link}>
                        <li className={classes.item}>
                            <span className={classes.item__icon}><FontAwesomeIcon icon={faPlus} /></span>
                            <span className={classes.item__text}>Создать курс</span>
                        </li>
                    </NavLink>
                    <NavLink to="/study-room/tasks" className={classes.link}>
                        <li className={classes.item}>
                            <span className={classes.item__icon}><FontAwesomeIcon icon={faTasks} /></span>
                            <span className={classes.item__text}>Задания</span>
                        </li>
                    </NavLink>
                    <h3 className={classes.title}>Менторам</h3>
                    <NavLink to="/study-room/mentor-tasks" className={classes.link}>
                        <li className={classes.item}>
                            <span className={classes.item__icon}><FontAwesomeIcon icon={faTasks} /></span>
                            <span className={classes.item__text}>Задания для оценки</span>
                        </li>
                    </NavLink>
                </ol>
            </div>
        </div>

    );
};

export default Navigation;