import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div>
      <Navbar />

      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
