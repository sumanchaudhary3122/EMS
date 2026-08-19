import React from "react";

export const FailedTask = ({data}) => {
  return (
    <div className="shrink-0 w-75 aspect-square bg-yellow-300 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm py-1 px-4 rounded ">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
      <p className="text-sm mt-2 ">

        {data.taskDescription}
      </p>
      <div className="mt-2 ">
        <button className="w-full bg-red-800"> Failed Task </button>
      </div>
    </div>
  );
};
