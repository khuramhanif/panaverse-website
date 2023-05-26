import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className="
      border bg-teal-600 
      rounded-full mt-4
     text-white font-medium
      py-2 px-6 
      items-center
       hover:scale-105 
       shadow-md
        hover:bg-[#00FFF0]
        hover:text-black "
    >
      {text}
    </button>
  );
};

export default Button;
