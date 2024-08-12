import React, { Fragment } from "react";
// import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const QuizInstructions = () => (
    <Fragment>
        <Helmet>
            <title>Quiz Instructions</title>
        </Helmet>
            <div className="instructions  container">
                <h1>How to Play the Game</h1>
                <p><b>Ensure you read this guide from start to finish.</b></p>
                <ol className="browser-default" id="main-list">
                    <li>
                    The game has a duration of 15 minutes and ends as soon as your time elapses. Unanswered questions will be scored as incorrect.
                    </li>
                    <li>
                    Each question contains 4 options. Currently, only one answer can be selected for a multiple choice question.
                    </li>
                    <li>
                    Click on the Submit button at the bottom of the page to have your answers graded.
                    </li>
                    <li>
                        use a hint by clicking the icon 
                        <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon" style={{color: 'orange'}}></span>
                    </li>
                    <li>
                        select a 50-50 lifeline by clickingthe icon
                        <span className="mdi mdi-set-center mdi-24px lifelline-icon" style={{color: 'green'}}></span>
                    </li>
                    <li>
                        The timer starts as soon as the game loads.
                    </li>
                    <li>
                        Let's do this if you think you've got what it takes.
                    </li>
                </ol>
                <div className = "buttons">
                    <span className="left"><Link to="/">No take me back</Link></span>
                    <span className="right"><Link to="/play/Quiz">Okay, Let's go!</Link></span>
                </div>
            </div>
    </Fragment>
);

export default QuizInstructions;