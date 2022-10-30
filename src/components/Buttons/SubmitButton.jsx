import React from "react";

const SubmitButton = ({onClick}) => {
  return (
    <div>
      <button
        className="w-28  justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition  duration-200 ease-in-out  "
        onClick={onClick}
      >
        Enviar
      </button>
    </div>
  );
};

export default SubmitButton;
