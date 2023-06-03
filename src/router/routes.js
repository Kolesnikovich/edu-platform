import Main from "../pages/Main";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import StudyRoom from "../pages/StudyRoom";

export const publicRoutes=[
    {path: "/", element: <Main/>},
    {path: "/about", element: <About/>},
    {path: "/courses", element: <Courses/>},
    {path: "/registration", element: <Registration/>},
    {path: "/login", element: <Login/>},
    {path: "*", element: <Main/>},
]
export const privateRoutes=[
    {path: "/", element: <Main/>},
    {path: "/about", element: <About/>},
    {path: "/courses", element: <Courses/>},

    {path: "/study-room", element: <StudyRoom/>},
    {path: "/study-room/*", element: <StudyRoom/>},
    {path: "*", element: <StudyRoom/>},
]