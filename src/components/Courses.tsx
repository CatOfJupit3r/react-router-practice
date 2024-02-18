import React from 'react';
import COURSES from "../data/courses";
import {Link, NavLink} from "react-router-dom";

const Courses = () => {
    return (
        <div>
            {COURSES.map(course => (
                <Link to={`${course.slug}`}>
                    <h2>{course.title}</h2>
                </Link>
            ))}
        </div>
    );
};

export default Courses;