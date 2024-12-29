import React, { useState } from "react";
import { Link } from "react-router-dom";
import Season1 from "../data/Season1";
import Season2 from "../data/Season2";

const allSeasons = [Season1, Season2]; // Combine seasons

function Homepage() {
  const [expandedSeason, setExpandedSeason] = useState(null);

  const toggleSeason = (season) => {
    setExpandedSeason(expandedSeason === season ? null : season);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Wow Notes</h1>
      {allSeasons.map((season) => (
        <div key={season.season} className="mb-4 border p-4 rounded">
          <div
            className="cursor-pointer text-lg font-semibold"
            onClick={() => toggleSeason(season.season)}
          >
            {season.expansion.toUpperCase()} - Season {season.season}
          </div>
          {expandedSeason === season.season && (
            <div className="mt-2">
              {season.dungeons.map((dungeon) => (
                <div key={dungeon.name} className="ml-4">
                  <Link
                    to={`/${season.expansion}/${season.season}/${dungeon.name}`}
                    className="text-blue-500 underline"
                  >
                    {dungeon.title} - {dungeon.location}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Homepage;
