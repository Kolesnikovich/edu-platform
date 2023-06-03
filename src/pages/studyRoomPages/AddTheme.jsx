import React, {useState} from 'react';
import classes from "../../components/studyRoomComponents/task/Task.module.css";
import Button from "../../components/UI/button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import {useFetch} from "../../hooks/useFetch";
import ThemeService from "../../API/ThemeService";
import {useToken} from "../../hooks/useToken";
import {useNavigate, useParams} from "react-router-dom";

const AddTheme = () => {
    const navigate = useNavigate()
    const {token} = useToken()
    const params = useParams()
    const [open, setOpen] = useState(false)
    const toggle = (e) =>{
        if(e.target === e.currentTarget){
            setOpen(!open)
        }
    }
    const [theme, setTheme] = useState({text: "", title: ""})
    const [themeErr, setThemeErr] = useState('')
    const [fetchCreateTheme, isCreateThemeLoading, createThemeError] = useFetch(async () => {
        try {
            const response = await ThemeService.create(params.courseId, [{title: theme.title, text: theme.text}], token)
            setThemeErr('')
            //console.log(response)
        } catch (e){
            console.log(e.response.data)
            setThemeErr(e.response.data.title)
        }
    })

    const create = (e) => {
        e.preventDefault()
        fetchCreateTheme(theme).then(()=>navigate(`/edit-course/${params.courseId}`))
    }

    return (
        <form onSubmit={create} style={{width: '80%'}}>
            {themeErr && <p className="comment__name" style={{color: 'red', marginBottom: 10}}>{themeErr}</p>}
            <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Название:</p>
            <input className="form-input"
                   style={{maxWidth: 'unset'}}
                   type="text"
                   value={theme.title}
                   placeholder="Введите название курса"
                   required
                   onChange={e => setTheme({...theme, title: e.target.value})}
            />
            <p className="comment__name" style={{alignSelf: 'start', marginBottom: 10}}>Описание:</p>
            <textarea className="form-input"
                      style={{maxWidth: 'unset'}}
                      value={theme.text}
                      placeholder="Введите описание"
                      rows={20}
                      required
                      onChange={e => setTheme({...theme, text: e.target.value})}
            />
            <Button type='submit'>Создать</Button>
        </form>
    );
};

export default AddTheme;