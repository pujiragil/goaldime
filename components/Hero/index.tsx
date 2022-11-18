import styled from "styled-components";
import { inter } from "../Font";
import { Button, Container, Title } from "../Global";

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export default function Hero() {
  return (
    <Container textAlign={"center"}>
      <Title>We Help you to Grow Your Business Faster</Title>
      <HeroImage src={"hero.svg"} />
      <Button className={inter.className}>Try 7 days for free</Button>
    </Container>
  )
}