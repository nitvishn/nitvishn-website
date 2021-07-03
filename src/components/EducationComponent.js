import React, { Component } from "react";
import parse from 'html-react-parser';

class Education extends Component {
    render() {
        const formatDate = function (d) {
            if (d === "Present") {
                return "Present"
            } else if (d === null || d === undefined) {
                return ""
            }
            return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(d);
        }
        const courses = this.props.courses.map((course) => {
            return (
                <div className="col-12 col-sm-6 col-lg-4">
                    <h5><a href={course.link}>{course.name}</a></h5>
                    <h6>From <strong>{course.institution}</strong> on <strong>{course.platform}</strong></h6>
                    <h6>Completed {formatDate(course.date)}</h6>
                    <br></br>
                </div>
            )
        })
        const completed = (date) => {
            if (date) {
                return (<h6>Completed {formatDate(date)}</h6>)
            } else {
                return (<h6> In Progress </h6>)
            }
        }
        const specs = this.props.specs.map((spec) => {
            const specCourses = spec.courses.map((course) => {
                return (
                    <div className="col-12 col-md-6">
                        <h5><a href={course.link}>{course.name}</a></h5>
                        {completed(course.date)}
                        <br></br>
                    </div>
                )
            })
            return (
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h4><a href={spec.link}>{spec.name}</a></h4>
                        <h6>From <strong>{spec.institution}</strong> on <strong>{spec.platform}</strong></h6>
                        {completed(spec.date)}
                        <br></br>
                    </div>
                    {specCourses}
                    <hr></hr>
                </div>
            )
        })

        return (
            <>
                <h1 className="text-center">Education</h1>
                <hr></hr>
                <br></br>
                <h3>University of Toronto</h3>
                <h3>The International School Bangalore</h3>
                <h3>Online Courses</h3>
                <hr></hr>
                <br></br>
                <div className="row justify-content-center">
                    {courses}
                </div>
                <h3>Online Specialisations</h3>
                <hr></hr>
                <br></br>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-12 col-md-11">
                        {specs}
                    </div>
                    <div className="col"></div>
                </div>
            </>
        );
    }
}

export default Education;