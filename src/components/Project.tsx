import React from "react";
import decimatedImg from '../assets/images/decimated.png';
import decimatedColImg from '../assets/images/decimatedcol.jpg';
import bombslaughtImg from '../assets/images/bombslaughtu.jpeg';
import getmethatImg from '../assets/images/getmethat.jpg';
import postonautImg from '../assets/images/postonaut.jpg';
import dodgketImg from '../assets/images/dodgket.jpg';
import PlayIcon from '@mui/icons-material/PlayArrowOutlined';
import MovieIcon from '@mui/icons-material/MovieCreationOutlined';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <img src={decimatedImg} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Decimated</h2>
                    <a href="https://www.youtube.com/watch?v=SUcH9DW0pRE" target="_blank" rel="noreferrer">
                        <div className="project-action"><MovieIcon /> <div className="project-action-title">Trailer</div></div>
                    </a>
                    <a href="https://www.newgrounds.com/portal/view/659771" target="_blank" rel="noreferrer">
                        <div className="project-action"><PlayIcon /> <div className="project-action-title">Play</div></div>
                    </a>
                    <a href={decimatedColImg} target="_blank" rel="noreferrer">
                        <img src={decimatedColImg} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <p>A side scrolling shooting game driven by an intricate storyline involving mutants, mercenaries and a virus outbreak. Shoot your way through bloodthirsty mutants, armed mercenaries and find the truth behind the virus outbreak in this Epic Fast Paced Run'n Gun Shooter. This game puts great focus on atmosphere, cinematic cutscenes and story with graphic features like weather effects, sunbloom never seen in any flash game before. It features kickass sound effects and amazing music work by some talented artists from around the globe.
                        <br /><b>The game won a Runner-up award for "Student Game of the Year" at NASSCOM Gaming Forum Awards 2014, Pune.</b></p>
                </div>
                <div className="project">
                    <img src={bombslaughtImg} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Bombslaught</h2>
                    <a href="https://www.newgrounds.com/portal/view/588645" target="_blank" rel="noreferrer">
                        <div className="project-action"><PlayIcon /> <div className="project-action-title">Play</div></div>
                    </a>
                    <p>A huge Terrorist force is about to invade your homeland and
                        You are the only one who is going to stop them! Hold the line!! and don't let them step onto your land.
                        Upgrade your weapons, defenses and rip n tear in this brutal shoot 'em up game.</p>
                </div>
                <div className="project">
                    <img src={getmethatImg} className="zoom" alt="thumbnail" width="100%" />
                    <h2>GetMeThat</h2>
                    <p>A multi-platform
                        mobile app (iOS and Android)
                        using NativeScript, Angular, and
                        Bing APIs that captures pictures and identifies objects
                        from the photos (e.g., car
                        make/model) and lists nearby
                        stores selling them. Won 2nd
                        place in an organization-wide
                        hackathon.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/zykosince94/postonaut" target="_blank" rel="noreferrer">
                        <img src={postonautImg} className="zoom" alt="thumbnail" width="100%" />
                        <h2>Postonaut</h2>
                    </a>
                    <p>An open-source
                        REST client extension for
                        Visual Studio Code, inspired by
                        <b> Postman</b>,
                        featuring a tabular graphical user
                        interface for bulding and testing
                        APIs. Includes support for params, headers,  a history
                        module for saving and viewing
                        requests/responses. Built with
                        AngularJS.</p>
                </div>
                <div className="project">
                    <img src={dodgketImg} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Dodgket</h2>
                    <p>A full-fledged rocket dodging
                        game inspired by space invaders, developed entirely using
                        C++ for my Senior Secondary
                        School project which made use
                        of classes, data file handling for
                        storing/retrieving/manipulating
                        scores and real time rendered
                        animated graphics.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;