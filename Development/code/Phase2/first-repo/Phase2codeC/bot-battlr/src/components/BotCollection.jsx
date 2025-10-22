import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ onEnlist }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="grid">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
