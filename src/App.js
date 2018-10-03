import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { TableOfContents } from './TableOfContents'
import { FeatureSlide } from './FeatureSlide'

import { slides } from './slideOrder'

const UP = 38
const DOWN = 40

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  componentDidMount() {
    window.addEventListener("keyup", e => {
      const code = e.keyCode ? e.keyCode : e.which
      if(code === UP) this.setState({index: this.state.index - 1})
      if(code === DOWN) this.setState({index: this.state.index + 1})
    })
  }

  render() {
    return slides[this.state.index] || <FeatureSlide title="Thanks!"></FeatureSlide>
  }
}

export default App;
