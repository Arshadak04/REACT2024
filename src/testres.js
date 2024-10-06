import { useState ,useEffect } from "react"
import { useParams } from "react-router-dom"
import Shimmerui from "./Shimmerui"
import { RES_MENU_URL } from "../utilities/common"

const RestaurantMenu= () =>{


    const [resInfo,setresInfo]=useState(null)
    useEffect(()=>{
        fetchMenu();
    },[])

    const resid=useParams();
    console.log(resid)

    const fetchMenu =  async()=>{
        // const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=575804");
        // const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=3241&catalog_qa=undefined&submitAction=ENTER");
        // const data=await fetch(RES_MENU_URL+ resid);
        // const data = await fetch(`${RES_MENU_URL}${resid}`);
        //Gwalior
        // const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.20018612485776&lng=78.16196221858263&restaurantId=84683&catalog_qa=undefined&submitAction=ENTER");
        const data=await fetch(RES_MENU_URL+ resid);

        

        // const data=await fetch(RES_MENU_URL); 32129
        console.log(data)
        const json= await data.json();
        
        setresInfo(json.data)
        // console.log(json)
        
    }


    if(resInfo===null ) return <Shimmerui/>

    const {name ,costForTwoMessage ,
        cuisines
        }= resInfo?.cards[2]?.card?.card?.info;

        const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log(itemCards)


    return(
        <div className="menu">
          <h1>{name}</h1>

            <h1>Arshad Qureshi</h1>
            <h3>{costForTwoMessage}</h3>
           <h4>{cuisines.join(" ,")}</h4>

           <h2>Menu</h2>

           <ul>
            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>

            <li>{itemCards[2].card.info.name}</li>

            <li>{itemCards[3].card.info.name}</li>

            <li>{itemCards[4].card.info.name}</li> */}


  {itemCards.map((item, index) => (
    <li key={index}>{item.card.info.name} - {item.card.info.price}</li>
  ))}


           </ul>
        </div>
    )
}

export default RestaurantMenu;