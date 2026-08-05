"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Treatment {
  name: string; type: string; match: number; reason: string;
  onsetTime: string; resultsLast: string; downtime: string;
  sessions: string; priceRange: string; isBestMatch: boolean; isSurgical: boolean;
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

  const typeColor = (type: string) => {
    if (type === "Surgical") return { bg: "#fdf2f8", text: "#86198f" };
    if (type === "Dental") return { bg: "#f0f9ff", text: "#0369a1" };
    if (type === "Injectable") return { bg: "#eff6ff", text: "#1d4ed8" };
    return { bg: "#fffbeb", text: "#92400e" };
  };

  const typeIcon = (type: string) => {
    if (type === "Surgical") return "✚";
    if (type === "Dental") return "◻";
    if (type === "Injectable") return "💉";
    return "⚡";
  };

  const hasSurgical = treatments.some(t => t.isSurgical);

  return (
    <div style={{ paddingBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", padding: "52px 16px 16px", gap: 12 }}>
        <Link href="/goal" style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid #d0cdc7", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1917", background: "white", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>←</Link>
        <span style={{ fontSize: 17, fontWeight: 500 }}>Your results</span>
      </div>

      {/* Profile summary */}
      <div style={{ margin: "0 16px 20px", background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 14, padding: "14px 16px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 8 }}>Based on your profile</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {goals.map(g => <span key={g} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "#eff6ff", color: "#2563eb", border: "0.5px solid #bfdbfe", fontWeight: 500 }}>{g.replace(/-/g, " ")}</span>)}
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid #e8e6e1", color: "#6b6863" }}>Age {age}</span>
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid #e8e6e1", color: "#6b6863" }}>{Number(budget) >= 20000 ? "$20,000+" : `$${Number(budget).toLocaleString()}`} budget</span>
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid #e8e6e1", color: "#6b6863" }}>{skin} skin</span>
        </div>
      </div>

      {/* Surgical warning */}
      {hasSurgical && (
        <div style={{ margin: "0 16px 16px", background: "#fdf2f8", border: "1px solid #f0abfc", borderRadius: 12, padding: "12px 14px", display: "flex", gap: 10 }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#86198f", marginBottom: 3 }}>Surgical procedures included</div>
            <div style={{ fontSize: 11, color: "#a21caf", lineHeight: 1.6 }}>Surgical results are for general reference only. Risks, recovery, and outcomes vary significantly by surgeon, technique, and individual health. Always consult a board-certified surgeon before making any decisions.</div>
          </div>
        </div>
      )}

      <div style={{ padding: "0 16px", display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98" }}>Recommended for you</span>
        {!loading && <span style={{ fontSize: 11, color: "#a09d98" }}>{treatments.length} matches</span>}
      </div>

      {loading && (
        <div style={{ padding: "40px 16px", textAlign: "center" }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>✦</div>
          <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>AI is analyzing your profile</div>
          <div style={{ fontSize: 12, color: "#a09d98" }}>This takes a few seconds…</div>
        </div>
      )}

      {error && <div style={{ padding: "20px 16px", color: "#6b6863", fontSize: 13 }}>{error}</div>}

      {treatments.map((t, i) => {
        const tc = typeColor(t.type);
        const slug = t.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        return (
          <Link key={i} href={`/treatment/${slug}?match=${t.match}`} style={{ textDecoration: "none" }}>
            <div style={{ margin: "0 16px 12px", background: "white", border: t.isBestMatch ? "1.5px solid #2563eb" : "0.5px solid #e8e6e1", borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
              {/* Header */}
              <div style={{ padding: "14px 16px 10px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: tc.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  {typeIcon(t.type)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "#1a1917" }}>{t.name}</span>
                    {t.isBestMatch && <span style={{ fontSize: 10, fontWeight: 500, background: "#eff6ff", color: "#2563eb", borderRadius: 20, padding: "3px 8px", whiteSpace: "nowrap" }}>Best match</span>}
                  </div>
                  <span style={{ fontSize: 11, color: "#a09d98" }}>{t.type}</span>
                </div>
              </div>

              {/* Match bar */}
              <div style={{ padding: "0 16px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, color: "#a09d98", whiteSpace: "nowrap" }}>Match</span>
                <div style={{ flex: 1, height: 4, background: "#f0ede8", borderRadius: 2 }}>
                  <div style={{ width: `${t.match}%`, height: "100%", background: "#2563eb", borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 500, color: "#2563eb", whiteSpace: "nowrap" }}>{t.match}%</span>
              </div>

              {/* Reason */}
              <div style={{ padding: "0 16px 12px" }}>
                <p style={{ fontSize: 12, color: "#6b6863", lineHeight: 1.6, marginBottom: 10 }}>{t.reason}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  <div style={{ background: "#f7f6f3", borderRadius: 10, padding: "8px 10px" }}>
                    <div style={{ fontSize: 10, color: "#a09d98", marginBottom: 3 }}>Results onset</div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1917" }}>{t.onsetTime}</div>
                  </div>
                  <div style={{ background: "#f7f6f3", borderRadius: 10, padding: "8px 10px" }}>
                    <div style={{ fontSize: 10, color: "#a09d98", marginBottom: 3 }}>Results last</div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1917" }}>{t.resultsLast}</div>
                  </div>
                  <div style={{ background: "#f7f6f3", borderRadius: 10, padding: "8px 10px" }}>
                    <div style={{ fontSize: 10, color: "#a09d98", marginBottom: 3 }}>Downtime</div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1917" }}>{t.downtime}</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{ borderTop: "0.5px solid #e8e6e1", padding: "11px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#1a1917" }}>{t.priceRange}</span>
                <span style={{ fontSize: 12, color: "#2563eb" }}>Learn more →</span>
              </div>
            </div>
          </Link>
        );
      })}

      <p style={{ fontSize: 11, color: "#a09d98", textAlign: "center", padding: "8px 20px 0", lineHeight: 1.6 }}>
        For reference only. Results vary by provider, technique, and individual response.
      </p>
    </div>
  );
}

export default function ResultsPage() {
  return <Suspense fallback={<div style={{ padding: 40, textAlign: "center" }}>Loading…</div>}><ResultsContent /></Suspense>;
}
