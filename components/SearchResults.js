import React from "react";
import PaginationButtons from "./PaginationButtons";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="flex flex-col">
            <a href={result.link} className="text-sm">
              {result.formattedUrl}
            </a>
            <a
              href={result.link}
              className="truncate text-xl
                text-blue-800 font-medium hover:underline"
            >
              {result.title}
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons
        resultsNumber={results.searchInformation.formattedTotalResults}
      />
    </div>
  );
};

export default SearchResults;
