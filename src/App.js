// import logo from './logo.svg';
// ----------------------------------------------------


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import routes
import Home from "./routes/Home";
// import About from "./routes/About";
import HeroDetails from "./routes/HeroDetails";

// import compopnets
import Navbar from "./compopents/Navbar";

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      {/* <Route path={'/about'} element={<About/>}/> */}
      <Route path={'/:id'} element={<HeroDetails/>}/>
    </Routes>    
   </Router>
  );
}

export default App;
