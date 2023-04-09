// import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route to={'/'} element={<Home/>}/>
      <Route to={'about'} element={<About/>}/>
    </Routes>    
   </Router>
  );
}

export default App;
