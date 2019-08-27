import React from "react"
import { css } from "@emotion/core"
import { bp } from "./bp"
export const ScheduleDayTitle = ({ active, children, onClick }) => {
  return (
    <button
      css={css`
        font-weight: 700;
        border: none;
        border-radius: 50%;

        font-size: 36px;
        width: 103px;
        height: 103px;
        line-height: 103px;

        text-align: center;
        outline: none;

        background: ${active ? "#fcfb63" : "white"};
        color: ${active ? "black" : "rgba(196, 196, 196, 0.4)"};

        @media (min-width: ${bp}) {
          font-size: 64px;
          width: 203px;
          height: 203px;
          line-height: 203px;
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
