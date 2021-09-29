import { useState } from "react";
import Card from "@/components/card";
import CardContainer from "@/components/card-container";
// https://www.openbrewerydb.org/documentation/03-search

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("Raleigh");

  const getData = () => {
    console.log(query);
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <section>
      <div className="p-8">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="p-4">
            <button
              className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
              onClick={getData}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </div>
        </div>
      </div>
      <CardContainer>
        {results.map((item, index) => {
          return item && <Card key={item.id} {...item} />;
        })}
      </CardContainer>
    </section>
  );
};

export default SearchBar;