import React, { Component } from "react";
import parse from 'html-react-parser';

class ResearchComponent extends Component {
    render() {
        const formatDate = function (d) {
            if (d === null || d === undefined) {
                return ""
            }
            else {
                return d;
            }
            // return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(d);
        }
        const work = this.props.work.map((exp) => {
            const link = exp.link ? (<h6><a href={exp.link}>{exp.link}</a></h6>) : (<></>)
            return (
                <>
                    <div className="row">
                        <h3>{exp.name}</h3>
                    </div>
                    <div className="row">
                        <h4>{exp.position}</h4>
                    </div>
                    <div className="row">
                        <h5>{formatDate(exp.start)} {exp.end ? <span>&#8212;</span> : ""} {formatDate(exp.end)}</h5>
                    </div>
                    <div className="row">
                        {exp.volumelink ? (<a href={exp.volumelink}><h5>Link to volume</h5></a>) : <div></div>}
                    </div>
                    <div className="row">
                        {link}
                    </div>
                    <div className="row">
                        <p>{parse(exp.description)}</p>
                    </div>
                    <div className="row">
                        {exp.abstract ? <p><strong>Abstract: </strong>{exp.abstract} </p> : <div></div>}
                    </div>
                </>
            )
        })

        return (
            <>
                <div className="container">
                    <h1 className="text-center">{this.props.title}</h1>
                    <hr></hr>
                    <br></br>
                    <p> <b>Update 2024:</b> Still under construction! Trying to figure out how to tell a consistent story. More importantly, to separate high school research from university research. </p>
                    <p>Food for thought: as a researcher, does your evolution take place in discrete steps (high school, uni, grad school, etc, being some of these steps) or is it a continuous process? If it's the latter, do you divide up your research, or present everything together in one story?</p> <p> Also, <b>how to re-write your past stories in the language of your present? </b> </p>
                    {work}
                </div>
            </>
        );
    }
}

export default ResearchComponent;