import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/portfolio"
import Contactus from "./Pages/Contactus/Contactus";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>

      </Routes>
    </BrowserRouter>
   
  );
}
export default App;