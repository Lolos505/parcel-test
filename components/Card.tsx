import React from "react";

interface CardProps {
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
}

const Card: React.FC<CardProps> = ({ name, houseColours, founder, animal }) => {
  const colours = houseColours.split(" and ").map((color) => {
    switch (color.toLowerCase()) {
      case "scarlet":
        return "#ff2400";
      case "gold":
        return "#ffd700";
      case "blue":
        return "#0000FF";
      case "bronze":
        return "#CD7F32";
      default:
        return color;
    }
  });

  const gradientStyle = {
    background: `linear-gradient(to right, ${colours.join(", ")})`,
    height: "30px",
    marginBottom: "20px",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px auto",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>{name}</h3>
        <span>{animal}</span>
      </div>
      <div style={gradientStyle}></div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Founder:</span>
        <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
          {founder}
        </span>
      </div>
    </div>
  );
};

export default Card;
