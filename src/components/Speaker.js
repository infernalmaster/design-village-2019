import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { bp } from "./bp"
export const Speaker = ({ name, desc, imgSrc, clearImgSrc }) => {
  return (
    <section
      css={css`
        padding: 15px;
        width: 100%;

        @media (min-width: ${bp}) {
          width: 33.333%;
        }
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <Img fluid={clearImgSrc} alt={name} />
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            transition: opacity 0.3s;
            &:hover {
              opacity: 0;
            }
          `}
        >
          <Img fluid={imgSrc} alt={name} />
        </div>
      </div>

      <h3
        css={css`
          font-size: 24px;
          color: #fcfb63;
          margin: 14px 0 9px;

          @media (min-width: ${bp}) {
            font-size: 36px;
            margin: 39px 0 22px;
          }
        `}
      >
        {name}
      </h3>
      <p
        css={css`
          font-size: 18px;
          line-height: 22px;
          font-weight: 300;
          margin-bottom: 15px;
          @media (min-width: ${bp}) {
            height: 45px;
            margin-bottom: 70px;
          }
        `}
      >
        {desc}
      </p>
    </section>
  )
}
