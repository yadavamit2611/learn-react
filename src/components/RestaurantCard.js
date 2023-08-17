const RestrauntCard = ({brand,rating,cuisine,location}) => 
{

//    const {name, cuisines, image, rating} = restraunt;
    return ( 
            <div className="card">
            <img alt={brand.name} src={brand.heroImageUrl.replace("/{parameters}","")}/>
            <h2>{brand.name}</h2>
            <h3>{rating.score} stars | {rating.votes} votes</h3>
            <h5>{location?.streetAddress} {location?.city} {location?.country} </h5>
        </div>
    );
}
export default RestrauntCard;