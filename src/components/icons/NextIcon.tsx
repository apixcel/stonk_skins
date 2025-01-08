const NextIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <g filter="url(#filter0_b_0_521)">
        <rect
          width="60"
          height="60"
          rx="19"
          fill="url(#paint0_linear_0_521)"
          fillOpacity="0.15"
        />
        <rect
          x="0.75"
          y="0.75"
          width="58.5"
          height="58.5"
          rx="18.25"
          stroke="url(#paint1_linear_0_521)"
          strokeOpacity="0.34"
          strokeWidth="1.5"
        />
      </g>
      <path
        d="M43.7071 30.7071C44.0976 30.3166 44.0976 29.6834 43.7071 29.2929L37.3431 22.9289C36.9526 22.5384 36.3195 22.5384 35.9289 22.9289C35.5384 23.3195 35.5384 23.9526 35.9289 24.3431L41.5858 30L35.9289 35.6569C35.5384 36.0474 35.5384 36.6805 35.9289 37.0711C36.3195 37.4616 36.9526 37.4616 37.3431 37.0711L43.7071 30.7071ZM17 31H43V29H17V31Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_0_521"
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
            result="effect1_backgroundBlur_0_521"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_0_521"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_521"
          x1="30"
          y1="0"
          x2="30"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BEBEBE" />
          <stop offset="0.84" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_521"
          x1="7.5"
          y1="7.5"
          x2="71"
          y2="67"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NextIcon;
