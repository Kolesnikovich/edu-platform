import React, {useState} from 'react';
import classes from "./Task.module.css";
import Button from "../../UI/button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
    const [open, setOpen] = useState(false)
    const toggle = (e) =>{
        if(e.target === e.currentTarget){
        setOpen(!open)
        }
    }

    return (
        <div onClick={toggle} className={classes.box}>
            <p className={classes.title}>{props.desc}</p>
            {open && <div className={classes.hiddenContent}>
                {props.type == 1 ?
                    <Button>Начать тест</Button> :
                    <>
                        <label htmlFor="file-upload" className={classes.customFileUpload}>
                            <FontAwesomeIcon icon={faFile}/> Выбрать файл
                        </label>
                        <input id="file-upload" type="file"/>
                    </>

                }

            </div>

            }
        </div>
    );
};

export default Task;