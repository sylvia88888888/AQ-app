import Link from "next/link";

const treatments = [
  { name: "Thermage FLX", desc: "Skin tightening · RF energy", price: "$2k – $5k", type: "Energy", icon: "⚡", href: "/treatment/thermage-flx" },
  { name: "Ultherapy", desc: "Lifting · Ultrasound", price: "$3k – $6k", type: "Energy", icon: "〜", href: "/treatment/ultherapy" },
  { name: "Filler", desc: "Volume & contour · HA", price: "$600 – $2k", type: "Injectable", icon: "💧", href: "/treatment/filler" },
  { name: "Botox", desc: "Wrinkle relaxing · Neurotoxin", price: "$300 – $800", type: "Injectable", icon: "✦", href: "/treatment/botox" },
];

export default function Home() {
  return (
    <div style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ padding: "52px 20px 20px" }}>
        <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: -1.5, color: "var(--text-primary)" }}>
          AQ<span style={{ color: "var(--text-muted)", fontWeight: 400 }}>.</span>
        </div>
        <div style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.9px", textTransform: "uppercase", marginTop: 4 }}>
          Aesthetic intelligence
        </div>
      </div>

      {/* Entry cards */}
      <div style={{ padding: "0 16px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <Link href="/scan" style={{ textDecoration: "none" }}>
          <div style={{ background: "#1a1917", borderRadius: 18, padding: "18px 16px 14px", cursor: "pointer", height: "100%" }}>
            <div style={{ fontSize: 22, marginBottom: 14 }}>📸</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#f1efe8", marginBottom: 4 }}>Scan my face</div>
            <div style={{ fontSize: 11, color: "#888780", lineHeight: 1.5 }}>AI reads your skin in seconds</div>
            <div style={{ textAlign: "right", marginTop: 12, fontSize: 14, color: "#888780" }}>↗</div>
          </div>
        </Link>
        <Link href="/goal" style={{ textDecoration: "none" }}>
          <div style={{ background: "#f7f6f3", border: "0.5px solid var(--border)", borderRadius: 18, padding: "18px 16px 14px", cursor: "pointer", height: "100%" }}>
            <div style={{ fontSize: 22, marginBottom: 14 }}>🎯</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", marginBottom: 4 }}>Browse by goal</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>Filter by what you want to improve</div>
            <div style={{ textAlign: "right", marginTop: 12, fontSize: 14, color: "var(--text-muted)" }}>↗</div>
          </div>
        </Link>
      </div>

      {/* Divider */}
      <div style={{ height: "0.5px", background: "var(--border)", margin: "0 16px 20px" }} />

      {/* Treatments */}
      <div style={{ padding: "0 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "var(--text-muted)" }}>Treatments</span>
          <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>See all</span>
        </div>
        {treatments.map((t) => (
          <Link key={t.name} href={t.href} style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "0.5px solid var(--border)", cursor: "pointer" }}>
              <div style={{
                width: 42, height: 42, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
                background: t.type === "Energy" ? "#fffbeb" : "#eff6ff",
              }}>
                {t.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{t.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{t.desc}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 500, color: t.type === "Energy" ? "#92400e" : "#1d4ed8" }}>{t.type}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>{t.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "white", borderTop: "0.5px solid var(--border)", padding: "10px 0 24px", display: "flex", justifyContent: "space-around" }}>
        {[{ icon: "⌂", label: "Home", active: true }, { icon: "⊕", label: "Explore" }, { icon: "♡", label: "Saved" }, { icon: "◯", label: "Profile" }].map((n) => (
          <div key={n.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 20, color: n.active ? "var(--accent)" : "var(--text-muted)" }}>{n.icon}</span>
            <span style={{ fontSize: 10, color: n.active ? "var(--accent)" : "var(--text-muted)" }}>{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
