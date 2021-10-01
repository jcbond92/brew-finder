import { useState } from "react";
import Card from "@/components/card";
import CardContainer from "@/components/card-container";
import { useEffect } from "react";

// https://www.openbrewerydb.org/documentation/03-search
// https://newbedev.com/javascript-component-did-mount-functional-component-next-js-code-example
// https://api.openbrewerydb.org/breweries/search?query=raleigh

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
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="items-center justify-center flex flex-col xl:w-9/12 lg:w-11/12">
      <div className="p-8 lg:w-6/12 w-11/12 md:w-11/12 sm:w-11/12">
        <div className="flex items-center rounded-lg border content-center px-4 pr-0">
          {/* <div> */}
          <input
            className="w-full h-12 px-1 text-lg text-gray-700 placeholder-gray-600 rounded-lg focus:shadow-outline"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* <label>Search by name, city, or state</label> */}
          {/* </div> */}
          <div className="p-4">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={getData}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <p>
        {results.length} results found for "{queryTitle}"
      </p>
      <CardContainer>
        {/* {() => {
          return <p className="text-6xl">{results.length}s found for {query}</p>
        }} */}
        {results.map((item, index) => {
          return item && <Card key={item.id} {...item} />;
        })}
      </CardContainer>
    </section>
  );
};

export default SearchBar;
