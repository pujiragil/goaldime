import styled from "styled-components";
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
      text-align: left;
    }
  }
`

const SubHeading = styled.h2`
  font-weight: 700;
  font-size: 28px;
  font-family: var(--source-font);
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

const Paragraph = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 400;

  &.subparagraph {
    font-size: 18px;
    font-weight: 300;
  }

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
  position: relative;

  @media screen and (min-width: 1024px) {
    grid-area: hero;
  }
`

const Hero = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;


  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    left: -190%;
  }

  @media screen and (min-width: 1074px) {
    left: -170%;
  }

  @media screen and (min-width: 1098px) {
    left: -160%;
  }

  @media screen and (min-width: 1120px) {
    left: -150%;
  }

  @media screen and (min-width: 1148px) {
    left: -140%;
  }

  @media screen and (min-width: 1174px) {
    left: -130%;
  }

  @media screen and (min-width: 1224px) {
    left: -110%;
  }

  @media screen and (min-width: 1274px) {
    left: -100%
  }

  @media screen and (min-width: 1344px) {
    left: -90%;
  }

  @media screen and (min-width: 1360px) {
    left: -80%;
  }

  @media screen and (min-width: 1384px) {
    left: -75%;
  }

  @media screen and (min-width: 1404px) {
    left: -60%;
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
  font-family: var(--source-font);
`

const CardParagraph = styled(Paragraph)`
  font-weight: 400;
  font-family: var(--inter-font);
  color: #808093;
  font-size: 18px; 

  @media screen and (min-width: 768px) {
    width: 60%;
  }
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
        <CardParagraph>Phasellus nec meligula. Cras vel intedum nisl. Inid ante orci.</CardParagraph>
      </CardContent>
    </Card>
  )
}

export default function Panel() {
  return (
    <Container>
      <PanelWrapper>
        <PanelHeader>
          <Subtitle>CONTROL PANEL</Subtitle>
          <Title mdSize="54px" lgSize="64px">User <Highlight>Friendly</Highlight> Control Panel</Title>
          <Paragraph>The control panel was crafted using the best design techniques to let you have control of everything</Paragraph>
        </PanelHeader>

        <PanelHeader>
          <SubHeading>We manage all those things by some different way</SubHeading>
          <Paragraph className="subparagraph">Laboriosam aute dolor, culpa. Numquam aspernatur but ex so perspiciatis eaque sint. Architecto occaecat or veritatis but mollit so aut so irure. Do proident voluptas but non. Et consequuntur yet fugit est.</Paragraph>
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