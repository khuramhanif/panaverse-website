import { FC } from "react";

interface IProps {
  header: string;
  discription: string;
  number: number;
  border?: boolean;
}

const QuarterBox: FC<IProps> = ({
  header,
  discription,
  number,
  border = true,
}) => {
  return (
    <div key={number}
      className={`flex flex-col flex-1 relative px-4 py-6 border rounded-xl justify-center ${
        border && "border"
      }`}
    >
      <h2 className="text-xl font-bold "> {header} </h2>
      <p className="text-lg text-slate-600 mt-2 "> {discription} </p>
      <span className="absolute -top-2 font-bold text-gray-200 text-9xl right-24 -z-10">
        {number}
      </span>
    </div>
  );
};

export default QuarterBox;
