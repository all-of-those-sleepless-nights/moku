import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../contexts/product-context";
import { FiPlus, FiMinus, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

function ProductDetailsPage() {
  const { id } = useParams();
  const { products } = useProducts();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const specificProductDetails = products.find(
    (item) => item.product_id === id
  );

  const BurgerDetails = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="text-sm">{title}</label>{" "}
          <FiChevronDown
            className={`cursor-pointer ${isOpen ? "rotate-180" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && <label className="text-xs">{description}</label>}
      </div>
    );
  };

  if (!specificProductDetails) {
    return (
      <div className="h-screen flex flex-grow justify-center items-center">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="grid sm:grid-cols-2 max-w-6xl gap-2 relative pt-12 pb-2 mx-auto">
        <div className="flex flex-col gap-6 p-4">
          {specificProductDetails.product_images.map((item, id) => (
            <img
              src={item}
              key={id}
              className="aspect-[3/4] w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="relative h-full w-full">
          <div className="sticky top-16 w-full text-black flex flex-col p-4 h-fit">
            <label className="text-sm">
              {specificProductDetails.product_group}
            </label>
            <label className="text-lg">
              {specificProductDetails.product_name}
            </label>
            <label>
              {specificProductDetails.product_sizes[0].product_price}
            </label>
            <label className="text-xs">
              Size <strong>Select Size</strong>
            </label>
            <div className="flex gap-2 items-center">
              {specificProductDetails.product_sizes.map((item, i) => (
                <label className="text-sm" key={i}>
                  {item.size}
                </label>
              ))}
            </div>
            <div className="flex justify-between text-xs w-full mt-auto">
              <label>
                {specificProductDetails.product_sizes[0].available_quantity}{" "}
                left in stock
              </label>
              <label>Size Chart</label>
            </div>
            <div className="flex gap-2 item-center">
              <div className="flex gap-4 items-center text-xs border p-2 w-fit">
                <FiMinus
                  className="cursor-pointer"
                  onClick={() => setQuantity(quantity - 1)}
                />
                <div className="relative w-2 h-2">
                  <label className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    {quantity}
                  </label>
                </div>

                <FiPlus
                  className="cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>
              <button className="border flex-grow">Add to Cart</button>
            </div>
            <BurgerDetails
              title="Product Information"
              description={specificProductDetails.product_information}
            />
            <BurgerDetails
              title="Product Benefits"
              description={specificProductDetails.product_benefits.join(", ")}
            />
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end justify-between w-full max-w-5xl mx-auto">
          <label className="text-2xl sm:text-3xl">
            You May <br /> Also Like
          </label>
          <label className="text-xs">
            Discover timeless essentials <br className="max-sm:hidden" />{" "}
            curated just for you. These <br className="max-sm:hidden" />{" "}
            elevated basics blend <br className="max-sm:hidden" /> comfort and
            sophistication
            <br className="max-sm:hidden" /> — ideal additions to your
            <br className="max-sm:hidden" /> everyday wardrobe.
          </label>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
          <div className="bg-blue-200 aspect-[3/4] w-full h-full"></div>
          <div className="bg-blue-200 aspect-[3/4] w-full h-full"></div>
          <div className="bg-blue-200 aspect-[3/4] w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
