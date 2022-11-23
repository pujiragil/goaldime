import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Highlight, Subtitle, Title } from "../Global";

// swiper styles
import "swiper/css";

const TestimonialWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const TestimonialHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  align-items: center;
`;

const TestimonialSwiper = styled.div``;

const Card = styled.div`
  font-family: var(--inter-font);
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
  background: #fbfbfb;
`;

const CardHeader = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #bdd4ff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Rating = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #4a4a57;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #4a4a57;
`;

const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProfileName = styled.h4`
  font-weight: 800;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 100%;
`;

function TestimonialCard() {
  return (
    <Card>
      <CardHeader>
        <CardRating>
          <CardTitle>Incredible love it</CardTitle>
          <RatingWrapper>
            <Rating src="/star.svg" alt="star" />
            <Rating src="/star.svg" alt="star" />
            <Rating src="/star.svg" alt="star" />
            <Rating src="/star.svg" alt="star" />
            <Rating src="/star.svg" alt="star" />
          </RatingWrapper>
        </CardRating>
        <Paragraph>
          When applied to building block a website or similar work product, a
          Visual Guide can be an intermediate step toward the end goal of a
          complete website.
        </Paragraph>
      </CardHeader>

      <CardProfile>
        <ProfileImage src="/images/profile.png" alt="profile-image" />

        <ProfileInformation>
          <ProfileName>Joko Owi</ProfileName>
          <Paragraph>Co-founder of Banteng</Paragraph>
        </ProfileInformation>
      </CardProfile>
    </Card>
  );
}

export default function Testimonial() {
  return (
    <Container>
      <TestimonialWrapper>
        <TestimonialHeader>
          <Subtitle>TESTIMONIAL</Subtitle>
          <Title>
            People <Highlight>talk about</Highlight> us
          </Title>
        </TestimonialHeader>

        <TestimonialSwiper>
          <Swiper
            className="testimonial-swiper"
            slidesPerView={1}
            spaceBetween={40}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </TestimonialSwiper>
      </TestimonialWrapper>
    </Container>
  );
}
