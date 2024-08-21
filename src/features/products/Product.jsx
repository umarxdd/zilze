import { useParams } from "react-router-dom";
import { getProducts } from "../../services/apiData";
import { useState, useEffect } from "react";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { useQuery } from "react-query";

function Product() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products"], getProducts);

  const [num, setNum] = useState(0);
  const { slug } = useParams();

  console.log("the slug is ", slug);
  const product = products?.find(
    ({ fields: { slug: prodSlug } }) => prodSlug == slug
  );

  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    setImgUrl(product?.fields.productImages[0].fields.file.url);
  }, [product]);

  if (!product)
    return (
      <div className="text-4xl flex justify-center items-center h-screen w-screen">
        Loading Data....
      </div>
    );

  const {
    fields: {
      productPrice,
      productDiscount,
      productName,
      productImages: [
        {
          fields: {
            file: { url: url1 },
          },
        },
        {
          fields: {
            file: { url: url2 },
          },
        },
        {
          fields: {
            file: { url: url3 },
          },
        },
        {
          fields: {
            file: { url: url4 },
          },
        },
        {
          fields: {
            file: { url: url5 },
          },
        },
      ],
    },
  } = product;

  const images = [url1, url2, url3, url4, url5];

  const handleRightClick = () => {
    const currentIndex = images.indexOf(imgUrl);

    setImgUrl(images[(currentIndex + 1) % images.length]);
  };
  const handleLeftClick = () => {
    const currentIndex = images.indexOf(imgUrl);
    setImgUrl(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <>
      {!isLoading ? (
        <div className="">
          <div className="m-4">
            <h1>{productName}</h1>
            <div className="flex flex-col md:flex-row">
              <div className="flex md:flex-row gap-2 flex-col-reverse w-full">
                <div className="flex gap-[2vw] md:flex-col ">
                  <img
                    src={url1}
                    alt=""
                    className="size-[4.5rem]  sm:size-20 rounded-lg"
                    onClick={() => {
                      setImgUrl(url1);
                    }}
                  />
                  <img
                    src={url2}
                    alt=""
                    className="sm:size-20  size-[4.5rem] rounded-lg"
                    onClick={() => {
                      setImgUrl(url2);
                    }}
                  />
                  <img
                    src={url3}
                    alt=""
                    className="sm:size-20 size-[4.5rem] rounded-lg"
                    onClick={() => {
                      setImgUrl(url3);
                    }}
                  />
                  <img
                    src={url4}
                    alt=""
                    className="sm:size-20 size-[4.5rem] rounded-lg"
                    onClick={() => {
                      setImgUrl(url4);
                    }}
                  />
                  <img
                    src={url5}
                    alt=""
                    className="sm:size-20 size-[4.5rem]  rounded-lg"
                    onClick={() => {
                      setImgUrl(url5);
                    }}
                  />
                </div>
                <div className="relative  ">
                  <img
                    src={imgUrl}
                    alt=""
                    className="w-full h-full object-cover overflow-scroll rounded-lg"
                  />
                  <div className="text-2xl text-white">
                    <SlArrowLeftCircle
                      className="absolute top-1/2 left-4"
                      onClick={handleLeftClick}
                    />
                    <SlArrowRightCircle
                      className="absolute top-1/2 right-4"
                      onClick={handleRightClick}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 ml-0 sm:ml-4 sw-full flex flex-col gap-3 md:gap-4 lg:w-full ">
                {productDiscount && (
                  <h1 className="bg-primary text-white rounded-xl w-12 pl-1">
                    -{productDiscount}%
                  </h1>
                )}
                <h1 className="text-xl md:text-3xl font-medium">
                  {productName}
                </h1>
                {productDiscount && (
                  <div className="text-xl md:text-3xl flex text-primary gap-4 font-bold">
                    <h1>
                      RS.{productPrice - (productPrice * productDiscount) / 100}
                    </h1>
                    <h1 className="line-through opacity-40">
                      RS.{productPrice}
                    </h1>
                  </div>
                )}
                {!productDiscount && (
                  <div className="text-xl md:text-3xl text-primary font-bold">
                    RS.{productPrice}
                  </div>
                )}
                <div className="flex gap-2">
                  <div className="bg-gray-200 rounded-3xl items-center px-3 text-2xl flex justify-between text-black w-1/3  border-primary border-[1px] ">
                    <div
                      className="hover:cursor-pointer"
                      onClick={() => {
                        setNum((n) => (n == 0 ? n : n - 1));
                      }}
                    >
                      -
                    </div>
                    <div className="">{num}</div>
                    <div
                      className="hover:cursor-pointer"
                      onClick={() => {
                        setNum((n) => n + 1);
                      }}
                    >
                      +
                    </div>
                  </div>
                  <div className="bg-primary text-center py-3 text-white hover:scale-[1.01] rounded-3xl w-2/3">
                    Add to Cart
                  </div>
                </div>
                <h1 className="bg-primary w-full text-center py-3 rounded-3xl text-white cursor-pointer hover:scale-[1.01] ">
                  Buy Now
                </h1>
              </div>
            </div>
            <hr className="border-primary border-b-1 mt-8" />
          </div>
        </div>
      ) : (
        <>
          <div className="text-4xl flex justify-center items-center h-screen w-screen">
            Loading Data....
          </div>
        </>
      )}
    </>
  );
}

export default Product;
