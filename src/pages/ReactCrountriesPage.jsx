import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import Countries from "../components/Countries";

import { allCountries } from "../data/countries";

export default function ReactCrountriesPage() {
  const [countryFilter, setCountryFilter] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryInputChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];

    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter((visitedCountryId) => {
        return visitedCountryId !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowerCase.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase
            .toLocaleLowerCase()
            .includes(countryFilterLowerCase.toLocaleLowerCase());
        })
      : allCountries;

  return (
    <div>
      <Header>React-Countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do pais (pelo menos 3 caracteres):"
          inputValue={countryFilter}
          onInputChange={handleCountryInputChange}
          autoFocus
        />

      {/*  <Countries
          visitedCountries={visitedCountries}
          onCountryClick={toggleVisitedCountry}
        >
          {filteredCountries}
        </Countries>
        */}

        <Countries>
        {countries.map((country) => {
        const isVisited = visitedCountries.indexOf(country.id) !== -1;

        </Countries>
      </Main>
      </div> 
  );
}
