import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <div className="App">
      <h2>Consultorio Odontológico</h2>

      <ContextProvider>
        <Navbar />
        <Outlet />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
