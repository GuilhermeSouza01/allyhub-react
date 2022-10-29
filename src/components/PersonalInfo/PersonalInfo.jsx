import React from "react";

const PersonalInfo = () => {
  return (
    <div className="mt-3 flex justify-center mb-3">
    <form>
      <div className="flex flex-col">
        <div className=" flex flex-col mt-2">
          <label
            htmlFor="name"
            className=" mb-2 text-sm font-medium text-gray-700 mr-2"
          >
            Nome
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="border-solid border-2 border-gray-300 rounded-sm bg-gray-50 px-3 py-1 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label
            htmlFor="name"
            className=" mb-2 text-sm font-medium text-gray-700 mr-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-solid border-2 border-gray-300 rounded-sm bg-gray-50 px-3 py-1 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label
            htmlFor="name"
            className=" mb-2 text-sm font-medium text-gray-700 mr-2"
          >
            Telefone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="border-solid border-2 border-gray-300 rounded-sm bg-gray-50 px-3 py-1 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label
            htmlFor="name"
            className=" mb-2 text-sm font-medium text-gray-700 mr-2"
          >
            CPF
          </label>
          <input
            type="text"
            name="user_cpf"
            id="user_cpf"
            className="border-solid border-2 border-gray-300 rounded-sm bg-gray-50 px-3 py-1 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1"
          />
        </div>
      </div>
    </form>
  </div>
  )
}

export default PersonalInfo;