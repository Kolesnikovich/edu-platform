import React from 'react';
import classes from "./Test.module.css";
import Button from "../../../components/UI/button/Button";

const Test = (props) => {
    return (
        <div>
            <h2 className={classes.title}>Название теста</h2>
            <div className={classes.question}>
                <p className={classes.description}>Вопрос 1?</p>

            </div>
            <Button>Завершить тест</Button>
        </div>
    );
};

export default Test;