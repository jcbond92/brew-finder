import { useState } from "react";
import Card from "@/components/card";
import CardContainer from "@/components/card-container";
import { useEffect } from "react";

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("Raleigh");
  const [queryTitle, setQueryTitle] = useState("Raleigh");

  const getData = () => {
    setQueryTitle(query);
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleFormSubmit = (event) => {
    getData();
    event.preventDefault();
  };

  const handleInputChange = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="items-center justify-center flex flex-col xl:w-9/12 lg:w-11/12">
      <div className="p-8 lg:w-6/12 w-11/12 md:w-11/12 sm:w-11/12">
        <div className="flex items-center rounded-lg border border-gray-100 border-opacity-80 content-center px-4 pr-0">
          <form onSubmit={handleFormSubmit} className="w-full">
            <label className="sr-only">Search by name, city, or state</label>
            <input
              id="search"
              className="w-full h-12 px-1 text-lg text-white placeholder-gray-400 rounded-lg bg-transparent"
              type="text"
              placeholder="Search by name, city, or state"
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </form>
          <div className="p-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={getData}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <p className="text-white">
        {results.length}
        {results.length === 1 ? " result " : " results "}
        found for "{queryTitle}"
      </p>
      <CardContainer>
        {results.map((item, index) => {
          return item && <Card key={item.id} {...item} />;
        })}
      </CardContainer>
    </section>
  );
};

export default SearchBar;
