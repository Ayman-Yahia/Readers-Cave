import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import RisingNovels from '../components/RisingNovels'
const HomePage = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    console.log("im inside the Homepage")
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
    return error ? (
      <span className="error-message">{error}</span>
    ) :  (
            <>
            <div style={{backgroundColor:"#4c4c4c"}}>
            <Header />
            <ImageSlider   />
            <br></br>
            <RisingNovels />
            <Footer />
    
            </div>
            
                
            </>
        )
  };

    
export default HomePage
