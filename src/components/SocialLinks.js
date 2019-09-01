import React from "react"
import { css } from "@emotion/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import data from "../data"

export const SocialLinks = () => (
  <>
    <OutboundLink
      href={data.links.fb}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        background: url(${require("../images/icons/fb.svg")});
      `}
    >
      facebook
    </OutboundLink>

    <OutboundLink
      href={data.links.tg}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        background: url(${require("../images/icons/tg.svg")});
      `}
    >
      telegram
    </OutboundLink>

    <OutboundLink
      href={data.links.ig}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        background: url(${require("../images/icons/ig.svg")});
      `}
    >
      instagram
    </OutboundLink>

    <OutboundLink
      href={data.links.tw}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        background: url(${require("../images/icons/tw.svg")});
      `}
    >
      twitter
    </OutboundLink>
  </>
)
