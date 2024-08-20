import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ isMobile }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() !== "") {
      navigate(`/search?query=${value.trim()}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="">
      {isMobile && (
        <div className="flex">
          <input
            type="text"
            placeholder="  search"
            className="w-full
            focus:outline-none focus:border-primary focus:border-[1.5px] rounded-l p-2"
            value={query}
            onChange={handleOnChange}
          />
          <div className="bg-primary text-white py-2 px-3 rounded-r-3xl">
            <span>search</span>
          </div>
        </div>
      )}
      {!isMobile && (
        <>
          <div className="flex">
            <input
              type="text"
              placeholder="search"
              className="w-full  p-3 focus:outline-none focus:border-2 focus:border-primary rounded-l"
              value={query}
              onChange={handleOnChange}
            />
            <div className="text-white bg-primary px-7 p-3 rounded-r-3xl font-medium">
              <span>Search</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchBar;
