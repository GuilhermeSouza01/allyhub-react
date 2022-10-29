import axios from "axios";
import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";

const DestinationsInfo = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const getCountries = async () => {
    let countries = [];
    let countriesObj = [];
    const response = await axios.get(`https://amazon-api.sellead.com/country`);
    response.data.forEach((data) => {
        countries.push(data.name);
    });
    countries.forEach((element) => {
        countriesObj.push({label: element, value: element});
    })
    setCountriesList(countriesObj);
    
  };
  console.log(countriesList);

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="mt-3 flex justify-center mb-3 h-72">
      <form>
        <div className="flex flex-col">
          <div className=" flex flex-col mt-2">
            <label htmlFor="country"></label>
           <Select className="mx-auto w-96" 
           isMulti
           options={countriesList} 
           placeholder={"Digite o nome do País"}
           />
          </div>
         
        </div>
      </form>
    </div>
  );
};

export default DestinationsInfo;
