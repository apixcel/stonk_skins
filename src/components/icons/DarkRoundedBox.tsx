const DarkRoundedBox = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      {...props}
    >
      <g opacity="0.7" filter="url(#filter0_b_0_563)">
        <circle cx="31" cy="31" r="31" fill="white" fillOpacity="0.06" />
        <circle
          cx="31"
          cy="31"
          r="30.25"
          stroke="url(#paint0_linear_0_563)"
          strokeOpacity="0.34"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_0_563"
          x="-50"
          y="-50"
          width="162"
          height="162"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_0_563"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_0_563"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_563"
          x1="31"
          y1="0"
          x2="31"
          y2="62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DarkRoundedBox;
