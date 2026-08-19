import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const AllTask = () => {
  const authData = useContext(AuthContext);



  return (
    <div className="bg-[#1c1c1c] h-100 p-5  rounded flex flex-col mt-5">
   
      <div className=" text-white bg-green-600 py-2 px-4  flex justify-between rounded shrink-0">
        <h2 className="w-1/5 text-lg font-medium  ">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium  ">New Task</h3>
        <h3 className="w-1/5 text-lg font-medium  ">Active Task</h3>
        <h5 className="w-1/5 text-lg font-medium  ">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium  ">Failed</h5>
      </div>

      <div className="mt-3 flex-1 min-h-0 overflow-y-auto scrollbar-none">
        {authData.employees.map(function (elem,idx) {
          return (
            <div
              key={idx}
              className="bg-black border-green-300 border-2  py-2 px-4 flex justify-between rounded mb-2"
            >
              <h2 className="w-1/5  text-lg font-medium  text-white">{elem.firstName}</h2>
              <h3 className="w-1/5  text-lg font-medium text-blue-600">{elem.taskCounts.newTask}</h3>
              <h5 className="w-1/5  text-lg font-medium text-yellow-400">{elem.taskCounts.active}</h5>
              <h5 className="w-1/5  text-lg font-medium text-green-600">{elem.taskCounts.completed}</h5>
              <h5 className="w-1/5  text-lg font-medium text-red-600">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
