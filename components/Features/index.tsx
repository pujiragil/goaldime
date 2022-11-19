import styled from "styled-components";
import { inter } from "../Font";
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
  gap: 60px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const CardContent = styled.div`
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
  color: ${({ theme }) => theme.colors.secondary};
`;

const DescTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
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
  color: #FBFBFB;
  font-size: 18px;
  width: fit-content;
  cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;
  }
`

const CardImage = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

function CardItem() {
  return (
    <Card>
      <CardContent>
        <ContentDesc>
          <DescSubtitle className={inter.className}>
            Sales Performance
          </DescSubtitle>
          <DescTitle>
            Build high performance sales for your e-commarce products
          </DescTitle>
          <DescParagraph className={inter.className}>
            We need to button up our approach. I don't want to drain the whole
            swamp, i just want to shoot some alligators we need this overall to
            be busier and more active for technologically savvy moving the
            goalposts.
          </DescParagraph>
        </ContentDesc>

        <ContentList>
          <List>
            <ListIcon src="checklist.svg" />
            <ListText className={inter.className}>Sales Growth</ListText>
          </List>
          <List>
            <ListIcon src="checklist.svg" />
            <ListText className={inter.className}>Increase conversion rate</ListText>
          </List>
          <List>
            <ListIcon src="checklist.svg" />
            <ListText className={inter.className}>Increase conversion rate</ListText>
          </List>
          <List>
            <ListIcon src="checklist.svg" />
            <ListText className={inter.className}>Increase conversion rate</ListText>
          </List>
        </ContentList>

        <ContentButton>
          Get Started <img src="arrow-button.svg" alt="arrow-button" />
        </ContentButton>
      </CardContent>
      
      <CardImage>
        <Image src="/images/features-1.png" alt="feature-image" />
      </CardImage>
    </Card>
  );
}

export default function Features() {
  return (
    <Container>
      <FeaturesWrapper>
        <FeaturesHeader>
          <Subtitle className={inter.className}>FEATURES</Subtitle>
          <Title>
            All the tools you need to <Highlight>scale-up</Highlight> your
            e-commerce sales in one place
          </Title>
        </FeaturesHeader>

        <FeaturesCard>
          <CardItem />
        </FeaturesCard>
      </FeaturesWrapper>
    </Container>
  );
}
