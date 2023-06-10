import BmiCalculator from "./BmiCalculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BmiCalculator defaultHeight={155} defaultWeight={85} />
      <footer>
        This app is <a href="/">open-sourced</a> on GitHub and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
