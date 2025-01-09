import fonts from "@/fonts";
import { IReview } from "@/types/review";
import RatingStar from "../icons/RatingStar";

const ReviewCard = ({ review }: { review: IReview }) => {
  const randomInt = Math.floor(Math.random() * 5) + 1;
  return (
    <div className="w-[368px] h-[366px] bg-secondaryBg rounded-[24px] border-x-[1.5px] border-t-[1.5px] border-borderPrimary bg-transparent backdrop-blur-[25px] relative flex flex-col justify-between items-start gap-[25px] p-[20px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-start gap-[5px]">
          {Array.from({ length: review.rating }).map((_, index) => (
            <RatingStar key={index + randomInt + "rating"} />
          ))}
        </div>

        <p className="text-secondary text-center text-[16px] font-[500] leading-[125%] tracking-[-0.096px]">
          {review.date}
        </p>
      </div>

      <div className="flex flex-col gap-[4px]">
        <h4 className="text-white  text-[32px] font-[500] leading-[118%] tracking-[-1.92px]">
          {review.title}
        </h4>

        <p
          className={`${fonts.dm_sans.className} text-secondary text-[16px] font-[500] leading-[125%] tracking-[-0.096px]`}
        >
          {review.description}
        </p>
      </div>

      <p
        className={`${fonts.dm_sans.className} relative text-secondary text-[20px] font-[700] leading-[20px] tracking-[-0.12px] after:absolute after:top-[-8px] after:left-0 after:w-[50%] after:h-[1px] after:bg-[#FFFFFF24]`}
      >
        {review.userName}
      </p>
    </div>
  );
};

export default ReviewCard;
