// imports
import Navbar from "./Navbar";
import Home from "./Home";

// main app component
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
