import styled from "styled-components"

const Container = styled.section` 
  padding: 0 1rem;
  overflow: hidden;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

const DashboardImage = styled.img`
  height: 347px;
  width: auto;
  position: relative;
  object-fit: cover;
  top: 0;
  right: -15%;

  @media screen and (min-width: 768px) {
    position: static;
    width: 674px;
    height: auto;
  }

  @media screen and (min-width: 1024px) {
    width: 800px;
  }
`

export default function Dashboard() {
  return (
    <Container>
      <DashboardImage src="/images/dashboard.png" alt="dashboard" />
    </Container>
  )
}