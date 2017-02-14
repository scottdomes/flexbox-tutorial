import React, { Component } from 'react';
import './App.css';

const text2 = [
  '.square { flex-shrink: 1; }',
  '.square { flex-shrink: 1; }',
  '.square { flex-shrink: 1; }',
  '.square { flex-shrink: 1; }',
  '.square { flex-shrink: 1; }',
]

// const text2 = false
const text = [
  '.square#three { flex-shrink: 2; }',
  '.square#three { flex-shrink: 2; }',
  '.square#three { flex-shrink: 2; }',
  '.square#three { flex-shrink: 2; }',
  '.square#three { flex-shrink: 2; }',
]

class App extends Component {
  state = { adjusted: false, box1: {}, box2: {}, box3: {}, box4: {}, stage: 'stage1' }
  i = 0

  animate() {
    this.i++
    console.log(this.i)
    if (this.i === text.length) {
      this.i = 0
    }
    this.setState({ stage: 'stage' + (this.i + 1) }, () => {
      this.setState({ 
        box1: this.getDimensions('one2'),
        box2: this.getDimensions('two2'),
        box3: this.getDimensions('three2'),
        box4: this.getDimensions('four2'),
        cont: this.getContainerDimensions(),
      })
    })
  }

  getDimensions(id) {
    const cont = document.getElementById('container2')
    console.log(document.getElementById(id).getBoundingClientRect())
    return {
      top: document.getElementById(id).getBoundingClientRect().top - cont.getBoundingClientRect().top,
      left: document.getElementById(id).getBoundingClientRect().left - cont.getBoundingClientRect().left,
      width: document.getElementById(id).getBoundingClientRect().width,
      height: document.getElementById(id).getBoundingClientRect().height
    }
  }

  getContainerDimensions() {
    const cont = document.getElementById('container2')
    return {
      width: cont.getBoundingClientRect().width - 40,
      height: cont.getBoundingClientRect().height - 40,
    }
  }

  componentDidMount() {
    this.setState({ 
      box1: this.getDimensions('one2'),
      box2: this.getDimensions('two2'),
      box3: this.getDimensions('three2'),
      box4: this.getDimensions('four2'),
      cont: this.getContainerDimensions()
    })
  }

  render() {
    return (
      <div>
        { text2 && <h1>{text2[this.i]}</h1> }
        <h1>{text[this.i]}</h1>
        <div id="app">
          <div id="container" style={this.state.cont}>
            <img id="one"  src={require("../../frodo.jpg")} style={this.state.box1} className="square"/>
            <img id="two"  src={require("../../merry.jpeg")} style={this.state.box2} className="square"/>
            <img id="three"  src={require("../../pippin.jpg")} style={this.state.box3} className="square"/>
            <img id="four"  src={require("../../samwise.jpg")} style={this.state.box4} className="square"/>
          </div>
          <div id="container2" className={'adjusted ' + this.state.stage}>
            <img id="one2"  src={require("../../frodo.jpg")} className="square2"/>
            <img id="two2"  src={require("../../merry.jpeg")} className="square2"/>
            <img id="three2"  src={require("../../pippin.jpg")} className="square2"/>
            <img id="four2"  src={require("../../samwise.jpg")} className="square2"/>
          </div>
        </div>
        <button onClick={this.animate.bind(this)}>Go</button>
      </div>
    );
  }
}

export default App;
