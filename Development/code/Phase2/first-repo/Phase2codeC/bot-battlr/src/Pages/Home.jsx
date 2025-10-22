import React, { useState } from "react";
import BotCollection from "../components/BotCollection";
import YourBotArmy from "../components/YourBotArmy";

function Home() {
  const [army, setArmy] = useState([]);

  const handleEnlist = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy army={army} onRelease={handleRelease} />
      <BotCollection onEnlist={handleEnlist} />
    </div>
  );
}

export default Home;
