import React, { Component } from 'react';
import './App.css';

const text = [
  'justify-content: flex-start;',
  'justify-content: flex-end;',
  'justify-content: center;',
  'justify-content: space-around;',
  'justify-content: space-between;',

]

class App extends Component {
  state = { adjusted: false, box1: {}, box2: {}, box3: {}, box4: {}, stage: 'stage1' }
  i = 0

  animate() {
    this.i++
    if (this.i === 5) {
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
    return {
      top: document.getElementById(id).getBoundingClientRect().top - cont.getBoundingClientRect().top,
      left: document.getElementById(id).getBoundingClientRect().left - cont.getBoundingClientRect().left
    }
  }

  getContainerDimensions() {
    const cont = document.getElementById('container2')
    return {
      width: cont.getBoundingClientRect().with - 40,
      height: cont.getBoundingClientRect().height - 40
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
        <h1>{text[this.i]}</h1>
        <div id="app">
          <div id="container" style={this.state.cont}>
            <div id="one" style={this.state.box1} className="square"><p>1</p></div>
            <div id="two" style={this.state.box2} className="square"><p>2</p></div>
            <div id="three" style={this.state.box3} className="square"><p>3</p></div>
            <div id="four" style={this.state.box4} className="square"><p>4</p></div>
          </div>
          <div id="container2" className={'adjusted ' + this.state.stage}>
            <div id="one2" className="square2"><p>1</p></div>
            <div id="two2" className="square2"><p>2</p></div>
            <div id="three2" className="square2"><p>3</p></div>
            <div id="four2" className="square2"><p>4</p></div>
          </div>
        </div>
        <button onClick={this.animate.bind(this)}>Go</button>
      </div>
    );
  }
}

export default App;
