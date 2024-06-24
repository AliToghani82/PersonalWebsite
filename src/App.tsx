// import React from 'react';
// import './App.css'; // You can add additional styles here

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from './Header';
// import HomePage from './Homepage';
// import Project from './Project';
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Header />}>
//           <Route index element={<HomePage />} />
//           <Route path="projects" element={<Project />} />
//           <Route path="home" element={<HomePage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import Home from './views/home'
import Project from './views/project'
import Research from './views/research'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route Component={Contact} path="/contact" />
        <Route Component={Home} path="/" />
        <Route Component={Project} path="/project" />
        <Route Component={Research} path="/research" />
        <Route Component={NotFound} path="**" />
      </Routes>
    </Router>
  )
}

export default App;