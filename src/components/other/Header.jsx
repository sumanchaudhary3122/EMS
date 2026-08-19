import React, { useState } from "react";
import { setLocalStorage } from "../utils/localStorage";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    toast.info("Logged Out Success");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between text-white ">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          
          {props.data?.firstName}
        </span>
        👋
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium rounded-sm border-none outline-none px-5 py-2 active:scale-95"
      >
        Log Out
      </button>
    </div>
  );
};
