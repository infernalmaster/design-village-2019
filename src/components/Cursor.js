import React, { Component } from "react"
import { css } from "@emotion/core"

export class Cursor extends Component {
  constructor(props) {
    super(props)

    this.state = { x: -10, y: 0, isFocused: false }
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handlerMouseMove, true)
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handlerMouseMove, true)
  }

  handlerMouseMove = e => {
    let isFocused =
      ["A", "BUTTON"].includes(e.target.tagName) ||
      ["A", "BUTTON"].includes(e.target.parentNode.tagName)
    this.setState({ x: e.clientX, y: e.clientY, isFocused })
  }

  render() {
    const { x, y, isFocused } = this.state

    return (
      <div
        css={css`
          position: fixed;
          z-index: 9999;
          width: 0;
          height: 0;
          pointer-events: none;
          will-change: transform;

          @media only screen and (max-width: 1024px) {
            display: none;
          }
        `}
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      >
        <div
          css={css`
            position: absolute;
            width: 80px;
            height: 80px;
            background: #fcfb63;
            border-radius: 50%;

            pointer-events: none;
            transform-origin: center;
            transition: all 0.1s;
            will-change: transform;
          `}
          style={{
            transform: isFocused
              ? "translate(-50%, -50%) scale(1)"
              : "translate(-50%, -50%) scale(0.125)",
            opacity: isFocused ? 0.2 : 1,
          }}
        />
      </div>
    )
  }
}
