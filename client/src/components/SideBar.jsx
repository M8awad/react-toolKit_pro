import React from "react";
import { useSelector } from "react-redux";


export default function Sidebar() {
  const { name, email } = useSelector((state) => state.user);

  return (
    <div className="sidebar" style={{ backgroundColor: "rgb(30, 136, 229)", color: "white", width: "165px", height: "80vh", display: "flex", flexDirection: "column" }}>
      <div className="sidebar-header" style={{ fontSize: "22px", fontWeight: "bold", padding: "14px", borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>Menu</div>
      <div className="sidebar-items" style={{ flexGrow: "1", padding: "28px", overflowY: "auto" }}>
        <div className="sidebar-item" style={{ padding: "10px 0px", cursor: "pointer" }}>{name} 1</div>
        <div className="sidebar-item" style={{ padding: "10px 0px", cursor: "pointer" }}>{email} 2</div>
        <div className="sidebar-item" style={{ padding: "10px 0px", cursor: "pointer" }}>{name} & {email}</div>
      </div>
    </div>
  );
}