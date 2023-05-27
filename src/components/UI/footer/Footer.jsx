import React from 'react';
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <ul className={classes.list}>
                        <li className={classes.list__item}>title</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                    </ul>
                    <ul className={classes.list}>
                        <li className={classes.list__item}>title</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                    </ul>
                    <ul className={classes.list}>
                        <li className={classes.list__item}>title</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                        <li className={classes.list__item}>link</li>
                    </ul>
                </div>
            </div>
            <div className={classes.darkWrapper}>
                <div className={classes.darkContainer}>
                    <p className={classes.rights}>© 2023. Все права защищены.</p>
                    <ul className={classes.socials}>
                        <li className={classes.socials__item}>link</li>
                        <li className={classes.socials__item}>link</li>
                        <li className={classes.socials__item}>link</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Footer;