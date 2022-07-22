import "./Products.css";
import { GrTrash } from "react-icons/gr";
import BasicModal from "./BasicModal";

const ProductContainer = () => {
  const products = new Array(10).fill({
    name: "Marqarita",
    price: "$ 16",
    res: "Papa John's",
  });

  return (
    <>
      <div>
        <input className="search" placeholder="Products"></input>
      </div>

      <div className="product-cards">
        {products.map((product, index) => {
          return (
            <div className="card" key={index}>
              <img
                className="product-img"
                src="https://pizza.az/upload/resize_cache/iblock/289/359_355_040cd750bba9870f18aada2478b24840a/2890847e94a8213ae597264ff6bba032.jpg"
                alt="pizza"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-rest">{product.res}</p>
              <p className="product-price">{product.price}</p>

              <div className="trash">
                <GrTrash />
              </div>
              <BasicModal className='modal'/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductContainer;
