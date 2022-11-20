import styled from "styled-components";
import { Container, Highlight, Subtitle, Title } from "../Global";

const FeaturesWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const FeaturesHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
`;

const FeaturesCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

interface CardProps {
  reserve: boolean;
}

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  gap: 60px;
  font-family: var(--inter-font);

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: ${({ reserve }) => reserve ? `"right left"` : `"left right"`};
  }
`;

const CardContent = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContentDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const DescSubtitle = styled.p`
  background: #e5eeff;
  border-radius: 999px;
  padding: 1rem 2rem;
  width: fit-content;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const DescTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  font-family: var(--source-font);

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const DescParagraph = styled.p`
  font-weight: 300;
  font-size: 18px;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const List = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ListIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

const ListText = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const ContentButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fbfbfb;
  font-size: 18px;
  font-family: var(--lato-font);
  width: fit-content;
  cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;
  }
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

interface CardItemProps {
  reserve: boolean;
  descSubtitle: string;
  descTitle: string;
  imageLink: string;
}

function CardItem({ reserve, descSubtitle, descTitle, imageLink }: CardItemProps) {
  return (
    <Card reserve={reserve}>
      <CardContent>
        <ContentDesc>
          <DescSubtitle>
            {descSubtitle}
          </DescSubtitle>
          <DescTitle>{descTitle}</DescTitle>
          <DescParagraph>
            We need to button up our approach. I don't want to drain the whole
            swamp, i just want to shoot some alligators we need this overall to
            be busier and more active for technologically savvy moving the
            goalposts.
          </DescParagraph>
        </ContentDesc>

        <ContentList>
          <List>
            <ListIcon src="checklist.svg" />
            <ListText>Sales Growth</ListText>
          </List>
          <List>
            <ListIcon src="checklist.svg" />
            <ListText>
              Increase conversion rate
            </ListText>
          </List>
          <List>
            <ListIcon src="checklist.svg" />
            <ListText>
              Increase conversion rate
            </ListText>
          </List>
          <List>
            <ListIcon src="checklist.svg" />
            <ListText>
              Increase conversion rate
            </ListText>
          </List>
        </ContentList>

        <ContentButton>
          Get Started <img src="arrow-button.svg" alt="arrow-button" />
        </ContentButton>
      </CardContent>

      <CardImage>
        <Image src={imageLink} alt="feature-image" />
      </CardImage>
    </Card>
  );
}

export default function Features() {
  return (
    <Container>
      <FeaturesWrapper>
        <FeaturesHeader>
          <Subtitle>FEATURES</Subtitle>
          <Title mdSize="54px" lgSize="64px">
            All the tools you need to <Highlight>scale-up</Highlight> your
            e-commerce sales in one place
          </Title>
        </FeaturesHeader>

        <FeaturesCard>
          <CardItem
            reserve={false}
            descSubtitle="Sales Performance"
            descTitle="Build high performance sales for your e-commarce products"
            imageLink="/images/feature-1.png"
          />
          <CardItem
            reserve={true}
            descSubtitle="Customizable"
            descTitle="Easy to use and fully customizable pages editor"
            imageLink="/images/feature-2.png"
          />
          <CardItem
            reserve={false}
            descSubtitle="Fastest Loading Speed"
            descTitle="Fastest page load speed for extra conversion"
            imageLink="/images/feature-3.png"
          />
        </FeaturesCard>
      </FeaturesWrapper>
    </Container>
  );
}
