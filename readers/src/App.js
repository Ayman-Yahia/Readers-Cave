import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NovelForm from "./components/NovelForm";
import Novel from "./views/Novel";
import Home from "./views/Home";
import ChapterFromPage from "./views/ChapterFromPage";
import CategoryPage from "./views/CategoryPage";
function App() {
  return (<>
  <Router>
      <Switch>
        <Route path="/write" component={NovelForm} />
        <Route path="/novel/:id" component={Novel} />
        <Route path="/novel/chapter/:nid/" component={ChapterFromPage} />
        <Route path="/category/:id/" component={CategoryPage} />
        <Route path="/" component={Home} />
      </Switch>
  </Router>
	</>
  );
}

export default App;

