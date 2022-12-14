import { useState } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
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
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-family: var(--inter-font);
  padding: 2rem 20px 112px 20px;
  border-radius: 1rem;
  background: ${({ theme }) => (theme.primary ? "#002F8A" : "#d6e4ff")};
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
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
  color: ${({ theme }) => (theme.primary ? "#FBFBFB" : theme.colors.primary)};
`;

const Desc = styled(Headline)`
  font-weight: 400;
  font-size: 18px;

  &.half {
    width: 35%;
  }

  @media screen and (min-width: 1024px) {
    &.half {
      width: 100%;
    }
  }
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1024px) {
    align-items: flex-end;
  }
`;

const Amount = styled.h3`
  font-weight: 400;
  font-size: 80px;
  color: ${({ theme }) => (theme.primary ? "#FBFBFB" : theme.colors.primary)};

  @media screen and (min-width: 1024px) {
    line-height: 0.8;
  }
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
  cursor: pointer;
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
  color: ${({ theme }) => (theme.primary ? "#FBFBFB" : theme.colors.primary)};
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
  color: ${({ theme }) => (theme.primary ? "#FBFBFB" : "#4A4A57")};
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
  color: #fbfbfb;
  font-weight: 400;
  cursor: pointer;
  font-size: 1rem;
`;

interface CardItemProps {
  isPrimary: boolean;
  headline: string;
  desc: string;
  price: string;
  listData: string[];
}

function CardItem({ isPrimary, headline, desc, price, listData }: CardItemProps) {
  const theme: DefaultTheme = {
    colors: {
      primary: "#0F0F0F",
      secondary: "#5B93FF",
      subtitle: "#FFC327",
    },
    primary: isPrimary,
  };

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <HeadlineWrapper>
          <Headline>{headline}</Headline>
          <Desc>{desc}</Desc>
        </HeadlineWrapper>
        <AmountWrapper>
          <Amount>{price}</Amount>
          <Desc className="half">Per seat / month</Desc>
        </AmountWrapper>

        <CardButton>Try 7 days for free</CardButton>

        <CardList>
          <ListHead>Lite includes:</ListHead>

          <List>
            {listData?.map((data, index) => (
              <ListItem key={index}>
                <ListIcon src="/checklist.svg" alt="checklist icon" />
                <ListName>{data}</ListName>
              </ListItem>
            ))}
          </List>
        </CardList>

        <FullButton>See all features</FullButton>
      </Card>
    </ThemeProvider>
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
          <Title mdSize="54px">
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
          <CardItem
            isPrimary={false}
            headline="Lite"
            desc="Perfect to get started"
            price="$11"
            listData={["Create message", "Integrate with Stripe", "Integrate with Stripe"]}
          />
          <CardItem
            isPrimary={true}
            headline="Pro"
            desc="Best for professionals"
            price="$19"
            listData={["Create message", "Integrate with Stripe", "Integrate with Stripe", "Integrate with Stripe"]}
          />
          <CardItem
            isPrimary={false}
            headline="Ultimate"
            desc="Toolset for hard players"
            price="$35"
            listData={["Create message", "Create message", "Integrate with Stripe", "Integrate with Stripe"]}
          />
        </CardWrapper>
      </PriceWrapper>
    </Container>
  );
}
