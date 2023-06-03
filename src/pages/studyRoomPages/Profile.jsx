import React, {useContext, useEffect, useState} from 'react';
import {useToken} from "../../hooks/useToken";
import {useFetch} from "../../hooks/useFetch";
import CourseService from "../../API/CourseService";
import UserService from "../../API/UserService";
import {useUserId} from "../../hooks/useUserId";
import {UserIdContext} from "../../context/context";
import Loader from "../../components/UI/loader/Loader";

const Profile = (props) => {
    const {token} = useToken()
    const {id, setId} = useContext(UserIdContext)
    const [user, setUser] = useState({id: '', username: '', email: '', password: ''})
    const [fetchUser, isUserLoading, userError] = useFetch(async () => {
        try {
            const response = await UserService.getProfile(token)
            setUser({id: response.data.id, username: response.data.userName, email: response.data.email})
            setId(response.data.id)
            localStorage.setItem('id', response.data.id)
        } catch (e){
            console.log(e.message)
            setId('')
            localStorage.removeItem('id')
        }
    })

    useEffect(()=>{
        fetchUser().then(()=>{})
    }, [user.username, user.email])


    const [updateInfo, setUpdateInfo] = useState({username: '', email: ''})
    const [updateErr, setUpdateErr] = useState('')
    const [profOk, setProfOk] = useState('')
    const [fetchInfo, isInfoLoading, infoError] = useFetch(async () => {
        try{
            const response = await UserService.updateProfile(updateInfo.username, updateInfo.email, token)
            setUser({...user, username: updateInfo.username, email: updateInfo.email})
            // console.log(response)
            setUpdateErr('')
            setProfOk('Данные успешно изменены')
        } catch (err){
            console.log(err.response.data)
            setUpdateErr(err.response.data)
            setProfOk('')
        }
    })
    const updateProfile = (e) =>{
        e.preventDefault()
        fetchInfo().then(()=>{})
    }

    const [updatePasswords, setUpdatePasswords] = useState({currentPassword: '', newPassword: ''})
    const [passwordsErr, setPasswordsErr] = useState('')
    const [passOk, setPassOk] = useState('')
    const [fetchPasswords, isPasswordsLoading, passwordsError] = useFetch(async () => {
        try{
            const response = await UserService.changePassword(updatePasswords.currentPassword, updatePasswords.newPassword, token)
            setUser({...user, password: updatePasswords.currentPassword})
            console.log(response)
            setPasswordsErr('')
            setPassOk('Пароль успешно изменен')
        } catch (err){
            console.log(err.response.data)
            setPasswordsErr(err.response.data)
            setPassOk('')
        }
    })

    const changePassword = (e) =>{
        e.preventDefault()
        fetchPasswords().then(()=>{})
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>Профиль пользователя {user.username}</h2>
            {isUserLoading || isInfoLoading || isPasswordsLoading ? <Loader/> :<><p className="paragraph__text">Имя пользователя: {user.username}</p>
                <p className="paragraph__text">Электронная почта: {user.email}</p>
                <hr style={{width: '100%', marginBottom: 10, color: '#EAECF0'}}/>


                {/*PROFILE UPDATE FORM*/}
                <h2 style={{marginTop: 20}}>Хотите изменить данные?</h2>
                {updateErr && <p className="paragraph__text" style={{color: 'red'}}>{updateErr}</p>}
                {profOk && <p className="paragraph__text" style={{color: 'green'}}>{profOk}</p>}
                <form onSubmit={updateProfile} className="reg-login-form only-login-form">
                    <p className="paragraph__text">Имя пользователя: </p>
                    <input className="form-input"
                           type="text"
                           value={updateInfo.username}
                           placeholder="Введите новое имя пользователя"
                           required
                           onChange={e => setUpdateInfo({...updateInfo, username: e.target.value})}
                    />
                    <p className="paragraph__text">Адрес электоронной почты: </p>
                    <input className="form-input"
                           type="email"
                           value={updateInfo.email}
                           placeholder="Введите новую почту"
                           required
                           onChange={e => setUpdateInfo({...updateInfo, email: e.target.value})}
                    />
                    <button type="submit" className="form-submit-btn">Подтвердить</button>
                </form>
                <hr style={{width: '100%', marginBottom: 10, color: '#EAECF0'}}/>

                {/*PASSWORD CHANGE FORM*/}
                <h2>Изменить пароль:</h2>
                {passwordsErr && <p className="paragraph__text" style={{color: 'red'}}>{passwordsErr}</p>}
                {passOk && <p className="paragraph__text" style={{color: 'green'}}>{passOk}</p>}
                <form onSubmit={changePassword} className="reg-login-form only-login-form">
                    <p className="paragraph__text">Старый пароль: </p>
                    <input className="form-input"
                           type="password"
                           value={updatePasswords.currentPassword}
                           placeholder="Введите старый пароль"
                           required
                           onChange={e => setUpdatePasswords({...updatePasswords, currentPassword: e.target.value})}
                    />
                    <p className="paragraph__text">Новый пароль: </p>
                    <input className="form-input"
                           type="password"
                           value={updatePasswords.newPassword}
                           placeholder="Введите новый пароль"
                           required
                           onChange={e => setUpdatePasswords({...updatePasswords, newPassword: e.target.value})}
                    />
                    <button type="submit" className="form-submit-btn">Подтвердить</button>
                </form>
            </>}
        </div>
    );
};

export default Profile;