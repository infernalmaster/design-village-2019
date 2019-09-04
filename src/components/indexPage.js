import React from "react"
import { css } from "@emotion/core"
// import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "./seo"

import data from "../data"
import { bp } from "./bp"

import { Workshop } from "./Workshop"
import { ExhibitionItem } from "./ExhibitionItem"
import { Speaker } from "./Speaker"
import { SpeakerMain } from "./SpeakerMain"
import { ScheduleSection } from "./ScheduleSection"
import { MainHeader } from "./MainHeader"
import { SocialLinks } from "./SocialLinks"

import "./layout.css"
import "../fonts/fonts.css"
import { FooterTitle } from "./FooterTitle"

const IndexPage = ({ t }) => {
  const imagesData = useStaticQuery(graphql`
    query {
      logoBig: file(relativePath: { eq: "logo-big.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logoMobile: file(relativePath: { eq: "logo-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
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
              fluid(maxWidth: 610, quality: 100) {
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
              fluid(maxWidth: 397, quality: 100) {
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
              fixed(width: 100, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
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
          <SocialLinks />
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
            loading="lazy"
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
          padding: 0 20px 30px;
          margin: auto;
          color: #ffffff;
        `}
      >
        <div
          css={css`
            position: relative;
            padding: 30px 0;

            @media (min-width: ${bp}) {
              padding: 270px 0 60px 50%;
            }
          `}
        >
          <video
            poster={require("../images/workshops.jpg")}
            loop
            autoPlay
            muted
            loading="lazy"
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

          const clearImgSrc = imagesData.workshops.edges.find(
            ({ node: { base } }) => base === w.clearImg
          ).node.childImageSharp.fixed

          return (
            <Workshop
              key={i}
              {...w}
              title={t(w.title)}
              name={t(w.name)}
              desc={t(w.desc)}
              imgSrc={imgSrc}
              clearImgSrc={clearImgSrc}
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

            @media (min-width: ${bp}) {
              display: flex;
              padding: 140px 20px;
            }
          `}
        >
          <div
            css={css`
              padding: 20px;

              @media (min-width: ${bp}) {
                padding: 0;
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
                  width: 6.5em;
                }
              `}
            >
              locations
            </h2>

            <h3
              css={css`
                padding: 35px 0 21px;
                font-size: 24px;
                text-transform: uppercase;
                color: #fcfb63;
                font-weight: 700;

                @media (min-width: ${bp}) {
                  font-size: 36px;
                  padding: 90px 0 21px;
                }
              `}
            >
              Saturday
              <br />
              Main event
            </h3>
            <p
              css={css`
                font-size: 18px;
                line-height: 140%;
                font-weight: 500;
                max-width: 450px;

                @media (min-width: ${bp}) {
                  font-size: 36px;
                }
              `}
            >
              Ivan Franko Academic Music-Drama Theater,
              <br /> Nezalezhnosti str. 42, Ivano-Frankivsk
            </p>
          </div>
          <a
            href="https://www.google.com/maps/place/%D0%98%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D0%BD%D0%BE%D0%B9+%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D1%82%D0%B5%D0%B0%D1%82%D1%80+%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8+%D0%98%D0%B2%D0%B0%D0%BD%D0%B0+%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%B0/@48.9156942,24.7177289,16.24z/data=!4m5!3m4!1s0x0:0x9961cdce000e7ba2!8m2!3d48.9176057!4d24.7188574"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              position: relative;
              display: block;
              margin-top: 20px;
              @media (min-width: ${bp}) {
                margin-top: 185px;
              }
            `}
          >
            <img
              css={css`
                max-width: 875px;
                display: block;
              `}
              src={require("../images/map.jpg")}
              alt="map"
            />

            <div
              css={css`
                position: absolute;
                z-index: 1;
                width: 15px;
                height: 15px;
                background: #fcfb63;
                border-radius: 50%;
                left: 60%;
                top: 39%;
              `}
            />
          </a>
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
            {data.partners.map((p, i) => (
              <img
                key={p}
                css={css`
                  padding: 15px;
                  width: 33%;

                  @media (min-width: ${bp}) {
                    width: 20%;
                  }
                `}
                src={require(`../images/partners/${p}`)}
                alt="partner"
                loading="lazy"
              />
            ))}
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
              <SocialLinks />
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
