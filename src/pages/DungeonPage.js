import React from "react";
import { useParams } from "react-router-dom";
import Season1 from "../data/Season1";
import Season2 from "../data/Season2";

const allSeasons = [Season1, Season2];

function DungeonPage() {
  const { expansion, season, dungeon } = useParams();

  const seasonData = allSeasons.find(
    (s) => s.expansion === expansion && s.season.toString() === season
  );
  const dungeonDetails = seasonData?.dungeons.find((d) => d.name === dungeon);

  if (!dungeonDetails) {
    return (
      <div className="text-center text-red-500">
        <h1 className="text-2xl font-bold">404</h1>
        <p>Dungeon not found!</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{dungeonDetails.title}</h1>
      <p className="text-lg mt-2">
        <strong>Location:</strong> {dungeonDetails.location}
      </p>
      <p className="mt-4">Detailed description coming soon!</p>
    </div>
  );
}

export default DungeonPage;
