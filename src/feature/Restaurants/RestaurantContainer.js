// import BasicModal from "../Products/BasicModal";
import "./Restaurants.css";

const RestaurantContainer = () => {
  const restaurants = new Array(10).fill({
    name: "Papa John's",
    category: "Pizza",
  });

  return (
    <>
      <div>
        <input className="search" placeholder="Products"></input>
      </div>

      <div className="product-cards">
        {restaurants.map((restaurant) => (
          <div className="rest-card">
            <div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-p/1a/fe/be/14/papa-john-s-azerbaijan.jpg"
                alt="papajohns"
                className="rest-img"
              />
            </div>
            <div className="rest-info">
              <div className="rest-name">{restaurant.name}</div>
              <div className="rest-cat">{restaurant.category}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantContainer;
