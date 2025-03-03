import React from "react";
import styles from "./MobileModal.module.css";

export const MobileModal = ({ closeModal }) => {
  return (
    <div className={styles.mobileModal}>
      <button className={styles.mobileModal__close} onClick={closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
        >
          <g filter="url(#filter0_d_3909_6)">
            <g filter="url(#filter1_i_3909_6)">
              <path
                d="M13.178 12.0461L17.1816 8.04553C17.3166 7.88806 17.3871 7.6855 17.3791 7.47833C17.3711 7.27116 17.2851 7.07464 17.1384 6.92804C16.9917 6.78144 16.7951 6.69556 16.5877 6.68756C16.3804 6.67956 16.1777 6.75002 16.0201 6.88488L12.0165 10.8443L7.9882 6.81903C7.83061 6.68417 7.6279 6.61371 7.42057 6.62171C7.21324 6.62971 7.01657 6.71559 6.86986 6.86219C6.72315 7.00879 6.6372 7.20531 6.62919 7.41248C6.62119 7.61965 6.69171 7.8222 6.82666 7.97967L10.8467 12.0461L6.90904 15.9313C6.82281 16.0051 6.75277 16.0959 6.70332 16.1981C6.65388 16.3002 6.62609 16.4114 6.62171 16.5248C6.61733 16.6382 6.63644 16.7512 6.67786 16.8568C6.71927 16.9625 6.78209 17.0584 6.86237 17.1386C6.94266 17.2188 7.03867 17.2816 7.14438 17.323C7.25009 17.3644 7.36322 17.3835 7.47667 17.3791C7.59012 17.3747 7.70144 17.347 7.80365 17.2976C7.90585 17.2481 7.99673 17.1782 8.07058 17.092L12 13.1655L15.9048 17.0673C16.0624 17.2021 16.2651 17.2726 16.4724 17.2646C16.6797 17.2566 16.8764 17.1707 17.0231 17.0241C17.1698 16.8775 17.2558 16.681 17.2638 16.4738C17.2718 16.2667 17.2013 16.0641 17.0663 15.9066L13.178 12.0461Z"
                fill="#2C2C2C"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_3909_6"
              x="-4"
              y="0"
              width="32"
              height="32"
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
                result="effect1_dropShadow_3909_6"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3909_6"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_3909_6"
              x="6.62109"
              y="6.62109"
              width="12.7588"
              height="11.7587"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 0 0.239216 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_3909_6"
              />
            </filter>
          </defs>
        </svg>
      </button>
      <ul className={styles.mobileList}>
        <li className={styles.mobileList__item}>
          <a
            href="#header"
            className={styles.mobileList__link}
            onClick={closeModal}
          >
            Home
          </a>
        </li>
        <li className={styles.mobileList__item}>
          <a
            href="#hero"
            className={styles.mobileList__link}
            onClick={closeModal}
          >
            About
          </a>
        </li>
        <li className={styles.mobileList__item}>
          <a
            href="#offerings"
            className={styles.mobileList__link}
            onClick={closeModal}
          >
            Service
          </a>
        </li>
        <li className={styles.mobileList__item}>
          <a
            href="#favorites"
            className={styles.mobileList__link}
            onClick={closeModal}
          >
            Menu
          </a>
        </li>
        <li className={styles.mobileList__item}>
          <a
            href="#footer"
            className={styles.mobileList__link}
            onClick={closeModal}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
