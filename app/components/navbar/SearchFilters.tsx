import { FaSearch } from "react-icons/fa";

const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className=" flex flex-row items-center justify-between">
          <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded- hover:bg-gray-50">
            <p className="text-xs font-semibold">where</p>
            <p className="text-sm">wanted location</p>
          </div>

          <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded- hover:bg-gray-50">
            <p className="text-xs font-semibold">check in</p>
            <p className="text-sm">add date</p>
          </div>

          <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded- hover:bg-gray-50">
            <p className="text-xs font-semibold">check out</p>
            <p className="text-sm">add date</p>
          </div>

          <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded- hover:bg-gray-50">
            <p className="text-xs font-semibold">who</p>
            <p className="text-sm">add guest</p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="cursor-pointer p-2 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
