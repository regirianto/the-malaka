import Author from "../../components/organism/Author";
import Benefits from "../../components/organism/Benefit/Index";
import Footer from "../../components/organism/Footer";
import Foreword from "../../components/organism/Foreword";
import Header from "../../components/organism/Header";
import Navbar from "../../components/organism/Navbar/Index";
import Order from "../../components/organism/Order";
import Price from "../../components/organism/Price";
import Services from "../../components/organism/Services/Index";
import Testimonial from "../../components/organism/Testimonial";

function App() {
  return (
    <div className="App overflow-x-hidden">
      {/* <Navbar /> */}
      <Header />
      <Services />
      <Foreword />
      <Benefits />
      <Price />
      <Author />
      <Testimonial />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
