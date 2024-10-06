import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmerui from "./Shimmerui";
import { RES_MENU_URL } from "../utilities/common";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  
  // Extract restaurant ID from the URL params
  const { resid } = useParams();
  console.log({resid})

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${RES_MENU_URL}${resid}`);
    //   const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.20018612485776&lng=78.16196221858263&restaurantId=84683");
    console.log("Restaurant ID:", resid);
console.log("Full URL being fetched:", `${RES_MENU_URL}${resid}`);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) return <Shimmerui />;

  // Optional chaining and default values to avoid destructuring errors
  const name = resInfo?.cards?.[2]?.card?.card?.info?.name || "Restaurant Name Not Available";
  const costForTwoMessage = resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "Cost info not available";
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];

  // Safeguard in case itemCards is undefined
  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h4>{cuisines.length > 0 ? cuisines.join(", ") : "Cuisine info not available"}</h4>

      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item, index) => (
            <li key={index}>{item.card.info.name} - {item.card.info.price}</li>
          ))
        ) : (
          <li>Menu items not available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

