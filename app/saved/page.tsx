import Link from "next/link";

export default function SavedPage() {
  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ padding: "52px 16px 24px" }}>
        <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.5 }}>Saved</div>
        <div style={{ fontSize: 13, color: "#a09d98", marginTop: 4 }}>Treatments you've bookmarked</div>
      </div>

      <div style={{ padding: "60px 32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>♡</div>
        <div style={{ fontSize: 16, fontWeight: 500, color: "#1a1917", marginBottom: 8 }}>Nothing saved yet</div>
        <div style={{ fontSize: 13, color: "#a09d98", lineHeight: 1.6, marginBottom: 24 }}>
          Tap the ♡ on any treatment detail page to save it here for later.
        </div>
        <Link href="/explore" style={{ padding: "12px 24px", borderRadius: 12, background: "#2563eb", color: "white", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
          Browse treatments
        </Link>
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "white", borderTop: "0.5px solid #e8e6e1", padding: "10px 0 24px", display: "flex", justifyContent: "space-around" }}>
        {[{ icon: "⌂", label: "Home", href: "/" }, { icon: "⊕", label: "Explore", href: "/explore" }, { icon: "♡", label: "Saved", href: "/saved", active: true }, { icon: "◯", label: "Profile", href: "/profile" }].map(n => (
          <Link key={n.label} href={n.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 20, color: n.active ? "#2563eb" : "#a09d98" }}>{n.icon}</span>
            <span style={{ fontSize: 10, color: n.active ? "#2563eb" : "#a09d98" }}>{n.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
