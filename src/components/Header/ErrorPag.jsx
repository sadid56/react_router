import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return ( 
        <div>
            <h1>ei page nai re mama😁😁</h1>
            <p></p>
        </div>
     );
}
 
export default ErrorPage;