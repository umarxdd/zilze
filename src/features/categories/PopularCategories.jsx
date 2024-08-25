import { getCategories } from "../../services/apiData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Skeleton from "../../components/Skeleton";

function PopularCategories() {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery(["categoreis"], getCategories);

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleLoad = () => {
    setImageLoaded(true);
  };
  return (
    <>
      <div className="text-center text-3xl font-medium mb-4">
        <h1>Popular Categories</h1>
      </div>
      {isLoading && (
        <>
          <div className="flex justify-center my-8 mx-2">
            {Array(4)
              .fill()
              .map((_, index) => {
                return (
                  <Skeleton
                    key={index}
                    classes="object-cover w-full rounded-lg size-28"
                  />
                );
              })}
          </div>
        </>
      )}
      <hr className="border-b-1 border-red-300 mx-[2vw]" />

      <div className="flex justify-center my-8 mx-2">
        <div className="flex gap-3">
          {categories?.map((cat) => {
            return (
              cat.fields.title != "New Arrivals" && (
                <>
                  <Link to={`/categories/${cat.fields.title}`}>
                    <div className="flex flex-col items-center">
                      <div className="">
                        {!imageLoaded && (
                          <>
                            <Skeleton className="object-cover w-full rounded-lg size-28" />
                          </>
                        )}
                        <img
                          src={cat.fields.categoryImage.fields.file.url}
                          className="object-cover w-full rounded-lg size-28"
                          onLoad={handleLoad}
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
