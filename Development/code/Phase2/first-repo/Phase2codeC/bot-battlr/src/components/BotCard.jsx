import React from "react";

function BotCard({ bot, onEnlist, onRelease }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>
        ❤️ {bot.health} | ⚔️ {bot.damage} | 🛡️ {bot.armor}
      </p>

      {onEnlist && <button onClick={() => onEnlist(bot)}>Enlist</button>}
      {onRelease && <button onClick={() => onRelease(bot)}>Release</button>}
    </div>
  );
}

export default BotCard;
