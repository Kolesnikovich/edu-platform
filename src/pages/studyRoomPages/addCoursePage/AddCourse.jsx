import React, {useState} from 'react';
import Button from "../../../components/UI/button/Button";
import classes from "./AddCourse.module.css";
import Editor from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw } from 'draft-js';
import Switch from "react-switch";

const AddCourse = () => {
    const [switchCheck, setSwitchCheck] = useState(false)
    const [course, setCourse] = useState({title: '', description: '', tags: '', privateMod: false})

    const handleSwitch = (e) =>{
        setSwitchCheck(!switchCheck)
        setCourse({...course, privateMod: !switchCheck})
        // console.log(course.privateMod)
    }

    const submit =(e)=>{
        e.preventDefault()
        // console.log(course.privateMod)
    }

    return (
        <div className="">
            <h2>Создать курс:</h2>
            <div style={{padding: 20}}>
                <form className={classes.form} onSubmit={submit}>
                    <input className="form-input"
                           style={{maxWidth: 'unset'}}
                           type="text"
                           value={course.title}
                           placeholder="Введите название курса"
                           required
                           onChange={e => setCourse({...course, title: e.target.value})}
                    />
                    <textarea className="form-input"
                              style={{maxWidth: 'unset'}}
                              value={course.description}
                              placeholder="Введите описание"
                              rows={10}
                              required
                              onChange={e => setCourse({...course, description: e.target.value})}
                    />
                    <input className="form-input"
                           style={{maxWidth: 'unset'}}
                           type="text"
                           value={course.tags}
                           placeholder="Введите теги курса через знак запятой. Например: новичкам, стиль, доступно"
                           required
                           onChange={e => setCourse({...course, tags: e.target.value})}
                    />
                    <div className={classes.switchContainer}>
                        <label className={classes.switchLabel} htmlFor="private">Флаг приватности</label>
                        <Switch onChange={handleSwitch}
                                checked={switchCheck}
                                onColor="#7F56D9"
                                value={course.privateMod}
                                id="private"
                        />
                    </div>

                    <Button type='submit'>Создать курс</Button>
                </form>
            </div>

        </div>
    );
};

export default AddCourse;