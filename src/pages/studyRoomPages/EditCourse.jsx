import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useToken} from "../../hooks/useToken";
import {useFetch} from "../../hooks/useFetch";
import CourseService from "../../API/CourseService";
import classes from "./addCoursePage/AddCourse.module.css";
import cl from "../studyRoomPages/coursePage/CoursePage.module.css";
import Switch from "react-switch";
import Button from "../../components/UI/button/Button";
import Loader from "../../components/UI/loader/Loader";
import ThemeService from "../../API/ThemeService";
import AddTheme from "./AddTheme";

const EditCourse = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {token} = useToken()
    const id = localStorage.getItem('id')
    const [course, setCourse] = useState({})
    const [fetchCourse, isCourseLoading, CourseError] = useFetch(async () => {
        try{
            const response = await CourseService.getById(params.id, token)
            setCourse(response.data)
            //console.log(response)
        } catch (err){
            console.log(err.response.data)
        }
    })
    useEffect(()=>{
        fetchCourse().then(()=>{
            setTagsStr(course.tags && course.tags.join(', '))
        })
    }, [course.id])

    const [switchCheck, setSwitchCheck] = useState(false)
    const [tagsStr, setTagsStr] = useState('')
    const handleSwitch = (e) =>{
        setSwitchCheck(!switchCheck)
        setCourse({...course, isPrivate: switchCheck})
    }

    const handleTags = (str) =>{
        const re = /\s*,\s*/
        return str.trim().split(re)
    }
    const [fetchUpdate, isUpdateLoading, updateError] = useFetch(async () => {
        try {
            const response = await CourseService.update({...course}, course.id, token)
            //console.log(response)
        } catch (e){
            console.log(e.message)
        }
    })

    const submit = (e) =>{
        e.preventDefault()
        if(window.confirm("Вы уверены, что внесли все измнения?")) {
            fetchUpdate().then(()=>{
                navigate(`/course/${course.id}`)
            })
        }
    }

    const [fetchDelete, isDeleteLoading, DeleteError] = useFetch(async () => {
        try{
            const response = await CourseService.delete(params.id, token)
            //console.log(response)
        } catch (err){
            console.log(err.response.data)
        }
    })
    const handleDelete = () =>{
        window.confirm('Вы уверены, что хотите удалить этот курс?') && fetchDelete().then(()=>navigate('/my-courses'))
    }

    return (
        <div>
            {isCourseLoading || isDeleteLoading ? <Loader/> : id === course.authorId ? <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: "end"}}>
                <h2>Редактирование курса</h2>
                <button className="btn" onClick={handleDelete}>Удалить курс</button>
            </div>
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
                            <label className={classes.switchLabel} htmlFor="private">Приватность (галочка = включено)</label>
                            <Switch onChange={handleSwitch}
                                    checked={switchCheck}
                                    onColor="#7F56D9"
                                    value={course.isPrivate}
                                    id="private"
                            />
                        </div>
                        {course.themes.length !== 0 ?
                            <>
                                <p className={cl.description} style={{alignSelf: 'start'}}>Темы курса:</p>
                                {course.themes.map((theme, index) =>
                                    <div onClick={(e) => {
                                        (e.target === e.currentTarget) && navigate(`/course/${course.id}/${theme.id}`)

                                    }} key={index}
                                         className={cl.topicBlock} style={{alignSelf: 'start', justifyContent: 'space-between'}}>
                                        <p className={cl.topicTitle}>{theme.title}</p>
                                        <Button onClick={()=>{navigate(`/course/${course.id}/${theme.id}/edit`)}}>Изменить</Button>
                                    </div>
                                )}
                            </>
                            : <p className={cl.description}>У курса еще нет тем</p>
                        }
                        <div style={{display: 'flex', justifyContent: "space-between", width: '100%'}}>
                            <Button onClick={()=>{navigate(`/course/add-theme/${course.id}`)}}>Добавить тему</Button>
                            <Button type='submit'>Сохранить курс</Button>
                        </div>

                    </form>
                </div>
            </> : <h2>Вы не являетесь автором данного курса</h2>}

        </div>
    );
};

export default EditCourse;