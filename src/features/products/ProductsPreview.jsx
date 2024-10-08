import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../../components/Skeleton";
import { motion } from "framer-motion";

function ProductsPreview({ fields, title }) {
  const {
    categories: productCategories,
    productName,
    productPrice,
    productImages: [
      {
        fields: {
          file: { url },
        },
      },
      {
        fields: {
          file: { url: url2 },
        },
      },
    ],
    productDiscount,
    slug,
  } = fields;

  const [imgUrl, setImgUrl] = useState(url);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    setImgUrl(url);
  }, [url]);

  return (
    productCategories.includes(title) && (
      <>
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={`/products/${slug}`}>
            <div className="flex flex-col sm:mb-8 mb-4">
              <div className="relative">
                {!imageLoaded && (
                  <>
                    <Skeleton classes="size-[44vw] sm:size-[30vw] md:size-[22.5vw] rounded-xl lg:size-[18.5vw]" />
                  </>
                )}
                <img
                  src={imgUrl}
                  alt=""
                  className="w-[44vw] sm:w-[30vw] md:w-[22.5vw] rounded-xl lg:w-[18.5vw] "
                  onMouseEnter={() => setImgUrl(url2)}
                  onMouseLeave={() => setImgUrl(url)}
                  onLoad={handleLoad}
                />

                {productDiscount && (
                  <div className="text-white rounded-xl bg-primary absolute top-2 left-2 px-1">
                    <span>-{productDiscount}%</span>
                  </div>
                )}
              </div>
              <h1 className="max-w-[44vw] sm:max-w-[30vw]  md:max-w-[22.5vw] lg:max-w-[18.5vw] whitespace-nowrap overflow-hidden truncate mb-2 mt-1">
                {productName}
              </h1>

              {productDiscount ? (
                <div className="flex gap-4 text-primary font-bold">
                  <div className="">
                    RS.{productPrice - (productDiscount * productPrice) / 100}
                  </div>
                  <div className="line-through opacity-30">{productPrice}</div>
                </div>
              ) : (
                <div className="flex gap-4 text-primary font-bold">
                  RS.{productPrice}
                </div>
              )}
            </div>
          </Link>
        </motion.div>
      </>
    )
  );
}

export default ProductsPreview;
