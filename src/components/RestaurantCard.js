import { euros } from "../utils/helper";
const RestrauntCard = ({brand,rating,cuisine,location,priceRange}) => 
{
    const price = euros(String(priceRange));
//    const {name, cuisines, image, rating} = restraunt;
    return ( 
            <div className="rounded-md bg-white shadow-lg p-5 m-5">
            <img alt={brand.name} src={brand.heroImageUrl.replace("/{parameters}","")}/>
            <div className="font-bold text-2xl">{brand.name}</div>
            <h3>{rating.score} ⭐ | {rating.votes} ❤️ </h3>
            <p>{location?.streetAddress} {location?.city} {location?.country} </p>
            <p>{priceRange > 0 ? `min ${price.join("")} 💶` : "Cick to know more" }</p>
            </div>
    );
}
export default RestrauntCard;