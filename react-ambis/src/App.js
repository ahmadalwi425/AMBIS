import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './components/routes'
import './Firebase';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';

// export const AuthContext = React.createContext(null)

function App() {        
    return (
        <div>
            <div className="App">
                <Router>
                    <AuthProvider>
                        <Header />
                        <Routes>
                            {routes.map((route) => (
                                <Route key={route.path} path={route.path} exact={route.exact} element={route.main} />
                            ))}
                            <Route exact path='/' element={<PrivateRoute/>}>
                                <Route exact path='/profile' element={<Profile/>}/>
                            </Route>                            
                        </Routes>
                        <Footer />
                    </AuthProvider>
                </Router>
            </div>
        </div>
    )
}

// function App() {
//     const [isLoggedIn, setLoggedIn] = useState(false);
//     console.log(`Is it login? ${isLoggedIn}`);
//     return (
//         <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
//             <div className="App">
//                 <Router>
//                     <Header />
//                     <Routes>
//                         {routes.map((route) => (
//                             <Route key={route.path} path={route.path} exact={route.exact} element={route.main} />
//                         ))}
//                     </Routes>
//                     <Footer />
//                 </Router>
//             </div>
//         </AuthContext.Provider>
//     );
// }

export default App;