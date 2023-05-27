import React from 'react';
import {Route, Routes} from "react-router-dom";
import AllCourses from "../pages/studyRoomPages/allCourses/AllCourses";
import MyCourses from "../pages/studyRoomPages/myCourses/MyCourses";
import CoursePage from "../pages/studyRoomPages/coursePage/CoursePage";
import Topic from "../pages/studyRoomPages/topicPage/Topic";
import AddCourse from "../pages/studyRoomPages/addCoursePage/AddCourse";
import Tasks from "../pages/studyRoomPages/Tasks";
import Test from "../pages/studyRoomPages/testPage/Test";

const StudyRoomRouter = () => {
    return (
        <Routes>
            {/*<Route path="/all-courses" element={<AllCourses/>}/>*/}
            <Route path="/my-courses" element={<MyCourses/>}/>
            <Route path="/add-course" element={<AddCourse/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/*" element={<AllCourses/>}/>

            <Route path="/course" element={<CoursePage/>}/>
            <Route path="/topic" element={<Topic/>}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
    );
};

export default StudyRoomRouter;