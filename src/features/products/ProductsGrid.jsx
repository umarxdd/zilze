import { getProducts } from "../../services/apiData";
import { useState, useEffect } from "react";
import ProductsPreview from "./ProductsPreview";
import { useQuery } from "react-query";

function ProductsGrid({ title }) {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products"], getProducts);

  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-6 mx-4">
        {products?.map(({ fields }, index) => (
          <ProductsPreview key={index} fields={fields} title={title} />
        ))}
      </div>
    </>
  );
}

export default ProductsGrid;
