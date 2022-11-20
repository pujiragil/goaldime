import { useState } from "react";
import styled from "styled-components";
import { Container, Highlight, Subtitle, Title } from "../Global";

const PriceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
`

const Paragraph = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
`

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  `

const SwitchTag = styled.p`
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`

interface SwitchButtonProps {
  switched: boolean;
}

const SwitchButton = styled.button<SwitchButtonProps>`
  border: none;
  outline: none;
  border-radius: 999px;
  width: 48px;
  height: 26px;
  background: ${({ switched, theme }) => switched ? theme.colors.secondary : "#D7D7DD"};
  padding: 3px 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`

interface CirlceProps {
  switched: boolean;
}

const Circle = styled.span<CirlceProps>`
  display: block;
  height: 100%;
  width: 20px;
  border-radius: 999px;
  transition: all 0.3s ease-in-out;
  background: #F5F5F6;
  transform: ${({ switched }) => switched ? "translateX(100%)" : "translateX(0%)"};
`

export default function Price() {
  const [isSwitched, setIsSwitched] = useState(false)

  const handleSwitch = () => {
    setIsSwitched(prev => !prev)
  }

  return (
    <Container>
      <PriceWrapper>
        <HeaderWrapper>
          <Subtitle>OUR PRICING</Subtitle>
          <Title>Ready to get <Highlight>started</Highlight></Title>
          <Paragraph>Choose a plan tailored to your needs</Paragraph>
        </HeaderWrapper>

        <SwitchWrapper>
          <SwitchTag>Monthly</SwitchTag>
          <SwitchButton switched={isSwitched} onClick={handleSwitch}>
            <Circle switched={isSwitched} />
          </SwitchButton>
          <SwitchTag>Annual</SwitchTag>
        </SwitchWrapper>
      </PriceWrapper>
    </Container>
  )
}