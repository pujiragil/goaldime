import styled from "styled-components";
import { inter } from "../Font";
import { Container, Highlight, Subtitle, Title } from "../Global";

const FeaturesHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
`

export default function Features() {
  return (
    <Container>
      <FeaturesHeader>
        <Subtitle className={inter.className}>FEATURES</Subtitle>
        <Title>All the tools you need to <Highlight>scale-up</Highlight> your e-commerce sales in one place</Title>
      </FeaturesHeader>
    </Container>
  )
}