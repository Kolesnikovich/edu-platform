import React, {useEffect, useState} from 'react';
import classes from "./AllCourses.module.css";
import {useFetch} from "../../../hooks/useFetch";
import CourseService from "../../../API/CourseService";
import CoursesList from "../../../components/studyRoomComponents/coursesList/CoursesList";
import Pagination from "../../../components/UI/pagination/Pagination";
import Loader from "../../../components/UI/loader/Loader";

const AllCourses = () => {
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(3)
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
        console.log(page)
    }

    useEffect(()=>{
        fetchCourses(limit, page)

    }, [page, limit])

    return (
        <div>
            <h1 className={classes.mainTitle}>Выберите курс для себя</h1>
            {isCoursesLoading
                ? <Loader/>
                : <CoursesList courses={courses}/>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
};

export default AllCourses;