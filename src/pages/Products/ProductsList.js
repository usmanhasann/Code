import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
export const ProductsList = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8000/products");
        const data = await response.json();
        console.log(data, "a productlist component");

        setData(data);
      } catch (error) {
        console.error("Error in fetching the JSON:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <main>
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
              All eCourse ({data.length})
            </span>
            <span>
              <button
                onClick={() => setToggle(!toggle)}
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
            {data.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                overview={product.overview}
                price={product.price}
                poster={product.poster}
                image_local={product.image_local}
                rating={product.rating}
                in_stock={product.in_stock}
                size={product.size}
                best_seller={product.best_seller}
              />
            ))}
          </div>
        </section>
        {toggle && <FilterBar setToggle={setToggle} />}
      </main>
    </>
  );
};
