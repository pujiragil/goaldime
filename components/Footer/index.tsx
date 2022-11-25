import styled from "styled-components";
import Email from "../Email";
import FooterSection from "./Footer";

const Background = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: #FBFBFB;
`

const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  height: auto;
`

export default function Footer() {
  return (
    <Background>
      <Container>
        <Email />
        <FooterSection />
      </Container>
    </Background>
  )
}