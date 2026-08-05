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
      <div style={{ padding: "52px 20px 20px" }}>
        <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: -1.5, color: "#1a1917" }}>
          AQ<span style={{ color: "#a09d98", fontWeight: 400 }}>.</span>
        </div>
        <div style={{ fontSize: 11, color: "#a09d98", letterSpacing: "0.9px", textTransform: "uppercase", marginTop: 4 }}>
          Aesthetic intelligence
        </div>
      </div>

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
          <div style={{ background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 18, padding: "18px 16px 14px", cursor: "pointer", height: "100%" }}>
            <div style={{ fontSize: 22, marginBottom: 14 }}>🎯</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#1a1917", marginBottom: 4 }}>Browse by goal</div>
            <div style={{ fontSize: 11, color: "#a09d98", lineHeight: 1.5 }}>Filter by what you want to improve</div>
            <div style={{ textAlign: "right", marginTop: 12, fontSize: 14, color: "#a09d98" }}>↗</div>
          </div>
        </Link>
      </div>

      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 20px" }} />

      <div style={{ padding: "0 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98" }}>Treatments</span>
          <Link href="/explore" style={{ fontSize: 13, color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>See all →</Link>
        </div>
        {treatments.map((t) => (
          <Link key={t.name} href={t.href} style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "0.5px solid #e8e6e1", cursor: "pointer" }}>
              <div style={{ width: 42, height: 42, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, background: t.type === "Energy" ? "#fffbeb" : "#eff6ff" }}>
                {t.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1917" }}>{t.name}</div>
                <div style={{ fontSize: 11, color: "#a09d98", marginTop: 2 }}>{t.desc}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 500, color: t.type === "Energy" ? "#92400e" : "#1d4ed8" }}>{t.type}</div>
                <div style={{ fontSize: 11, color: "#a09d98", marginTop: 3 }}>{t.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "white", borderTop: "0.5px solid #e8e6e1", padding: "10px 0 24px", display: "flex", justifyContent: "space-around" }}>
        {[{ icon: "⌂", label: "Home", href: "/", active: true }, { icon: "⊕", label: "Explore", href: "/explore" }, { icon: "♡", label: "Saved", href: "/saved" }, { icon: "◯", label: "Profile", href: "/profile" }].map((n) => (
          <Link key={n.label} href={n.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 20, color: n.active ? "#2563eb" : "#a09d98" }}>{n.icon}</span>
            <span style={{ fontSize: 10, color: n.active ? "#2563eb" : "#a09d98" }}>{n.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
