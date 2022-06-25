import React, { useState, Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import Footer from './components/Footer';
import './Firebase';
import routes from './components/routes'

// import CreateEvent from './containers/CreateEvent'

export const AuthContext = React.createContext(null)

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  console.log(`Is it login? ${isLoggedIn}`);
  return (
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          <div className="App">
              <Router>
                  <Header />
                  <Routes>
                      {routes.map((route) => (
                          <Route key={route.path} path={route.path} exact={route.exact} element={route.main} />
                      ))}
                  </Routes>
                  <Footer/>
              </Router>
          </div>
      </AuthContext.Provider>      
  ); 
}

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Header />
//         <Routes>
//           <Route exact path="/" element={< Home />} />
//           <Route path="/event" element={< Event />} />        
//           <Route path="/event/:id" element={< EventDetail />} />          
//           <Route path="/recruitment" element={< Recruitment />} />
//           <Route path="/profile" element={< Profile />} />
//           <Route path="/login" element={< Login />} />
//           {/* <Route path="/createevent" element={< CreateEvent />}></Route> */}
//         </Routes>
//         <Footer/>
//       </Router>
//     );
//   }
// }

export default App;