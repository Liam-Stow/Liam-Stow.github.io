import React from 'react'
import Editor from '@monaco-editor/react';
import ReactDOM from 'react-dom'
import Sketch from 'react-p5'
import './index.css'

class RobotCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    setup = (p5, canvasParentRef) => {
        console.log(this.props)

        let canvas = p5.createCanvas(600, 600).parent(canvasParentRef)
    }

    draw = (p5) => {
        p5.background("rgb(200,200,200)")
        eval(this.props.userCode)
    }

    render() {
        return (
            <Sketch setup={this.setup} draw={this.draw} />
        )
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditorReady: false,
            activeDraw: ""
        }
    }
    valueGetter = React.createRef();

    handleEditorDidMount = (_valueGetter) => {
        this.setState({ isEditorReady: true })
        this.valueGetter.current = _valueGetter;
    }

    handleShowValue = () => {
        alert(this.valueGetter.current());
    }

    getCode = () => {
        if (this.state.isEditorReady) {
            return this.valueGetter.current()
        } else {
            return ""
        }
    }

    runCode = () => {
        this.setState({activeDraw: this.getCode()})
    }

    render() {
        return (
            <React.Fragment >
                <div className="flexbox-container">
                    <button onClick={this.handleShowValue} disabled={!this.state.isEditorReady}>Show</button>
                    <button onClick={this.runCode} disabled={!this.state.isEditorReady}>Run</button>
                </div>
                <div className="flexbox-container">
                    <Editor
                        className="CodeEditor"
                        height="100vh"
                        width="50%"
                        theme="dark"
                        language="javascript"
                        editorDidMount={this.handleEditorDidMount} />
                    <RobotCanvas userCode={this.state.activeDraw}/>
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
