const ShimmerCard = () => (<div className="shimmer-card"></div>);

const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {
                Array(27)
                .fill("")
                .map((e, index) => {
                   return (<ShimmerCard key={index}/>)
                })
            }
        </div>
    );
};
export default Shimmer;
