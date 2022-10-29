import React from "react";
import { useState } from "react";
import DestinationsInfo from "../DestinationsInfo/DestinationsInfo";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ConfirmPage from "../ConfirmPage/ConfirmPage";

const Form = () => {
  const [page, setPage] = useState(0);

  const formTitles = ["Dados Pessoais", "Destinos", "Pronto"];

  return (
    <div className="container mx-auto flex flex-col">
      <div className="progress">
        {page < 2 ? <p>Etapa {page + 1} / 2</p> : null}
      </div>
      <div className="flex justify-center">
        <h2 className="pr-4">{formTitles[page]}</h2>
      </div>

      {page == 0 ? (
        <PersonalInfo />
      ) : page == 1 ? (
        <DestinationsInfo />
      ) : (
        <ConfirmPage />
      )}

      <div className="container flex justify-around mt-4 mb-2">
      {page == 0 && (
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition  duration-200 ease-in-out  "
            onClick={() => {
              setPage((currPage) => currPage + 1);
              
            }}
          >
            Próximo
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule={"evenodd"}
              ></path>
            </svg>
          </button>
        )}
        
        {page == 1 && (
          <>
            <button
              className="bg-slate-100 text-blue-500 hover:text-blue-700 hover:bg-slate-300 focus:ring-4 focus:outline-none font-semibold text-sm text-center pl-4 pr-4 rounded-lg transition duration-200 ease-in-out"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Voltar
            </button>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition  duration-200 ease-in-out  "
              onClick={() => {
                setPage((currPage) => currPage + 1);
                
              }}
            >
              Enviar
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Form;
