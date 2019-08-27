import React from "react"
import { css } from "@emotion/core"
import { bp } from "./bp"
export const ScheduleItem = ({ title, desc, start, end }) => (
  <section
    css={css`
      width: 100%;
      padding: 15px;
      color: #000000;

      @media (min-width: ${bp}) {
        width: 33.333%;
      }
    `}
  >
    <div
      css={css`
        display: flex;

        font-size: 24px;
        line-height: 29px;

        @media (min-width: ${bp}) {
          font-size: 36px;
          line-height: 43px;
          height: 248px;
          padding: 32px 19px;
          border: 1px solid rgba(196, 196, 196, 0.6);
        }
      `}
    >
      <div
        css={css`
          flex: 0 0 75px;
        `}
      >
        <time
          css={css`
            display: block;
            font-weight: 600;
          `}
        >
          {start}
        </time>

        <time
          css={css`
            display: block;
            font-weight: 600;
          `}
        >
          {end}
        </time>
      </div>

      <div
        css={css`
          margin: 0 0 0 30px;
        `}
      >
        <h4
          css={css`
            font-weight: 700;
          `}
        >
          {title}
        </h4>
        <p
          css={css`
            font-size: 18px;
            line-height: 22px;

            @media (min-width: ${bp}) {
              font-size: 24px;
              line-height: 30px;
            }
          `}
        >
          {desc}
        </p>
      </div>
    </div>
  </section>
)
