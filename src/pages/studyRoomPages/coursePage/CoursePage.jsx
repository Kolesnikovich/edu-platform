import React, {useContext, useEffect, useState} from 'react';
import Button from "../../../components/UI/button/Button";
import classes from "./CoursePage.module.css";
import cl from "../../../components/studyRoomComponents/coursesList/CoursesList.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {useFetch} from "../../../hooks/useFetch";
import UserService from "../../../API/UserService";
import CourseService from "../../../API/CourseService";
import {useToken} from "../../../hooks/useToken";
import Loader from "../../../components/UI/loader/Loader";
import {UserIdContext} from "../../../context/context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faUser} from "@fortawesome/free-solid-svg-icons";
import FeedbackService from "../../../API/FeedbackService";
import Task from "../../../components/studyRoomComponents/task/Task";
import CreateFeedback from "../../../components/studyRoomComponents/feedback/CreateFeedback";
import Feedback from "../../../components/studyRoomComponents/feedback/Feedback";

const CoursePage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const {token} = useToken()
    const id = localStorage.getItem('id')
    const [course, setCourse] = useState({})
    const [fetchCourse, isCourseLoading, CourseError] = useFetch(async () => {
        try{
            const response = await CourseService.getById(params.id, token)
            setCourse(response.data)
            console.log(response.data)
        } catch (err){
            console.log(err.response.data)
        }
    })
    const [feedbackList, setFeedbackList] = useState([])
    const [fetchFeedbackList, isFeedbackListLoading, feedbackListError] = useFetch(async () => {
        try{
            const response = await FeedbackService.getAll(params.id, token)
            setFeedbackList(response.data)
            //console.log(response.data)
        } catch (err){
            console.log(err.response.data)
        }
    })
    useEffect(()=>{
        fetchCourse().then(fetchFeedbackList())
    }, [course.id, feedbackList.length])

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

    const [fetchCreateFeedback, isCreateFeedbackLoading, createFeedbackError] = useFetch(async (newFeedback) => {
        try {
            const response = await FeedbackService.create(params.id, {rating: newFeedback.rating, text: newFeedback.text},  token)
            //console.log(response.data)
            //console.log(newFeedback)
        } catch (e){
            console.log(e.message)
            console.log('текст', newFeedback.text)
        }
    })

    const handleCreate = async (feedback) =>{
        //console.log(feedbackList)
        fetchCreateFeedback(feedback).then(()=>{
            fetchFeedbackList()
        })
    }

    let isAuthor = false
    let myFeedback = {}
    const [fetchUpdateFeedback, isUpdateFeedbackLoading, updateFeedbackError] = useFetch(async (newFeedback) => {
        try {
            const response = await FeedbackService.update(params.id, {rating: newFeedback.rating, text: newFeedback.text},  token)
            //console.log(response.data)
            //console.log(newFeedback)
        } catch (e){
            console.log(e.message)
        }
    })
    const handleUpdate = async (feedback) =>{
        fetchUpdateFeedback(feedback).then(()=>{
            fetchFeedbackList()
        })
    }

    const [fetchDeleteFeedback, isDeleteFeedbackLoading, deleteFeedbackError] = useFetch(async () => {
        try {
            const response = await FeedbackService.delete(params.id, id,  token)
            //console.log(response.data)
            //console.log(newFeedback)
        } catch (e){
            console.log(e.message)
        }
    })
    const deleteFeed = async () =>{
        fetchDeleteFeedback().then(()=>{
            fetchFeedbackList()
        })
    }

    return (
        <div>
            {course.authorId === id
                && <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}>
                    <Button onClick={() => navigate(`/edit-course/${course.id}`)}>Изменить курс</Button>
                    <button className="btn" onClick={handleDelete}>Удалить курс</button>
                    {/*<div className={cl.tag} style={{background: '#7F56D9', color: '#fff', fontSize: 16}}><FontAwesomeIcon icon={faStar} /> мой курс</div>*/}
                </div>
            }
            {isCourseLoading || isDeleteLoading || isCreateFeedbackLoading ? <Loader/> :
                <>
                    <h2 className={classes.title}>{course.title}</h2>
                    {course.description && <p className={classes.description}>{course.description}</p>}
                    <span className={classes.topicsTitle}>Тэги:</span>
                    {course.tags ? <span className={cl.tags} style={{display: 'inline-block', marginLeft: 10}}>
                        {course.tags.map((tag, index) =>
                            <span key={index} className={cl.tag}>{tag}</span>
                        )}
                    </span> : <p className={classes.description}>У данного курса нет тэгов</p>}
                    <p className={classes.topicsTitle}>Темы данного курса:</p>
                    {course.themes ?
                        course.themes.map((theme, index) =>
                            <div onClick={() => navigate(`/course/${course.id}/${theme.id}`)} key={index} className={classes.topicBlock}>
                                <p className={classes.topicTitle}>{theme.title}</p>
                            </div>
                        )

                        : <p className={classes.description}>У курса еще нет тем</p>
                    }
                    <p className={classes.topicsTitle}>Отзывы на курс "{course.title}":</p>
                    {feedbackList.length !==0
                        ? feedbackList.map((feedback, index) => {
                            if(id === feedback.userId) {
                                isAuthor = true
                                myFeedback = feedback
                            }
                            return <Feedback key={index} index={index} feedback={feedback} userId={feedback.userId}/>})
                        : <p className={classes.description}>Отзывов еще нет...</p>
                    }
                    {
                        isAuthor
                            ? <CreateFeedback create={handleCreate} update={handleUpdate} deleteFeed={deleteFeed} feedback={myFeedback}/>
                            : <CreateFeedback create={handleCreate} update={handleUpdate} deleteFeed={deleteFeed}/>
                    }
                    {course.authorId === id
                        ? <h2>

                          </h2>
                        : <Button>Запросить доступ</Button>
                    }

                </>
            }
        </div>
    );
};

export default CoursePage;