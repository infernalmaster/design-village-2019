import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { WTime } from "./WTime"
import { bp } from "./bp"
export const Workshop = ({
  title,
  name,
  desc,
  fbLink,
  time,
  duration,
  peoples,
  price,
  imgSrc,
}) => (
  <section
    css={css`
      margin-top: 30px;
      position: relative;
      color: white;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        width: calc(100% + 160px);
        height: 1px;
        background: white;
        right: 0;
      }
      &:last-child {
        &:after {
          display: none;
        }
      }

      @media (min-width: ${bp}) {
        margin-left: 320px;
      }
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: flex-;
        // @media (min-width: ${bp}) {
        //   display: block;
        // }
      `}
    >
      <div
        css={css`
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;

          @media (min-width: ${bp}) {
            position: absolute;
            left: -140px;
          }
        `}
      >
        <Img fixed={imgSrc} alt={name} />
      </div>

      <div>
        <h4
          css={css`
            font-size: 36px;
            line-height: 45px;
            color: #fcfb63;
            padding-top: 8px;
            margin-bottom: 8px;
          `}
        >
          {name}
        </h4>
        <p
          css={css`
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 39px;
          `}
        >
          {desc}
        </p>
      </div>

      <div
        css={css`
          text-align: right;
        `}
      >
        <p
          css={css`
            font-weight: 700;
            font-size: 48px;
            color: #fcfb63;
            padding-bottom: 8px;
          `}
        >
          12 / 10
        </p>
        <span
          css={css`
            display: inline-block;
            font-size: 18px;
            background: #fcfb63;
            color: #000;
            padding: 3px;
          `}
        >
          Some Tag
        </span>
      </div>
    </div>

    <h3
      css={css`
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        margin-bottom: 39px;
      `}
    >
      {title}
    </h3>

    <div
      css={css`
        padding-bottom: 68px;
        display: flex;
      `}
    >
      <WTime name="time" value={time} />
      <WTime name="duration" value={duration} />
      <WTime name="quantity" value={peoples} />
      <WTime name="price" value={price} />
    </div>

    {fbLink && (
      <a
        href={fbLink}
        css={css`
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;
          text-decoration-line: underline;
          text-transform: uppercase;

          color: #fcfb63;

          display: inline-block;
          margin-bottom: 76px;
        `}
      >
        facebook
      </a>
    )}
  </section>
)
