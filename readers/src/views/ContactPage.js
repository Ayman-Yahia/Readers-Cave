import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
const ContactPage = ({history}) => {
    
    
    
    
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    console.log("im inside the contact")
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
        <>{consoleThis}
            <Header />
            <Contact />
            <Footer />
        </>
        )
  };
    
    
    
//     return (
//         <>
//             <Header />
//             <Contact />
//             <Footer />
//         </>
//     )
// }

export default ContactPage
