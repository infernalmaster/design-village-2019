import React from "react"
import { css } from "@emotion/core"
import { bp } from "./bp"
export const ExhibitionItem = ({
  author,
  title,
  desc,
  address,
  fbLink,
  imgLeft = true,
  imgRender,
}) => (
  <section
    css={css`
      color: #fff;
      margin: 39px 0 0 0;

      @media (min-width: ${bp}) {
        margin: 60px 0 95px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: ${imgLeft ? "row" : "row-reverse"};
      }
    `}
  >
    <div
      css={css`
        width: 70%;
        @media (min-width: ${bp}) {
          width: calc(50% - 15px);
        }
      `}
    >
      {imgRender()}
    </div>
    <div
      css={css`
        width: 70%;
        padding: 14px 0 0 0;
        line-height: 1.2;
        @media (min-width: ${bp}) {
          width: calc(50% - 15px);

          border: 1px solid #fff;
          padding: 70px 45px;
        }
      `}
    >
      {author && (
        <p
          css={css`
            color: #fcfb63;
            font-weight: 500;
            margin-bottom: 9px;

            font-size: 18px;
            @media (min-width: ${bp}) {
              font-size: 24px;
            }
          `}
        >
          {author}
        </p>
      )}

      <h3
        css={css`
          font-weight: 700;
          margin-bottom: 9px;

          font-size: 24px;
          @media (min-width: ${bp}) {
            font-size: 72px;
          }
        `}
      >
        {title}
      </h3>
      <p
        css={css`
          font-weight: 500;
          margin-bottom: 24px;

          font-size: 18px;
          @media (min-width: ${bp}) {
            font-size: 24px;
            margin-bottom: 66px;
          }
        `}
      >
        {desc}
      </p>
      <p
        css={css`
          font-weight: 300;
          margin-bottom: 9px;

          font-size: 14px;
          @media (min-width: ${bp}) {
            font-size: 24px;
          }
        `}
      >
        Location
      </p>
      <p
        css={css`
          font-weight: 600;
          margin-bottom: 55px;

          font-size: 18px;
          @media (min-width: ${bp}) {
            font-size: 24px;
          }
        `}
        dangerouslySetInnerHTML={{ __html: address }}
      />
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
    </div>
  </section>
)
