"use client";

import { useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
  gear: string[];
  description: string;
  image: string;
}

function BerserkCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("/api/characters")
      .then(res => res.json())
      .then(data => setCharacters(data))
      .catch(err => console.error("Error fetching API:", err));
  }, []);

  return (
    <div style={{ padding: "20px", background: "#111", minHeight: "100vh", color: "#fff" }}>
      <h1>Berserk Characters</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {characters.map(c => (
          <div
            key={c.id}
            style={{
              background: "#222",
              padding: "10px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={c.image}
              alt={c.name}
              style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
            />
            <h2>{c.name}</h2>
            <p><strong>Gear:</strong> {c.gear.join(", ")}</p>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BerserkCharacters;
