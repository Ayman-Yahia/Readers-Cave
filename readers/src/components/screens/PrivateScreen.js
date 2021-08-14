import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Novel from '../../views/Novel';
import HomePage from "../../views/HomePage";
import CategoryPage from "../../views/CategoryPage";
import ContactPage from "../../views/ContactPage";
import CategoriesPage from "../../views/CategoriesPage";
import ChapterPage from "../../views/ChapterPage";
// import "./PrivateScreen.css";

const PrivateScreen = ({history}) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

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
  ) : (
    // <>
    
    //     <Route path="/contact" component={ContactPage} />
    //     <Route path="/novel/:id" component={Novel} />
    //     <Route path="/categories" component={CategoriesPage} />
    //     <Route path="/category/:id/" component={CategoryPage} />
    //     <Route path="/chapters/:id/" component={ChapterPage} />
    //     <Route default path="/" component={HomePage} />
    
    // </>
    <div>{privateData}</div>
  );
};

export default PrivateScreen;