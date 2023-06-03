import React, {useEffect, useState} from 'react';
import classes from "./AllCourses.module.css";
import {useFetch} from "../../../hooks/useFetch";
import CourseService from "../../../API/CourseService";
import CoursesList from "../../../components/studyRoomComponents/coursesList/CoursesList";
import Pagination from "../../../components/UI/pagination/Pagination";
import Loader from "../../../components/UI/loader/Loader";
import {useToken} from "../../../hooks/useToken";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const AllCourses = () => {
    const {token} = useToken()
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(3)
    const [page, setPage] = useState(1)
    const [sortBy, setSortBy] = useState('rating desc')
    const [query, setQuery] = useState('')
    const getPageCount = (totalCount, limit) => {
        return Math.floor(totalCount / limit)
    }

    const [courses, setCourses] = useState([])
    const [fetchCourses, isCoursesLoading, coursesError] = useFetch(async () => {
        const response = await CourseService.getAllPublicCourses(6, page, sortBy, token)
        query ? setCourses(response.data.data.filter(course => course.title.toLowerCase().includes(query.toLowerCase()))) : setCourses(response.data.data)
        //console.log(response.data.data)
        const totalCount = response.data.count
        //console.log(totalCount)
        setTotalPages(getPageCount(totalCount, limit))
    })

    const changePage = (page) => {
        setPage(page)
    }

    useEffect(()=>{
        fetchCourses()

    }, [page, sortBy, query])

    return (
        <div style={{padding: 20}}>
            <h1 className={classes.mainTitle}>Выберите курс для себя</h1>
            <FormControl>
                <FormLabel id="radio-buttons-group-label" color="secondary">Сортировка по:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={sortBy}
                    onChange={(e)=>{
                        setSortBy(e.target.value)
                    }}
                >
                    <FormControlLabel value="rating desc" control={<Radio color="secondary"/>} label="Рейтинг" />
                    <FormControlLabel value="title desc" control={<Radio color="secondary"/>} label="Название" />
                    <FormControlLabel value="description desc" control={<Radio color="secondary"/>} label="Описание" />
                </RadioGroup>
            </FormControl>
            <input type="text" className="form-input" value={query} onChange={e=>setQuery(e.target.value)}
                   placeholder="Поиск по названию"
            />
            {isCoursesLoading
                ? <Loader/>
                : courses.filter(course => course.title.toLowerCase().includes(query.toLowerCase())).length!==0
                    ? <>
                        <CoursesList courses={courses}/>
                        <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
                    </>
                    : <h2>Ничего не найдено</h2>
            }
        </div>
    );
};

export default AllCourses;