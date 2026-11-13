"use client";

import { FaPrint } from "react-icons/fa";

export default function PrintButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      className="btn-primary"
      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", cursor: "pointer" }}
    >
      <FaPrint size={14} /> Print / Save PDF
    </button>
  );
}
