import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useToken} from "../../hooks/useToken";
import {useFetch} from "../../hooks/useFetch";
import CourseService from "../../API/CourseService";
import Loader from "../../components/UI/loader/Loader";
import classes from "./addCoursePage/AddCourse.module.css";
import Switch from "react-switch";
import cl from "./coursePage/CoursePage.module.css";
import Button from "../../components/UI/button/Button";
import ThemeService from "../../API/ThemeService";

const EditTheme = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {token} = useToken()
    const id = localStorage.getItem('id')
    const [course, setCourse] = useState({})
    const [fetchCourse, isCourseLoading, CourseError] = useFetch(async () => {
        try{
            const response = await CourseService.getById(params.courseId, token)
            setCourse(response.data)
            //console.log(response.data)
        } catch (err){
            console.log(err.response.data)
        }
    })
    const [theme, setTheme] = useState({assignments: []})
    const [fetchTheme, isThemeLoading, themeError] = useFetch(async () => {
        try{
            const response = await ThemeService.getById(params.courseId, params.themeId, token)
            //console.log(response.data)
            setTheme(response.data)
        } catch (err){
            console.log(err)
        }
    })

    const [themeErr, setThemeErr] = useState('')
    const [fetchEditTheme, isEditThemeLoading, editError] = useFetch(async () => {
        try {
            const response = await ThemeService.update(course.id, theme.id, {id: theme.id, title: theme.title, text: theme.text, assignments: theme.assignments}, token)
            setThemeErr('')
            //console.log(response)
        } catch (e){
            console.log(e.response.data)
            setThemeErr(e.response.data.title)
        }
    })
    const [fetchDeleteTheme, isDeleteThemeLoading, deleteError] = useFetch(async () => {
        try {
            const response = await ThemeService.delete(course.id, theme.id, token)
            setThemeErr('')
            //console.log(response)
        } catch (e){
            console.log(e.response.data)
            setThemeErr(e.response.data.title)
        }
    })
    useEffect(()=>{
        fetchCourse().then(()=>{
            fetchTheme().then()
        })
    }, [theme.id])

    const deleteTheme = (e) => {
        e.preventDefault()
        if(window.confirm("Вы уверены, что хотите удадить эту тему?")) {
            fetchDeleteTheme().then(navigate(`/edit-course/${course.id}`))
        }
    }

    const submit = (e) =>{
        e.preventDefault()
        if(window.confirm("Вы уверены, что внесли все измнения?")) {
            fetchEditTheme().then(()=>{
                navigate(`/edit-course/${course.id}`)
            })
        }
        console.log('submit')
    }

    return (
        <div>
            {isCourseLoading || isEditThemeLoading || isDeleteThemeLoading ? <Loader/> : id === course.authorId ? <>
                <div style={{display: 'flex', justifyContent: 'space-between', alignContent: "end"}}>
                    <h2>Редактирование темы "{theme.title}" в курсе "{course.title}"</h2>
                    <button onClick={deleteTheme} className="btn">Удалить тему</button>
                    {/*<div className={cl.tag} style={{background: '#7F56D9', color: '#fff', fontSize: 16}}><FontAwesomeIcon icon={faStar} /> мой курс</div>*/}
                </div>

                {themeErr && <p className="comment__name" style={{color: 'red', marginBottom: 10}}>{themeErr}</p>}
                <div style={{padding: 20}}>
                    <form className={classes.form} onSubmit={submit}>
                        <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Название:</p>
                        <input className="form-input"
                               style={{maxWidth: 'unset'}}
                               type="text"
                               value={theme.title}
                               placeholder="Введите название темы"
                               required
                               onChange={e => setTheme({...theme, title: e.target.value})}
                        />
                        <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Описание:</p>
                        <textarea className="form-input"
                                  style={{maxWidth: 'unset'}}
                                  value={theme.text}
                                  placeholder="Введите содержание"
                                  rows={10}
                                  required
                                  onChange={e => setTheme({...theme, text: e.target.value})}
                        />
                        {theme.assignments.length !== 0 ?
                            <>
                                <p className={cl.description} style={{alignSelf: 'start'}}>Задания для темы:</p>
                                {theme.assignments.map((assignment, index) =>
                                    <div onClick={(e) => {
                                        //(e.target === e.currentTarget) && navigate(`/course/${course.id}/${theme.id}`)
                                        console.log(assignment)
                                    }} key={index}
                                         className={cl.topicBlock} style={{alignSelf: 'start', justifyContent: 'space-between'}}>
                                        {
                                            assignment.type === 0 ?
                                                <p className={cl.topicTitle}>Задание {assignment.id} (тест)</p>
                                                : <p className={cl.topicTitle}>Задание {assignment.id} (файл)</p>
                                        }

                                        <Button onClick={()=>{
                                            //navigate(`/course/${course.id}/${theme.id}/edit`)
                                            console.log('edit', assignment)
                                        }}>Изменить</Button>
                                    </div>
                                )}
                            </>
                            : <p className={cl.description} style={{alignSelf: 'start'}}>У темы еще нет заданий</p>
                        }
                        <div style={{display: 'flex', justifyContent: "space-between", width: '100%'}}>
                            <Button onClick={()=>{navigate(`/course/add-assignment/${course.id}/${theme.id}`)}}>Добавить задание</Button>
                            <Button type='submit'>Сохранить тему</Button>
                        </div>

                    </form>
                </div>
            </> : <h2>Вы не являетесь автором курса</h2>}
        </div>
    );
};

export default EditTheme;