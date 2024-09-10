// import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import { motion } from "framer-motion";

const NavMobile = () => {
  const [isMenu, setIsMenu] = useState(false);
  const list = ["Home", "About", "Contact", "policies"];

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
        <div className=" fixed left-0 top-0 w-full h-[100vh] z-20 flex border-black border-1">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
            className="w-[70vw] bg-white p-6 flex flex-col gap-4"
          >
            {list.map((item, index) => (
              <div className="" key={index}>
                <Link
                  to={item.toLowerCase()}
                  onClick={() => {
                    setIsMenu(false);
                  }}
                >
                  {item}
                </Link>
                <hr className="border-b-1 border-secondary-100 mt-4" />
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-[30vw] bg-black bg-opacity-50 "
            onClick={() => setIsMenu(false)}
          ></motion.div>
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
            <div className="text-3xl font-manjari font-bold ">
              <span className="text-primary">Z</span>ilze
            </div>

            <Cart />
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
