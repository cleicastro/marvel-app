import React, { memo } from 'react'
import {
  Container,
  ContainerInfoRights,
  ColumnSocial,
  Logo,
  ContinerSocialIcon,
  FacebookIcon,
  InstagranIcon,
  LinkedinIcon,
  WhatsappIcon,
  YoutubeIcon
} from './styles'
import IconLogoMin from '../../assets/logo-min.svg'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <Container>
      <ColumnSocial>
        <Logo src={IconLogoMin} alt="logo" />
        <ContinerSocialIcon>
          <span>FOLLOW CLEI CASTRO</span>
          <ColumnSocial style={{ marginTop: 16 }}>
            <WhatsappIcon />
            <LinkedinIcon />
            <InstagranIcon />
            <FacebookIcon />
            <YoutubeIcon />
          </ColumnSocial>
        </ContinerSocialIcon>
      </ColumnSocial>
      <ContainerInfoRights>
        <Link to="/">Terms of Use</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">your California Privacy Rights</Link>
        <Link to="/">Do Not Sell My Info</Link>
        <Link to="/">{"Children's Online Privacy"}</Link>
        <Link to="/">License Agreement</Link>
        <Link to="/">Interest-Based Ads</Link>
        <Link to="/">Marvel Insider Terms</Link>
      </ContainerInfoRights>
      <p>@ Copyright 2020 - Marvel App. All Rights Reserved.</p>
    </Container>
  )
}

export default memo(Footer)
