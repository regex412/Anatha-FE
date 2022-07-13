import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {About} from "./components/About/About";
import {Intro} from "./components/Intro/Intro";
import {CryptoVideo} from "./components/CryptoVideo/CryptoVideo";
import {IntroTWO} from "./components/IntroTWO/IntroTWO";
import {EthosIMG} from "./components/EthosIMG/EthosIMG";
import {ParticipateIMG} from "./components/ParticipateIMG/ParticipateIMG";
import {IdeaIMG} from "./components/IdeaIMG/IdeaIMG";
import {MountIMG} from "./components/MountIMG/MountIMG";
import {KnowMore} from "./components/KnowMore/KnowMore";
import {Interested} from "./components/Interested/Interested";
import {Bucky} from "./components/Bucky/Bucky";
import {Footer} from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
        <About />
        <Intro />
        <CryptoVideo />
        <IntroTWO />
        <EthosIMG />
        <ParticipateIMG />
        <IdeaIMG />
        <MountIMG />
        <KnowMore />
        <Interested />
        <Bucky />
      <Footer />
    </>
  );
}

export default App;
