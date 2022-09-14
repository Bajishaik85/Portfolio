import './App.css';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Mysection from './Components/Mysection';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Notfound from './Components/Notfound';



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
          <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<Mysection/>} />
          <Route exact path='/education' element={<Education/>} />
          <Route exact path='/skills' element={<About/>} />
          <Route exact path='/contact' element={<Contactus/>} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      


    </>
  );
}

export default App;

