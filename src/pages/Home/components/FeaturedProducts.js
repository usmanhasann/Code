import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";

export const FeaturedProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8000/featured_products");
        const json = await response.json();
        console.log(json, "json data");

        setData(json);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eCourses
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
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
  );
};
