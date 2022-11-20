import styled from "styled-components";
import { inter } from "../Font";
import { Container, Highlight, Subtitle, Title } from "../Global";

const PanelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: 768px) {
    gap: 80px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title title"
    "hero subheading"
    "hero card";
  }
`

const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 1024px) {
    &:nth-child(1) {
      grid-area: title;
    }

    &:nth-child(2) {
      grid-area: subheading;
    }
  }
`

const SubHeading = styled.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
`

const Paragraph = styled(Subtitle)`
  color: #4A4A57;
  font-size: 18px;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 20px;
  }
`

const PanelContent = styled(PanelHeader)`
  text-align: left;
  align-items: flex-start;

  @media screen and (min-width: 1024px) {
    grid-area: card;
  }
`

const PanelHero = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    grid-area: hero;
    position: relative;
  }
`

const Hero = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 100%;
    width: auto;
    position: absolute;
    top: 0;
    left: -80%;
  }
`

interface CardProps {
  primary: boolean;
}

const Card = styled.div<CardProps>`
  width: 100%;
  background: ${({ primary }) => primary ? "#E5EEFF" : "#FFF8E5"};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 1rem;

  @media screen and (min-width: 768px) {
    padding: 40px;
    flex-direction: row;
    align-items: center;
    gap: 80px;
  }

  @media screen and (min-width: 1024px) {
    gap: 40px;
  }
`

const CardIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface CardTitleProps {
  primary: boolean;
}

const CardTitle = styled.h3<CardTitleProps>`
  color: ${({ primary }) => primary ? "#5B93FF" : "#FAB400"};
  font-size: 24px;
  font-weight: 700;
`

const CardParagraph = styled(Paragraph)`
  font-weight: 400;
  color: #808093;
`

interface PanelItemProps {
  primary: boolean;
  imageLink: string;
  title: string;
}

function PanelItem({ primary, imageLink , title }: PanelItemProps) {
  return (
    <Card primary={primary}>
      <CardIcon src={imageLink} alt={"panel icon"} />

      <CardContent>
        <CardTitle primary={primary}>{title}</CardTitle>
        <CardParagraph className={inter.className}>Phasellus nec meligula. Cras vel intedum nisl. Inid ante orci.</CardParagraph>
      </CardContent>
    </Card>
  )
}

export default function Panel() {
  return (
    <Container>
      <PanelWrapper>
        <PanelHeader>
          <Subtitle className={inter.className}>CONTROL PANEL</Subtitle>
          <Title mdSize="64px" lgSize="64px">User <Highlight>Friendly</Highlight> Control Panel</Title>
          <Paragraph className={inter.className}>The control panel was crafted using the best design techniques to let you have control of everything</Paragraph>
        </PanelHeader>

        <PanelHeader>
          <SubHeading>We manage all those things by some different way</SubHeading>
          <Paragraph className={inter.className}>Laboriosam aute dolor, culpa. Numquam aspernatur but ex so perspiciatis eaque sint. Architecto occaecat or veritatis but mollit so aut so irure. Do proident voluptas but non. Et consequuntur yet fugit est.</Paragraph>
        </PanelHeader>

        <PanelContent>
          <PanelItem primary={true} imageLink={"/panel-1.svg"} title={"Easy and quick start"} />
          <PanelItem primary={false} imageLink={"/panel-2.svg"} title={"Wide rang of functions"} />
          <PanelItem primary={true} imageLink={"/panel-3.svg"} title={"Customizable features"} />
        </PanelContent>

        <PanelHero>
          <Hero src="/images/dashboard.png" alt="panel hero" />
        </PanelHero>
      </PanelWrapper>
    </Container>
  )
}