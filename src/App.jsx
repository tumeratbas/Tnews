import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Politics from "./components/politics/Politics"
import Funny from "./components/funnyNews/Funny"
import Sport from "./components/sportNews/Sport"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/kultur' component={Culture} />
          <Route exact path='/politika' component={Politics} />
          <Route exact path='/yorum' component={Comment} />
          <Route exact path='/spor' component={Sport} />
          <Route exact path='/komik' component={Funny} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App