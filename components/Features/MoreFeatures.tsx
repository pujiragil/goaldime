import styled from "styled-components";
import { inter } from "../Font";
import { Container, Highlight, Subtitle, Title } from "../Global";

const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const FeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const FeaturesCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    gap: 100px 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  cursor: pointer;
  padding: 60px 20px;
  background: #F5F6F9;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #FBFBFB;
    box-shadow: 20px 40px 40px 10px rgba(23, 23, 23, 0.08);
  }

  @media screen and (min-width: 1024px) {
    padding: 80px 20px;
  }
`;

const CardIcon = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid #d6e4ff;
`;

const ContentTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

const ContentParagraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const ContentHighlight = styled(ContentParagraph)`
  font-weight: 700;
`

interface CardItemProps {
  cardImgLink: string;
  cardTitle: string;
}

function CardItem({ cardImgLink, cardTitle }: CardItemProps) {
  return (
    <Card className={inter.className}>
      <CardIcon src={cardImgLink} />

      <CardContent>
        <ContentTitle>{cardTitle}</ContentTitle>
        <ContentParagraph>
          Staff engagement no scraps hit the floor we need distributors to
          evangelize the new line to local markets.
        </ContentParagraph>
      </CardContent>

      <ContentHighlight>Learn more...</ContentHighlight>
    </Card>
  );
}

export default function MoreFeatures() {
  return (
    <Container>
      <FeaturesWrapper>
        <FeaturesHeader>
          <Subtitle className={inter.className}>MORE FEATURES</Subtitle>
          <Title mdSize="54px" lgSize="64px" lgWidth="60%">
            Even more features that <Highlight>benefit</Highlight> your team
          </Title>
        </FeaturesHeader>
        <FeaturesCard>
          <CardItem cardImgLink={"feature-1.svg"} cardTitle={"Sales Performence"} />
          <CardItem cardImgLink={"feature-2.svg"} cardTitle={"Customizable"} />
          <CardItem cardImgLink={"feature-3.svg"} cardTitle={"Fastest Loading Speed"} />
          <CardItem cardImgLink={"feature-4.svg"} cardTitle={"Manage Customer"} />
          <CardItem cardImgLink={"feature-5.svg"} cardTitle={"Manage Products"} />
          <CardItem cardImgLink={"feature-6.svg"} cardTitle={"Create Invoice"} />
        </FeaturesCard>
      </FeaturesWrapper>
    </Container>
  );
}
