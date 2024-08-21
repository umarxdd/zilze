// import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { IoHeartOutline } from "react-icons/io5";

const NavMobile = () => {
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenu]);

  return (
    <>
      {isMenu && (
        <div className=" fixed left-0 top-0 w-full h-[100vh] z-20 flex border-black border-2">
          <div className="w-[70vw] bg-white p-6 flex flex-col gap-4">
            <div className="">
              <Link
                to="/home"
                onClick={() => {
                  setIsMenu(false);
                }}
              >
                Home
              </Link>
              <hr className="border-b-1 border-secondary-100 mt-4" />
            </div>
            <div className="">
              <Link
                to="/about"
                onClick={() => {
                  setIsMenu(false);
                }}
              >
                About
              </Link>
              <hr className="border-b-1 border-secondary-100 mt-4" />
            </div>
            <div className="">
              <Link
                to="/contact"
                onClick={() => {
                  setIsMenu(false);
                }}
              >
                Contact
              </Link>
              <hr className="border-b-1 border-secondary-100 mt-4" />
            </div>
            <div className="">
              <Link
                to="/policies"
                onClick={() => {
                  setIsMenu(false);
                }}
              >
                Policies
              </Link>
              <hr className="border-b-1 border-secondary-100 mt-4" />
            </div>
          </div>
          <div
            className="w-[30vw] bg-black bg-opacity-50"
            onClick={() => setIsMenu(false)}
          ></div>
        </div>
      )}
      <div className="sticky top-0 z-10 bg-white pb-2 pt-[0.001rem]">
        <div className="m-4">
          <div className="flex justify-between mb-6">
            <div
              className="text-primary text-3xl"
              onClick={() => {
                setIsMenu(true);
              }}
            >
              <RxHamburgerMenu />
            </div>
            <div className="text-3xl font-manjari font-bold flex">
              <span className="text-primary">N</span>eva
              <IoHeartOutline className="text-primary" />
              <span className="text-primary">Uma</span>r
            </div>

            <div className="text-primary text-3xl">
              <IoCartOutline />
            </div>
          </div>

          {/*  */}

          <div className="flex justify-between mx-4">
            <IoSearch className="text-3xl text-pink-200 h-10" />
            <div className="flex-grow ">
              {" "}
              <SearchBar isMobile={true} />
            </div>
            {/* <input
              type="text"
              placeholder="  search"
              className="flex-grow 
            focus:outline-none focus:border-primary focus:border-2 rounded-l p-2"
            /> */}
            {/* <div className="bg-primary text-white py-2 px-3 rounded-r-3xl">
              <span>search</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
