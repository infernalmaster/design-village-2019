import React from "react"
import { css } from "@emotion/core"
import { bp } from "./bp"

export const WTime = ({ name, value }) => (
  <div
    css={css`
      padding-right: 20px;
      padding-bottom: 30px;

      width: 50%;
      @media (min-width: ${bp}) {
        width: auto;
        padding-right: 60px;
      }
    `}
  >
    <p
      css={css`
        font-weight: 300;
        font-size: 18px;
        margin-bottom: 5px;
        @media (min-width: ${bp}) {
          font-size: 24px;
        }
      `}
    >
      {name}
    </p>
    <p
      css={css`
        font-weight: 500;
        font-size: 24px;

        @media (min-width: ${bp}) {
          font-size: 36px;
        }
      `}
    >
      {value}
    </p>
  </div>
)
