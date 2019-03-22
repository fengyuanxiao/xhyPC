import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MyCenter from '../../containers/center_new/myCenter/myCenter';
import Center_new from '../../containers/center_new'

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/center_new">Home</Link>
          </li>
          <li>
            <Link to="/myCenter">MyCenter</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/myCenter" component={MyCenter} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <MyCenter />
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  );
}

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>
//
//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default BasicExample;
