const ShimmerCard = () => (<div className="w-80 m-1 p-1 h-48 bg-gray-300"></div>);

const Shimmer = () => {
    return (
        <div className="flex flex-wrap m-10 gap-10">
            {
                Array(20)
                .fill("")
                .map((e, index) => {
                   return (<ShimmerCard key={index}/>)
                })
            }
        </div>
    );
};
export default Shimmer;
