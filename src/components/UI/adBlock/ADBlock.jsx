import React from 'react';
import classes from "./ADBlock.module.css";
import Button from "../button/Button";
import {Link} from "react-router-dom";

const AdBlock = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.mainHead}>Образовательная площадка</h1>
            <p className={classes.paragraph}>Вы узнаете, как преодолеть страх чистого листа, научитесь чему только захотите. </p>
            <Link to="/login"><Button>Начать обучение сейчас</Button></Link>
        </div>
    );
};

export default AdBlock;