import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { WTime } from "./WTime"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { bp } from "./bp"

export const Workshop = ({
  title,
  name,
  desc,
  fbLink,
  date,
  time,
  duration,
  peoples,
  price,
  imgSrc,
  clearImgSrc,
}) => (
  <section
    css={css`
      margin: 30px 0;
      position: relative;
      color: white;

      border: 1px solid #323232;
      padding: 0 10px 10px 10px;

      &:hover {
        .img-overlay {
          opacity: 0;
        }
      }

      @media (min-width: ${bp}) {
        padding: 0;
        margin-left: 320px;
        border: none;

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
      }
    `}
  >
    <div
      css={css`
        display: flex;

        padding-top: 72px;

        flex-wrap: wrap;
        @media (min-width: ${bp}) {
          flex-wrap: nowrap;
        }
      `}
    >
      <div
        css={css`
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          order: 2;
          margin-right: 18px;
          position: relative;

          @media (min-width: ${bp}) {
            width: 100px;
            height: 100px;
            position: absolute;
            left: -140px;
            order: 1;
          }
        `}
      >
        <Img fluid={clearImgSrc} alt={name} />
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
          <Img fluid={imgSrc} alt={name} />
        </div>
      </div>

      <div
        css={css`
          flex-grow: 1;
          order: 3;
          max-width: calc(100% - 78px);

          @media (min-width: ${bp}) {
            order: 2;
          }
        `}
      >
        <h4
          css={css`
            font-size: 22px;
            color: #fcfb63;

            @media (min-width: ${bp}) {
              font-size: 36px;
              padding: 8px 0;
            }
          `}
        >
          {name}
        </h4>
        <p
          css={css`
            font-weight: 300;
            font-size: 18px;
            margin-bottom: 39px;

            @media (min-width: ${bp}) {
              font-size: 22px;
            }
          `}
        >
          {desc}
        </p>
      </div>

      <div
        css={css`
          text-align: right;
          width: 100%;
          order: 1;

          @media (max-width: ${bp}) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            border: 1px solid #ffffff;
            padding: 9px;

            position: absolute;
            left: 0;
            top: 0;
          }

          @media (min-width: ${bp}) {
            width: 500px;
            order: 3;
          }
        `}
      >
        <p
          css={css`
            font-weight: 700;
            font-size: 18px;
            color: #fcfb63;

            @media (min-width: ${bp}) {
              font-size: 48px;
              padding-bottom: 8px;
            }
          `}
        >
          {date}
        </p>
        <span
          css={css`
            display: inline-block;
            font-size: 14px;
            color: #fcfb63;
            padding: 3px;

            font-weight: 300;

            @media (min-width: ${bp}) {
              font-size: 18px;
              background: #fcfb63;
              color: #000;
              font-weight: 400;
            }
          `}
        >
          #workshop
        </span>
      </div>
    </div>

    <h3
      css={css`
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 22px;

        @media (min-width: ${bp}) {
          font-size: 48px;
          margin-bottom: 39px;
        }
      `}
    >
      {title}
    </h3>

    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      <WTime name="time" value={time} />
      <WTime name="duration" value={duration} />
      <WTime name="quantity" value={peoples} />
      <WTime name="price" value={price} />
    </div>

    {fbLink && (
      <OutboundLink
        href={fbLink}
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          font-weight: 700;
          font-size: 18px;
          text-decoration-line: underline;
          text-transform: uppercase;

          color: #fcfb63;

          display: inline-block;
          margin-bottom: 30px;

          @media (min-width: ${bp}) {
            font-size: 24px;
            margin-bottom: 76px;
          }
        `}
      >
        facebook
      </OutboundLink>
    )}
  </section>
)
