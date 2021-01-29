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
      <button style={{opacity: ".25", background: "rgba(0,0,0,.25)", borderRadius: "5em", boxShadow:"inset 2px 2px 2px rgb(0 0 0 / 50%)"}} className="swiper-button-prev ht-swiper-button-nav"></button>
    ),
    renderNextButton: () => (
      <button style={{opacity: ".25", background: "rgba(0,0,0,.25)", borderRadius: "5em", boxShadow:"inset 2px 2px 2px rgb(0 0 0 / 50%)"}} className="swiper-button-next ht-swiper-button-nav"></button>
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
                  style={{  }}
                  key={i}
                >
                  <div style={{backgroundImage: `url(${single.bgImage})`, filter:"blur(5px)", backgroundSize:"cover", backgroundPosition:"50% 50%", width:"150%", height:"100%" }}></div>

                  <div className="hero-overlay" style={single["bgoverlaystyle"]}></div>

                  <div className="hero-slider-two__image">
                    <img
                      src={process.env.PUBLIC_URL + single.Image}
                      alt=""
                      className="img-fluid"
                      style={{width:"500px", height: "auto", marginRight: "10px"}}
                    />
                  </div>
                  <div className="hero-slider-two__content">
                    <h5 style={single["subtitlestyle"]} className="sub-title">{single.subtitle}</h5>
                    <h1
                      style={single["titlestyle"]}
                      className="title"
                      dangerouslySetInnerHTML={{ __html: single.title }}
                    />
                    <div className="slider-link">
                      <Link
                        href={`/blog/[slug]?slug=${single.slug}`}
                        as={
                          process.env.PUBLIC_URL + "/blog/" + single.slug
                        }
                      >
                        <a className="lezada-button lezada-button--medium">
                          {single.buttontext}
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
