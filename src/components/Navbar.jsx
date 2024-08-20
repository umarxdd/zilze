import { NavLink } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <SearchCart />
        <div className="flex justify-between max-w-[1500px] px-[2vw] py-3">
          <ul className="flex gap-8">
            {["home", "about", "contact", "policies"].map((link, index) => (
              <li key={index} className="hover:underline">
                <NavLink
                  to={`/${link.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "text-green-900" : ""
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 items-center">
            <FaRegClock />
            <span>Recently viewed products</span>
          </div>
        </div>
        <hr className="border-b-1 border-secondary-100" />
      </div>
    </>
  );
};

export default Navbar;

function SearchCart() {
  return (
    <>
      <hr className="border-b-1 border-primary" />
      <div className="flex  gap-[5vw] justify-between my-5 h-7 items-center mx-4 ">
        <h1 className="text-3xl font-bold font-manjari h-6">
          <span className="text-primary">N</span>eva
        </h1>

        <div className="flex justify-between flex-grow">
          <div className="text-primary text-3xl opacity-30 p-2">
            <IoSearch />
          </div>

          <div className="flex-grow">
            <div className="w-full ">
              <SearchBar isMobile={false} />
            </div>
          </div>
          {/* <div className="text-white bg-primary px-7 p-3 rounded-r-3xl font-medium">
            <span>Search</span>
          </div> */}
        </div>

        <div className=" text-3xl text-primary">
          <span>
            <IoCartOutline />
          </span>
        </div>
      </div>
      <hr className="border-b-1 border-primary" />
    </>
  );
}
