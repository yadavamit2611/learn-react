import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
const Error = () => {
    const {status, statusText, data} = useRouteError();
    return (
        <div className="h-full bg-slate-400">
            <div className="flex flex-col justify-center items-center">
                <div className="w-6/12 text-center my-10 bg-white shadow-2xl shadow-slate-200 rounded-lg">
                <h1 className="text-4xl">Oops!! </h1>
                <h2 className="text-2xl">Something went wrong!!</h2>
                <h3 className="text-3xl m-10">{status + ": "+ "Page " + statusText}</h3>
                <h4 className="text-2xl">{data}</h4>
                <div className="p-2 m-2">
                    <Link to="/" ><button className="bg-blue-500 text-white p-3 rounded-md">Back to home page</ button></Link>
                    <Link to="/contact"><button className="bg-black text-white p-3 m-2 rounded-md">Contact team for more info</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Error