import { useState } from "react";
import Card from "@/components/card";
import CardContainer from "@/components/card-container";
import Loading from "@/components/loading";
import { useEffect } from "react";

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("Raleigh");
  const [queryTitle, setQueryTitle] = useState("Raleigh");
  const [loadingState, setloadingState] = useState(true);

  const getData = () => {
    setloadingState(true);
    setQueryTitle(query);
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        setloadingState(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setloadingState(false);
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
    <section className="items-center justify-center flex flex-col sm:w-11/12 sm-max:w-full min-w-full">
      <div className="sm:p-8 w-11/12 mb-8 sm-max:pb-0">
        <div className="flex items-center rounded border  sm:border-gray-100 border-opacity-80 content-center pl-4 pr-0 sm-max:mt-4 sm-max:pl-0 sm-max:flex-col flex-row sm-max:border-opacity-0 max-w-4xl sm:w-full m-auto">
          <form onSubmit={handleFormSubmit} className="w-full">
            <label className="sr-only">Search by name, city, or state</label>
            <input
              id="search"
              className="w-full h-12 px-1 text-lg text-white placeholder-gray-400 rounded bg-transparent sm-max:border sm-max:border-gray-100 sm-max:border-opacity-80 sm-max:px-6 sm-max:pl-2 sm-max:min-w-full sm-max:py-6"
              type="text"
              placeholder="Search by name, city, or state"
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </form>
          <div className="p-4 sm-max:mt-4 sm-max:w-full sm-max:p-0">
            <button
              className="bg-blue-500 px-4 text-white w-auto py-2 sm-max:px-6 sm-max:py-3 rounded sm-max:w-full"
              onClick={getData}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className={loadingState ? "" : "hidden"}>
        <Loading />
      </div>
      <div className={loadingState ? "hidden" : ""}>
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
      </div>
      )
    </section>
  );
};

export default SearchBar;
