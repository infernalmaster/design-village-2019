import React from "react"
import { css } from "@emotion/core"
import { bp } from "./bp"
export const SpeakerMain = ({ name, desc }) => (
  <section
    css={css`
      position: relative;
      @media (min-width: ${bp}) {
        position: absolute;
        z-index: -1;
        left: 110px;
        top: 597px;
        padding: 100px 0 0 171px;
      }
    `}
  >
    <img
      css={css`
        border-radius: 50%;

        @media (min-width: ${bp}) {
          width: 230px;
          height: 230px;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
        }
      `}
      src={require("../images/jereb.jpg")}
      alt={name}
    />
    <h3
      css={css`
        font-size: 24px;
        text-transform: uppercase;
        color: #000000;
        font-weight: 700;
        background: #fcfb63;
        display: inline-block;
        padding: 0 4px 0;

        @media (min-width: ${bp}) {
          font-size: 48px;
        }
      `}
    >
      {name}
    </h3>
    <p
      css={css`
        font-size: 18px;
        color: #ffffff;
        font-weight: 600;
        margin-top: 38px;

        @media (min-width: ${bp}) {
          max-width: 380px;
          margin-top: 12px;
          font-size: 36px;
        }
      `}
    >
      {desc}
    </p>
  </section>
)
