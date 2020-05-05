import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Body from "./Body";
import onlineSales from "./onlineSales";
// const Dashboard = () => <h2>Dashboarde</h2>;
// const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    //	Llamada	al	action
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Body} />
            <Route exact path="/surveys/onlineSales" component={onlineSales} />
            {/* <Route path="/surveys/new" component={SurveyNew} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
