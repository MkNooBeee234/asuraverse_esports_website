import { TICKER_ITEMS } from "@/lib/constants";

export default function TickerBar() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ background: "#FF7B00", height: 38, overflow: "hidden", display: "flex", alignItems: "center" }}>
      <div
        className="ticker-track"
        style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-space,'Space Mono',monospace)",
              fontSize: 11, letterSpacing: 2, color: "#fff",
              padding: "0 32px", textTransform: "uppercase",
              borderRight: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
