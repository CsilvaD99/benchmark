import "./App.css";
import reducer from "./Reducers/rootReducer";

function App() {
  return (
    <div className="App">
      <h1 className="Title">BenchMark</h1>

      <h3>
        Welcome to Benckmark, a website designed for anyone wanting to compile
        the best performing computer parts for their future Gaming Pc.
      </h3>
      <button
        className="Button2"
        onClick={() => {
          window.location.href = "/cpu";
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
