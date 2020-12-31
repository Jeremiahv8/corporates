import Swiper from "react-id-swiper";
import Link from "next/link";
import { Container } from "react-bootstrap";

const HeroSliderOne = ({ sliderData }) => {
  const params = {
    loop: true,
    speed: 1000,
    spaceBetween: 200,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav"></button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav"></button>
    )
  };
  
  return (
    <div className="hero-slider-one space-mb--r100">
      <Container>
        <div className="hero-slider-one__wrapper">
          <Swiper {...params}>
            {sliderData &&
              sliderData.map((single) => {
                return (
                  <div
                    className="hero-slider-one__slide swiper-slide"
                    key={single.id}
                  >
                    <div className="slider-image">
                      <img
                        style={{objectFit: "cover", height: "620px"}}
                        src={single.bgImage}
                        className="img-fluid"
                        alt=""
                      />
                    <div className="hero-overlay" style={single["bgoverlaystyle"]}></div>

                    </div>

                    <div className="slider-content">
                      <h2 style={single["subtitlestyle"]} className="color-title color-title--blue space-mb--20">
                        {single.subtitle}
                      </h2>
                      <h1
                        style={single["titlestyle"]}
                        className="main-title space-mb--30"
                        dangerouslySetInnerHTML={{ __html: single.title }}
                      />
                      <Link
                        href={single.url}
                        as={single.url}
                      >
                        <a className="lezada-button lezada-button--medium">
                          shop now
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default HeroSliderOne;
