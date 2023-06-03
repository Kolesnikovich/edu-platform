import React, {useEffect, useState} from 'react';
import classes from "./Topic.module.css";
import Button from "../../../components/UI/button/Button";
import Task from "../../../components/studyRoomComponents/task/Task";
import {useParams} from "react-router-dom";
import {useFetch} from "../../../hooks/useFetch";
import ThemeService from "../../../API/ThemeService";
import {useToken} from "../../../hooks/useToken";
import Loader from "../../../components/UI/loader/Loader";

const Topic = () => {
    const params = useParams()
    const {token} = useToken()
    const [theme, setTheme] = useState({})
    const [loadError, setLoadError] = useState({})
    const [fetchTheme, isThemeLoading, themeError] = useFetch(async () => {
        try{
            const response = await ThemeService.getById(params.courseId, params.themeId, token)
            //console.log(response.data)
            setTheme(response.data)
            setLoadError(undefined)
        } catch (err){
            console.log(err)
            setLoadError(err)
        }
    })
    useEffect(()=>{
        fetchTheme()
    }, [theme.id])

    const [fetchCompleteTheme, isCompleteThemeLoading, completeThemeError] = useFetch(async () => {
        try{
            const response = await ThemeService.complete(params.courseId, theme.id, token)
            console.log(response.data)
        } catch (err){
            console.log(err.data)
        }
    })
    const complete = (e) =>{
        e.preventDefault()
        fetchCompleteTheme().then(console.log('finished'))
    }
    return (
        <div>
            {isThemeLoading
                ? <Loader/>
                : !loadError
                    ?<>
                        <h2 className={classes.title}>Тема: {theme.title}</h2>
                        <div className={classes.topicContent}>
                            <p className={classes.description}>{theme.text}</p>

                        </div>
                        {

                            theme.assignments.length !== 0
                            ? <><p className={classes.tasksTitle}>Задания, которые автор рекомендует выполнить после прохождения данной темы:</p>
                                    {
                                        theme.assignments.map((task, index) =>
                                            <Task key={index} desc={`Задание ${task.id}`} type={task.type}/>

                                    )}
                                </>
                            : <p className={classes.tasksTitle}>Заданий для этой темы нет</p>
                        }
                        <Button onClick={complete}>Завершить тему</Button>
                     </>
                    : <h2>Тема не найдена</h2>
            }

        </div>
    );
};

export default Topic;