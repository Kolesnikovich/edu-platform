import React, {useState} from 'react';
import '../styles/RegAndLogin.css'
import {Link} from "react-router-dom";

const Registration = () => {

    const [user, setUser] = useState({name: 'name', email: 'email@g.com', password: 'pass', password2: 'pass'})
    const createUser = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-wrapper">
            <div className="form-content-box">
                <div className="form-content-box__left">
                    <h1 className="form-title">Регистрация</h1>
                    <form className="reg-login-form">
                        <input className="form-input"
                               type="text"
                               value={user.name}
                               placeholder="Введите имя"
                               onChange={e => setUser({...user, name: e.target.value})}
                        />
                        <input className="form-input"
                               type="text"
                               value={user.email}
                               placeholder="Введите имя"
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
                               value={user.password2}
                               placeholder="Подтвердите пароль"
                               onChange={e => setUser({...user, password2: e.target.value})}
                        />
                        <button onClick={createUser} className="form-submit-btn">Создать аккаунт</button>
                    </form>
                    <p className="already-signed-up__text">Уже есть аккаунт? <Link to="/login" className="already-signed-up__link">Войти</Link></p>
                </div>
                <img src="./images/regImg.png" alt="take the journey" className="reg-img"/>
            </div>
        </div>
    );
};

export default Registration;