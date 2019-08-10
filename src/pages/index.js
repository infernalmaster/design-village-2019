import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Speaker = ({ name, desc }) => (
  <section
    css={css`
      width: 33.333%;
      padding: 15px;
    `}
  >
    <img src={require("../images/speaker.jpg")} alt={name} />
    <h3
      css={css`
        font-size: 36px;
        line-height: 45px;
        text-transform: uppercase;
        color: #fcfb63;
        margin: 39px 0 22px;
      `}
    >
      {name}
    </h3>
    <p
      css={css`
        font-size: 18px;
        line-height: 22px;
        font-weight: 300;
        height: 45px;
        margin-bottom: 90px;
      `}
    >
      {desc}
    </p>
  </section>
)

const WTime = ({ name, value }) => (
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
const Workshop = ({ title, name, desc, fbLink, info }) => (
  <section
    css={css`
      margin-top: 30px;
      margin-left: 320px;
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
    `}
  >
    <img
      css={css`
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        left: -140px;
      `}
      src={require("../images/wshop.jpg")}
      alt={name}
    />
    <h4
      css={css`
        font-size: 36px;
        line-height: 45px;
        text-transform: uppercase;
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

    <h3
      css={css`
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        text-transform: uppercase;
        margin-bottom: 39px;
      `}
    >
      {title}
    </h3>

    <div
      css={css`
        margin-bottom: 68px;
        display: flex;
      `}
    >
      {info.map(({ name, value }) => (
        <WTime name={name} value={value} />
      ))}
    </div>

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
  </section>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section
      css={css`
        color: #ffffff;
      `}
    >
      <p
        css={css`
          font-family: Publica Sans, san-serif;
          text-transform: uppercase;
          font-size: 48px;
          line-height: 58px;
        `}
      >
        ivano-Frankivsk
      </p>

      <p
        css={css`
          font-family: Publica Sans, san-serif;
          text-transform: uppercase;
          font-size: 48px;
          line-height: 58px;
        `}
      >
        11-13.10.2019
      </p>

      <img src={require("../images/logo.png")} alt="logo" />

      <p
        css={css`
          font-weight: 300;
          font-size: 36px;
          line-height: 140%;
          width: 70%;
        `}
      >
        Learning from transformative thinkers and connecting with like-minded
        innovators, Circles provides a space where you’ll be challenged to push
        yourself in the creative process while drawing inspiration from those
        thriving in the industry. Learning from transformative thinkers and
        connecting with like-minded innovators, Circles provides a space where
        you’ll be challenged to push yourself in the creative process while
        drawing inspiration from those thriving in the industry.
      </p>
    </section>

    <section
      css={css`
        max-width: 1250px;
        margin: auto;
        color: #ffffff;
      `}
    >
      <h2
        css={css`
          font-family: Publica Sans;
          font-size: 96px;
          line-height: 110%;
          letter-spacing: 0.44em;
          text-transform: uppercase;
          width: 4em;
        `}
      >
        speakers
      </h2>

      <section
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        `}
      >
        {new Array(5).fill(null).map(() => (
          <Speaker
            name="Rupert Breheny"
            desc="Product Manager and Director, Google VR map, Zürich Area, Switzerland"
          />
        ))}
      </section>
    </section>

    <section
      css={css`
        max-width: 1250px;
        margin: auto;
        color: #ffffff;
      `}
    >
      <h2
        css={css`
          font-family: Publica Sans;
          font-size: 96px;
          line-height: 110%;
          letter-spacing: 0.44em;
          text-transform: uppercase;
          width: 4.5em;
        `}
      >
        workshops
      </h2>

      {new Array(3).fill(null).map(() => (
        <Workshop
          title="Створення обкладинки нового журналу «Франківер»"
          name="Rupert Breheny"
          desc="Product Manager and Director, Google VR map, Zürich Area, Switzerland"
          fbLink="https://google.com"
          info={[
            { name: "час", value: "9.00" },
            { name: "тривалість", value: "5 год" },
            { name: "кількість", value: "20" },
            { name: "вартість", value: "free" },
          ]}
        />
      ))}
    </section>

    <section
      css={css`
        background: #fff;
        color: #000;
      `}
    >
      <div
        css={css`
          max-width: 1250px;
          margin: auto;
        `}
      >
        <h2
          css={css`
            font-family: Publica Sans;
            font-size: 96px;
            line-height: 110%;
            letter-spacing: 1.03em;
            text-transform: uppercase;
            width: 5.5em;
          `}
        >
          schedule
        </h2>
      </div>
    </section>

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
