import { useProducts } from "../contexts/product-context";
import ProductItem from "../components/items/product-item";

function ProductPage() {
  const { products } = useProducts();
  return (
    <body className="bg-yellow-200 min-h-screen px-2 lg:px-4 py-4 lg:py-8 mt-8">
      <label className="text-5xl">All Products</label>
      <section className="grid grid-cols-1 min-[320px]:grid-cols-2 sm:grid-cols-3 gap-2">
        {products.map((item) => (
          <ProductItem key={item.product_id} productItem={item} />
        ))}
      </section>
    </body>
  );
}

export default ProductPage;
