import "./App.css";

import {Routes, Route} from "react-router-dom";

import IdCardPage from "./pages/IdCardPage";
import GreetingsPage from "./pages/GreetingsPage";
import RandomPage from "./pages/RandomPage";
import BoxColorPage from "./pages/BoxColorPage";
import CreditCardPage from "./pages/CreditCardPage";
import RatingPage from "./pages/RatingPage";
import DriverCardPage from "./pages/DriverCardPage";
import LikeButtonPage from "./pages/LikeButtonPage";
import ClickablePicturePage from "./pages/ClickablePicturePage";
import DicePage from "./pages/DicePage";
import CarouselPage from "./pages/CarouselPage";
import NumbersTablePage from "./pages/NumbersTablePage";
import FaceBookPage from "./pages/FaceBookPage";
import FaceBookAvancadoPage from "./pages/FaceBookAvancadoPage";
import SignupPagePage from "./pages/SignupPagePage";
import HomePage from "./pages/HomePage";
import SingleColorPickerPage from "./pages/SingleColorPickerPage";

function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/IdCard" element={<IdCardPage />} />
      <Route path="/Greetings" element={<GreetingsPage />} />
      <Route path="/Random" element={<RandomPage />} />
      <Route path="/BoxColor" element={<BoxColorPage />} />
      <Route path="/CreditCard" element={<CreditCardPage />} />
      <Route path="/Rating" element={<RatingPage />} />
      <Route path="/DriverCard" element={<DriverCardPage />} />
      <Route path="/LikeButton" element={<LikeButtonPage />} />
      <Route path="/ClickablePicture" element={<ClickablePicturePage />} />
      <Route path="/Dice" element={<DicePage />} />
      <Route path="/Carousel" element={<CarouselPage />} />
      <Route path="/NumbersTable" element={<NumbersTablePage />} />
      <Route path="/FaceBook" element={<FaceBookPage />} />
      <Route path="/FaceBookAvancado" element={<FaceBookAvancadoPage />} />
      <Route path="/SignupPage" element={<SignupPagePage />} />
      <Route path="/SingleColorPicker" element={<SingleColorPickerPage />} />
     </Routes>

      
    </div>
  );
}

export default App;
