const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');
const { BrowserRouter as Router } = require('react-router-dom');

ReactDOM.render(<div>
                  <Router>
                    <App/>
                  </Router>
              </div>, document.getElementById("root"))
