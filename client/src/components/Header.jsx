import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const userName = useSelector((state) => state.user.name);

  return (
    <div className="header" style={{ backgroundColor: "blue", color: "white", padding: "20px", textAlign: "center", width: "100%" }}>
      <strong style={{ color: "black", fontSize: "24px" }}>Application {userName}</strong>
    </div>
  );
}