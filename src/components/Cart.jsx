// import { useEffect, useState } from "react";
// import { IoCartOutline } from "react-icons/io5";
// import { MdDelete } from "react-icons/md";
// import { useContext } from "react";
// import ProdContext from "./ProductsContext";
// import { motion } from "framer-motion";

// const Cart = () => {
//   const {
//     haveItems,
//     getAllItems,
//     removeItems,
//     getItemAmount,
//     addItem,
//     removeOneItem,
//   } = useContext(ProdContext);

//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   const cartProducts = getAllItems();

//   const deleteProduct = (name) => {
//     removeItems(name);
//   };
//   const handleIncrease = (name, price, url) => {
//     addItem(name, price, url, 1);
//   };

//   const handleDecrease = (name) => {
//     removeOneItem(name);
//   };
//   const getTotalPrice = () => {
//     let price = 0;
//     getAllItems().forEach((item) => {
//       price += item.amount * item.price;
//     });

//     return price;
//   };

//   const getTotalProducts = () => {
//     let t = 0;
//     getAllItems().forEach((item) => {
//       t += item.amount;
//     });

//     return t;
//   };
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed top-0 right-0 flex h-[100vh] w-full  z-30">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.2 }}
//             className="bg-black bg-opacity-30 h-full w-[30vw] sm:w-full"
//             onClick={() => setIsOpen(false)}
//           ></motion.div>

//           <motion.div
//             initial={{ x: "100vw" }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.2 }}
//             className="bg-white h-full sm:w-[55rem] w-full pt-4 relative "
//           >
//             <div className="flex flex-col h-full">
//               <div className="flex justify-between px-4 text-xl font-extrabold  font-manjari">
//                 <h1 className="">Shopping Cart</h1>
//                 <div
//                   className="cursor-pointer"
//                   onClick={() => {
//                     setIsOpen(false);
//                   }}
//                 >
//                   X
//                 </div>
//               </div>

//               <hr className="border-gray-300 my-2 border-1" />
//               <div className="flex-grow ">
//                 {!haveItems ? (
//                   <div className="text-center flex items-center justify-center relative">
//                     <h1 className="absolute top-44">Your Cart Is Empty :'( </h1>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="overflow-y-scroll h-[67vh] no-scrollbar ">
//                       {cartProducts.map((prod, index) => (
//                         <>
//                           <div className="px-3 py-4 " key={index}>
//                             <div
//                               className="shadow-lg rounded-lg p-2 hover:shadow-xl transition-shadow duration-300"
//                               key={index}
//                             >
//                               <div className="flex justify-between gap-2">
//                                 <img
//                                   className="size-[15vw] sm:w-24 sm:h-24 rounded-xl object-cover"
//                                   src={prod.image}
//                                 />
//                                 <div className="flex-grow">
//                                   <div className="flex flex-col justify-between h-full pb-2">
//                                     <h1 className="truncate max-w-[37vw] sm:max-w-[12rem] text-lg font-semibold text-gray-700">
//                                       {prod.name}
//                                     </h1>
//                                     <div className="text-gray-500">
//                                       <span className="text-sm ">Rs.</span>
//                                       <span className="text-primary text-sm font-semibold">
//                                         {prod.price * getItemAmount(prod.name)}
//                                       </span>
//                                     </div>

//                                     <div className="flex gap-2">
//                                       <div className="bg-gray-200 rounded-3xl items-center px-3 flex justify-between text-black w-1/3   border-[1px] ">
//                                         <div
//                                           className="hover:cursor-pointer"
//                                           onClick={() =>
//                                             handleDecrease(prod.name)
//                                           }
//                                         >
//                                           -
//                                         </div>

//                                         <div className="">
//                                           {getItemAmount(prod.name)}
//                                         </div>
//                                         <div
//                                           className="hover:cursor-pointer"
//                                           onClick={() =>
//                                             handleIncrease(
//                                               prod.name,
//                                               prod.price,
//                                               prod.image
//                                             )
//                                           }
//                                         >
//                                           +
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="text-2xl text-gray-500">
//                                   <MdDelete
//                                     className=" hover:text-red-600 cursor-pointer"
//                                     onClick={() => deleteProduct(prod.name)}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <hr className="border-pink-200 border-1" />
//                         </>
//                       ))}
//                     </div>
//                     <hr className="border-secondary-100" />
//                   </>
//                 )}
//               </div>

//               {haveItems && (
//                 <div className="bg-gray-200 p-4 flex flex-col justify-between gap-4">
//                   <div className="flex justify-between text-xl font-medium ">
//                     <span>Subtotal</span>
//                     <span>Rs.{getTotalPrice()}</span>
//                   </div>
//                   <div className="bg-primary text-white text-xl text-center rounded-2xl py-1 hover:scale-95 hover:cursor-pointer">
//                     checkout
//                   </div>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/*  */}
//       <div
//         className="text-primary text-3xl relative"
//         onClick={() => {
//           setIsOpen(true);
//         }}
//       >
//         <IoCartOutline />

