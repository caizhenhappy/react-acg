import React, { Component } from 'react';
// 引入routes
import routes from './config/routes.js'
// 引入路由
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
       <Switch>
       {
          routes.map((route,index)=>(<Route key={index} {...route} />))
        }
       </Switch>


      </Router>
    );
  }
}

export default App;