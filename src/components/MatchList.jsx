import React from "react"; //optional
import Match from "./Match";
import matchData from '../data/matchData';

function MatchList() {
  const oneMatch = matchData[1];
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      <Match {...oneMatch} />
    </section>
  );
}

export default MatchList;