import logo from './logo.svg';
import './App.css';
import Home from './Pages/home';
import Ediform from './Pages/form';
import ResponsiveAppBar from './Pages/Home2'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
 <>
 
<Router>
    
    <Routes>
  
      <Route path="/" element={<ResponsiveAppBar />} />   
      <Route path="/form" element={<Ediform />} />    
           
      
    </Routes>
  
  </Router>
 </>
    


 
   
  );
}

export default App;
