import Image from "next/image";

const RenderVerticalStripe = ({ count = 1 }: { count?: number }) => {
  const randomInt = Math.floor(Math.random() * 5) + 1;
  return (
    <div className="absolute top-0 left-0 w-full flex flex-col gap-[0]">
      {Array.from({ length: count }).map((_, index) => (
        <Image
          key={index + "stripe" + randomInt}
          src="/assets/images/vt_stripes.png"
          width={1440}
          height={900}
          alt=""
          className="w-full"
        />
      ))}
    </div>
  );
};

export default RenderVerticalStripe;
