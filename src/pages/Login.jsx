import React, {useContext, useState} from 'react';
import '../styles/RegAndLogin.css'
import {AuthContext, TokenContext} from "../context/context";
import {useFetch} from "../hooks/useFetch";
import UserService from "../API/UserService"
import Loader from "../components/UI/loader/Loader";
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {token, setToken} = useContext(TokenContext)
    const [user, setUser] = useState({ email: '', password: ''})
    const [fetchUser, isLoading, fetchUserError] = useFetch(async ()=>{
        try {
            const response = await UserService.loginRequest(user.email, user.password)
            console.log(response)
            if(response.status === 200){
                setToken(response.data);
                localStorage.setItem('token', `${response.data}`);
                setIsAuth(true);
                localStorage.setItem('auth', `true`);
                console.log(fetchUserError);
            }
        } catch (e){
            console.log(e)
            setIsAuth(false)
            setToken('')
            localStorage.removeItem('auth')
            localStorage.removeItem('token')
        }





    })

    const login = (e) =>{
        e.preventDefault()
        fetchUser().then(()=>{

        })
    }



    // const {isAuth, setIsAuth} = useContext(AuthContext)
    // const login = (e) =>{
    //     e.preventDefault()
    //     setIsAuth(true)
    //     localStorage.setItem('auth', 'true')
    //     console.log({
    //         name: user.name,
    //     })
    // }

    return (
        <div className="form-wrapper">
            <div className="form-content-box">
                <div className="form-content-box__left">
                    <h1 className="form-title">Вход</h1>
                    {fetchUserError && <h2>{fetchUserError}</h2>}
                    <form onSubmit={login} className="reg-login-form only-login-form">
                        <input className="form-input"
                               type="text"
                               value={user.email}
                               placeholder="Введите email"
                               required
                               onChange={e => setUser({...user, email: e.target.value})}
                        />
                        <input className="form-input"
                               type="password"
                               value={user.password}
                               placeholder="Введите пароль"
                               required
                               onChange={e => setUser({...user, password: e.target.value})}
                        />
                        <button type="submit" className="form-submit-btn">Войти</button>
                    </form>
                    {isLoading && <Loader/>}
                </div>
                <img src="./images/regImg.png" alt="take the journey" className="reg-img"/>
            </div>
        </div>
    );
};

export default Login;