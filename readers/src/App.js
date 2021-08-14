import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Novel from "./views/Novel";
import HomePage from "./views/HomePage";
import CategoryPage from "./views/CategoryPage";
import ContactPage from "./views/ContactPage";
import CategoriesPage from "./views/CategoriesPage";
import ChapterPage from "./views/ChapterPage";
import NForm from "./components/NForm";

//Routing :
import PrivateRoute from "./components/routing/PrivateRoute";
//screens:
import PrivateScreen from "./components/screens/PrivateScreen";
import LogInScreen from "./components/screens/LogInScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import LiveChat from "./views/LiveChat";
const  App =()=> {
  return (<>
  <Router>
        
        {/* <PrivateRoute exact path ="/" component = {PrivateScreen}/> */}
        <Route exact path ="/login" component={LogInScreen}/>
        <Route exact path ="/register" component={RegisterScreen}/>

        <PrivateRoute exact path ="/" default component = {HomePage}/>
        <PrivateRoute exact path ="/chat" default component = {LiveChat}/>
        <PrivateRoute exact path="/contact" component={ContactPage}/>
        <PrivateRoute exact path="/novel/:id" component={Novel}/>
        <PrivateRoute exact path="/novel/new" component={NForm}/>
        <PrivateRoute exact path="/categories" component={CategoriesPage}/>
        <PrivateRoute exact path="/category/:id/" component={CategoryPage}/>
        <PrivateRoute exact path="/chapters/:id/" component={ChapterPage}/>


        {/* <Route exact path="/home" component={HomePage} /> */}
        {/* <Route path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/novel/:id" component={Novel} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/category/:id/" component={CategoryPage} />
        <Route path="/chapters/:id/" component={ChapterPage} /> */}
        
        {/* <Route path="/contact" component={ContactPage} />
        <Route path="/novel/:id" component={Novel} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/category/:id/" component={CategoryPage} />
        <Route path="/chapters/:id/" component={ChapterPage} />
        <Route path="/" component={HomePage} /> */}
      
  </Router>
	</>
  );
}

export default App;

