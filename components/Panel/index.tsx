import styled from "styled-components";
import { Container, Highlight, Subtitle, Title } from "../Global";

const PanelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const PanelHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
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
`

export default function Panel() {
  return (
    <Container>
      <PanelWrapper>
        <PanelHeader>
          <Subtitle>CONTROL PANEL</Subtitle>
          <Title>User <Highlight>Friendly</Highlight> Control Panel</Title>
          <Paragraph>The control panel was crafted using the best design techniques to let you have control of everything</Paragraph>
        </PanelHeader>

        <PanelHeader>
          <SubHeading>We manage all those things by some different way</SubHeading>
          <Paragraph>Laboriosam aute dolor, culpa. Numquam aspernatur but ex so perspiciatis eaque sint. Architecto occaecat or veritatis but mollit so aut so irure. Do proident voluptas but non. Et consequuntur yet fugit est.</Paragraph>
        </PanelHeader>
      </PanelWrapper>
    </Container>
  )
}