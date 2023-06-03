import React from 'react';
import {Route, Routes} from "react-router-dom";
import AllCourses from "../pages/studyRoomPages/allCourses/AllCourses";
import MyCourses from "../pages/studyRoomPages/myCourses/MyCourses";
import CoursePage from "../pages/studyRoomPages/coursePage/CoursePage";
import Topic from "../pages/studyRoomPages/topicPage/Topic";
import AddCourse from "../pages/studyRoomPages/addCoursePage/AddCourse";
import Tasks from "../pages/studyRoomPages/Tasks";
import Test from "../pages/studyRoomPages/testPage/Test";
import TasksForMentor from "../pages/studyRoomPages/TasksForMentor";
import Profile from "../pages/studyRoomPages/Profile";
import EditCourse from "../pages/studyRoomPages/EditCourse";
import AddTheme from "../pages/studyRoomPages/AddTheme";
import EditTheme from "../pages/studyRoomPages/EditTheme";
import AddAssignment from "../pages/studyRoomPages/addAssignment/AddAssignment";

const StudyRoomRouter = () => {
    return (
        <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/all-courses" element={<AllCourses/>}/>
            <Route path="/my-courses" element={<MyCourses/>}/>
            <Route path="/add-course" element={<AddCourse/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/mentor-tasks" element={<TasksForMentor/>}/>
            <Route path="/*" element={<Profile/>}/>

            {/*<Route path="/course" element={<CoursePage/>}/>*/}
            <Route path="/course/:id" element={<CoursePage/>}/>
            <Route path="/edit-course/:id" element={<EditCourse/>}/>
            {/*<Route path="/topic" element={<Topic/>}/>*/}
            <Route path="/course/:courseId/:themeId" element={<Topic/>}/>
            <Route path="/course/:courseId/:themeId/edit" element={<EditTheme/>}/>
            <Route path="/course/add-theme/:courseId" element={<AddTheme/>}/>
            <Route path="/course/add-assignment/:courseId/:themeId" element={<AddAssignment/>}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
    );
};

export default StudyRoomRouter;