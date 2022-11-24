import styled from "styled-components";
import { Container, Highlight, Subtitle, Title } from "../Global";

const PatnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: 768px) {
    gap: 100px;
  }
`

const PatnerHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
`

const PatnerBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1024px) {
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column; 
  }
`

const PatnerBrand = styled.div`
  padding: 60px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #BDD4FF;
  width: 100%;

  @media screen and (min-width: 1024px) {
    border-bottom: unset;
    border-right: 1px solid #BDD4FF;

    &:last-child {
      border-right: unset;
    }
  }
`

const BrandImage = styled.img`
  height: 45;
  width: auto;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    /* height: 100%; */
  }
`

export default function Patner() {
  return (
    <Container>
      <PatnerWrapper>
        <PatnerHeader>
          <Subtitle>OUR PATNERS</Subtitle>
          <Title mdSize="54px" lgSize="64px"><Highlight>Trusted</Highlight> Patners</Title>
        </PatnerHeader>
        <PatnerBody>
          <PatnerBrand>
            <BrandImage src="/fila.svg" alt="patner-brand" />
          </PatnerBrand>
          <PatnerBrand>
            <BrandImage src="/ritter-sport.svg" alt="patner-brand" />
          </PatnerBrand>
          <PatnerBrand>
            <BrandImage src="/new-holland.svg" alt="patner-brand" />
          </PatnerBrand>
          <PatnerBrand>
            <BrandImage src="/puma.svg" alt="patner-brand" />
          </PatnerBrand>
          <PatnerBrand>
            <BrandImage src="/adidas.svg" alt="patner-brand" />
          </PatnerBrand>
          <PatnerBrand>
            <BrandImage src="/nike.svg" alt="patner-brand" />
          </PatnerBrand>
        </PatnerBody>
      </PatnerWrapper>
    </Container>
  )
}