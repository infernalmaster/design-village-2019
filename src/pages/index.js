/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

let supportsPassive = false
try {
  var opts = Object.defineProperty({}, "passive", {
    get() {
      return (supportsPassive = true)
    },
  })
  window.addEventListener("testPassive", null, opts)
  window.removeEventListener("testPassive", null, opts)
} catch (e) {}

const NavLink = ({ href, onClick, children }) => (
  <a
    onClick={e => {
      onClick && onClick()

      if (href[0] === "#") {
        e.preventDefault()

        try {
          document
            .querySelector(href)
            .scrollIntoView({ block: "start", behavior: "smooth" })
        } catch (e) {}
      }
    }}
    href={href}
    css={css`
      display: block;
      color: #000;
      font-size: 36px;
      line-height: 99.5%;
      text-transform: uppercase;
      margin-bottom: 46px;
      text-decoration: none;
    `}
  >
    <span
      css={css`
        position: relative;
        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          right: -10px;
          width: 300px;
          height: 34px;
          background: #fcfb63;

          transition: transform 0.5s;
          transform: translateX(-300px);
        }

        &:hover {
          &:before {
            transform: translateX(0);
          }
        }
      `}
    >
      {children}
    </span>
  </a>
)

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const close = () => setOpen(false)

  const [scrollY, setScrollY] = useState(0)

  function logIt() {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener(
      "scroll",
      logIt,
      supportsPassive ? { passive: true } : false
    )
    return () => {
      window.removeEventListener(
        "scroll",
        logIt,
        supportsPassive ? { passive: true } : false
      )
    }
  })

  const isBlack = scrollY === 0

  return (
    <header
      css={css`
        z-index: 10;
        padding: ${isBlack ? "44px" : "18px"} 72px;
        display: flex;
        justify-content: flex-end;

        position: sticky;
        top: 0;

        ${!isBlack && "background: #fff;"}
      `}
    >
      <nav
        css={css`
          padding: 160px 70px 0;
          background: #fff;
          position: absolute;
          top: 0;
          left: 0;
          height: 100vh;
          overflow: scroll;

          transition: transform 0.3s;
          transform: translateX(-110%);

          ${isOpen && "transform: translateX(0);"}
        `}
      >
        <NavLink href="#speakers" onClick={close}>
          speakers
        </NavLink>
        <NavLink href="#workshops" onClick={close}>
          workshops
        </NavLink>
        <NavLink href="#schedule" onClick={close}>
          schedule
        </NavLink>
        <NavLink href="#exhibition" onClick={close}>
          exhibition
        </NavLink>
        <NavLink href="#merch" onClick={close}>
          merch
        </NavLink>
        <NavLink href="#venue" onClick={close}>
          venue
        </NavLink>
        <NavLink href="#partners" onClick={close}>
          partners
        </NavLink>
      </nav>
      <button
        onClick={() => setOpen(!isOpen)}
        css={css`
          position: absolute;
          left: 70px;
          z-index: 10;
          width: 60px;
          height: 60px;
          background: none;
          border: none;
          outline: none;
          overflow: hidden;

          &:before,
          &:after,
          div {
            position: absolute;
            width: 100%;
            height: 5px;
            left: 0;

            background: ${isBlack && !isOpen ? "white" : "black"};

            transition: transform 0.3s;
          }

          div {
            ${isOpen && "transform: translateX(70px);"}
          }

          &:before {
            content: "";
            top: 0;
            ${isOpen && "transform: translateY(27px) rotate(45deg);"}
          }

          &:after {
            content: "";
            bottom: 0;
            ${isOpen && "transform: translateY(-27px) rotate(-45deg);"}
          }
        `}
      >
        <div
          css={css`
            top: 29px;
          `}
        ></div>
      </button>

      <button
        css={css`
          text-transform: uppercase;
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 0.285em;
          border: none;
          color: #000;
          padding: 16px 30px;
          height: 60px;
          font-weight: 500;

          ${isBlack
            ? "background: #fff;color: #000;"
            : "background: #000;color: #FCFB63;"}
        `}
      >
        tickets
      </button>
    </header>
  )
}
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

const SpeakerMain = ({ name, desc }) => (
  <section
    css={css`
      position: absolute;
      z-index: -1;
      left: 110px;
      top: 597px;
      padding: 100px 0 0 171px;
    `}
  >
    <img
      css={css`
        width: 230px;
        height: 230px;
        border-radius: 50%;

        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
      `}
      src={require("../images/jereb.jpg")}
      alt={name}
    />
    <h3
      css={css`
        font-size: 48px;
        line-height: 48px;
        text-transform: uppercase;
        color: #000000;
        font-weight: 700;
        background: #fcfb63;
        display: inline-block;
        padding: 0 4px;
      `}
    >
      {name}
    </h3>
    <p
      css={css`
        font-size: 36px;
        line-height: 45px;
        color: #ffffff;
        font-weight: 600;
        width: 380px;
        margin-top: 12px;
      `}
    >
      {desc}
    </p>
  </section>
)

