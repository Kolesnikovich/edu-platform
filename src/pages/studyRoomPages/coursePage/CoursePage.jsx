import React from 'react';
import Button from "../../../components/UI/button/Button";
import classes from "./CoursePage.module.css";

const CoursePage = () => {
    return (
        <div>
            <h2 className={classes.title}>Название курса</h2>
            <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum ultrices aliquam. Donec non lectus rhoncus, pulvinar dolor feugiat, volutpat ligula. Vivamus blandit diam velit, eget egestas metus iaculis a. Fusce malesuada justo quis dui faucibus, eget sollicitudin nibh dapibus. Nullam scelerisque finibus ligula id suscipit. Duis ornare suscipit lacus nec porttitor. Mauris tincidunt, orci vitae ultrices tristique, nulla magna aliquam magna, vel lobortis ipsum orci vel nunc. Nulla arcu ex, fringilla ut posuere sed, laoreet ac nisl. Donec magna nunc, interdum sed porta a, condimentum ac arcu. Suspendisse lacus leo, interdum eget ultricies sit amet, egestas eu odio. Donec lobortis tortor tellus. Nam faucibus dolor est, semper varius urna vestibulum eu. Vivamus venenatis, nunc in bibendum ultricies, odio nulla commodo lacus, nec elementum enim erat tempus tellus. Nullam aliquam pretium tellus nec pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
            <p className={classes.topicsTitle}>Темы данного курса:</p>
            <div className={classes.topicBlock}>
                <p className={classes.topicTitle}>Тема</p>
            </div>
            <div className={classes.topicBlock}>
                <p className={classes.topicTitle}>Тема</p>
            </div>
            <div className={classes.topicBlock}>
                <p className={classes.topicTitle}>Тема</p>
            </div>
            <div className={classes.topicBlock}>
                <p className={classes.topicTitle}>Тема</p>
            </div>
            <div className={classes.topicBlock}>
                <p className={classes.topicTitle}>Тема</p>
            </div>

            <Button>Прекратить обучение</Button>
            <Button>Запросить доступ</Button>
        </div>
    );
};

export default CoursePage;