//         <div className="">
//           <div
//             className="absolute top-[-0.5rem] right-[-0.5rem] px-1 flex  items-center justify-center rounded-xl bg-primary text-sm
//         text-white"
//           >
//             <span className="">{getTotalProducts()}</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;

import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import ProdContext from "./ProductsContext";
import { motion } from "framer-motion";

const Cart = () => {
  const {
    haveItems,
    getAllItems,
    removeItems,
    getItemAmount,
    addItem,
    removeOneItem,
  } = useContext(ProdContext);

  const [isOpen, setIsOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => setViewportHeight(window.innerHeight);

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const cartProducts = getAllItems();

  const deleteProduct = (name) => {
    removeItems(name);
  };

  const handleIncrease = (name, price, url) => {
    addItem(name, price, url, 1);
  };

  const handleDecrease = (name) => {
    removeOneItem(name);
  };

  const getTotalPrice = () => {
    let price = 0;
    getAllItems().forEach((item) => {
      price += item.amount * item.price;
    });

    return price;
  };

  const getTotalProducts = () => {
    let t = 0;
    getAllItems().forEach((item) => {
      t += item.amount;
    });

    return t;
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 right-0 flex"
          style={{ height: `${viewportHeight}px`, width: "100%", zIndex: 30 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-black bg-opacity-30 h-full w-[30vw] sm:w-full"
            onClick={() => setIsOpen(false)}
          ></motion.div>

          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white"
            style={{ height: `${viewportHeight}px`, width: "100%" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between px-4 text-xl font-extrabold font-manjari">
                <h1>Shopping Cart</h1>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  X
                </div>
              </div>

              <hr className="border-gray-300 my-2 border-1" />
              <div className="flex-grow">
                {!haveItems ? (
                  <div className="text-center flex items-center justify-center relative">
                    <h1 className="absolute top-44">Your Cart Is Empty :'( </h1>
                  </div>
                ) : (
                  <>
                    <div className="overflow-y-scroll h-[calc(100vh-12rem)] no-scrollbar">
                      {cartProducts.map((prod, index) => (
                        <div className="px-3 py-4" key={index}>
                          <div
                            className="shadow-lg rounded-lg p-2 hover:shadow-xl transition-shadow duration-300"
                            key={index}
                          >
                            <div className="flex justify-between gap-2">
                              <img
                                className="size-[15vw] sm:w-24 sm:h-24 rounded-xl object-cover"
                                src={prod.image}
                              />
                              <div className="flex-grow">
                                <div className="flex flex-col justify-between h-full pb-2">
                                  <h1 className="truncate max-w-[37vw] sm:max-w-[12rem] text-lg font-semibold text-gray-700">
                                    {prod.name}
                                  </h1>
                                  <div className="text-gray-500">
                                    <span className="text-sm">Rs.</span>
                                    <span className="text-primary text-sm font-semibold">
                                      {prod.price * getItemAmount(prod.name)}
                                    </span>
                                  </div>

                                  <div className="flex gap-2">
                                    <div className="bg-gray-200 rounded-3xl items-center px-3 flex justify-between text-black w-1/3 border-[1px]">
                                      <div
                                        className="hover:cursor-pointer"
                                        onClick={() =>
                                          handleDecrease(prod.name)
                                        }
                                      >
                                        -
                                      </div>

                                      <div>{getItemAmount(prod.name)}</div>
                                      <div
                                        className="hover:cursor-pointer"
                                        onClick={() =>
                                          handleIncrease(
                                            prod.name,
                                            prod.price,
                                            prod.image
                                          )
                                        }
                                      >
                                        +
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-2xl text-gray-500">
                                <MdDelete
                                  className="hover:text-red-600 cursor-pointer"
                                  onClick={() => deleteProduct(prod.name)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr className="border-secondary-100" />
                  </>
                )}
              </div>

              {haveItems && (
                <div className="bg-gray-200 p-4 flex flex-col justify-between gap-4">
                  <div className="flex justify-between text-xl font-medium">
                    <span>Subtotal</span>
                    <span>Rs.{getTotalPrice()}</span>
                  </div>
                  <div className="bg-primary text-white text-xl text-center rounded-2xl py-1 hover:scale-95 hover:cursor-pointer">
                    checkout
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      <div
        className="text-primary text-3xl relative"
        onClick={() => setIsOpen(true)}
      >
        <IoCartOutline />
        <div className="">
          <div className="absolute top-[-0.5rem] right-[-0.5rem] px-1 flex items-center justify-center rounded-xl bg-primary text-sm text-white">
            <span>{getTotalProducts()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
