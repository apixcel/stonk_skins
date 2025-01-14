"use client";
import ArrowAngelUp from "@/components/icons/ArrowAngelUp";
import fonts from "@/fonts";
import { useRouter } from "next/navigation";
const LoginWithSteamShapeButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  const handleGoToLogin = () => router.push("/login");
  return (
    <button
      onClick={handleGoToLogin}
      className={`relative w-[245px] h-[52px] text-secondary font-[500] text-[16px] leading-[125%] tracking-[-0.096px] ${
        fonts.dm_sans.className
      } ${className || ""}`}
    >
      <span className="relative z-[55] flex items-center justify-between w-full h-full pl-[34px]">
        Login with Steam
        <span className="center w-[52px] h-[52px]">
          <ArrowAngelUp />
        </span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="245"
        height="52"
        viewBox="0 0 245 52"
        fill="none"
        className="absolute top-0 left-0 z-[54]"
      >
        <mask id="path-1-inside-1_0_344" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 26C0 11.6406 11.6406 0 26 0H167C177.108 0 185.869 5.76797 190.17 14.192C190.719 15.2667 191.793 16 193 16C194.207 16 195.281 15.2667 195.83 14.192C200.131 5.76797 208.892 0 219 0C233.359 0 245 11.6406 245 26C245 40.3594 233.359 52 219 52C210.016 52 202.097 47.4436 197.426 40.5157C196.42 39.0232 194.8 38 193 38C191.2 38 189.58 39.0232 188.574 40.5157C183.903 47.4436 175.984 52 167 52H26C11.6406 52 0 40.3594 0 26Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 26C0 11.6406 11.6406 0 26 0H167C177.108 0 185.869 5.76797 190.17 14.192C190.719 15.2667 191.793 16 193 16C194.207 16 195.281 15.2667 195.83 14.192C200.131 5.76797 208.892 0 219 0C233.359 0 245 11.6406 245 26C245 40.3594 233.359 52 219 52C210.016 52 202.097 47.4436 197.426 40.5157C196.42 39.0232 194.8 38 193 38C191.2 38 189.58 39.0232 188.574 40.5157C183.903 47.4436 175.984 52 167 52H26C11.6406 52 0 40.3594 0 26Z"
          fill="url(#paint0_linear_0_344)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 26C0 11.6406 11.6406 0 26 0H167C177.108 0 185.869 5.76797 190.17 14.192C190.719 15.2667 191.793 16 193 16C194.207 16 195.281 15.2667 195.83 14.192C200.131 5.76797 208.892 0 219 0C233.359 0 245 11.6406 245 26C245 40.3594 233.359 52 219 52C210.016 52 202.097 47.4436 197.426 40.5157C196.42 39.0232 194.8 38 193 38C191.2 38 189.58 39.0232 188.574 40.5157C183.903 47.4436 175.984 52 167 52H26C11.6406 52 0 40.3594 0 26Z"
          fill="url(#paint1_linear_0_344)"
          fillOpacity="0.15"
        />
        <path
          d="M188.574 40.5157L187.33 39.6772L188.574 40.5157ZM195.83 14.192L194.494 13.5099L195.83 14.192ZM197.426 40.5157L198.67 39.6772L197.426 40.5157ZM190.17 14.192L191.506 13.5099L190.17 14.192ZM26 -1.5C10.8122 -1.5 -1.5 10.8122 -1.5 26H1.5C1.5 12.469 12.469 1.5 26 1.5V-1.5ZM167 -1.5H26V1.5H167V-1.5ZM191.506 13.5099C186.958 4.60352 177.693 -1.5 167 -1.5V1.5C176.523 1.5 184.779 6.93242 188.834 14.8742L191.506 13.5099ZM197.166 14.8742C201.221 6.93242 209.477 1.5 219 1.5V-1.5C208.307 -1.5 199.042 4.60352 194.494 13.5099L197.166 14.8742ZM219 1.5C232.531 1.5 243.5 12.469 243.5 26H246.5C246.5 10.8122 234.188 -1.5 219 -1.5V1.5ZM243.5 26C243.5 39.531 232.531 50.5 219 50.5V53.5C234.188 53.5 246.5 41.1878 246.5 26H243.5ZM219 50.5C210.536 50.5 203.074 46.2092 198.67 39.6772L196.182 41.3542C201.12 48.678 209.497 53.5 219 53.5V50.5ZM167 53.5C176.503 53.5 184.88 48.678 189.818 41.3542L187.33 39.6772C182.926 46.2092 175.464 50.5 167 50.5V53.5ZM26 53.5H167V50.5H26V53.5ZM-1.5 26C-1.5 41.1878 10.8122 53.5 26 53.5V50.5C12.469 50.5 1.5 39.531 1.5 26H-1.5ZM193 36.5C190.612 36.5 188.562 37.8506 187.33 39.6772L189.818 41.3542C190.599 40.1958 191.788 39.5 193 39.5V36.5ZM193 17.5C194.834 17.5 196.391 16.3917 197.166 14.8742L194.494 13.5099C194.171 14.1418 193.58 14.5 193 14.5V17.5ZM198.67 39.6772C197.438 37.8506 195.388 36.5 193 36.5V39.5C194.212 39.5 195.401 40.1958 196.182 41.3542L198.67 39.6772ZM188.834 14.8742C189.609 16.3917 191.166 17.5 193 17.5V14.5C192.42 14.5 191.829 14.1418 191.506 13.5099L188.834 14.8742Z"
          fill="url(#paint2_linear_0_344)"
          fillOpacity="0.34"
          mask="url(#path-1-inside-1_0_344)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_344"
            x1="-2.64845e-08"
            y1="26"
            x2="336"
            y2="43.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9AD83" />
            <stop offset="1" stopColor="#9B1FE8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_344"
            x1="85"
            y1="0"
            x2="85"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BEBEBE" />
            <stop offset="0.84" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_344"
            x1="85"
            y1="0"
            x2="85"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default LoginWithSteamShapeButton;
