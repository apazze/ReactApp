import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function BreakingBad() {
  const [personagens, setPersonagens] = useState([]);

  async function obterPersonagens() {
    const response = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    const data = await response.json();
    setPersonagens(data);
  }

  useEffect(() => {
    obterPersonagens();
  }, []);

  return (
    <div>
      {personagens.map((personagem) => {
        return (
          <Card
            image={personagem.img}
            title={personagem.name}
            description={personagem.nickname}
          />
        );
      })}
    </div>
  );
}
