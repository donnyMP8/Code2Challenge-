import React, { useState } from "react";
import YourBotArmy from "../components/YourBotArmy";

function ArmyPage() {
  const [army, setArmy] = useState([]);

  const handleRelease = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy army={army} onRelease={handleRelease} />
    </div>
  );
}

export default ArmyPage;
