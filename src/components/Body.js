import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from "react";
import Shimmerui from "./Shimmerui";


const Body = () => {


    const [newList,setnewList]=useState([])
    const [searchtext,setsearchtext]=useState([])

    const [Filterres,setFilterres]=useState([])


    console.log("Body Render")
    

   

    useEffect(()=>{
      fetchData();
    },[]);

    // console.log("Testing")
   
    const fetchData = async ()=> {
     
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      
      // console.log(data)
      const json= await data.json();
  
      // setnewList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setnewList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


      // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      
    };
    // if(newList.length===0){
    //   return <Shimmerui/>
    // }
  

    return newList.length===0 ?(
       <Shimmerui/>
    
    ) : (
      <div className="body">
        <div className="lower-container">

        <div className="search-container" >
          
          <input type="text" 
          className="search-box"
          value={searchtext} onChange={(res)=>{
              setsearchtext(res.target.value)
            }} ></input>
            
            <button onClick={()=>{
              console.log(searchtext);
              const searchRes=newList.filter((res)=>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
              console.log(searchRes);
              // setnewList(searchRes);
              setFilterres(searchRes);
            }}>Search</button>
          </div>

   
          
 
          <button className="top_rated" onClick={()=>{
            const tesList=newList.filter((res)=> res.info.avgRating >4 ); 
            setnewList(tesList)
              }}>Top Restaurent</button>
        </div>
        <div className="res-container">
         
         
  
          {Filterres.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
  
         
        </div>
      </div>
    );
  };

  export default Body;