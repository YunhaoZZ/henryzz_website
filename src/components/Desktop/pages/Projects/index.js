import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from '../../components/AnimatedLetters'
import "./index.scss";
import projectsData from '../../../../assets/data/projects.json'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [projects, setProjects] = useState([]);
    console.log(projectsData)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    return (
        <>
            <div className="container projects-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>
                {/* <div>{renderPortfolio(portfolio)}</div> */}
            </div>
            <Loader type="square-spin" />
        </>
    );
}
export default Projects