import React, {useState} from 'react';
import classes from "./Task.module.css";
import Button from "../../UI/button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";

const TaskToRate = (props) => {
    const [open, setOpen] = useState(false)
    const toggle = (e) =>{
        if(e.target === e.currentTarget){
            setOpen(!open)
        }
    }

    const handleDownload = ()=>{
        console.log('download')
    }
    const [rate, setRate]=useState(0)
    const handleRate = ()=>{
        console.log(`rate is ${rate}`)
    }

    return (
        <div onClick={toggle} className={classes.box}>
            <p className={classes.title}>{props.desc}</p>
            {open && <div className={classes.hiddenContent}>
                <Button onClick={handleDownload}>Скачать файл</Button>
                        <input id="file-upload" type="file"/>
                <form className={classes.rateForm} onSubmit={handleRate}>
                    <input className="form-input" style={{maxWidth: 200, margin: 10, padding: 10}} type="text" placeholder="оцените от 0 до 100"/>
                    <Button>Оценить</Button>
                </form>
            </div>

            }
        </div>
    );
};

export default TaskToRate;