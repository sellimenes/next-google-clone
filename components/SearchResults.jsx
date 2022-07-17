import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      <div key="myads" className="max-w-xl mb-8">
        <div className="group">
          <a className="text-sm truncate" href="https://selimenes.dev">
            selimenes.dev
          </a>
          <a
            className="group-hover:underline decoration-blue-800"
            href="https://selimenes.dev"
          >
            <h2 className="truncate text-xl font-medium text-blue-800">
              Selim Enes
            </h2>
          </a>
        </div>
        <p className="text-gray-600">Front-End Developer | Selim Enes</p>
      </div>
      {results.items?.map((result) => {
        return (
          <div key={result.link} className="max-w-xl mb-8">
            <div className="group">
              <a className="text-sm truncate" href={result.link}>
                {result.formattedUrl}
              </a>
              <a
                className="group-hover:underline decoration-blue-800"
                href={result.link}
              >
                <h2 className="truncate text-xl font-medium text-blue-800">
                  {result.title}
                </h2>
              </a>
            </div>
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          </div>
        );
      })}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
