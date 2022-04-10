import styled from "styled-components";
import TopNav from "./Components/TopNav";

const Wrapper = styled.div`
  width: 100%;
  height: 200vh;
`;

const OurStoryCards = styled.div`
  padding: 70px 45px;
`;

const HeroCardContainer = styled.div``;

const HeroCardBackgroundConatiner = styled.div`
  @media only screen and (min-width: 950px) and (max-width: 1449px),
    only screen and (min-width: 1450px) {
    top: -100px;
  }
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const HeroCardBackgroundImgWrapper = styled.div`
  height: 693.992px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

const HeroCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
  z-index: 0;
`;

const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const HeroCardText = styled.div`
  position: relative;
  width: 100%;
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`;

const HeroCardTitle = styled.h1`
  @media only screen and (min-width: 1450px) {
    font-size: 4rem;
    max-width: 800px;
  }
  @media only screen and (min-width: 950px) and (max-width: 1449px) {
    font-size: 3.125rem;
  }
  font-size: 1.7rem;
  line-height: normal;
  max-width: 640px;
  margin: 0 auto;
  color: var(--default-white);
  font-weight: bold;
`;

const HeroCardSubTitle = styled.h2`
  @media only screen and (min-width: 550px) and (min-width: 1450px) {
    font-size: 1.625rem;
    max-width: 800px;
  }
  font-size: 1.125rem;
  line-height: normal;
  max-width: 640px;
  margin: 1rem auto;
  color: var(--default-white);
  font-weight: 400;
`;

const Home = () => {
  const small =
    "https://assets.nflxext.com/ffe/siteui/vlv3/e316821f-7177-48f4-b748-e44a8b0840df/f3f5ddb4-62dd-4c72-b8fd-35320461da29/KR-ko-20220406-popsignuptwoweeks-perspective_alpha_website_small.jpg";
  const medium =
    "https://assets.nflxext.com/ffe/siteui/vlv3/e316821f-7177-48f4-b748-e44a8b0840df/f3f5ddb4-62dd-4c72-b8fd-35320461da29/KR-ko-20220406-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
  const large =
    "https://assets.nflxext.com/ffe/siteui/vlv3/e316821f-7177-48f4-b748-e44a8b0840df/f3f5ddb4-62dd-4c72-b8fd-35320461da29/KR-ko-20220406-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  return (
    <Wrapper>
      <TopNav />
      <OurStoryCards>
        <HeroCardContainer>
          <HeroCardBackgroundConatiner>
            <HeroCardBackgroundImgWrapper>
              <HeroCardImg
                src={small}
                srcSet={`${small} 1000w, ${medium} 1500w, ${large} 1800w`}
                alt=""
              />
              <BackgroundBlur />
            </HeroCardBackgroundImgWrapper>
          </HeroCardBackgroundConatiner>
          <HeroCardText>
            <HeroCardTitle>영화와 시리즈를 무제한으로.</HeroCardTitle>
            <HeroCardSubTitle>
              다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
            </HeroCardSubTitle>
          </HeroCardText>
        </HeroCardContainer>
      </OurStoryCards>
    </Wrapper>
  );
};

export default Home;
