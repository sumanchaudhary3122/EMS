import React from "react";
import { Header } from "../other/Header";
import { CreateTask } from "../other/CreateTask";
import { AllTask } from "../other/AllTask";

export const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gray-600 p-6 md:p-10">
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask/>
    </div>
  );
};
