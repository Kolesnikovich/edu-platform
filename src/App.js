import './styles/App.css';
import Main from "./pages/Main";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/UI/header/Header";
import Footer from "./components/UI/footer/Footer";
import AppRouter from "./components/AppRouter";
import {useEffect, useState} from "react";
import {AuthContext, TokenContext, UserIdContext} from "./context/context";

function App() {
    const [token, setToken] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [id, setId] = useState('')
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
        }

        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }

        if(localStorage.getItem('id')){
            setId(localStorage.getItem('id'))
        }
        setIsLoading(false)
    }, [])

    return (
        <div className="App">
            <TokenContext.Provider value={{
                token,
                setToken
            }}>
                <AuthContext.Provider value={{
                    isAuth,
                    setIsAuth,
                    isLoading
                }}>
                    <UserIdContext.Provider value={{
                        id,
                        setId
                    }}>
                        <BrowserRouter>
                            <Header/>
                            <AppRouter/>
                            <Footer/>
                        </BrowserRouter>
                    </UserIdContext.Provider>
                </AuthContext.Provider>
            </TokenContext.Provider>


        </div>
    );
}

export default App;
