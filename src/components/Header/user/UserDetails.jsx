import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
   const detailsUser = useLoaderData();
   const navigat = useNavigate();
   const handleGoBack = ()=>{
    navigat(-1)
   }
    return ( 
        <div>
            <h2>name:{detailsUser.name}</h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
     );
}
 
export default UserDetails;