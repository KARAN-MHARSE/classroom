import { FaRegUser } from "react-icons/fa";

function CountCard({ data }) {
  return (
    <div className="p-3 bg-darkGray rounded-md">
      {/* upper */}
      <div className="flex flex-start gap-2 ">
        <div className="bg-lightText text-white size-[40px] text-2xl flex items-center justify-center rounded-full ">
          <FaRegUser />
        </div>
        <div>
          <h1 className="font-semibold">{data.heading}</h1>
          <p className="text-3xl">{data.count}</p>
        </div>
      </div>

      {/* Down */}
      <div>
        <p>{data.progressHeading}</p>
        <div className="flex items-center gap-2">
          <progress className="h-1" value="80" max="100" />
          <p className="text-[14px]">{data.progressValue}%</p>
        </div>
      </div>
    </div>
  );
}

export default CountCard;
