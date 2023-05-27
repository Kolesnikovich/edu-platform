import {useMemo} from "react";

export const useSortedCourses = (courses, sort) => {
    const sortedCourses = useMemo(() => {
        console.log("sort function execution")
        if(sort){
            return [...courses].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return courses
    }, [sort, courses]);

    return sortedCourses
}

export const useCourses = (courses, sort, query) => {
    const sortedCourses = useSortedCourses(courses, sort)
    const sortedAndSearchedCourses = useMemo(() => {
        return sortedCourses.filter(course => course.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedCourses])

    return sortedAndSearchedCourses
}