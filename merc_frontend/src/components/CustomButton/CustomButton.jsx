import React from "react";

export default function CustomButton({
  type,
  onclick,
  title = "TITLE",
  classes,
}) {
  return (
    <>
      <button
        type={type}
        onClick={onclick}
        className={`${classes} text-white bg-[#000000] px-5 py-2 rounded-full border-black h-[4rem] w-[10rem]`}
      >
        {title}
      </button>
    </>
  );
}
