import { useEffect, useState } from "react";
import { getCoverPhotos } from "../services/apiData";
import { useQuery } from "react-query";
import Skeleton from "./Skeleton";

function Carousel() {
  const {
    data: coverPhotos,
    error,
    isLoading,
  } = useQuery(["coverPhotos"], getCoverPhotos);
  const [curIndex, setCurIndex] = useState(0);
  // useEffect(() => {
  //   async function getCover() {
  //     const res = await getCoverPhotos();
  //     setCoverPhotos(res);
  //   }
  //   getCover();
  // }, []);

  const coverLinks = coverPhotos?.map((cov) => {
    return `https:${cov.fields.coverPhoto.fields.file.url}`;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((curIndex) => {
        return coverLinks ? (curIndex + 1) % coverLinks.length : 0;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [coverLinks]);

  if (isLoading)
    return (
      <div className="m-4">
        <Skeleton height={"28rem"} widht={"100%"} />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="my-8 h-[27rem] bg-cover bg-center rounded-2xl mx-[2vw]">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {coverLinks.map((cov, index) => {
            return (
              <>
                <img
                  src={cov}
                  className={`absolute left-0 top-0 object-cover h-full w-full transition-opacity duration-1000 ${curIndex == index ? "opacity-100" : "opacity-0"}`}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;

/////////
