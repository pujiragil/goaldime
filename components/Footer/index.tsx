import styled from "styled-components";
import Email from "../Email";

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
      </Container>
    </Background>
  )
}