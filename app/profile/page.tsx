import Link from "next/link";

export default function ProfilePage() {
  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ padding: "52px 16px 24px" }}>
        <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.5 }}>Profile</div>
      </div>

      <div style={{ padding: "0 16px 24px", display: "flex", flex: 1, flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#f7f6f3", border: "0.5px solid #e8e6e1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, marginBottom: 12 }}>◯</div>
        <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>Guest</div>
        <div style={{ fontSize: 13, color: "#a09d98", marginBottom: 28 }}>Sign up to save your history</div>
        <div style={{ display: "flex", gap: 10, width: "100%" }}>
          <button style={{ flex: 1, padding: "13px", borderRadius: 12, background: "#2563eb", color: "white", fontSize: 14, fontWeight: 500, border: "none", cursor: "pointer" }}>Sign up</button>
          <button style={{ flex: 1, padding: "13px", borderRadius: 12, background: "#f7f6f3", color: "#1a1917", fontSize: 14, fontWeight: 500, border: "0.5px solid #e8e6e1", cursor: "pointer" }}>Log in</button>
        </div>
      </div>

      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 20px" }} />

      <div style={{ padding: "0 16px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 14 }}>Settings</div>
        {["About AQ", "Privacy policy", "Terms of use", "Feedback"].map((item, i, arr) => (
          <div key={item} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: i < arr.length - 1 ? "0.5px solid #e8e6e1" : "none" }}>
            <span style={{ fontSize: 14, color: "#1a1917" }}>{item}</span>
            <span style={{ color: "#a09d98" }}>→</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "20px 16px 0", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#a09d98" }}>AQ · Aesthetic Intelligence</div>
        <div style={{ fontSize: 11, color: "#a09d98", marginTop: 4 }}>Version 1.0 · For reference only</div>
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "white", borderTop: "0.5px solid #e8e6e1", padding: "10px 0 24px", display: "flex", justifyContent: "space-around" }}>
        {[{ icon: "⌂", label: "Home", href: "/" }, { icon: "⊕", label: "Explore", href: "/explore" }, { icon: "♡", label: "Saved", href: "/saved" }, { icon: "◯", label: "Profile", href: "/profile", active: true }].map(n => (
          <Link key={n.label} href={n.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 20, color: n.active ? "#2563eb" : "#a09d98" }}>{n.icon}</span>
            <span style={{ fontSize: 10, color: n.active ? "#2563eb" : "#a09d98" }}>{n.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
