import React from "react"
import { css } from "@emotion/core"
export const NavLink = ({ onClick, children, ...props }) => (
  <a
    onClick={e => {
      onClick && onClick()
      if (props.href[0] === "#") {
        e.preventDefault()
        try {
          document
            .querySelector(props.href)
            .scrollIntoView({ block: "start", behavior: "smooth" })
        } catch (e) {}
      }
    }}
    {...props}
    css={css`
      display: block;
      color: #000;
      font-size: 36px;
      line-height: 99.5%;
      text-transform: uppercase;
      margin-bottom: 46px;
      text-decoration: none;
    `}
  >
    <span
      css={css`
        position: relative;
        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          right: -10px;
          width: 300px;
          height: 34px;
          background: #fcfb63;

          transition: transform 0.5s;
          transform: translateX(-300px);
        }

        &:hover {
          &:before {
            transform: translateX(0);
          }
        }
      `}
    >
      {children}
    </span>
  </a>
)
