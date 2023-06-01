
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Landingpage/Home/Home'

import Workflow from './Landingpage/Workflow/Workflow'
import Team from './Landingpage/Team/Team'
import Contact from './Landingpage/Contact/Contact'
import Navbar from './Landingpage/Navbar/Navbar';
import Footer from './Landingpage/Footer/Footer';
import Gallery from './Landingpage/Gallery/Gallery';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sustainability" element={<Workflow/>}/>
      <Route path="/team" element={<Team/>}/>
       <Route path="/contact" element={<Contact/>}/>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/' element={<Footer/>}/>
      <Route path='/gallery' element={<Gallery/>}/>

     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
