import type { sunglassesProduct } from "../../constants/types";

function ProductItem({ productItem }: { productItem: sunglassesProduct }) {
  return (
    <div className="grid grid-rows-[1fr_auto] gap-2">
      <img src={productItem.product_images[0]} className="aspect-[3/4] w-full h-full object-cover"/>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label>{productItem.product_name}</label>
          <label>{productItem.product_sizes[0].product_price}</label>
        </div>
        <label>{productItem.product_group}</label>
      </div>
    </div>
  );
}

export default ProductItem;
