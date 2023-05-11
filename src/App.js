import logo from './logo.svg';
import './App.css';
import Home from './Pages/home';
import Ediform from './Pages/form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
 <>
 
<Router>
    
    <Routes>
  
      <Route path="/" element={<Home />} />   
      <Route path="/form" element={<Ediform />} />         
      
    </Routes>
  
  </Router>
 </>
    


 
   
  );
}

export default App;
