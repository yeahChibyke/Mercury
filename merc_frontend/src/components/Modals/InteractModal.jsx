import React from "react";
import { FiX } from "react-icons/fi";
import { FaCheck } from 'react-icons/fa';


export default function InteractModal({
  title = "Title",
  subtitle = "subtitle",
  children,
  classes,
  logout,
  close,
}) {
  return (
    <>
      <div className={`text-white modal-inter ${classes}`}>
        <div className="modal-content flex flex-col justify-center items-center text-center">
          <h4 className="">{title}</h4>
          <div className="flex justify-center items-center my-2 ">
            {children}
          </div>
          <small>{subtitle}</small>
          <div>
            <button
              onClick={close}
              className="shrink bg-gray-600 px-3 py-1 m-1 rounded cursor-pointer text-white text-sm"
            >
              <FiX />
            </button>
            <button
              onClick={logout}
              className="shrink bg-red-600 px-3 py-1 m-1 rounded cursor-pointer text-white text-sm"
            >
              <FaCheck /> 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
