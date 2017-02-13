import React, { Component } from 'react';
import './App.css';

const text = [
  'order: 0',
  'order: 1',
  'order: 3',
  'order: 99',
  'order: -1',
]

const text2 = false
// const text2 = [
//   'flex-flow: column wrap;',
//   'flex-flow: column wrap;',
//   'flex-flow: column wrap;',
//   'flex-flow: column wrap;',
//   'flex-flow: column wrap;',
//   'flex-flow: column wrap;'
// ]

class App extends Component {
  state = { adjusted: false, box1: {}, box2: {}, box3: {}, box4: {}, stage: 'stage1' }
  i = 0

  animate() {
    this.i++
    if (this.i === text.length) {
      this.i = 0
    }
    this.setState({ stage: 'stage' + (this.i + 1) }, () => {
      this.setState({ 
        box1: this.getDimensions('one2'),
        box2: this.getDimensions('two2'),
        box3: this.getDimensions('three2'),
        box4: this.getDimensions('four2'),
        box5: this.getDimensions('five2'),
        box6: this.getDimensions('six2'),
        box7: this.getDimensions('seven2'),
        box8: this.getDimensions('eight2'),
        box9: this.getDimensions('nine2'),
        box10: this.getDimensions('ten2'),
        cont: this.getContainerDimensions(),
      })
    })
  }

  getDimensions(id) {
    console.log(document.getElementById(id).getBoundingClientRect())
    const cont = document.getElementById('container2')
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
      width: cont.getBoundingClientRect().with - 40,
      height: cont.getBoundingClientRect().height - 40,
    }
  }

  componentDidMount() {
    this.setState({ 
      box1: this.getDimensions('one2'),
      box2: this.getDimensions('two2'),
      box3: this.getDimensions('three2'),
      box4: this.getDimensions('four2'),
      box5: this.getDimensions('five2'),
      box6: this.getDimensions('six2'),
      box7: this.getDimensions('seven2'),
      box8: this.getDimensions('eight2'),
      box9: this.getDimensions('nine2'),
      box10: this.getDimensions('ten2'),
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
            <div id="one" style={this.state.box1} className="square"><p>1</p></div>
            <div id="two" style={this.state.box2} className="square"><p>2</p></div>
            <div id="three" style={this.state.box3} className="square"><p>3</p></div>
            <div id="four" style={this.state.box4} className="square"><p>4</p></div>
            <div id="five" style={this.state.box5} className="square"><p>5</p></div>
            <div id="six" style={this.state.box6} className="square"><p>6</p></div>
            <div id="seven" style={this.state.box7} className="square"><p>7</p></div>
            <div id="eight" style={this.state.box8} className="square"><p>8</p></div>
            <div id="nine" style={this.state.box9} className="square"><p>9</p></div>
            <div id="ten" style={this.state.box10} className="square"><p>10</p></div>
          </div>
          <div id="container2" className={'adjusted ' + this.state.stage}>
            <div id="one2" className="square2"><p>1</p></div>
            <div id="two2" className="square2"><p>2</p></div>
            <div id="three2" className="square2"><p>3</p></div>
            <div id="four2" className="square2"><p>4</p></div>
            <div id="five2" className="square2"><p>5</p></div>
            <div id="six2" className="square2"><p>6</p></div>
            <div id="seven2" className="square2"><p>7</p></div>
            <div id="eight2" className="square2"><p>8</p></div>
            <div id="nine2" className="square2"><p>9</p></div>
            <div id="ten2" className="square2"><p>10</p></div>
          </div>
        </div>
        <button onClick={this.animate.bind(this)}>Go</button>
      </div>
    );
  }
}

export default App;
