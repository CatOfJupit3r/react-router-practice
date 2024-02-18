import React from 'react';
import {Link, useParams} from "react-router-dom";
import COURSES from "../data/courses";

const SingleCourse = () => {
    const {slug} = useParams()
    const found_course = COURSES.find(course => course.slug === slug)
    return <>
        {(slug && found_course ?
                (<div>
                    <h1>
                        {found_course.title}
                        <br/>
                        {found_course.id}
                    </h1>
                </div>) :
                (<div>
                    <h1>
                        Course {slug} not found.
                    </h1>
                </div>)
        )}
        <Link to={".."} relative={"path"}>Back to courses</Link>
    </>
};

export default SingleCourse;