import React, { Component } from 'react';
// 页面出口
import RoutersComponent from './component/routers/routers';
// import SidebarExample from './component/routers/routerRight';

class App extends Component {
  render() {
    return (
      <RoutersComponent />
      // /* <SidebarExample /> */
    );
  }
}

export default App;
