import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faChessKnight } from '@fortawesome/free-regular-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Golang (Go)",
    ".NET (C#)",
    "Node.js",
    "C++",
    "Python",
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
    "CosmosDB/DynamoDB",
    "Redis",
    "Neo4J"
];

const labelsSecond = [
    "Perforce",
    "Docker",
    "Kubernetes",
    "Git",
    "AWS",
    "Azure",
    "Google Cloud",
    "Jenkins",
    "Kafka",
    "Prometheus",
    "Grafana",
    "Jaeger"
];

const labelsThird = [
    "Unreal Engine (C++)",
    "Flash",
    "Actionscript/Javascript",
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
                        <h3>Software Engineering</h3>
                        <p>Experienced and passionate Software Engineer with over 8 years of experience translating business requirements and functional specifications into high-performance solutions. Specialized in backend development using Go, .NET (including .NET Core), and Node.js, as well as frontend development with React, Angular, and JavaScript. Proven track record of working across diverse technologies and collaborating with cross-functional teams in game studios, startups, and large enterprises, demonstrating strong adaptability and versatility.</p>
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
                        <p>In addition to practicing test-driven development for both frontend applications and backend services, I contribute to the design and implementation of CI/CD pipelines, deployment automation, and the development of LiveOps tooling, ensuring the delivery of robust, scalable, and reliable solutions.</p>
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
                        <p>As part of Sumo Digital over the past few years, I have designed, implemented, and refactored backend services and tools for two unannounced cross-platform titles. My work has focused on ranked PvP/PvE systems, ELO-based rating calculations, matchmaking, rewards, telemetry, and internal developer tooling. I have primarily worked with Go, .NET Core, Unreal Engine, and a range of proprietary technologies.
                        </p><p>In parallel, I have been independently designing and developing games under the name ZYKOTEK since my early school years. With over 10 games licensed and released, and recognition including the NASSCOM Student Game of the Year, I have gained extensive exposure to diverse programming languages, as well as game design, animation concepts, and multiple development platforms.</p>
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