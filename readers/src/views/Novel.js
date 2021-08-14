import { useState, useEffect } from "react";
import axios from "axios";
import Footer from '../components/Footer'
import Header from '../components/Header'
import NovelDesc from '../components/NovelDesc'
import { useParams } from 'react-router-dom';
const Novel = (props , {history}) => {

       
    const userId = localStorage.getItem("user_id");
    console.log(userId)
    
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    console.log("im inside the Novel")
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
        <>
		<div className='background'>
		{consoleThis}
            <Header />
            <NovelDesc novelId={userId}/>
            <Footer />
			</div>
        </>
        )
  };
    












    // const { id } = useParams();
    // return (
    //     <>
    //     <Header />
    //     <NovelDesc novelId={id}/>
    //     <Footer />
            
    //     </>
    // )
// }

export default Novel
