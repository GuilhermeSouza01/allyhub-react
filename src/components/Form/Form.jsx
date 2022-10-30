import React from "react";
import axios from "axios";
import Select from "react-select";
import { useState, useEffect } from "react";
import SubmitButton from "../Buttons/SubmitButton";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AllyLogo from "../../assets/images/Logo.png";

import * as yup from "yup";
import InputMask from "react-input-mask";

// Instancia para validação com o yup
const schema = yup.object({
  name: yup
    .string()
    .required("Campo Obrigatório*")
    .min(3, "No minimo 3 caracteres"),
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Campo Obrigatório*"),
  phone_number: yup.string().required("Campo Obrigatório*"),
  user_cpf: yup.string().required("Campo Obrigatório*"),
});

const Form = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const [getValues, setGetValues] = useState();

  // Pega os paises da api para popular o select
  const getCountries = async () => {
    let countries = [];
    let countriesObj = [];
    const response = await axios.get(`https://amazon-api.sellead.com/country`);
    response.data.forEach((data) => {
      countries.push(data.name);
    });
    countries.forEach((element) => {
      countriesObj.push({ label: element, value: element });
    });
    console.log(countriesObj);
    setCountriesList(countriesObj);
  };
  // Pega as cidades da api para popular o select
  const getCities = async () => {
    let cities = [];
    let citiesObj = [];
    const response = await axios.get(`https://amazon-api.sellead.com/city`);
    response.data.forEach((data) => {
      cities.push(data.name);
    });
    cities.forEach((element) => {
      citiesObj.push({ label: element, value: element });
    });
    setCitiesList(citiesObj);
  };

  useEffect(() => {
    getCountries();
    getCities();
  }, []);

  // Função que retorna as opções selecionadas
  const handlecountriesChange = (selectedOption) => {
    console.log("Países Selecionados:", selectedOption);
  };

  const handlecitiesChange = (selectedOption) => {
    console.log("Cidades Selecionados:", selectedOption);
  };
  // Mostrando os dados do formulário
  const sendData = (data) => alert(JSON.stringify(data));

  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex justify-center">
        <img src={AllyLogo} alt="Logo Allyhub" className="object-cover h-10"/>
      </div>
      <form onSubmit={handleSubmit(sendData)}>
        <div className="mt-3 flex justify-around mb-8">
          <div className="flex flex-col h-96">
            <div className="flex justify-center pt-3">
              <h2>Dados Pessoais</h2>
            </div>
            <div className=" flex flex-col mt-2">
              <label
                htmlFor="name"
                className=" mb-2 text-sm font-medium text-gray-700 mr-2"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name")}
                className=" peer border-solid border-2 border-gray-300 rounded-sm bg-gray-50 px-3 py-1 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1"
              />
              <span className="text-red-700 text-sm">
                {errors?.name?.message}
              </span>
            </div>
            <div className=" flex flex-col mt-2">
              <label
                htmlFor="email"
                className=" mb-2 text-sm font-medium text-gray-700 mr-2"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                // onChange={handleInputChange}
                {...register("email")}
                className=" peer border-solid border-2 border-gray-300 rounded-sm bg-gray-50 px-3 py-1 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1"
              />
              <span className="text-red-700 text-sm">
                {errors?.email?.message}
              </span>
            </div>
            <div className=" flex flex-col mt-2">
              <label
                htmlFor="phone_number"
                className=" mb-2 text-sm font-medium text-gray-700 mr-2"
              >
                Telefone
              </label>
              {/* Usando biblioteca react-input-mask para colocar mascara nos campos */}
              <InputMask
                mask="(99)99999-9999"
                type="text"
                name="phone_number"
                id="phone_number"
                placeholder="(99)99999-9999"
                {...register("phone_number")}
                className=" peer border-solid border-2 border-gray-300 rounded-sm bg-gray-50 px-3 py-1 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1"
              />
              <span className="text-red-700 text-sm">
                {errors?.phone_number?.message}
              </span>
            </div>
            <div className=" flex flex-col mt-2">
              <label
                htmlFor="user_cpf"
                className=" mb-2 text-sm font-medium text-gray-700 mr-2"
              >
                CPF
              </label>
              {/* Usando biblioteca react-input-mask para colocar mascara nos campos */}
              <InputMask
                mask="999.999.999-99"
                type="text"
                name="user_cpf"
                id="user_cpf"
                placeholder="000.000.000-00"
                {...register("user_cpf")}
                className=" peer border-solid border-2 border-gray-300 rounded-sm bg-gray-50 px-3 py-1 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1"
              />
              <span className="text-red-700 text-sm">
                {errors?.user_cpf?.message}
              </span>
            </div>
          </div>

          <div className="divider w-0.5 bg-slate-300 mr-12 ml-4 mt-4"></div>

          <div className="w-60">
            <div className="mt-3 flex justify-center mb-3">
              <div className="flex flex-col mr-16 mb-8">
                <div className="flex justify-center">
                  <h2>Destinos</h2>
                </div>

                <div className=" flex flex-col mt-2">
                  <label
                    htmlFor="countries"
                    className=" text-sm font-medium text-gray-700 mr-2"
                  >
                    Países
                  </label>
                  <Controller
                    name="countries"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        className="mx-auto w-80 py-3"
                        isMulti
                        options={countriesList}
                        placeholder={"Digite o nome do País"}
                        name="countries"
                        id="countries"
                        onChange={handlecountriesChange}
                        // {...register("countries")}
                      />
                    )}
                  />
                  <span className="text-red-700 text-sm">
                    {errors?.countries?.message ||
                      errors?.countries?.label.message}
                  </span>
                </div>

                <div className=" flex flex-col mt-2">
                  <label
                    htmlFor="cities"
                    className=" text-sm font-medium text-gray-700 mr-2"
                  >
                    Cidades
                  </label>
                  <Select
                    className="mx-auto w-80 py-3"
                    isMulti
                    options={citiesList}
                    placeholder={"Digite o nome da Cidade"}
                    name="cities"
                    id="cities"
                    onChange={handlecitiesChange}
                    // {...register("cities")}
                  />
                  <span className="text-red-700 text-sm">
                    {errors?.cities?.message}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <ConfirmPage /> */}
        </div>
        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
