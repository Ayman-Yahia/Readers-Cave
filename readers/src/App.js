import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NovelForm from "./components/NovelForm";


function App() {
  return (<>
    <Router>
      <NovelForm />
    </Router>
	</>
  );
}

export default App;

