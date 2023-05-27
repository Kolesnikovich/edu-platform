import React, {useState} from 'react';
import classes from "./Team.module.css";
import {useFetch} from "../../../hooks/useFetch";

const Team = () => {

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Наша команда</h2>
            <p className={classes.text}>Наша философия проста - создать команду разнообразных, увлеченных людей и создавайте атмосферу, которая дает вам возможность выполнять свою работу наилучшим образом.</p>
            <div className={classes.teamList}>
                <div className={classes.mentorCell}>
                    <div style={{background: '#6941C6', width: 80, height: 80, borderRadius: '50%'}}></div>
                    <p className={classes.name}>Колесникович Кирилл</p>
                    <p className={classes.email}>email@gmail.com</p>
                </div>
                <div className={classes.mentorCell}>
                    <div style={{background: '#6941C6', width: 80, height: 80, borderRadius: '50%'}}></div>
                    <p className={classes.name}>Маляров Даниил</p>
                    <p className={classes.email}>email@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Team;