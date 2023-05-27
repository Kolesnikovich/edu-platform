import './styles/App.css';
import Main from "./pages/Main";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/UI/header/Header";
import Footer from "./components/UI/footer/Footer";
import AppRouter from "./components/AppRouter";
import {useEffect, useState} from "react";
import {AuthContext, TokenContext} from "./context/context";

function App() {
    const [token, setToken] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))
        }

        if(localStorage.getItem('auth')){
            setIsAuth(true)
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
                    <BrowserRouter>
                        <Header/>
                        <AppRouter/>
                        <Footer/>
                    </BrowserRouter>
                </AuthContext.Provider>
            </TokenContext.Provider>


        </div>
    );
}

export default App;
