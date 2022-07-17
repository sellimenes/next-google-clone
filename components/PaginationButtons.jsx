import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className="text-blue-700 flex items-center px-9 sm:px-0 pb-4 justify-between sm:justify-start">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="flex items-center cursor-pointer justify-center">
            <ChevronLeftIcon className="h-5 " />
            <p className="text-lg font-medium hover:underline sm:border-r-[1px] sm:pr-2 border-blue-700">
              Previous
            </p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="flex items-center cursor-pointer justify-center mt-[2px]">
            <ChevronRightIcon className="h-5 " />
            <p className="text-lg font-medium hover:underline">Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default PaginationButtons;
