import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faChessKnight } from '@fortawesome/free-regular-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "GoLang",
    "NodeJs",
    ".NET (& Core)",
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS/SCSS",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "CosmosDB",
    "Redis",
    "Neo4J"
];

const labelsSecond = [
    "Git",
    "Perforce",
    "Docker",
    "AWS",
    "Azure",
    "Google Cloud",
    "Jenkins",
    "Kafka",
    "Kubernetes"
];

const labelsThird = [
    "Unreal Engine (C++)",
    "Flash",
    "Actionscript/Js",
    "Unity",
    "Blender",
    "Gimp/Photoshop",
    "Reaper (DAW)"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faFileCode} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>I'm an Experienced and Passionate Software Engineer with over 8 years of
                            experience in translating Business Requirements and functional specification
                            into performant solutions, specializing in Backend <b>(GoLang, NodeJs, .NET)</b>,
                            Frontend <b>(React, Angular, Js)</b> Development. I've Worked extensively on a large
                            variety of technologies and with cross-functional teams in game studios, start-ups and
                            large corporations, demonstrating adaptability and versatility.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>LiveOps Tooling/DevOps & Automation</h3>
                        <p>Alongside Test Driven Development of Frontend applications and Backend services, I also help with setting up CI/CD pipelines, deployment automation and development of LiveOps Tooling necessary for successful & robust solutions.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faChessKnight} size="3x" />
                        <h3>Game Development</h3>
                        <p>As part of <b>Sumo-Digital Ltd</b> for the past few years, I've implemented and refactored Backend services & tools for two
                            unannounced cross-platform games, focusing on Ranked PVP/PVE
                            systems, ELO/Rating calculations, matchmaking, rewards, telemetry, and
                            Internal Developer tools etc. Primarily worked with <b>GoLang, .NET Core, Unreal Engine and variety of proprietary technologies</b>.</p>
                        <p>I've also been designing and developing games independently (as ZYKOTEK) from my early school years. With more than 10 games licensed, released and a <b>NASSCOM Student Game of the Year</b> award, I've been exposed to various programming languages, design/animation concepts and development platforms.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;