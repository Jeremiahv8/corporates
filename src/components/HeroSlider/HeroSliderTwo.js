import Link from "next/link";
import Swiper from "react-id-swiper";

const HeroSliderTwo = ({ sliderData, spaceBottomClass }) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
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
    <div
      className={`hero-slider-two ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="hero-slider-two__wrapper">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, i) => {
              return (
                <div
                  className="hero-slider-two__slide"
                  style={{ backgroundColor: single.bgColor }}
                  key={i}
                >
                  <div className="hero-slider-two__image">
                    <img
                      src={process.env.PUBLIC_URL + single.image}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="hero-slider-two__content">
                    <h5 className="sub-title">{single.subtitle}</h5>
                    <h1
                      className="title"
                      dangerouslySetInnerHTML={{ __html: single.title }}
                    />
                    <div className="slider-link">
                      <Link
                        href={single.url}
                        as={process.env.PUBLIC_URL + single.url}
                      >
                        <a className="lezada-button lezada-button--medium">
                          shop now
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="hero-slider-two__pagination">
                    <span className="current">{i + 1}</span>
                    <span className="border"></span>
                    <span className="total">{sliderData.length}</span>
                  </div>
                </div>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderTwo;
