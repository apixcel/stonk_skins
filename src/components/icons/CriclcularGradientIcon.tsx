const CriclcularGradientIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill="url(#paint0_linear_6_877)"
      />
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill="url(#paint1_linear_6_877)"
        fillOpacity="0.15"
      />
      <path
        d="M0.75 16C0.75 7.57766 7.57766 0.75 16 0.75C24.4223 0.75 31.25 7.57766 31.25 16C31.25 24.4223 24.4223 31.25 16 31.25C7.57766 31.25 0.75 24.4223 0.75 16Z"
        stroke="url(#paint2_linear_6_877)"
        strokeOpacity="0.34"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_877"
          x1="-1.96714e-07"
          y1="1.70492"
          x2="16.9563"
          y2="36.738"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9AD83" />
          <stop offset="1" stopColor="#9B1FE8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6_877"
          x1="16"
          y1="0"
          x2="16"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BEBEBE" />
          <stop offset="0.84" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_6_877"
          x1="16"
          y1="0"
          x2="16"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CriclcularGradientIcon;
