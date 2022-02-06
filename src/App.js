import "./App.css";
import AutocorrectTextarea from "./components/AutocorrectTextarea";

function App() {
  return (
    <div className="App">
      <AutocorrectTextarea corrections={{ realy: "really", wierd: "weird" }} />
    </div>
  );
}

export default App;
