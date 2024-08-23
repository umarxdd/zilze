import { getProducts } from "../../services/apiData";
import { useState, useEffect } from "react";
import ProductsPreview from "./ProductsPreview";
import { useQuery } from "react-query";
import Skeleton from "../../components/Skeleton";

function ProductsGrid({ title }) {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products"], getProducts);

  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-6 mx-4">
        {!isLoading ? (
          products?.map(({ fields }, index) => (
            <ProductsPreview key={index} fields={fields} title={title} />
          ))
        ) : (
          <>
            {Array(10)
              .fill()
              .map((_, index) => (
                <Skeleton classes="size-[44vw] sm:size-[30vw] md:size-[22.5vw] rounded-xl lg:size-[18.5vw] " />
              ))}
          </>
        )}
      </div>
    </>
  );
}

export default ProductsGrid;
