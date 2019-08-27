import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { bp } from "./bp"
import { NavLink } from "./NavLink"
import { supportsPassive } from "./supportsPassive"

export const MainHeader = ({ data, t }) => {
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
