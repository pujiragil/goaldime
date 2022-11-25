import styled from "styled-components";
import { Container } from "../Global";

const SocialWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const IconLink = styled.a`
  text-decoration: none;
  width: fit-content;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}

const SocialIcon = ({ href, src, alt }: SocialIconProps) => {
  return (
    <IconLink href={href} target={"_blank"}>
      <Icon src={src} alt={alt} />
    </IconLink>
  )
}

export default function SocialMedia() {
  return (
    <Container smPadding="20px 1rem 2rem">
      <SocialWrapper>
        <IconWrapper>
          <SocialIcon href="https://instagram.com/ragilsg_164" src="/instagram.svg" alt="instagram-icon" />
          <SocialIcon href="https://linkedin.com/in/pujiragil" src="/linkedin.svg" alt="linkedin-icon" />
          <SocialIcon href="https://web.facebook.com/profile.php?id=100073858291280" src="/facebook.svg" alt="facebook-icon" />
          <SocialIcon href="https://github.com/pujiragil" src="/github.svg" alt="github-icon" />
        </IconWrapper>
      </SocialWrapper>
    </Container>
  )
}