const PrevIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <g filter="url(#filter0_b_0_524)">
        <rect
          x="60"
          y="60"
          width="60"
          height="60"
          rx="19"
          transform="rotate(-180 60 60)"
          fill="url(#paint0_linear_0_524)"
          fillOpacity="0.15"
        />
        <rect
          x="59.25"
          y="59.25"
          width="58.5"
          height="58.5"
          rx="18.25"
          transform="rotate(-180 59.25 59.25)"
          stroke="url(#paint1_linear_0_524)"
          strokeOpacity="0.34"
          strokeWidth="1.5"
        />
      </g>
      <path
        d="M16.2929 29.2929C15.9024 29.6834 15.9024 30.3166 16.2929 30.7071L22.6569 37.0711C23.0474 37.4616 23.6805 37.4616 24.0711 37.0711C24.4616 36.6805 24.4616 36.0474 24.0711 35.6569L18.4142 30L24.0711 24.3431C24.4616 23.9526 24.4616 23.3195 24.0711 22.9289C23.6805 22.5384 23.0474 22.5384 22.6569 22.9289L16.2929 29.2929ZM43 29L17 29L17 31L43 31L43 29Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_0_524"
          x="-4"
          y="-4"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_0_524"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_0_524"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_524"
          x1="90"
          y1="60"
          x2="90"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BEBEBE" />
          <stop offset="0.84" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_524"
          x1="67.5"
          y1="67.5"
          x2="131"
          y2="127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PrevIcon;
