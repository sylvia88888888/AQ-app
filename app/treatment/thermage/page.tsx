import Link from "next/link";

const fits = {
  good: [
    "Ages 35–55 with mild to moderate skin laxity — collagen is still responsive enough to rebuild",
    "Combination or normal skin — heat tolerance is better than very thin or sensitive skin",
    "Those wanting tightening without injectables or surgery",
  ],
  bad: [
    "Very thin or bony faces — less subcutaneous fat means less energy absorption and higher discomfort",
    "Severe laxity or deep jowls — results will be subtle; a surgical lift may be more effective",
    "Active skin infections, implanted metal devices, or pregnancy",
  ],
};

const myths = [
  { q: "More shots = better results", a: "Shot count (发数) is often used as a selling point. What matters is energy level and placement — 600 well-placed shots outperform 1,200 shallow ones." },
  { q: "You'll see results immediately", a: "Collagen rebuilds slowly. Most people see gradual improvement over 3–6 months. Day-one results from swelling are temporary." },
  { q: "It's the same as Ultherapy", a: "Different technologies. Thermage uses RF to tighten surface layers; Ultherapy uses ultrasound to reach deeper SMAS tissue. They target different depths and goals." },
];

const questions = [
  "What energy level and shot count do you recommend for my skin, and why?",
  "Are you using the FLX handpiece or an older model? What's the difference?",
  "How many Thermage treatments have you personally performed?",
  "Based on my face, do you think Thermage alone is enough or would you combine it with something?",
];

export default function ThermagePage() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <div className="top-nav">
        <Link href="/" className="back-btn">←</Link>
        <div style={{ flex: 1 }} />
        <button style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid var(--border)", background: "white", cursor: "pointer", fontSize: 16 }}>♡</button>
      </div>

      {/* Hero */}
      <div style={{ margin: "0 16px 20px", background: "#fffbeb", borderRadius: 18, padding: "18px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>⚡</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 19, fontWeight: 500 }}>Thermage FLX</div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }}>Energy · Radiofrequency tightening</div>
          </div>
          <div style={{ background: "white", borderRadius: 20, padding: "4px 10px", fontSize: 11, fontWeight: 500, color: "var(--accent)" }}>92% match</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[["Downtime", "None"], ["Sessions", "1 only"], ["Results last", "1–2 years"]].map(([l, v]) => (
            <div key={l} style={{ background: "white", borderRadius: 10, padding: "8px 10px" }}>
              <div style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 3 }}>{l}</div>
              <div style={{ fontSize: 12, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What it does */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">What it does</div>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>Thermage uses monopolar radiofrequency to heat the deep layers of skin, triggering collagen contraction and stimulating new collagen growth. The result is gradual tightening and smoothing — without surgery or downtime.</p>
      </div>

      <div className="divider" />

      {/* Who it's right for */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">Who it's right for</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {fits.good.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "10px 12px", background: "#f0fdf4", borderRadius: 12 }}>
              <span style={{ color: "#15803d", fontSize: 15, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: "#15803d", lineHeight: 1.6 }}>{f}</span>
            </div>
          ))}
          {fits.bad.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "10px 12px", background: "#fff1f2", borderRadius: 12 }}>
              <span style={{ color: "#be123c", fontSize: 15, flexShrink: 0 }}>✕</span>
              <span style={{ fontSize: 12, color: "#be123c", lineHeight: 1.6 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Myths */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">Common myths</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {myths.map((m, i) => (
            <div key={i} style={{ background: "#f7f6f3", border: "0.5px solid var(--border)", borderRadius: 12, padding: "12px 14px" }}>
              <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 5, display: "flex", gap: 6, alignItems: "flex-start" }}>
                <span style={{ color: "#b45309" }}>⚠</span> {m.q}
              </div>
              <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{m.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Questions */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">Questions to ask your provider</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {questions.map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "10px 12px", background: "#f7f6f3", border: "0.5px solid var(--border)", borderRadius: 12 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "var(--accent)", flexShrink: 0 }}>{i + 1}</div>
              <span style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{q}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Price */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">Price range</div>
        <div style={{ background: "#f7f6f3", border: "0.5px solid var(--border)", borderRadius: 14, padding: "4px 16px" }}>
          {[["Los Angeles", "$2,500 – $5,000"], ["US average", "$2,000 – $4,500"], ["Price per shot", "$3 – $8 / shot"]].map(([loc, price], i, arr) => (
            <div key={loc} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < arr.length - 1 ? "0.5px solid var(--border)" : "none" }}>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{loc}</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{price}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center", padding: "0 20px 20px", lineHeight: 1.6 }}>
        For reference only. Results vary by provider skill, device model, and individual skin condition.
      </p>
    </div>
  );
}
