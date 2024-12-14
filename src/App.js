import "./App.css";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Offerings } from "./components/Offerings/Offerings";
import { Favorites } from "./components/Favorites/Favorites";
import { Reviews } from "./components/Reviews/Reviews";
import { Subscription } from "./components/Subscription/Subscribtion";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Offerings />
      <Favorites />
      <Reviews />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
