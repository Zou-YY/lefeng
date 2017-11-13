import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,hashHistory} from "react-router"

import {Provider} from "react-redux";
import store from "./store";
import RegPage from "./routes/Reg";
//管理其他页面

    ReactDOM.render(
      <Router history = {hashHistory}>
          <Route path = "/reg" component={RegPage}/>
      </Router> , document.getElementById('root'));
