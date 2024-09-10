import { RES_URL,IMG_URL } from "../utilities/common";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData?.info;
    // const test={IMG_URL}+{cloudinaryImageId}
    // console.log(test)
    // const fullImageUrl = `${IMG_URL}+"/"+${cloudinaryImageId}`;
    return (
      <div
        className="res-card"
      >
        <img
          className="res-logo"
          // src={
          //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
          //   resData.data.cloudinaryImageId
          // }
          
          // src={fullImageUrl}
          src={IMG_URL +"/"+ cloudinaryImageId}
          alt="Biryani"
        />
        {/* <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4> */}
        {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(', ')}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes</h4> */}
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        {/* {console.log(costForTwo)} */}
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;