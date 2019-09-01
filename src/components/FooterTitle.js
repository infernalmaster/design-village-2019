import React from "react"
import { css } from "@emotion/core"
import { bp } from "./bp"

export const FooterTitle = ({ children }) => (
  <h2
    css={css`
      margin-top: 40px;
      font-size: 36px;
      line-height: 137%;
      text-transform: uppercase;
      color: #fcfb63;

      @media (min-width: ${bp}) {
        font-size: 48px;
      }
    `}
  >
    {children}
  </h2>
)
