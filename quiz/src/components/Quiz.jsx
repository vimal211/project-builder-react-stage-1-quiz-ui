import React, { Component } from 'react';
import './Quiz.css';

export default class Quiz extends Component {
    render() {
        return (
            <div className="quiz_Container">
                <h1>Question</h1>
                <div className="question_container">
                    <p>4 of 15</p>
                    <p>Which is the only mammal that can't jump?</p>
                    <div></div>
                </div>
                <div className="option_Container">
                    <p className="options">Dog</p>
                    <p className="options">Goat</p>
                    <p className="options">Elephant</p>
                    <p className="options">Lion</p>
                </div>
                <div className="button_Container">
                    <button>Previous</button>
                    <button>Next</button>
                    <button>Quit</button>
                </div>
            </div>
        )
    }
}
