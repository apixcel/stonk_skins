import fonts from "@/fonts";

const Input = ({
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      {...props}
      className={`rounded-full border-x-[1.5px] border-t-[1.5px] border-borderPrimary bg-secondaryBg w-full backdrop-blur-[25px] px-[10px] outline-none py-[13.5px] ${fonts.dm_sans.className} text-[#F5F5F56E]`}
    />
  );
};

export default Input;
