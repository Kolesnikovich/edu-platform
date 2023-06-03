import React, {useContext, useState} from 'react';
import '../styles/RegAndLogin.css'
import {Link} from "react-router-dom";
import {AuthContext, TokenContext} from "../context/context";
import {useFetch} from "../hooks/useFetch";
import AuthService from "../API/AuthService";
import Loader from "../components/UI/loader/Loader";

const Registration = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {token, setToken} = useContext(TokenContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState({username: 'name', email: 'email@g.com', password: 'pass', passwordConfirmation: 'pass'})

    const [fetchUser, isLoading, fetchUserError] = useFetch(async ()=>{
        try {
            const response = await AuthService.register({username: user.username, email: user.email, password: user.password, passwordConfirmation: user.passwordConfirmation})
            // console.log(response)
            if(response.status === 200){
                // setToken(response.data);
                // localStorage.setItem('token', `${response.data}`);
                // setIsAuth(true);
                // localStorage.setItem('auth', `true`);
                console.log(response);
                setErrorMessage('Вы были успешно зарегестрированны, перейдте на страницу входа')
            }
        } catch (e){
            console.log(e.response.data)
            setErrorMessage(e.response.data.title)
            // setIsAuth(false)
            // setToken('')
            // localStorage.removeItem('auth')
            // localStorage.removeItem('token')
        }
    })

    const register = (e) => {
        e.preventDefault()
        fetchUser().then(()=>{

        })
    }

    return (
        <div className="form-wrapper">
            <div className="form-content-box">
                <div className="form-content-box__left">
                    <h1 className="form-title">Регистрация</h1>
                    {isLoading && <Loader/>}
                    {errorMessage && <h2>{errorMessage}</h2>}
                    <form onSubmit={register} className="reg-login-form">
                        <input className="form-input"
                               type="text"
                               value={user.username}
                               placeholder="Введите имя"
                               onChange={e => setUser({...user, username: e.target.value})}
                        />
                        <input className="form-input"
                               type="text"
                               value={user.email}
                               placeholder="Введите почту"
                               onChange={e => setUser({...user, email: e.target.value})}
                        />
                        <input className="form-input"
                               type="password"
                               value={user.password}
                               placeholder="Введите пароль"
                               onChange={e => setUser({...user, password: e.target.value})}
                        />
                        <input className="form-input"
                               type="password"
                               value={user.passwordConfirmation}
                               placeholder="Подтвердите пароль"
                               onChange={e => setUser({...user, passwordConfirmation: e.target.value})}
                        />
                        <button type='submit' className="form-submit-btn">Создать аккаунт</button>
                    </form>
                    <p className="already-signed-up__text">Уже есть аккаунт? <Link to="/login" className="already-signed-up__link">Войти</Link></p>
                </div>
                <img src="./images/regImg.png" alt="take the journey" className="reg-img"/>
            </div>
        </div>
    );
};

export default Registration;