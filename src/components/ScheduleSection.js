import React, { useState } from "react"
import { css } from "@emotion/core"
import data from "../data"
import { ScheduleDayTitle } from "./ScheduleDayTitle"
import { ScheduleItem } from "./ScheduleItem"
import { bp } from "./bp"

export const ScheduleSection = ({ t }) => {
  const [activeDay, setActiveDay] = useState(1)
  return (
    <section
      id="schedule"
      css={css`
        background: #fff;
        color: #000;
      `}
    >
      <div
        css={css`
          max-width: 1290px;
          margin: auto;
          padding: 0 20px;
        `}
      >
        <div
          css={css`
            position: relative;
            padding: 99px 0;
          `}
        >
          <img
            src={require("../images/mouth.png")}
            alt="hand"
            css={css`
              width: 67px;
              height: auto;
              position: absolute;
              top: 69px;
              left: 0;
              right: 0;
              margin: auto;

              @media (min-width: ${bp}) {
                width: 227px;
                top: 225px;
                left: 195px;
                right: auto;
              }
            `}
          />

          <h2
            css={css`
              font-family: Publica Sans;
              line-height: 110%;
              letter-spacing: 1.03em;
              width: 8em;
              position: relative;

              font-size: 36px;
              margin: auto;
              padding: 0 0 0 1em;

              @media (min-width: ${bp}) {
                width: 5.5em;
                font-size: 96px;
                margin: 0;
                padding: 0;
              }
            `}
          >
            schedule
          </h2>
        </div>

        <div
          css={css`
            display: flex;
            justify-content: space-around;
            margin-bottom: 35px;
          `}
        >
          <ScheduleDayTitle
            onClick={e => setActiveDay(0)}
            active={activeDay === 0}
          >
            11 / 10
          </ScheduleDayTitle>
          <ScheduleDayTitle
            onClick={e => setActiveDay(1)}
            active={activeDay === 1}
          >
            12 / 10
          </ScheduleDayTitle>
          <ScheduleDayTitle
            onClick={e => setActiveDay(2)}
            active={activeDay === 2}
          >
            13 / 10
          </ScheduleDayTitle>
        </div>

        <section
          css={css`
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          `}
        >
          {data.schedule[activeDay].map((event, i) => (
            <ScheduleItem
              key={i}
              title={t(event.title)}
              desc={t(event.desc)}
              start={event.start}
              end={event.end}
            />
          ))}
        </section>
      </div>
    </section>
  )
}
