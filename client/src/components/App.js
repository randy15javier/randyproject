import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Body from "./Body";
import onlineSales from "./onlineSales";
// import Reservation from "./Reservation";
//const Dashboard = () => <h2>Dashboard</h2>;
//const SurveyNew = () => <h2>SurveyNew</h2>;


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
               <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/home" component={Body} />
                        <Route exact path="/home/onlinesales" component={onlineSales} />
                        {/* <Route exact path="/class/teacher/reservation" component={Reservation}/> */}
                        
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);