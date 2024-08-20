import { useParams } from "react-router-dom";
import { getProducts } from "../../services/apiData";
import { useState, useEffect } from "react";
import ProductsPreview from "../products/ProductsPreview";
import { useQuery } from "react-query";

function Category() {
  const { slug } = useParams();

  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products"], getProducts);

  return (
    <>
      <div className="m-4 bg-primary text-white text-center p-4 rounded-lg">
        <h1>{slug}</h1>
      </div>
      <hr className="border-primary border-b-1 m-4" />

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-6 mx-4">
        {products?.map(({ fields }, index) => (
          <ProductsPreview key={index} fields={fields} title={slug} />
        ))}
      </div>
    </>
  );
}

export default Category;
