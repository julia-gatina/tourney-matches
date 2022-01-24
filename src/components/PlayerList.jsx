import React from "react"; //optional
import Player from "./Player";


function PlayerList(props) {
  const parsedPlayerData = props.parsedPlayerData;
  const onePlayer = parsedPlayerData[0];

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player {...onePlayer} />
    </section>
  );
}

export default PlayerList;