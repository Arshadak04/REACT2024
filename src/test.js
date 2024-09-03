import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from "react";
import resList from "../utilities/mock_data";

//state variable 



//normal variiable





const Body = () => {


    const [newList,setnewList]=useState(resList)

    // let resList = [
    //     {
    //       type: 'restaurant',
    //       data: {
    //         type: 'F',
    //         id: '121601',
    //         name: 'Macdonanld',
    //         uuid: '51983905-e698-4e31-b0d7-e376eca56320',
    //         city: '1',
    //         area: 'Tavarekere',
    //         totalRatingsString: '10000+ ratings',
    //         cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //         cuisines: ['Kerala', 'Chinese'],
    //         tags: [],
    //         costForTwo: 30000,
    //         costForTwoString: '₹300 FOR TWO',
    //         deliveryTime: 24,
    //         minDeliveryTime: 24,
    //         maxDeliveryTime: 24,
    //         slaString: '24 MINS',
    //         promoted: true,
    //         avgRating: '4.9',
    //         totalRatings: 10000,
    //         new: false,
    //       }
         
    //     },
    //     {
    //         type: 'restaurant',
    //         data: {
    //           type: 'F',
    //           id: '121602',
    //           name: 'KFC',
    //           uuid: '51983905-e698-4e31-b0d7-e376eca56320',
    //           city: '1',
    //           area: 'Tavarekere',
    //           totalRatingsString: '10000+ ratings',
    //           cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //           cuisines: ['Kerala', 'Chinese'],
    //           tags: [],
    //           costForTwo: 30000,
    //           costForTwoString: '₹300 FOR TWO',
    //           deliveryTime: 24,
    //           minDeliveryTime: 24,
    //           maxDeliveryTime: 24,
    //           slaString: '24 MINS',
    //           promoted: true,
    //           avgRating: '3.9',
    //           totalRatings: 10000,
    //           new: false,
    //         }
           
    //       },
    //       {
    //         type: 'restaurant',
    //         data: {
    //           type: 'F',
    //           id: '121603',
    //           name: 'Domino',
    //           uuid: '51983905-e698-4e31-b0d7-e376eca56320',
    //           city: '1',
    //           area: 'Tavarekere',
    //           totalRatingsString: '10000+ ratings',
    //           cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //           cuisines: ['Kerala', 'Chinese'],
    //           tags: [],
    //           costForTwo: 30000,
    //           costForTwoString: '₹300 FOR TWO',
    //           deliveryTime: 24,
    //           minDeliveryTime: 24,
    //           maxDeliveryTime: 24,
    //           slaString: '24 MINS',
    //           promoted: true,
    //           avgRating: '3.2',
    //           totalRatings: 10000,
    //           new: false,
    //         }
           
    //       }
    // ]

    useEffect(()=>{
      fetchData();
    },[]);

    // console.log("Testing")
   
    const fetchData = async ()=> {
     
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      // console.log(data)
      const json= await data.json();
  
      // setnewList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      
    };
  

    return (
      <div className="body">
        <div className="search-container">
          
          <button className="top_rated" onClick={()=>{
            // console.log("Button clicked")
           // resList=resList.filter((res)=> res.data.avgRating >4 ); 
            // console.log(resList)

            const tesList=newList.filter((res)=> res.data.avgRating >4 ); 
            setnewList(tesList)

          }}>Top Restaurent</button>
        </div>
        <div className="res-container">
         
  
          {newList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
  
         
        </div>
      </div>
    );
  };

  export default Body;