import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
// import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "./layout"
import SEO from "./seo"

import data from "../data"

const bp = "1024px"

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

const NavLink = ({ onClick, children, ...props }) => (
  <a
    onClick={e => {
      onClick && onClick()

      if (props.href[0] === "#") {
        e.preventDefault()

        try {
          document
            .querySelector(props.href)
            .scrollIntoView({ block: "start", behavior: "smooth" })
        } catch (e) {}
      }
    }}
    {...props}
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

const Header = ({ data, t }) => {
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

  const isBlack = scrollY < 200

  return (
    <header
      css={css`
        z-index: 10;
        display: flex;
        justify-content: flex-end;

        position: ${isBlack ? "absolute" : "fixed"};
        top: 0;
        left: 0;
        width: 100%;

        ${!isBlack && `background: #fff center center no-repeat;`}

        @media (min-width: ${bp}) {
          background-image: url(${require("../images/village.svg")});
        }
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
        {/* <NavLink href="#merch" onClick={close}>
          merch
        </NavLink> */}
        <NavLink href="#venue" onClick={close}>
          venue
        </NavLink>
        <NavLink href="#partners" onClick={close}>
          partners
        </NavLink>
        <NavLink
          href={data.links.tickets}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          get tickets
        </NavLink>
      </nav>
      <button
        onClick={() => setOpen(!isOpen)}
        css={css`
          position: absolute;
          left: 20px;
          z-index: 10;
          width: 30px;
          height: 30px;
          background: none;
          border: none;
          outline: none;
          overflow: hidden;

          margin-top: ${isBlack ? "20px" : "10px"};

          @media (min-width: ${bp}) {
            left: 70px;
          }

          &:before,
          &:after,
          div {
            position: absolute;
            width: 100%;
            height: 2px;
            left: 0;

            background: ${isBlack && !isOpen ? "white" : "black"};

            transition: transform 0.3s;
          }

          div {
            ${isOpen && "transform: translateX(40px);"}
          }

          &:before {
            content: "";
            top: 0;
            ${isOpen && "transform: translateY(14px) rotate(45deg);"}
          }

          &:after {
            content: "";
            bottom: 0;
            ${isOpen && "transform: translateY(-14px) rotate(-45deg);"}
          }
        `}
      >
        <div
          css={css`
            top: 14px;
          `}
        ></div>
      </button>

      <a
        href={data.links.tickets}
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          text-transform: uppercase;
          font-size: 24px;
          line-height: ${isBlack ? "24px" : "34px"};
          letter-spacing: 0.285em;
          border: none;
          padding: 10px 30px 6px;
          height: ${isBlack ? "40px" : "50px"};
          font-weight: 500;
          text-decoration: none;

          @media (min-width: ${bp}) {
            margin-right: 70px;
          }

          margin-top: ${isBlack ? "20px" : "0"};

          ${isBlack
            ? "background: #fff;color: #000;"
            : "background: #FCFB63;color: #000;"}

          &:hover {
            ${isBlack
              ? "background: #FCFB63;color: #000;"
              : "background: #000;color: #fff;"}
          }

          @media (max-width: ${bp}) {
            ${isBlack && "display: none;"}
          }

          &:active {
            ${isBlack
              ? "background: #000;color: #fff;"
              : "background: #fff;color: #000;"}
          }
        `}
      >
        tickets
      </a>
    </header>
  )
}
const Speaker = ({ name, desc, imgSrc, clearImgSrc }) => {
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
const SpeakerMain = ({ name, desc }) => (
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

const ScheduleItem = ({ title, desc, start, end }) => (
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

const ScheduleDayTitle = ({ active, children, onClick }) => {
  return (
    <button
      css={css`
        font-weight: 700;
        border: none;
        border-radius: 50%;

        font-size: 36px;
        width: 103px;
        height: 103px;
        line-height: 103px;

        text-align: center;
        outline: none;

        background: ${active ? "#fcfb63" : "white"};
        color: ${active ? "black" : "rgba(196, 196, 196, 0.4)"};

        @media (min-width: ${bp}) {
          font-size: 64px;
          width: 203px;
          height: 203px;
          line-height: 203px;
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const ScheduleSection = ({ t }) => {
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
const Workshop = ({
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

const ExhibitionItem = ({
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

const IndexPage = ({ t }) => {
  const imagesData = useStaticQuery(graphql`
    query {
      logoBig: file(relativePath: { eq: "logo-big.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logoMobile: file(relativePath: { eq: "logo-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      exhibitions: allFile(
        filter: { relativeDirectory: { eq: "exhibitions" } }
      ) {
        edges {
          node {
            relativePath
            base
            childImageSharp {
              fluid(maxWidth: 610) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      speakers: allFile(filter: { relativeDirectory: { eq: "speakers" } }) {
        edges {
          node {
            relativePath
            base
            childImageSharp {
              fluid(maxWidth: 397) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      workshops: allFile(filter: { relativeDirectory: { eq: "workshops" } }) {
        edges {
          node {
            relativePath
            base
            childImageSharp {
              fixed(width: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
      partners: allFile(filter: { relativeDirectory: { eq: "partners" } }) {
        edges {
          node {
            relativePath
            base
            childImageSharp {
              fluid(maxWidth: 290) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <Header data={data} t={t} />

      <section
        css={css`
          color: #fff;
          position: relative;
        `}
      >
        <div
          css={css`
            padding: 10vw 12.5vw;

            letter-spacing: 0.05em;
            text-transform: uppercase;
            font-size: 18px;

            position: absolute;
            width: 100%;
            z-index: 2;

            display: flex;
            flex-direction: row;
            justify-content: flex-end;

            @media (min-width: ${bp}) {
              flex-direction: column;
              font-size: 48px;
            }
          `}
        >
          <p css={css``}>11-13.10.2019</p>
          <p
            css={css`
              text-align: right;

              @media (min-width: ${bp}) {
                margin-top: 30vw;
              }
            `}
          >
            Ivano-Frankivsk
          </p>
        </div>
        <h1>
          <Img
            css={css`
              @media (min-width: ${bp}) {
                display: none;
              }
            `}
            fluid={imagesData.logoMobile.childImageSharp.fluid}
            alt="Design Village 2019"
          />

          <Img
            css={css`
              @media (max-width: 1023px) {
                display: none;
              }
            `}
            fluid={imagesData.logoBig.childImageSharp.fluid}
            alt="Design Village 2019"
          />
          <img
            css={css`
              position: absolute;
              top: 25vw;
              left: 77%;
              width: 10%;
            `}
            src={require("../images/icon.png")}
            alt="icon"
          />
        </h1>

        <div
          css={css`
            position: absolute;
            z-index: 3;
            top: 15vw;
            right: 72px;
            & > a {
              display: block;
              width: 4vw;
              height: 4vw;
              background-size: cover;
              font-size: 0;
              margin-bottom: 36px;
              &:hover {
                filter: brightness(95%) sepia(89%) hue-rotate(1deg)
                  saturate(500%);
              }
            }

            display: none;
            @media (min-width: ${bp}) {
              display: block;
            }
          `}
        >
          <a
            href={data.links.fb}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              background: url(${require("../images/icons/fb.svg")});
            `}
          >
            facebook
          </a>

          <a
            href={data.links.tg}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              background: url(${require("../images/icons/tg.svg")});
            `}
          >
            telegram
          </a>

          <a
            href={data.links.ig}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              background: url(${require("../images/icons/ig.svg")});
            `}
          >
            instagram
          </a>

          <a
            href={data.links.tw}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              background: url(${require("../images/icons/tw.svg")});
            `}
          >
            twitter
          </a>
        </div>

        <p
          css={css`
            font-weight: 300;
            font-size: 18px;
            line-height: 140%;
            max-width: 70%;
            margin: 0 50px 70px 20px;
            max-width: 1100px;

            @media (min-width: ${bp}) {
              font-size: 36px;
              margin: 0 12.5vw 103px;
            }
          `}
          dangerouslySetInnerHTML={{ __html: t(data.header.desc) }}
        ></p>
      </section>

      <section
        id="speakers"
        css={css`
          max-width: 1370px;
          margin: auto;
          color: #ffffff;

          padding: 0 60px;
        `}
      >
        <div
          css={css`
            position: relative;
            padding: 20px 0 40px;

            @media (min-width: ${bp}) {
              padding: 470px 0 220px;
            }
          `}
        >
          <video
            poster={require("../images/speakers.jpg")}
            loop
            autoPlay
            muted
            css={css`
              height: auto;
              width: 100%;

              @media (min-width: ${bp}) {
                width: 800px;
                position: absolute;
                z-index: -1;
                top: 100px;
                right: 0;
              }
            `}
          >
            <source src={require("../images/speakers.mp4")} type="video/mp4" />
          </video>
          <h2
            css={css`
              font-family: Publica Sans;

              line-height: 110%;
              letter-spacing: 0.44em;

              font-size: 36px;
              margin: auto;
              padding: 70px 0 70px 1em;
              width: 5em;

              @media (min-width: ${bp}) {
                font-size: 96px;
                margin: 0;
                padding: 0;
                width: 4em;
              }
            `}
          >
            speakers
          </h2>

          <SpeakerMain
            name={t(data.announcer.name)}
            desc={t(data.announcer.desc)}
          />
        </div>

        <section
          css={css`
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          `}
        >
          {data.speakers.map((s, i) => {
            const imgSrc = imagesData.speakers.edges.find(
              ({ node: { base } }) => base === s.img
            ).node.childImageSharp.fluid

            const clearImgSrc = imagesData.speakers.edges.find(
              ({ node: { base } }) => base === s.clearImg
            ).node.childImageSharp.fluid

            return (
              <Speaker
                key={i}
                name={t(s.name)}
                desc={t(s.desc)}
                imgSrc={imgSrc}
                clearImgSrc={clearImgSrc}
              />
            )
          })}
        </section>
      </section>

      <section
        id="workshops"
        css={css`
          max-width: 1290px;
          padding: 0 20px;
          margin: auto;
          color: #ffffff;
        `}
      >
        <div
          css={css`
            position: relative;
            padding: 30px 0;

            @media (min-width: ${bp}) {
              padding: 270px 0 140px 50%;
            }
          `}
        >
          <video
            poster={require("../images/workshops.jpg")}
            loop
            autoPlay
            muted
            css={css`
              width: 800px;
              height: auto;
              position: absolute;
              top: 121px;
              left: 0;
              z-index: -1;

              display: none;

              @media (min-width: ${bp}) {
                display: block;
              }
            `}
          >
            <source src={require("../images/workshops.mp4")} type="video/mp4" />
          </video>
          <h2
            css={css`
              font-family: Publica Sans;
              line-height: 110%;
              letter-spacing: 0.44em;
              width: 5.5em;

              font-size: 36px;
              margin: auto;
              padding: 0 0 0 1em;

              @media (min-width: ${bp}) {
                width: 4.5em;
                font-size: 96px;
                margin: 0;
                padding: 0;
              }
            `}
          >
            workshops
          </h2>

          <img
            src={require("../images/hand.png")}
            alt="hand"
            css={css`
              height: auto;
              width: 109px;

              position: absolute;
              top: 72px;
              right: calc(50% - 164px);

              @media (min-width: ${bp}) {
                width: 309px;
                position: absolute;
                top: 377px;
                right: -10px;
              }
            `}
          />
        </div>

        {data.workshops.map((w, i) => {
          const imgSrc = imagesData.workshops.edges.find(
            ({ node: { base } }) => base === w.img
          ).node.childImageSharp.fixed

          return (
            <Workshop
              key={i}
              {...w}
              title={t(w.title)}
              name={t(w.name)}
              desc={t(w.desc)}
              imgSrc={imgSrc}
            />
          )
        })}
      </section>

      <ScheduleSection t={t} />

      <section
        id="exhibition"
        css={css`
          color: #000;
        `}
      >
        <img src={require("../images/exhibition-bg.jpg")} alt="bg" />
        <div
          css={css`
            max-width: 1290px;
            padding: 100px 20px 100px;
            margin: auto;
          `}
        >
          {data.exhibitions.map((e, i) => {
            const imgSrc = imagesData.exhibitions.edges.find(
              ({ node: { base } }) => base === e.img
            ).node.childImageSharp.fluid

            return (
              <ExhibitionItem
                key={i}
                author={t(e.author)}
                title={t(e.title)}
                desc={t(e.desc)}
                address={t(e.address)}
                fbLink={e.fbLink}
                imgLeft={!(i % 2)}
                imgRender={() => <Img fluid={imgSrc} alt={t(e.title)} />}
              />
            )
          })}
        </div>
      </section>

      {/* <section
        id="merch"
        css={css`
          color: #000;
        `}
      >
        merch
      </section> */}
      <section
        id="venue"
        css={css`
          color: white;
        `}
      >
        <div
          css={css`
            max-width: 1290px;
            margin: auto;
            padding: 140px 20px;

            display: flex;
          `}
        >
          <div>
            <h2
              css={css`
                font-family: Publica Sans;
                font-size: 96px;
                line-height: 110%;
                letter-spacing: 1.03em;
                width: 6.5em;
              `}
            >
              locations
            </h2>

            <h3
              css={css`
                padding: 90px 0 21px;
                font-size: 36px;
                line-height: 43px;
                text-transform: uppercase;
                color: #fcfb63;
                font-weight: 700;
              `}
            >
              Saturday
              <br />
              Main event
            </h3>
            <p
              css={css`
                font-size: 36px;
                line-height: 140%;
                font-weight: 500;
                max-width: 450px;
              `}
            >
              Ivan Franko Academic Music-Drama Theater,
              <br /> Nezalezhnosti str. 42, Ivano-Frankivsk
            </p>
          </div>
          <div>
            <img
              css={css`
                max-width: 875px;
                margin-top: 185px;
              `}
              src={require("../images/map.jpg")}
              alt="map"
            />
          </div>
        </div>
      </section>

      <section
        id="partners"
        css={css`
          color: #000;
          background: white;
        `}
      >
        <div
          css={css`
            max-width: 1290px;
            margin: auto;
            padding: 72px 20px 85px;
          `}
        >
          <h2
            css={css`
              font-family: Publica Sans;
              font-size: 96px;
              line-height: 110%;
              letter-spacing: 1.03em;
              width: 5.5em;
            `}
          >
            partners
          </h2>
        </div>

        <div
          css={css`
            padding: 0 20px 175px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              margin: 0 -15px;

              max-width: 1290px;
              margin: auto;

              @media (min-width: 1610px) {
                max-width: 1570px;
              }
            `}
          >
            {data.partners.map((p, i) => {
              const imgSrc = imagesData.partners.edges.find(
                ({ node: { base } }) => base === p
              ).node.childImageSharp.fluid

              return (
                <Img
                  key={p}
                  css={css`
                    padding: 15px;
                    width: 33%;

                    @media (min-width: ${bp}) {
                      width: 20%;
                    }
                  `}
                  fluid={imgSrc}
                  alt="partner"
                />
              )
            })}
          </div>
        </div>
      </section>

      <footer
        css={css`
          color: #fff;
        `}
      >
        <div
          css={css`
            max-width: 1290px;
            margin: auto;
            padding: 56px 20px;
          `}
        >
          <section>
            <p
              css={css`
                font-size: 48px;
                line-height: 137%;
                text-transform: uppercase;
                color: #fcfb63;
              `}
            >
              collaboration
            </p>
            <p
              css={css`
                font-size: 64px;
                line-height: 137%;
                font-weight: 300;
              `}
            >
              {data.links.phone_collaboration}
            </p>
          </section>
        </div>
      </footer>
    </Layout>
  )
}
export default IndexPage
