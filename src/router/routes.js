import Main from "../pages/Main";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import StudyRoom from "../pages/StudyRoom";

export const routes=[
    {path: "/", element: <Main/>},
    {path: "/about", element: <About/>},
    {path: "/courses", element: <Courses/>},
    {path: "/registration", element: <Registration/>},
    {path: "/login", element: <Login/>},

    {path: "/study-room", element: <StudyRoom/>},
    {path: "/study-room/*", element: <StudyRoom/>},
    {path: "*", element: <Main/>},
]