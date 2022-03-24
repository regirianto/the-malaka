import Benefits from "../../components/organism/Benefit/Index";
import Foreword from "../../components/organism/Foreword";
import Header from "../../components/organism/Header";
import Navbar from "../../components/organism/Navbar/Index";
import Services from "../../components/organism/Services/Index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Foreword />
      <Benefits />
    </div>
  );
}

export default App;
