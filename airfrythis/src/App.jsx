import Header from "./Components/Header/Header";
import FryerCard from "./Components/FryerCard/FryerCard";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header title="AIR FRY THIS" />
      <FryerCard />
    </div>
  );
}

export default App;
