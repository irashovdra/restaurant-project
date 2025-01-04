import "./App.css";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Offerings } from "./components/Offerings/Offerings";
import { Favorites } from "./components/Favorites/Favorites";
import { Reviews } from "./components/Reviews/Reviews";
import { Subscribtion } from "./components/Subscription/Subscribtion";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Offerings />
      <Favorites />
      <Reviews />
      <Subscribtion />
      <Footer />
    </div>
  );
}

export default App;
