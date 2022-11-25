import styled from "styled-components";
import { Button } from "../Global";

const Container = styled.footer`
  padding: 0 1rem;
`;

const Footer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 0 115px;
  gap: 130px;
  border-bottom: 1px solid #c2c2cb;
  
  @media screen and (min-width: 1024px) {
    padding: 40px 0;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const FooterHead = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HeadContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Icon = styled.img`
  width: 166px;
  height: auto;
  object-fit: cover;
`;

const Desc = styled.p`
  color: #fbfbfb;
  font-family: var(--inter-font);
  font-size: 1rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    width: 40%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const FooterLinkWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: var(--inter-font);
`;

const LinkTitle = styled.p`
  color: #fbfbfb;
  font-size: 20px;
  font-weight: 700;
`;

const LinkItem = styled.a`
  color: #fbfbfb;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  width: fit-content;
`;

const FooterInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InformationIcon = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
`

const Information = styled.p`
  font-family: var(--inter-font);
  font-size: 1rem;
  font-weight: 400;
  color: #FBFBFB;
`

export default function FooterSection() {
  return (
    <Container>
      <Footer>
        <FooterHead>
          <HeadContent>
            <Icon src="/goaldime-footer.svg" alt="goaldime-icon" />
            <Desc>
              Our dashboard is desperately waiting for you to test it and bring
              you new touch to the way you are working with data
            </Desc>
          </HeadContent>
          <Button padding="1rem 40px">Try 7 days for free</Button>
        </FooterHead>
        <FooterLinkWrapper>
          <LinkTitle>Product</LinkTitle>
          <LinkItem>Features</LinkItem>
          <LinkItem>Pricing</LinkItem>
          <LinkItem>Documentation</LinkItem>
          <LinkItem>Screens</LinkItem>
          <LinkItem>Book Demo</LinkItem>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <LinkTitle>Company</LinkTitle>
          <LinkItem>About</LinkItem>
          <LinkItem>Team</LinkItem>
          <LinkItem>Goals</LinkItem>
          <LinkItem>Careers</LinkItem>
          <LinkItem>Events</LinkItem>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <LinkTitle>Reach Us</LinkTitle>
          <FooterInformation>
            <InformationIcon src="/inbox.svg" alt="icon" />
            <Information>makanbang@gmail.com</Information>
          </FooterInformation>
          <FooterInformation>
            <InformationIcon src="/phone.svg" alt="icon" />
            <Information>+62 0812345678</Information>
          </FooterInformation>
          <FooterInformation>
            <InformationIcon src="/location.svg" alt="icon" />
            <Information>14/8 East Java, Ponorogo</Information>
          </FooterInformation>
        </FooterLinkWrapper>
      </Footer>
    </Container>
  );
}
