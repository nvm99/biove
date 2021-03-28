
import './App.css';
import Header from "./Components/Header"
import Slider from "./Components/Slider"
import Introduction from "./Components/Introduction"
import Heatmap from "./Components/Heatmap";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Slider></Slider>
     <Introduction></Introduction>
     <Heatmap></Heatmap>
     <Testimonial></Testimonial>
     <Footer></Footer>
    </div>
  );
}

export default App;
