import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestrauntMenu = () => {
    const {resId} = useParams();
    const [restaurantMenuData, setRestaurantMenuData] = useState([]);
    useEffect(() => {
        getRestaurantInfo();
    },[]); 

    async function getRestaurantInfo(){
        const infoData = await fetch("https://cw-api.takeaway.com/api/v33/restaurant?slug="+resId, {
            "headers": {
              "accept": "application/json, text/plain, */*",
              "accept-language": "de",
              "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "cross-site",
              "x-country-code": "de",
              "x-language-code": "de",
              "x-requested-with": "XMLHttpRequest",
              "x-session-id": "e8eeb4f4-1f9b-4d4f-ba1c-16d9de749b0e"
            }
          });
        const json = await infoData.json(); 
        setRestaurantMenuData(json);
        console.log(restaurantMenuData);
    };

    const MenuContainer = ({brand, delivery, location, menu, restaurantPhoneNumber}) => {
        return (
            <div className="menu-list">
                <div>
                    <h1>{brand?.name}</h1>
                    <img width={500} height={150} src={brand.headerImageUrl.replace("/{parameters}","")}></img>
                    <h2>{delivery?.isOpenForOrder?"Open For Delivery":"Closed"}</h2>
                    <h3>{location?.streetName +" "+ location?.streetNumber + "\n" + location?.postalCode +" "+ location?.city }</h3>
                    <h3>Contact : {restaurantPhoneNumber}</h3>
                </div>
              <div>
                    <h1 className="title">Menu</h1>
                    <ul>
                    {
                        Object.values(menu?.products)?.map((elem,index) => {
                            return <li key={index}>{elem?.name}</li>
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }

  return (restaurantMenuData.length===0) ? <Shimmer />:(
    <MenuContainer key={restaurantMenuData.primarySlug} {...restaurantMenuData}/>
  );
};

export default RestrauntMenu;