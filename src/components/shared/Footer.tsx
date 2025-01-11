import fonts from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import SearchbarShapeIcon from "../icons/SearchbarShapeIcon";
import RenderVerticalStripe from "./ui/RenderVerticalStripe";

const Footer = () => {
  const linkClass = `${fonts.dm_sans.className} text-secondary tracking-[-0.96px] leading-[125%] font-[500] `;
  return (
    <footer className="max-h-[285px] overflow-hidden relative max-w-[1440px] mx-auto">
      <RenderVerticalStripe count={1} />

      <div className="mt-[113px] layout_container w-full flex items-start justify-between gap-[15px]">
        <div className="flex flex-col gap-[20px]">
          <Image
            src={"/assets/svg/logo.svg"}
            width={116}
            height={55}
            alt={"stonk skins"}
          />

          <p
            className={`text-[16px] text-secondary max-w-[310px] ${fonts.dm_sans.className}  font-[500] leading-[125%] tracking-[-0.96px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
            lorem.
          </p>
        </div>
        <div className="flex flex-col gap-[32px]">
          <h3 className="text-white text-[20px] font-[600] leading-[118%] tracking-[-1.2px]">
            Useful Links
          </h3>

          <div className="flex flex-col gap-[12px]">
            <Link href={"#"} className={linkClass}>
              Legal & Service
            </Link>
            <Link href={"#"} className={linkClass}>
              Contact
            </Link>
            <Link href={"#"} className={linkClass}>
              Gift Card
            </Link>
            <Link href={"#"} className={linkClass}>
              Customer Service
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[32px]">
          <h3 className="text-white text-[20px] font-[600] leading-[118%] tracking-[-1.2px]"></h3>
          <div className="flex flex-col gap-[12px]">
            <Link href={"#"} className={linkClass}>
              Legal & Service
            </Link>
            <Link href={"#"} className={linkClass}>
              FAQ
            </Link>
            <Link href={"#"} className={linkClass}>
              Support
            </Link>
            <Link href={"#"} className={linkClass}>
              Terms od service
            </Link>
            <Link href={"#"} className={linkClass}>
              Privacy
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[25px]  max-w-[320px]">
          <h3 className="text-white text-[20px] font-[600] leading-[118%] tracking-[-1.2px]">
            Subscribe Newsletter
          </h3>

          <p
            className={`${fonts.dm_sans.className} text-secondary font-[500] leading-[125%] tracking-[-0.096px] max-w-[268px]`}
          >
            Enter your email to receive our valuable newsletters.
          </p>
          <div className="relative w-[320px] h-[52px] mt-[14px]">
            <SearchbarShapeIcon className="absolute top-0 left-0 z-[1]" />
            <form className="w-full relative h-full flex items-center justify-between z-[2] pl-[32px]">
              <input
                className="outline-none border-none bg-transparent text-[#F5F5F56E]"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="w-[52px] h-[52px] rounded-full center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="17"
                  viewBox="0 0 23 17"
                  fill="none"
                >
                  <path
                    d="M20.3625 0H2.3625C1.0875 0 0 1.05 0 2.3625V14.5125C0 15.7875 1.05 16.875 2.3625 16.875H20.3625C21.6375 16.875 22.725 15.825 22.725 14.5125V2.325C22.725 1.05 21.6375 0 20.3625 0ZM20.3625 1.6875C20.4 1.6875 20.4375 1.6875 20.475 1.6875L11.3625 7.5375L2.25 1.6875C2.2875 1.6875 2.325 1.6875 2.3625 1.6875H20.3625ZM20.3625 15.1125H2.3625C1.9875 15.1125 1.6875 14.8125 1.6875 14.4375V3.3375L10.4625 8.9625C10.725 9.15 11.025 9.225 11.325 9.225C11.625 9.225 11.925 9.15 12.1875 8.9625L20.9625 3.3375V14.475C21.0375 14.85 20.7375 15.1125 20.3625 15.1125Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full mt-[41px] bg-borderPrimary">
        <div className="layout_container w-full flex items-center justify-between py-[22px]">
          <div
            className={`${fonts.dm_sans.className} flex items-center justify-start gap-[25px]`}
          >
            <Link
              href={"#"}
              className="text-[#F5F5F557] text-[16px] font-[400] leading-[125%] tracking-[-0.96px]"
            >
              Payment
            </Link>
            <Link
              href={"#"}
              className="text-[#F5F5F557] text-[16px] font-[400] leading-[125%] tracking-[-0.96px]"
            >
              Gift Cards
            </Link>
            <Link
              href={"#"}
              className="text-[#F5F5F557] text-[16px] font-[400] leading-[125%] tracking-[-0.96px]"
            >
              Privacy Policy
            </Link>
            <Link
              href={"#"}
              className="text-[#F5F5F557] text-[16px] font-[400] leading-[125%] tracking-[-0.96px]"
            >
              Stockists
            </Link>
          </div>

          <Image
            src={"/assets/images/paymentMethods.png"}
            alt="stonk skins payment methods"
            width={348}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
