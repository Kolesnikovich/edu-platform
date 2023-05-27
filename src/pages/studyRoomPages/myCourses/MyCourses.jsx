import React, {useEffect, useState} from 'react';
import {useFetch} from "../../../hooks/useFetch";
import CourseService from "../../../API/CourseService";
import classes from "./MyCourses.module.css";
import Loader from "../../../components/UI/loader/Loader";
import CoursesList from "../../../components/studyRoomComponents/coursesList/CoursesList";
import Pagination from "../../../components/UI/pagination/Pagination";

const MyCourses = () => {
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const getPageCount = (totalCount, limit) => {
        return Math.ceil(totalCount / limit)
    }


    const [courses, setCourses] = useState([])
    const [fetchCourses, isCoursesLoading, coursesError] = useFetch(async (limit, page) => {
        const response = await CourseService.getAllPublicCourses(limit, page)
        setCourses(response.data.data)
        // console.log(response.data)
        const totalCount = response.data.count
        // console.log(totalCount)
        setTotalPages(getPageCount(totalCount, limit))
    })

    const changePage = (page) => {
        setPage(page)
    }

    useEffect(()=>{
        fetchCourses(limit, page)

    }, [page, limit])
    return (
        <div>
            <h1 className={classes.mainTitle}>Курсы, на которых проходит мое обучение</h1>
            {isCoursesLoading
                ? <Loader/>
                : <CoursesList courses={courses}/>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
};

export default MyCourses;