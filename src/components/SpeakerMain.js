import React from "react"
import { css } from "@emotion/core"
import { bp } from "./bp"
export const SpeakerMain = ({ name, desc }) => (
  <section
    css={css`
      position: relative;
      @media (min-width: ${bp}) {
        position: absolute;
        left: 110px;
        top: 597px;
        padding: 100px 0 0 171px;
      }

      &:hover {
        .img-overlay {
          opacity: 0;
        }
      }
    `}
  >
    <div
      css={css`
        position: relative;
        border-radius: 50%;
        overflow: hidden;

        @media (min-width: ${bp}) {
          width: 230px;
          height: 230px;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
        }
      `}
    >
      <img
        css={css``}
        src={require("../images/jereb1.png")}
        alt={name}
        loading="lazy"
      />
      <div
        className="img-overlay"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          width: 100%;
          transition: opacity 0.3s;
        `}
      >
        <img
          css={css``}
          src={require("../images/jereb.png")}
          alt={name}
          loading="lazy"
        />
      </div>
    </div>
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
