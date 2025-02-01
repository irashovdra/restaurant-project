import "./App.css";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Offerings } from "./components/Offerings/Offerings";
import { Favorites } from "./components/Favorites/Favorites";
import { Reviews } from "./components/Reviews/Reviews";
import { Subscribtion } from "./components/Subscription/Subscribtion";
import { Footer } from "./components/Footer/Footer";
import { OrderModal } from "./components/OrderModal/OrderModal";
import React from "react";

class App extends React.Component {
  state = {
    modalStatus: false,
  };

  openModal = () => {
    this.setState({ modalStatus: true });
  };

  closeModal = () => {
    this.setState({ modalStatus: false });
  };

  // checkStatusModal(openOrderModal) {
  //   this.setState({ openModal: openOrderModal });
  //   console.log(this.state.openOrderModal);
  // }

  render() {
    return (
      <div className="App">
        <Header openModal={this.openModal} />
        <Hero openModal={this.openModal} />
        <Offerings openModal={this.openModal} />
        <Favorites />
        <Reviews />
        <Subscribtion />
        <Footer />
        {this.state.modalStatus && <OrderModal closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default App;
