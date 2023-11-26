
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
      <div className="App">
           <h2>Consultorio Odontológico</h2>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
