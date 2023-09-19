import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

const Home = () => {
    const navigation = useNavigation()
    return ( 
        <div>
            <h2>This is a hoem components</h2>
            <Header></Header>
            {
                navigation.state === 'loading' ? <p>Loading...</p> :  <Outlet></Outlet>
            }
           
            <Footer></Footer>
        </div>
     );
}
 
export default Home;