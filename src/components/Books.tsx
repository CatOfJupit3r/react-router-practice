import React, {useEffect, useState} from 'react';
import BOOKS from "../data/BOOKS";
import {Link, useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {Course} from "../types/course";

const getSortFunc = (sort: string) => {
    switch (sort) {
        case "slug":
            return (a: Course, b: Course) => (
                a.slug.localeCompare(b.slug)
            )
        case "id":
            return (a: Course, b: Course) => (
             b.id - a.id
            )
        case "title":
            return (a: Course, b: Course) => (
                a.title.localeCompare(b.title)
            )
        default:
            return (a: Course, b: Course) => (
                a.id - b.id
            )
    }
}

const SUPPORTED_SORTS = ["id", "title", "slug"]

const Books = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const parsedQuery = queryString.parse(location.search)
    const [sortedCourses, setSortedCourses] = useState(BOOKS)
    const [sort, setSort] = useState(parsedQuery.sort as string | "")

    useEffect(() => {
        const evalSort = () => {
            if (SUPPORTED_SORTS.find(s => s === sort)) {
                setSortedCourses(prevCourses => {
                    return [...prevCourses].sort(getSortFunc(sort))
                })
            } else {
                setSortedCourses(BOOKS)
                setSort("")
                if (sort && sort !== "") {
                    navigate(".")
                }
            }
        }
        evalSort()
    }, [sort, navigate]);

    const handleSort = (sort: string) => {
        if (sort) {
            navigate(`?sort=${sort}`)
        }
        setSort(sort)
    }

    return (
        <div>
            <h1>Courses sorted by: {sort ? sort[0].toUpperCase() + sort.slice(1): "None"}</h1>
            <button type={"button"} onClick={() => handleSort("id")}>Id</button>
            <button type={"button"} onClick={() => handleSort("title")}>Title</button>
            <button type={"button"} onClick={() => handleSort("")}>None</button>
            {sortedCourses.map((course, index) => (
                <Link key={index} to={`${course.slug}`}>
                    <h3>{course.title}</h3>
                </Link>
            ))}
        </div>
    );
};

export default Books;