import React, {useEffect, useState} from 'react';
import Header from "../components/UI/header/Header";
import {useFetch} from "../hooks/useFetch";
import CourseService from "../API/CourseService";
import PopularCourses from "../components/popularCourses/PopularCourses";
import LastCourses from "../components/lastCourses/LastCourses";
import Pagination from "../components/UI/pagination/Pagination";
import ADBlock from "../components/UI/adBlock/ADBlock";
import Footer from "../components/UI/footer/Footer";
import Loader from "../components/UI/loader/Loader";
import {useToken} from "../hooks/useToken"

const Main = () => {
    const {token} = useToken()
    const [popCourses, setPopCourses] = useState([])
    const [fetchPopCourses, isPopCoursesLoading, popCoursesError] = useFetch(async () => {
        const response = await CourseService.getPopularCourses(3, 1, token)
        setPopCourses(response.data.data)
        console.log(response)
    })

    const [lastCourses, setLastCourses] = useState([])
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const getPageCount = (total, limit) =>{
        return Math.ceil(total / limit)
    }

    const changePage = (page) => {
        setPage(page)
    }

    const [fetchLastCourses, isLastCoursesLoading, lastCoursesError] = useFetch(async (limit, page) => {
        const response = await CourseService.getAllPublicCourses(6, page, '', token)
        setLastCourses(response.data.data)
        console.log(response.data.data)
        const totalCount = response.data.count
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect( ()=>{
         fetchPopCourses()
         fetchLastCourses()
    }, [page])

    return (
        <div>
            {isPopCoursesLoading ? <><Loader/></>
            : <PopularCourses courses={popCourses}/>}

            {isLastCoursesLoading ? <><Loader/></>
            : <LastCourses courses={lastCourses}/>}
            <ADBlock/>
        </div>
    );
};

export default Main;