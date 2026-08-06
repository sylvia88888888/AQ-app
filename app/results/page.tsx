"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Finding {
  area: string; level: string; description: string; color: string;
}
interface FaceAnalysis {
  overallScore: number; summary: string; findings: Finding[];
  skinType: string; estimatedAge: string; topConcerns: string[];
  recommendedFocus: string;
}
interface Treatment {
  name: string; type: string; match: number; reason: string;
  onsetTime: string; resultsLast: string; downtime: string;
  sessions: string; priceRange: string; isBestMatch: boolean; isSurgical: boolean;
}

const levelColor = (color: string) => {
  if (color === "green") return { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" };
  if (color === "yellow") return { bg: "#fffbeb", text: "#92400e", border: "#fde68a" };
  if (color === "orange") return { bg: "#fff7ed", text: "#9a3412", border: "#fed7aa" };
  return { bg: "#fff1f2", text: "#be123c", border: "#fecdd3" };
};

function ResultsContent() {
  const params = useSearchParams();
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [faceAnalysis, setFaceAnalysis] = useState<FaceAnalysis | null>(null);
  const [loadingTreatments, setLoadingTreatments] = useState(true);
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const [hasPhotos, setHasPhotos] = useState(false);

  const goals = params.get("goals")?.split(",").filter(Boolean) || [];
  const concerns = params.get("concerns")?.split(",").filter(Boolean) || [];
  const age = params.get("age") || "35";
  const budget = params.get("budget") || "2000";
  const skin = params.get("skin") || "Normal";

  useEffect(() => {
    // Check for photos from scan
    let photos: string[] = [];
    try {
      const stored = sessionStorage.getItem("aq-photos");
      if (stored) photos = JSON.parse(stored);
    } catch {}

    if (photos.length > 0) {
      setHasPhotos(true);
      setLoadingPhotos(true);
      // Analyze face photos
      fetch("/api/analyze-face", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ photos }),
      })
        .then(r => r.json())
        .then(d => { setFaceAnalysis(d); setLoadingPhotos(false); })
        .catch(() => setLoadingPhotos(false));
    }

    // Get treatment recommendations
    const photoContext = photos.length > 0 ? "User has submitted face photos for analysis." : "";
    fetch("/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goals, concerns, age: Number(age), budget: Number(budget), skin, photoContext }),
    })
      .then(r => r.json())
      .then(d => { setTreatments(d.recommendations || []); setLoadingTreatments(false); })
      .catch(() => setLoadingTreatments(false));
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

      {/* Photo analysis section */}
      {hasPhotos && (
        <div style={{ margin: "0 16px 20px" }}>
          {loadingPhotos ? (
            <div style={{ background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 14, padding: "16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontSize: 24 }}>📸</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>Analyzing your photos…</div>
                <div style={{ fontSize: 12, color: "#a09d98" }}>Claude AI is reading your skin. This takes a few seconds.</div>
              </div>
            </div>
          ) : faceAnalysis ? (
            <div style={{ background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 16, overflow: "hidden" }}>
              {/* Header */}
              <div style={{ padding: "14px 16px 12px", display: "flex", alignItems: "center", gap: 12, borderBottom: "0.5px solid #e8e6e1" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 4 }}>AI Face Analysis</div>
                  <div style={{ fontSize: 13, color: "#1a1917", lineHeight: 1.5 }}>{faceAnalysis.summary}</div>
                </div>
                <div style={{ textAlign: "center", flexShrink: 0 }}>
                  <div style={{ fontSize: 24, fontWeight: 600, color: faceAnalysis.overallScore >= 80 ? "#15803d" : faceAnalysis.overallScore >= 60 ? "#92400e" : "#be123c" }}>{faceAnalysis.overallScore}</div>
                  <div style={{ fontSize: 10, color: "#a09d98" }}>/ 100</div>
                </div>
              </div>
              {/* Findings */}
              <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
                {faceAnalysis.findings.map((f, i) => {
                  const c = levelColor(f.color);
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ background: c.bg, border: `0.5px solid ${c.border}`, borderRadius: 8, padding: "4px 8px", fontSize: 10, fontWeight: 500, color: c.text, whiteSpace: "nowrap", flexShrink: 0, marginTop: 1 }}>{f.level}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1917", marginBottom: 2 }}>{f.area}</div>
                        <div style={{ fontSize: 11, color: "#6b6863", lineHeight: 1.5 }}>{f.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Focus */}
              <div style={{ padding: "12px 16px", borderTop: "0.5px solid #e8e6e1", background: "#eff6ff", display: "flex", gap: 10 }}>
                <span style={{ fontSize: 14, flexShrink: 0 }}>💡</span>
                <span style={{ fontSize: 12, color: "#1e40af", lineHeight: 1.6 }}>{faceAnalysis.recommendedFocus}</span>
              </div>
              <div style={{ padding: "8px 16px", borderTop: "0.5px solid #e8e6e1" }}>
                <p style={{ fontSize: 10, color: "#a09d98", lineHeight: 1.5 }}>📸 Based on photo analysis · For reference only · Not a medical diagnosis</p>
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* Profile summary */}
      <div style={{ margin: "0 16px 20px", background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 14, padding: "14px 16px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 8 }}>Based on your profile</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {goals.map(g => <span key={g} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "#eff6ff", color: "#2563eb", border: "0.5px solid #bfdbfe", fontWeight: 500 }}>{g.replace(/-/g, " ")}</span>)}
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid #e8e6e1", color: "#6b6863" }}>Age {age}</span>
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid #e8e6e1", color: "#6b6863" }}>{Number(budget) >= 20000 ? "$20,000+" : `$${Number(budget).toLocaleString()}`}</span>
          <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, background: "white", border: "0.5px solid #e8e6e1", color: "#6b6863" }}>{skin} skin</span>
        </div>
      </div>

      {/* Surgical warning */}
      {hasSurgical && (
        <div style={{ margin: "0 16px 16px", background: "#fdf2f8", border: "1px solid #f0abfc", borderRadius: 12, padding: "12px 14px", display: "flex", gap: 10 }}>
          <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#86198f", marginBottom: 3 }}>Surgical procedures included</div>
            <div style={{ fontSize: 11, color: "#a21caf", lineHeight: 1.6 }}>Surgical results are for general reference only. Always consult a board-certified surgeon before making any decisions.</div>
          </div>
        </div>
      )}

      <div style={{ padding: "0 16px", display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98" }}>Recommended for you</span>
        {!loadingTreatments && <span style={{ fontSize: 11, color: "#a09d98" }}>{treatments.length} matches</span>}
      </div>

      {loadingTreatments && (
        <div style={{ padding: "40px 16px", textAlign: "center" }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>✦</div>
          <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>AI is analyzing your profile</div>
          <div style={{ fontSize: 12, color: "#a09d98" }}>This takes a few seconds…</div>
        </div>
      )}

      {treatments.map((t, i) => {
        const tc = typeColor(t.type);
        const slug = t.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        return (
          <Link key={i} href={`/treatment/${slug}?match=${t.match}`} style={{ textDecoration: "none" }}>
            <div style={{ margin: "0 16px 12px", background: "white", border: t.isBestMatch ? "1.5px solid #2563eb" : "0.5px solid #e8e6e1", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ padding: "14px 16px 10px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: tc.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{typeIcon(t.type)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "#1a1917" }}>{t.name}</span>
                    {t.isBestMatch && <span style={{ fontSize: 10, fontWeight: 500, background: "#eff6ff", color: "#2563eb", borderRadius: 20, padding: "3px 8px", whiteSpace: "nowrap" }}>Best match</span>}
                  </div>
                  <span style={{ fontSize: 11, color: "#a09d98" }}>{t.type}</span>
                </div>
              </div>
              <div style={{ padding: "0 16px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, color: "#a09d98", whiteSpace: "nowrap" }}>Match</span>
                <div style={{ flex: 1, height: 4, background: "#f0ede8", borderRadius: 2 }}>
                  <div style={{ width: `${t.match}%`, height: "100%", background: "#2563eb", borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 500, color: "#2563eb", whiteSpace: "nowrap" }}>{t.match}%</span>
              </div>
              <div style={{ padding: "0 16px 12px" }}>
                <p style={{ fontSize: 12, color: "#6b6863", lineHeight: 1.6, marginBottom: 10 }}>{t.reason}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[["Results onset", t.onsetTime], ["Results last", t.resultsLast], ["Downtime", t.downtime]].map(([label, val]) => (
                    <div key={label} style={{ background: "#f7f6f3", borderRadius: 10, padding: "8px 10px" }}>
                      <div style={{ fontSize: 10, color: "#a09d98", marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1917" }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
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
