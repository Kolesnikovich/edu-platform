import React, {useState} from 'react';
import Button from "../../../components/UI/button/Button";
import classes from "./AddCourse.module.css";
import Editor from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw } from 'draft-js';
import Switch from "react-switch";
import {useToken} from "../../../hooks/useToken";
import {useFetch} from "../../../hooks/useFetch";
import UserService from "../../../API/UserService";
import CourseService from "../../../API/CourseService";
import {useNavigate} from "react-router-dom";
import Loader from "../../../components/UI/loader/Loader";

const AddCourse = () => {
    const navigate = useNavigate()
    const {token} = useToken()
    const [switchCheck, setSwitchCheck] = useState(false)
    const [tagsStr, setTagsStr] = useState('')
    const [course, setCourse] = useState({title: '', description: '', tags: [], isPrivate: false})

    const handleSwitch = (e) =>{
        setSwitchCheck(!switchCheck)
        setCourse({...course, isPrivate: !switchCheck})
    }

    const handleTags = (str) =>{
        const re = /\s*,\s*/
        return str.trim().split(re)
    }
    const [fetchAdd, isAddLoading, addError] = useFetch(async () => {
        try {
            const response = await CourseService.create(course, token)
            console.log(response)
        } catch (e){
            console.log(e.message)
        }
    })


    const submit = (e)=>{
        e.preventDefault()
        fetchAdd().then(()=>navigate('/my-courses'))
        console.log(course)
    }

    return (

            <div>
                {isAddLoading ? <Loader/> :
                <>
                    <h2>Создать курс:</h2>
                    <div style={{padding: 20}}>
                        <form className={classes.form} onSubmit={submit}>
                            <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Название:</p>
                            <input className="form-input"
                                   style={{maxWidth: 'unset'}}
                                   type="text"
                                   value={course.title}
                                   placeholder="Введите название курса"
                                   required
                                   onChange={e => setCourse({...course, title: e.target.value})}
                            />
                            <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Описание:</p>
                            <textarea className="form-input"
                                      style={{maxWidth: 'unset'}}
                                      value={course.description}
                                      placeholder="Введите описание"
                                      rows={10}
                                      required
                                      onChange={e => setCourse({...course, description: e.target.value})}
                            />
                            <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Список тэгов:</p>
                            <input className="form-input"
                                   style={{maxWidth: 'unset'}}
                                   type="text"
                                   value={tagsStr}
                                   placeholder="Введите теги курса через знак запятой. Например: новички, стиль, доступно"
                                   onChange={e => {
                                       setTagsStr(e.target.value)
                                       setCourse({...course, tags: handleTags(tagsStr)})
                                   }}
                            />
                            <div className={classes.switchContainer}>
                                <label className={classes.switchLabel} htmlFor="private">Приватность (выкл. по умолчанию)</label>
                                <Switch onChange={handleSwitch}
                                        checked={switchCheck}
                                        onColor="#7F56D9"
                                        value={course.isPrivate}
                                        id="private"
                                />
                            </div>

                            <Button type='submit'>Создать курс</Button>
                        </form>
                    </div>
                </>
                }
            </div>
    );
};

export default AddCourse;