import { useRouteError } from "react-router-dom"
const Error = () => {
    const {status, statusText, data} = useRouteError();
    return (
        <div>
        <h1>Oops!! </h1>
        <h2>Something went wrong!!</h2>
        <h3>{status + ": "+ "Page " + statusText}</h3>
        <h4>{data}</h4>
        </div>
    );
}

export default Error