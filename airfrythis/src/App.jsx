import Welcome from "./Components/Welcome/Welcome";
import Header from "./Components/Header/Header";
import FryerCard from "./Components/FryerCard/FryerCard";
import Form from "./Components/Form/Form";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Header title="AIR FRY THIS" />
      <Form />
      <FryerCard />
    </div>
  );
}

export default App;