const ScheduleItem = ({ title, desc, start, end }) => (
  <section
    css={css`
      width: 33.333%;
      padding: 15px;
      color: #000000;
    `}
  >
    <div
      css={css`
        height: 248px;
        padding: 32px 19px;
        border: 1px solid rgba(196, 196, 196, 0.6);
        display: flex;
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
            font-size: 36px;
            line-height: 43px;
          `}
        >
          {start}
        </time>

        <time
          css={css`
            display: block;
            font-weight: 600;
            font-size: 36px;
            line-height: 43px;
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
            font-size: 36px;
            line-height: 45px;
          `}
        >
          {title}
        </h4>
        <p
          css={css`
            font-size: 24px;
            line-height: 30px;
          `}
        >
          {desc}
        </p>
      </div>
    </div>
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
        <WTime key={name} name={name} value={value} />
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

const ExhibitionItem = ({
  author,
  title,
  desc,
  address,
  fbLink,
  imgLeft = true,
}) => (
  <section
    css={css`
      color: #fff;
      margin: 60px 0 95px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: ${imgLeft ? "row" : "row-reverse"};
    `}
  >
    <div
      css={css`
        width: calc(50% - 15px);
      `}
    >
      <img src={require("../images/p1.jpg")} alt={title} />
    </div>
    <div
      css={css`
        width: calc(50% - 15px);
        border: 1px solid #fff;
        padding: 70px 45px;
      `}
    >
      {author && (
        <p
          css={css`
            font-size: 24px;
            line-height: 29px;
            color: #fcfb63;
            font-weight: 500;
            margin-bottom: 9px;
          `}
        >
          {author}
        </p>
      )}

      <h3
        css={css`
          font-size: 72px;
          line-height: 86px;
          font-weight: 700;
          margin-bottom: 9px;
        `}
      >
        {title}
      </h3>
      <p
        css={css`
          font-size: 24px;
          line-height: 29px;
          font-weight: 500;
          margin-bottom: 66px;
        `}
      >
        {desc}
      </p>
      <p
        css={css`
          font-size: 24px;
          line-height: 29px;
          font-weight: 300;
          margin-bottom: 9px;
        `}
      >
        Локація
      </p>
      <p
        css={css`
          font-size: 24px;
          line-height: 29px;
          font-weight: 600;
          margin-bottom: 55px;
        `}
        dangerouslySetInnerHTML={{ __html: address }}
      />
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
    </div>
  </section>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Header />

    <section
      css={css`
        color: #fff;
        position: relative;
      `}
    >
      <div
        css={css`
          margin: 0 240px;

          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 48px;
          line-height: 58px;
        `}
      >
        <date>11-13.10.2019</date>

        <h1
          css={css`
            position: relative;
            z-index: -1;
            margin-top: -1.4%;
            margin-left: -2.4%;
            margin-right: -1%;
          `}
        >
          <img
            css={css``}
            src={require("../images/logo.jpg")}
            alt="Design Village 2019"
          />

          <img
            css={css`
              position: absolute;
              top: 40%;
              left: 67%;
              width: 15%;
            `}
            src={require("../images/dvcircle.svg")}
            alt="icon"
          />
        </h1>

        <p
          css={css`
            text-align: right;
          `}
        >
          Ivano-Frankivsk
        </p>
      </div>

      <div
        css={css`
          position: absolute;
          top: 170px;
          right: 72px;
          & > a {
            display: block;
            width: 80px;
            height: 80px;
            background-size: cover;
            font-size: 0;
            margin-bottom: 36px;
          }
        `}
      >
        <a
          href="https://google.com"
          css={css`
            background: url(${require("../images/icons/telegram.svg")});
          `}
        >
          telegram
        </a>

        <a
          href="https://google.com"
          css={css`
            background: url(${require("../images/icons/fb.svg")});
          `}
        >
          facebook
        </a>

        <a
          href="https://google.com"
          css={css`
            background: url(${require("../images/icons/ig.svg")});
          `}
        >
          instagram
        </a>
      </div>

      <p
        css={css`
          font-weight: 300;
          font-size: 36px;
          line-height: 140%;
          width: 70%;
          margin: 103px 240px;
          max-width: 1100px;
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
      id="speakers"
      css={css`
        max-width: 1250px;
        margin: auto;
        color: #ffffff;
      `}
    >
      <div
        css={css`
          position: relative;
          padding: 470px 0 220px;
        `}
      >
        <video
          poster={require("../images/gif.jpg")}
          loop
          autoplay
          muted
          css={css`
            width: 713px;
            height: auto;
            position: absolute;
            top: 100px;
            right: 0;
          `}
        />
        <h2
          css={css`
            font-family: Publica Sans;
            font-size: 96px;
            line-height: 110%;
            letter-spacing: 0.44em;
            width: 4em;
          `}
        >
          speakers
        </h2>

        <SpeakerMain
          name="Andre Jereb"
          desc="Creative director, BBDO Ukraine, Kyiv, Ukraine - Event moderator"
        />
      </div>

      <section
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        `}
      >
        {new Array(5).fill(null).map((_, i) => (
          <Speaker
            key={`Rupert Breheny${i}`}
            name={`Rupert Breheny${i}`}
            desc="Product Manager and Director, Google VR map, Zürich Area, Switzerland"
          />
        ))}
      </section>
    </section>

    <section
      id="workshops"
      css={css`
        max-width: 1250px;
        margin: auto;
        color: #ffffff;
      `}
    >
      <div
        css={css`
          position: relative;
          padding: 270px 0 140px 50%;
        `}
      >
        <video
          poster={require("../images/gif.jpg")}
          loop
          autoplay
          muted
          css={css`
            width: 713px;
            height: auto;
            position: absolute;
            top: 90px;
            left: 0;
            z-index: -1;
          `}
        />
        <h2
          css={css`
            font-family: Publica Sans;
            font-size: 96px;
            line-height: 110%;
            letter-spacing: 0.44em;
            width: 4.5em;
          `}
        >
          workshops
        </h2>

        <img
          src={require("../images/hand.png")}
          alt="hand"
          css={css`
            width: 309px;
            height: auto;
            position: absolute;
            top: 377px;
            right: -10px;
          `}
        />
      </div>

      {new Array(3).fill(null).map((_, i) => (
        <Workshop
          key={`Створення обкладинки нового журналу «Франківер»${i}`}
          title={`Створення обкладинки нового журналу «Франківер»${i}`}
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
      id="schedule"
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
              width: 227px;
              height: auto;
              position: absolute;
              top: 225px;
              left: 195px;
            `}
          />

          <h2
            css={css`
              font-family: Publica Sans;
              font-size: 96px;
              line-height: 110%;
              letter-spacing: 1.03em;
              width: 5.5em;
              position: relative;
            `}
          >
            schedule
          </h2>
        </div>

        <h3
          css={css`
            font-weight: 700;
            font-size: 64px;
            line-height: 80px;
            color: rgba(196, 196, 196, 0.4);
          `}
        >
          11 / 10
        </h3>

        <section
          css={css`
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          `}
        >
          {new Array(12).fill(null).map((_, i) => (
            <ScheduleItem
              key={i}
              start={"09 00"}
              end={"09 45"}
              title="ранкова кава"
              desc="Драматичний театр ім. І. Франка Вул. Незалежності, 42"
            />
          ))}
        </section>
      </div>
    </section>

    <section
      id="exhibition"
      css={css`
        color: #000;
      `}
    >
      <img src={require("../images/exhibition-bg.jpg")} alt="bg" />
      <div
        css={css`
          max-width: 1250px;
          margin: auto;
        `}
      >
        <ExhibitionItem
          author="kikit art studio"
          title="реакція"
          desc="стріт-арт виставка"
          address="Promprylad.Renovation <br/> Сахарова, 23"
          fbLink="https://google.com"
        />
        <ExhibitionItem
          title="реакція"
          desc="стріт-арт виставка"
          address="Promprylad.Renovation <br/> Сахарова, 23"
          fbLink="https://google.com"
          imgLeft={false}
        />
        <ExhibitionItem
          author="kikit art studio"
          title="реакція"
          desc="стріт-арт виставка"
          address="Promprylad.Renovation <br/> Сахарова, 23"
          fbLink="https://google.com"
        />
      </div>
    </section>

    <section
      id="merch"
      css={css`
        color: #000;
      `}
    >
      merch
    </section>
    <section
      id="venue"
      css={css`
        color: #000;
      `}
    >
      venue
    </section>

    <section
      id="partners"
      css={css`
        color: #000;
      `}
    >
      partners
    </section>

    <footer
      css={css`
        color: #000;
      `}
    >
      footer
    </footer>
  </Layout>
)

export default IndexPage
