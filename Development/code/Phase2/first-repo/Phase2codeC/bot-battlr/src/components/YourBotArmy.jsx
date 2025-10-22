import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="grid">
        {army.length > 0 ? (
          army.map((bot) => (
            <BotCard key={bot.id} bot={bot} onRelease={onRelease} />
          ))
        ) : (
          <p>No bots enlisted yet.</p>
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;
