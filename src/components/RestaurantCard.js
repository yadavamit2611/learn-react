const RestrauntCard = ({name,image,cuisines,rating}) => 
{

//    const {name, cuisines, image, rating} = restraunt;
    return ( 
            <div className="card">
            <img alt={name} src={image}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{rating} Stars</h4>
        </div>
    );
}
export default RestrauntCard;