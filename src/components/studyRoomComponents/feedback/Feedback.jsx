import React, {useEffect, useState} from 'react';
import classes from "../../../pages/studyRoomPages/coursePage/CoursePage.module.css";
import cl from "../coursesList/CoursesList.module.css";
import Button from "../../UI/button/Button";
import {useFetch} from "../../../hooks/useFetch";
import UserService from "../../../API/UserService";
import {useToken} from "../../../hooks/useToken";
import Loader from "../../UI/loader/Loader";

const Feedback = (props) => {
    const id = localStorage.getItem('id')
    const {token} = useToken()
    const [user, setUser] = useState({id: '', username: '', email: '', password: ''})
    const [fetchUser, isUserLoading, userError] = useFetch(async () => {
        try {
            const response = await UserService.getById(props.feedback.userId, token)
            setUser({id: response.data.id, username: response.data.userName, email: response.data.email})
        } catch (e){
            console.log(e.message)

        }
    })
    useEffect(()=>{
        fetchUser().then(()=>{})
    }, [user.username, user.email])
    return (
        <div key={props.index} className={classes.topicBlock} style={{flexDirection: 'column', alignItems: 'start'}}>
            {isUserLoading? <Loader/> :
                <>
                    {
                        props.feedback.userId === id
                            ? <div className={cl.tag}>мой отзыв</div>
                            : <div className={cl.tag}>Автор: {user.username} | {user.email}</div>
                    }
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignContent: 'center'}}>
                        <p className={classes.topicTitle} style={{textAlign: 'justify'}}>{props.feedback.text}</p>
                        <div className={cl.tag} style={{fontSize: 36, background: 'none', alignSelf: 'center'}}>{props.feedback.rating}/5</div>
                    </div>
                </>
            }

        </div>
    );
};

export default Feedback;