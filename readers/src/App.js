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

//Routing :
import PrivateRoute from "./components/routing/PrivateRoute";
//screens:
import PrivateScreen from "./components/screens/PrivateScreen";
import LogInScreen from "./components/screens/LogInScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
const  App =()=> {
  return (<>
  <Router>
      <Switch>
        <PrivateRoute exact path ="/" component = {PrivateScreen}>
          <Route path="/" default component={HomePage} />
        </PrivateRoute>
        <Route exact path ="/login" component={LogInScreen}/>
        <Route exact path ="/register" component={RegisterScreen}/>

        <Route path="/contact" component={ContactPage} />
        <Route path="/novel/:id" component={Novel} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/category/:id/" component={CategoryPage} />
        <Route path="/chapters/:id/" component={ChapterPage} />
        {/* <Route path="/contact" component={ContactPage} />
        <Route path="/novel/:id" component={Novel} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/category/:id/" component={CategoryPage} />
        <Route path="/chapters/:id/" component={ChapterPage} />
        <Route path="/" component={HomePage} /> */}
      </Switch>
  </Router>
	</>
  );
}

export default App;

