import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Culture from "./components/culture/Culture";
import Politics from "./components/politics/Politics";
import Funny from "./components/funnyNews/Funny";
import Sport from "./components/sportNews/Sport";
import NewsDetail from "./components/news/NewsDetail";
import Comments from "./components/common/comments/comments";
import Login from "./components/auth/LogIn";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route path="/newsdetail/:haberId" exact component={NewsDetail} />
          <Route exact path="/kultur" component={Culture} />
          <Route exact path="/politika" component={Politics} />
          <Route exact path="/yorum" component={Comments} />
          <Route exact path="/spor" component={Sport} />
          <Route exact path="/komik" component={Funny} />
          <Route path="/login" exact component={Login}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
