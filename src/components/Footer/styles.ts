import styled, { css } from 'styled-components'
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

export const Container = styled.div`
  width: 100%;
  height: 20.6rem;
  background: var(--primary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  p {
    color: var(--white);
    font-size: 0.7rem;
    margin-top: -10px;
  }
`

export const ContainerInfoRights = styled.nav`
  flex-wrap: wrap;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  a {
    color: #999;
    font-size: 12px;
    text-decoration: none;
    line-height: 1.2em;
    padding: 0 10px;
    margin-bottom: 10px;
  }
`

export const ColumnSocial = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`

export const Logo = styled.img`
  flex-shrink: 0;
  @media (max-width: 800px) {
    display: none;
  }
`

export const ContinerSocialIcon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  span {
    color: var(--white);
  }
`

const iconCSS = css`
  width: 24px;
  height: 24px;
  padding: 5px;
  fill: var(--white);
`
export const WhatsappIcon = styled(FaWhatsapp)`
  ${iconCSS}
`
export const LinkedinIcon = styled(FaLinkedin)`
  ${iconCSS}
`
export const InstagranIcon = styled(FaInstagram)`
  ${iconCSS}
`
export const FacebookIcon = styled(FaFacebook)`
  ${iconCSS}
`
export const YoutubeIcon = styled(FaYoutube)`
  ${iconCSS}
`
