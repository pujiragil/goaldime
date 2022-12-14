import styled from "styled-components";
import { Container } from "../Global";

const SocialWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    flex: 1;
    justify-content: flex-start;
    gap: 40px;
  }
`;

const IconLink = styled.a`
  text-decoration: none;
  width: fit-content;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Copyright = styled.p`
  font-family: var(--inter-font);
  font-weight: 400;
  font-size: 14px;
  color: #fbfbfb;
  text-align: center;
  
  @media screen and (min-width: 768px) {
    flex: 1;
    text-align: right;
  }
`;

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
  );
};

export default function SocialMedia() {
  return (
    <Container smPadding="20px 1rem 2rem" mdPadding="2rem 20px" lgPadding="2rem">
      <SocialWrapper>
        <IconWrapper>
          <SocialIcon
            href="https://instagram.com/ragilsg_164"
            src="/instagram.svg"
            alt="instagram-icon"
          />
          <SocialIcon
            href="https://linkedin.com/in/pujiragil"
            src="/linkedin.svg"
            alt="linkedin-icon"
          />
          <SocialIcon
            href="https://web.facebook.com/profile.php?id=100073858291280"
            src="/facebook.svg"
            alt="facebook-icon"
          />
          <SocialIcon
            href="https://github.com/pujiragil"
            src="/github.svg"
            alt="github-icon"
          />
        </IconWrapper>
        <Copyright>All rights reserved.© 2022 Puji Ragil.</Copyright>
      </SocialWrapper>
    </Container>
  );
}
