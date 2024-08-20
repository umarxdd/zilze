import { useState, useEffect } from "react";
import { getCategories } from "../../services/apiData";
import ProductsGrid from "../products/ProductsGrid.jsx";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

function Categories() {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery(["categories"], getCategories);

  return (
    <>
      {categories?.map(({ fields: { title } }, index) => (
        <>
          <div className="">
            <div className="text-center text-3xl font-medium my-4">
              <h1>{title}</h1>
            </div>
            <hr className="border-b-1 border-red-300 mx-[2vw]" />
            <ProductsGrid key={index} title={title} />
          </div>

          <Link className=" flex justify-center" to={`/categories/${title}`}>
            <div className="bg-primary rounded-3xl p-3 my-4 text-white">
              <h1 className="text-xl">View All</h1>
            </div>
          </Link>
        </>
      ))}
    </>
  );
}

export default Categories;
