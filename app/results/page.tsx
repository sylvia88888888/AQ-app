"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Treatment {
  name: string; type: string; match: number; reason: string;
  downtime: string; sessions: string; results: string;
  priceRange: string; isBestMatch: boolean;
}

function ResultsContent() {
  const params = useSearchParams();
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const goals = params.get("goals")?.split(",").filter(Boolean) || [];
  const concerns = params.get("concerns")?.split(",").filter(Boolean) || [];
  const age = params.get("age") || "35";
  const budget = params.get("budget") || "2000";
  const skin = params.get("skin") || "Normal";

  useEffect(() => {
    fetch("/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goals, concerns, age: Number(age), budget: Number(budget), skin }),
    })
      .then(r => r.json())
      .then(d => { setTreatments(d.recommendations || []); setLoading(false); })
      .catch(() => { setError("Something went wrong. Please try again."); setLoading(false); });
  }, []);

  const typeColor = (type: string) => type === "Energy" ? { bg: "#fffbeb", text: "#92400e" } : { bg: "#eff6ff", text: "#1d4ed8" };

  return (
    <div style={{ paddingBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", padding: "52px 16px 16px", gap: 12 }}>
        <Link href="/goal" style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-primary)", background: "white", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>←</Link>
        <span style={{ fontSize: 17, fontWeight: 500 }}>Your results</span>
      </div>

      {/* Profile summary */}
      <div style={{ margin: "0 16px 20px", background: "#f7f6f3", border: "0.5px solid var(--border)", borderRadius: 14, padding: "14px 16px" }}>
        <div className="section-label" style={{ marginBottom: 8 }}>Based on your profile</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {goals.map(g => <span key={g} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "var(--accent-light)", color: "var(--accent)", border: "0.5px solid var(--accent-border)", fontWeight: 500 }}>{g.replace("-", " ")}</span>)}
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid var(--border)", color: "var(--text-secondary)" }}>Age {age}</span>
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid var(--border)", color: "var(--text-secondary)" }}>${Number(budget).toLocaleString()} budget</span>
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid var(--border)", color: "var(--text-secondary)" }}>{skin} skin</span>
        </div>
      </div>

      {/* Section header */}
      <div style={{ padding: "0 16px", display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
        <span className="section-label" style={{ margin: 0 }}>Recommended for you</span>
        {!loading && <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{treatments.length} matches</span>}
      </div>

      {loading && (
        <div style={{ padding: "40px 16px", textAlign: "center" }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>✦</div>
          <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>AI is analyzing your profile</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>This takes a few seconds…</div>
        </div>
      )}

      {error && <div style={{ padding: "20px 16px", color: "var(--text-secondary)", fontSize: 13 }}>{error}</div>}

      {treatments.map((t, i) => {
        const tc = typeColor(t.type);
        return (
          <Link key={i} href={`/treatment/${t.name.toLowerCase().replace(/\s+/g, "-")}?match=${t.match}`} style={{ textDecoration: "none" }}>
            <div style={{ margin: "0 16px 12px", background: "white", border: t.isBestMatch ? "1.5px solid var(--accent)" : "0.5px solid var(--border)", borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
              {/* Card header */}
              <div style={{ padding: "14px 16px 10px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: tc.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  {t.type === "Energy" ? "⚡" : "💉"}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{t.name}</span>
                    {t.isBestMatch && <span style={{ fontSize: 10, fontWeight: 500, background: "var(--accent-light)", color: "var(--accent)", borderRadius: 20, padding: "3px 8px", whiteSpace: "nowrap" }}>Best match</span>}
                  </div>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.type}</span>
                </div>
              </div>
              {/* Match bar */}
              <div style={{ padding: "0 16px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, color: "var(--text-muted)", whiteSpace: "nowrap" }}>Match</span>
                <div style={{ flex: 1, height: 4, background: "#f0ede8", borderRadius: 2 }}>
                  <div style={{ width: `${t.match}%`, height: "100%", background: "var(--accent)", borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 500, color: "var(--accent)", whiteSpace: "nowrap" }}>{t.match}%</span>
              </div>
              {/* Reason */}
              <div style={{ padding: "0 16px 12px" }}>
                <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 10 }}>{t.reason}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[["Downtime", t.downtime], ["Sessions", t.sessions], ["Results", t.results]].map(([label, val]) => (
                    <div key={label} style={{ background: "#f7f6f3", borderRadius: 10, padding: "8px 10px" }}>
                      <div style={{ fontSize: 10, color: "var(--text-muted)", marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: 12, fontWeight: 500 }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Footer */}
              <div style={{ borderTop: "0.5px solid var(--border)", padding: "11px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{t.priceRange}</span>
                <span style={{ fontSize: 12, color: "var(--accent)" }}>Learn more →</span>
              </div>
            </div>
          </Link>
        );
      })}

      <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center", padding: "8px 20px 0", lineHeight: 1.6 }}>
        For reference only. Results vary by provider, technique, and individual response.
      </p>
    </div>
  );
}

export default function ResultsPage() {
  return <Suspense fallback={<div style={{ padding: 40, textAlign: "center" }}>Loading…</div>}><ResultsContent /></Suspense>;
}
