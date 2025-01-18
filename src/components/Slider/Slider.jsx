import React from "react";
import HeroSlide1 from "../../images/hero-slider-img1.png";
import HeroSlide2 from "../../images/hero-slider-img2.png";
import HeroSlide3 from "../../images/hero-slider-img3.png";

import styles from "./Slider.module.css";

export class Slider extends React.Component {
  state = {
    productsList: [HeroSlide1, HeroSlide2, HeroSlide3],
    index: 0,
  };
  nextSlide = () => {
    if (this.state.index < this.state.productsList.length - 1) {
      this.setState((prevIndex) => ({
        index: prevIndex.index + 1,
      }));
    } else {
      this.setState(() => ({
        index: 0,
      }));
    }
  };
  prevSlide = () => {
    if (this.state.index > 0) {
      this.setState((prevIndex) => ({
        index: prevIndex.index - 1,
      }));
    } else {
      this.setState(() => ({
        index: 0,
      }));
    }
  };
  render() {
    return (
      <div className={styles.slider}>
        <button className={styles.slider__backward} onClick={this.prevSlide}>
          <svg
            width="56"
            height="48"
            viewBox="0 0 56 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="ep:arrow-up" filter="url(#filter0_d_480_4586)">
              <rect
                x="4"
                y="40"
                width="40"
                height="48"
                rx="8"
                transform="rotate(-90 4 40)"
                fill="#FEFEFE"
              />
              <path
                id="Vector"
                d="M17.4503 20.905L31.3828 34.18C31.6152 34.4016 31.9241 34.5253 32.2453 34.5253C32.5664 34.5253 32.8753 34.4016 33.1077 34.18L33.1228 34.165C33.2358 34.0576 33.3259 33.9283 33.3874 33.7849C33.449 33.6416 33.4807 33.4873 33.4807 33.3313C33.4807 33.1753 33.449 33.0209 33.3874 32.8776C33.3259 32.7343 33.2358 32.605 33.1228 32.4975L20.0028 19.9975L33.1228 7.50253C33.2358 7.3951 33.3259 7.26578 33.3874 7.12245C33.449 6.97911 33.4807 6.82476 33.4807 6.66878C33.4807 6.5128 33.449 6.35845 33.3874 6.21511C33.3259 6.07178 33.2358 5.94246 33.1228 5.83503L33.1078 5.82003C32.8753 5.59842 32.5664 5.47479 32.2453 5.47479C31.9241 5.47479 31.6152 5.59842 31.3828 5.82003L17.4503 19.095C17.3277 19.2118 17.2302 19.3522 17.1635 19.5077C17.0969 19.6633 17.0625 19.8308 17.0625 20C17.0625 20.1693 17.0969 20.3368 17.1635 20.4923C17.2302 20.6479 17.3277 20.7883 17.4503 20.905Z"
                fill="#2C2C2C"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_480_4586"
                x="0"
                y="0"
                width="56"
                height="48"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_480_4586"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_480_4586"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <img
          className={styles.slider__photo}
          src={this.state.productsList[this.state.index]}
          alt="slide1"
        ></img>
        <button className={styles.slider__forward} onClick={this.nextSlide}>
          <svg
            width="56"
            height="48"
            viewBox="0 0 56 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="ep:arrow-up" filter="url(#filter0_d_480_4584)">
              <rect
                x="52"
                width="40"
                height="48"
                rx="8"
                transform="rotate(90 52 0)"
                fill="#FEFEFE"
              />
              <path
                id="Vector"
                d="M38.5497 19.095L24.6172 5.81997C24.3848 5.59836 24.0759 5.47473 23.7547 5.47473C23.4336 5.47473 23.1247 5.59836 22.8923 5.81997L22.8772 5.83497C22.7642 5.9424 22.6741 6.07172 22.6126 6.21505C22.551 6.35838 22.5193 6.51274 22.5193 6.66872C22.5193 6.8247 22.551 6.97905 22.6126 7.12239C22.6741 7.26572 22.7642 7.39504 22.8772 7.50247L35.9972 20.0025L22.8772 32.4975C22.7642 32.6049 22.6741 32.7342 22.6126 32.8776C22.551 33.0209 22.5193 33.1752 22.5193 33.3312C22.5193 33.4872 22.551 33.6416 22.6126 33.7849C22.6741 33.9282 22.7642 34.0575 22.8772 34.165L22.8922 34.18C23.1247 34.4016 23.4336 34.5252 23.7547 34.5252C24.0759 34.5252 24.3848 34.4016 24.6172 34.18L38.5497 20.905C38.6723 20.7882 38.7698 20.6478 38.8365 20.4923C38.9031 20.3367 38.9375 20.1692 38.9375 20C38.9375 19.8307 38.9031 19.6632 38.8365 19.5077C38.7698 19.3521 38.6723 19.2117 38.5497 19.095Z"
                fill="#2C2C2C"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_480_4584"
                x="0"
                y="0"
                width="56"
                height="48"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_480_4584"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_480_4584"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    );
  }
}
