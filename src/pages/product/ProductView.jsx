import { Link } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import "./ProductView.scss";

export default function ProductView({ products }) {
  try {
    return (
      <div className="flex-col dark:bg-stone-500 dark:text-white py-24 bg-white">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4">
            {products?.map((product, index) => (
              <Link key={index} to={`/produk/${product.id}`}>
                <CardProduct
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
