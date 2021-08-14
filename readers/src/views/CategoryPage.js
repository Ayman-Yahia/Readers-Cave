import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Category from '../components/Category'

const CategoryPage = ({history}) => {
    const userId = localStorage.getItem("user_id");
    console.log(userId)
    
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    console.log("im inside the categories")
    useEffect(() => {
  
  
  
      const fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
  
        try {
          const { data } = await axios.get("/api/private", config);
          console.log("data");
          console.log(data);
          setPrivateData(data.data);
        } catch (error) {
          localStorage.removeItem("authToken");
          setError("You are not authorized please login");
        }
      };
  
      fetchPrivateDate();
    }, [history]);
    const consoleThis=()=>{
        console.log("its rendering")
    }
    return error ? (
      <span className="error-message">{error}</span>
    ) :  (
        <><div className='background'>
		{consoleThis}
            <Header />
            <Category categoryId={userId}/>
            <Footer />
			</div>
        </>
        )
  };
    










//     const { id } = useParams();
//     console.log(id);
//     return (
//         <div>
//         <Header />
//         <Category categoryId={id}/>
//         <Footer />
            
//         </div>
//     )
// }

export default CategoryPage
