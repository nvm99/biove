
import './App.css';
import Header from "./Components/Header"
import Slider from "./Components/Slider"
import Introduction from "./Components/Introduction"
import Heatmap from "./Components/Heatmap";
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Slider></Slider>
     <Introduction></Introduction>
     <Heatmap></Heatmap>
    </div>
  );
}

export default App;
