import React from "react"
import { css } from "@emotion/core"
export const WTime = ({ name, value }) => (
  <div
    css={css`
      margin-right: 60px;
    `}
  >
    <p
      css={css`
        font-weight: 300;
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 5px;
      `}
    >
      {name}
    </p>
    <p
      css={css`
        font-weight: 500;
        font-size: 36px;
        line-height: 45px;
      `}
    >
      {value}
    </p>
  </div>
)
