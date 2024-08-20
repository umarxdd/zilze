import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/apiData";
import ProductsPreview from "./ProductsPreview";
import { useQuery } from "react-query";

function SearchedProducts() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const {
    data: products,
    error,
    isLoading,
  } = useQuery(["products"], getProducts);

  const filteredProducts = products?.filter((prod) =>
    prod.fields.productName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {!isLoading ? (
        <>
          <div className="flex justify-center items-center gap-2 text-2xl">
            <h1 className="text-secondary-200">Results for</h1>
            <span>"{query}"</span>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-6 mx-4">
            {filteredProducts?.map((prod, index) => (
              <div key={index}>
                <ProductsPreview
                  fields={prod.fields}
                  title={prod.fields.categories[0]}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>loading</>
      )}
    </>
  );
}

export default SearchedProducts;
