import { useState ,useEffect } from "react"
import Shimmerui from "./Shimmerui"
const RestaurantMenu= () =>{


    const [resInfo,setresInfo]=useState(null)
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu =  async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=575804&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();
        
        setresInfo(json.data)
        
    }

    if(resInfo===null ) return <Shimmerui/>

    return(
        <div className="menu">
          <h1>{resInfo.cards[2].card.card.info.name}</h1>
            <h1>Arshad Qureshi</h1>
            <h3>
               {/* {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.title?} */}
            </h3>
            <h3>
                2.Badai ka ghost
            </h3>
            <h3>
                3.Chicken Kofta
            </h3>
        </div>
    )
}

export default RestaurantMenu;
