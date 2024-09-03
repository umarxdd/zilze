import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import ProdContext from "./ProductsContext";
import { getProducts } from "../services/apiData";
import { useQuery } from "react-query";

const Cart = () => {
  const { haveItems, itemsLength, getAllItems, removeItems } =
    useContext(ProdContext);

  const [isOpen, setIsOpen] = useState(false);

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

  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products"], getProducts);

  const cartProducts = getAllItems();

  // const cartProducts = products?.filter((prod) => {
  //   return getAllItems().some((item) => item.title === prod.fields.productName);
  // });
  // if (!products)
  //   return (
  //     <div className="text-4xl flex justify-center items-center h-screen w-screen">
  //       Loading Data....
  //     </div>
  //   );

  // const {
  //   fields: {
  //     productPrice,
  //     productDiscount,
  //     productName,
  //     categories,
  //     productImages: [
  //       {
  //         fields: {
  //           file: { url: url1 },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: { url: url2 },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: { url: url3 },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: { url: url4 },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: { url: url5 },
  //         },
  //       },
  //     ],
  //   },
  // } = product;

  const deleteProduct = (name) => {
    removeItems(name);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 flex h-[100vh] w-full border-black border-2 z-30">
          <div
            className="bg-black bg-opacity-30 h-full w-[30vw] sm:w-full"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="bg-white h-full sm:w-[55rem] w-full py-4">
            <div className="flex justify-between px-4 text-xl font-extrabold  font-manjari">
              <h1 className="">Shopping Cart</h1>
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
            <div className="">
              {!haveItems ? (
                <div className="text-center flex items-center justify-center relative">
                  <h1 className="absolute top-44">Your Cart Is Empty :'( </h1>
                </div>
              ) : (
                <>
                  {cartProducts.map((prod, index) => (
                    <>
                      <div className="px-3 py-4">
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
                              <div className="flex flex-col">
                                <h1 className="truncate max-w-[37vw] sm:max-w-[12rem] text-lg font-semibold text-gray-700">
                                  {prod.name}
                                </h1>
                                <div className="text-gray-500">
                                  <span className="text-sm ">Rs.</span>
                                  <span className="text-primary text-sm font-semibold">
                                    {prod.price}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-500 font-semibold">
                                  Amount: {prod.amount}
                                </span>
                              </div>
                            </div>
                            <div className="text-2xl text-gray-500 hover:text-red-600 cursor-pointer">
                              <MdDelete
                                onClick={() => deleteProduct(prod.name)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="border-pink-200 border-1" />
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <div
        className="text-primary text-3xl relative"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <IoCartOutline />

        <div className="">
          <div
            className="absolute top-[-0.5rem] right-[-0.5rem] px-1 flex  items-center justify-center rounded-xl bg-primary text-sm
        text-white"
          >
            <span className="">{itemsLength}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
