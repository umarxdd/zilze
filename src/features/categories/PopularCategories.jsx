import { getCategories } from "../../services/apiData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

function PopularCategories() {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery(["categoreis"], getCategories);

  return (
    <>
      <div className="text-center text-3xl font-medium mb-4">
        <h1>Popular Categories</h1>
      </div>
      <hr className="border-b-1 border-red-300 mx-[2vw]" />

      <div className="flex justify-center my-8">
        <div className="flex gap-4">
          {categories?.map((cat) => {
            return (
              cat.fields.title != "New Arrivals" && (
                <>
                  <Link to={`/categories/${cat.fields.title}`}>
                    <div className="flex flex-col items-center">
                      <div className="">
                        <img
                          src={cat.fields.categoryImage.fields.file.url}
                          className="object-cover w-full rounded-lg size-28"
                        />
                      </div>
                      <span>{cat.fields.title}</span>
                    </div>
                  </Link>
                </>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PopularCategories;
