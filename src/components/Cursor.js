import React, { Component } from "react"
import { css } from "@emotion/core"

export class Cursor extends Component {
  constructor(props) {
    super(props);

    this.state = { x: -10, y: 0, isFocused: false };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handlerMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handlerMouseMove)
  }

  handlerMouseMove = (e) => {
    let isFocused = ['A', 'BUTTON'].includes(e.target.tagName)
                 || ['A', 'BUTTON'].includes(e.target.parentNode.tagName)
    this.setState({ x: e.clientX, y: e.clientY, isFocused })
  }

  render() {
    const { x, y, isFocused } = this.state;
    return (
      <div
        className={`cursor ${isFocused ? 'cursor--is-focused' : ''}`}
        css={css`
          top: ${y}px;
          left: ${x}px;
        `}
      >
      </div>
    )
  }
}
