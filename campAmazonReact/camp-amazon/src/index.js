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
        eval(this.props.userCode())
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
            isEditorReady: false
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

    render() {
        return (
            <React.Fragment >
                <button onClick={this.handleShowValue} disabled={!this.state.isEditorReady}>Show</button>
                <div className="flexbox-container">
                    <Editor
                        className="CodeEditor"
                        height="100vh"
                        width="50%"
                        theme="dark"
                        language="javascript"
                        editorDidMount={this.handleEditorDidMount} />
                    <RobotCanvas userCode={this.getCode}/>
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
