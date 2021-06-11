import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//지현 컴포넌트
import LoginJH from "./pages/JH/Login/LoginJH.js";
import ListJH from "./pages/JH/List/ListJH.js";
import DetailJH from "./pages/JH/Detail/DetailJH.js";

//민성 컴포넌트
import LoginMS from "./pages/MS/Login/LoginMS.js";
import ListMS from "./pages/MS/List/ListMS";
import DetailMS from "./pages/MS/Detail/DetailMS";

//미정 컴포넌트
import LoginMJ from "./pages/MJ/Login/LoginMJ";
import ListMJ from "./pages/MJ/List/ListMJ";
import DetailMJ from "./pages/MJ/Detail/DetailMJ.js";

//수호 컴포넌트
import LoginSH from "./pages/SH/Login/LoginSH";
import ListSH from "./pages/SH/List/ListSH";
import DetailSH from "./pages/SH/Detail/DetailSH";

//라우터 알아서 구분하쉐이
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/LoginJH" component={LoginJH} />
          <Route exact path="/ListJH" component={ListJH} />
          <Route exact path="/DetailJH" component={DetailJH} />
          <Route exact path="/LoginMS" component={LoginMS} />
          <Route exact path="/ListMS" component={ListMS} />
          <Route exact path="/DetailMS" component={DetailMS} />
          <Route exact path="/LoginMJ" component={LoginMJ} />
          <Route exact path="/ListMJ" component={ListMJ} />
          <Route exact path="/DetailMJ" component={DetailMJ} />
          <Route exact path="/LoginSH" component={LoginSH} />
          <Route exact path="/ListSH" component={ListSH} />
          <Route exact path="/DetailSH" component={DetailSH} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
