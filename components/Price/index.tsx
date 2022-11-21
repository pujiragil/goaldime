import { useState } from "react";
import styled from "styled-components";
import { Container, Highlight, Subtitle, Title } from "../Global";

const PriceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
`;

const Paragraph = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
`;

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SwitchTag = styled.p`
  font-family: var(--inter-font);
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

interface SwitchButtonProps {
  switched: boolean;
}

const SwitchButton = styled.button<SwitchButtonProps>`
  border: none;
  outline: none;
  border-radius: 999px;
  width: 48px;
  height: 26px;
  background: ${({ switched, theme }) =>
    switched ? theme.colors.secondary : "#D7D7DD"};
  padding: 3px 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

interface CirlceProps {
  switched: boolean;
}

const Circle = styled.span<CirlceProps>`
  display: block;
  height: 100%;
  width: 20px;
  border-radius: 999px;
  transition: all 0.3s ease-in-out;
  background: #f5f5f6;
  transform: ${({ switched }) =>
    switched ? "translateX(100%)" : "translateX(0%)"};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  position: relative;
  font-family: var(--inter-font);
  padding: 2rem 20px 0 20px;
  border-radius: 1rem;
  background: #d6e4ff;
  display: flex;
  flex-direction: column;
  gap: 60px;
  color: ${({ theme }) => theme.colors.primary};

  & > span {
    display: block;
    height: 52px;
  }
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Headline = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

const Desc = styled(Headline)`
  font-weight: 400;
  font-size: 18px;

  &.half {
    width: 35%;
  }
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Amount = styled.h3`
  font-weight: 400;
  font-size: 80px;
`;

const CardButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  padding: 1rem;
  color: #fbfbfb;
  font-weight: 400;
  font-size: 1rem;
  border: none;
  outline: none;
`;

const CardList = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ListHead = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ListIcon = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
`;

const ListName = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #4a4a57;
`;

const FullButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  color: #FBFBFB;
  font-weight: 400;
  font-size: 1rem;
`

function CardItem() {
  return (
    <Card>
      <HeadlineWrapper>
        <Headline>Lite</Headline>
        <Desc>Perfect to get started</Desc>
      </HeadlineWrapper>
      <AmountWrapper>
        <Amount>$11</Amount>
        <Desc className="half">Per seat / month</Desc>
      </AmountWrapper>

      <CardButton>Try 7 days for free</CardButton>

      <CardList>
        <ListHead>Lite includes:</ListHead>

        <List>
          <ListItem>
            <ListIcon src="/checklist.svg" />
            <ListName>Create message</ListName>
          </ListItem>
          <ListItem>
            <ListIcon src="/checklist.svg" />
            <ListName>Integrate with stripe</ListName>
          </ListItem>
          <ListItem>
            <ListIcon src="/checklist.svg" />
            <ListName>Integrate with stripe</ListName>
          </ListItem>
        </List>
      </CardList>
      
      <span></span>
      <FullButton>See all features</FullButton>
    </Card>
  );
}

export default function Price() {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleSwitch = () => {
    setIsSwitched((prev) => !prev);
  };

  return (
    <Container>
      <PriceWrapper>
        <HeaderWrapper>
          <Subtitle>OUR PRICING</Subtitle>
          <Title>
            Ready to get <Highlight>started</Highlight>
          </Title>
          <Paragraph>Choose a plan tailored to your needs</Paragraph>
        </HeaderWrapper>

        <SwitchWrapper>
          <SwitchTag>Monthly</SwitchTag>
          <SwitchButton switched={isSwitched} onClick={handleSwitch}>
            <Circle switched={isSwitched} />
          </SwitchButton>
          <SwitchTag>Annual</SwitchTag>
        </SwitchWrapper>

        <CardWrapper>
          <CardItem />
          <CardItem />
          <CardItem />
        </CardWrapper>
      </PriceWrapper>
    </Container>
  );
}
