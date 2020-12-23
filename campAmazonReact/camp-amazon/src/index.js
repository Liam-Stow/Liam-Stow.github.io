import React from 'react'
import Editor from '@monaco-editor/react';
import ReactDOM from 'react-dom'
import Sketch from 'react-p5'
import './index.css'

class RobotCanvas extends React.Component {
    setup(p5, canvasParentRef) {
        let canvas = p5.createCanvas(600, 600).parent(canvasParentRef)
    }

    draw(p5) {
        p5.background("rgb(200,200,200)")
    }

    render() {
        return (
            <Sketch setup={this.setup} draw={this.draw} />
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment >
                <div className="flexbox-container">
                    <Editor
                        className="CodeEditor"
                        height="100vh"
                        width="50%"
                        theme="dark"
                        language="javascript" />
                    <RobotCanvas />
                </div>
            </React.Fragment>
        );
    }
}


// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
