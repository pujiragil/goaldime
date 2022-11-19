import styled from "styled-components";
import { inter } from "../Font";
import { Button, Circle, Container, Title } from "../Global";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 100px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
    gap: 60px;
  }
`

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 482px;
  }
`;

const CircleSm = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 25%;
  left: 60%;
  z-index: -1;

  @media screen and (min-width: 768px) {
    top: 30%;
    left: 55%;
  }

  @media screen and (min-width: 1024px) {
    left: 50%;
  }
`

const CircleLg = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  z-index: -1;
  top: -8%;
  left: -30%;

  @media screen and (min-width: 768px) {
    left: -25%;
  }

  @media screen and (min-width: 1024px) {
    top: -15%;
    left: -10%;
  }
`

export default function Hero() {
  return (
    <Container>
      <HeroWrapper>
        <HeroContent>
          <Title mdSize="74px" lgSize="74px" mdWidth="75%">We Help you to Grow Your Business Faster</Title>
          <Button mdWidth={"60%"} className={`${inter.className} btn-show`}>
            Try 7 days for free
          </Button>
        </HeroContent>

        <HeroImageWrapper>
          <HeroImage src={"hero.svg"} />
        </HeroImageWrapper>

        <Button mdWidth={"60%"} className={`${inter.className} btn-hidden`}>
          Try 7 days for free
        </Button>

        <CircleSm>
          <Circle smSize="44px"/>
        </CircleSm>

        <CircleLg>
          <Circle smSize="220px" mdSize="358px" />
        </CircleLg>
      </HeroWrapper>
    </Container>
  );
}
