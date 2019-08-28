import React from "react"
import { css } from "@emotion/core"
// import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "./seo"

import data from "../data"
import { Workshop } from "./Workshop"
import { ExhibitionItem } from "./ExhibitionItem"
import { Speaker } from "./Speaker"
import { SpeakerMain } from "./SpeakerMain"
import { ScheduleSection } from "./ScheduleSection"
import { MainHeader } from "./MainHeader"
import { bp } from "./bp"

import "./layout.css"
import "../fonts/fonts.css"

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
    <>
      <SEO />

      <MainHeader data={data} t={t} />

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
            padding: 72px 20px 50px;

            @media (min-width: ${bp}) {
              padding-bottom: 85px;
            }
          `}
        >
          <h2
            css={css`
              font-family: Publica Sans;
              font-size: 36px;
              line-height: 110%;
              letter-spacing: 1.03em;
              width: 5.5em;

              @media (min-width: ${bp}) {
                font-size: 96px;
              }
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
            margin: 56px 20px;

            @media (min-width: ${bp}) {
              display: flex;
              justify-content: space-between;
              max-width: 1250px;
              margin: 56px auto;
            }
          `}
        >
          <section>
            <FooterTitle>follow</FooterTitle>
            <div
              css={css`
                display: flex;
                margin-top: 20px;
                & > a {
                  display: block;
                  width: 50px;
                  height: 50px;
                  margin-right: 25px;
                  background-size: cover;
                  font-size: 0;
                  &:hover {
                    filter: brightness(95%) sepia(89%) hue-rotate(1deg)
                      saturate(500%);
                  }
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
          </section>
          <section>
            <FooterTitle>contacts</FooterTitle>
            <a
              href={`mailto:${data.links.email}`}
              css={css`
                font-size: 30px;
                line-height: 137%;
                font-weight: 300;
                color: white;
                text-decoration: none;
                display: block;

                @media (min-width: ${bp}) {
                  margin-top: 27px;
                  font-size: 36px;
                }
              `}
            >
              {data.links.email}
            </a>
          </section>

          <section>
            <FooterTitle>collaboration</FooterTitle>
            <a
              href={`tel:${data.links.phone_collaboration}`}
              css={css`
                font-size: 36px;
                line-height: 137%;
                font-weight: 300;
                color: white;
                text-decoration: none;
                display: block;

                @media (min-width: ${bp}) {
                  font-size: 64px;
                  margin-top: 8px;
                }
              `}
            >
              {data.links.phone_collaboration}
            </a>
          </section>
        </div>
      </footer>
    </>
  )
}
export default IndexPage

function FooterTitle({ children }) {
  return (
    <h2
      css={css`
        margin-top: 40px;
        font-size: 36px;
        line-height: 137%;
        text-transform: uppercase;
        color: #fcfb63;

        @media (min-width: ${bp}) {
          font-size: 48px;
        }
      `}
    >
      {children}
    </h2>
  )
}
