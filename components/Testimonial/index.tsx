import styled from "styled-components";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Highlight, Subtitle, Title } from "../Global";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

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
  cursor: pointer;
  font-family: var(--inter-font);
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
  background: #fbfbfb;

  @media screen and (min-width: 768px) {
    padding: 60px 40px;
    width: 450px;
  }
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
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

interface TestimonialCardProps {
  title: string;
  avatar: string;
  name: string;
  job: string;
}

function TestimonialCard({ title, avatar, name, job }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardRating>
          <CardTitle>{title}</CardTitle>
          <RatingWrapper>
            <Rating src="/star.svg" alt="star-icon"/>
            <Rating src="/star.svg" alt="star-icon"/>
            <Rating src="/star.svg" alt="star-icon"/>
            <Rating src="/star.svg" alt="star-icon"/>
            <Rating src="/star.svg" alt="star-icon"/>
          </RatingWrapper>
        </CardRating>
        <Paragraph>
          When applied to building block a website or similar work product, a
          Visual Guide can be an intermediate step toward the end goal of a
          complete website.
        </Paragraph>
      </CardHeader>

      <CardProfile>
        <ProfileImage src={avatar} alt="profile-image" />

        <ProfileInformation>
          <ProfileName>{name}</ProfileName>
          <Paragraph>{job}</Paragraph>
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
            modules={[Pagination, Autoplay]}
            pagination={{
              type: "custom",
              renderCustom(swiper, current, total) {
                let customBullet = "";
                for (let i = 1; i <= total; i++) {
                  if (i === current) {
                    customBullet +=
                      '<span class="swiper-pagination-bullet swiper-pagination-bullet-active"><span class="circle"></span></span>';
                  } else {
                    customBullet +=
                      '<span class="swiper-pagination-bullet"></span>';
                  }
                }
                return customBullet;
              },
            }}
            autoplay={{ delay: 2000 }}
            loop={true}
            className="testimonial-swiper"
            slidesPerView="auto"
            spaceBetween={40}
            centeredSlides={true}
            watchOverflow={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 300
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 100
              }
            }}
          >
            <SwiperSlide>
              <TestimonialCard title="Awesome Platform" avatar="/images/profile.png" name="Joko Owi" job="Co-founder of Banteng" />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard title="Incredible love it" avatar="/images/profile.png" name="Joko Ndak Tau" job="Yo ndak tau job saya" />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard title="Great platform" avatar="/images/profile.png" name="The Joko" job="kerjo kerjo kerjo" />
            </SwiperSlide>
          </Swiper>
        </TestimonialSwiper>
      </TestimonialWrapper>
    </Container>
  );
}
