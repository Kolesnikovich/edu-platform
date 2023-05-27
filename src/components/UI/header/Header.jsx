import React, {useContext} from 'react';
import classes from "./Header.module.css";
import Button from "../button/Button";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {AuthContext, TokenContext} from "../../../context/context";

const Header = () => {
    const navigate = useNavigate()
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {token, setToken} = useContext(TokenContext)
    const logout = () =>{
        setIsAuth(false)
        localStorage.removeItem('auth')
        setToken('')
        localStorage.removeItem('token')
    }

    return (
        <div className={classes.header}>
            <span className={classes.logo}><Link to="/">LOGO</Link></span>
            <div className={classes.navbar}>
                <ul className={classes.navbar__items}>
                    <li className={`${classes.navbar__item}`}><NavLink to="/" className={classes.item__link}>Главная</NavLink></li>
                    <li className={`${classes.navbar__item}`}><NavLink to="/about" className={classes.item__link}>О нас</NavLink></li>
                    <li className={`${classes.navbar__item}`}><NavLink to="/courses" className={classes.item__link}>Курсы</NavLink></li>
                </ul>
            </div>
            <div className="btns">
                {isAuth
                    ? <><button onClick={()=>navigate('/study-room')} className={classes.btn}>Личный кабинет</button>
                        <Button onClick={logout}>Выйти</Button></>
                    : <><button onClick={()=>navigate('/registration')} className={classes.btn}>Зарегистрироваться</button>
                        <Button onClick={()=>navigate('/login')}>Войти</Button></>
                }
            </div>
        </div>
    );
};

export default Header;