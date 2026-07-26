"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const steps = [
  { label: "Front", instruction: "Face the camera directly", sub: "Eyes level, chin parallel to the floor. Remove glasses if wearing any.", guide: "front" },
  { label: "Left side", instruction: "Turn your head left — 45°", sub: "Show your left cheek and jawline. Keep your chin level.", guide: "left" },
  { label: "Right side", instruction: "Now turn right — 45°", sub: "Show your right cheek and jawline. Almost done!", guide: "right" },
];

export default function ScanPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);

  const handlePhoto = () => {
    if (step < 2) { setStep(s => s + 1); return; }
    setAnalyzing(true);
    setTimeout(() => router.push("/goal"), 2500);
  };

  if (analyzing) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 24px" }}>
      <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
        {["◐","◉","◑"].map((s, i) => (
          <div key={i} style={{ width: 80, height: 96, borderRadius: "40px 40px 36px 36px", background: "#f7f6f3", border: "1.5px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>{s}</div>
        ))}
      </div>
      <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 8 }}>Analyzing all 3 angles</div>
      <div style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 32 }}>Cross-referencing front, left, and right</div>
      {[
        ["✓","3 photos received","Done","#15803d"],
        ["✓","Facial symmetry mapped","Done","#15803d"],
        ["…","Laxity and volume assessed","Running","var(--accent)"],
        ["○","Matching treatments","Waiting","var(--text-muted)"]
      ].map(([icon, text, status, color], i) => (
        <div key={i} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#f7f6f3", borderRadius: 12, border: "0.5px solid var(--border)", marginBottom: 8 }}>
          <span style={{ color: color as string, fontSize: 16, width: 20, textAlign: "center" }}>{icon}</span>
          <span style={{ fontSize: 14, color: "var(--text-secondary)", flex: 1 }}>{text}</span>
          <span style={{ fontSize: 12, color: color as string }}>{status}</span>
        </div>
      ))}
    </div>
  );

  const current = steps[step];

  return (
    <div style={{ paddingBottom: 40 }}>
      {/* Nav - fixed spacing */}
      <div style={{ display: "flex", alignItems: "center", padding: "52px 16px 12px", gap: 12 }}>
        <Link href="/" style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-primary)", background: "white", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>←</Link>
        <span style={{ fontSize: 17, fontWeight: 500 }}>Scan my face</span>
      </div>

      {/* Step progress */}
      <div style={{ padding: "0 20px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {steps.map((s, i) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "initial", gap: 6 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 500, flexShrink: 0, background: i < step ? "var(--accent)" : i === step ? "#eff6ff" : "#f7f6f3", color: i < step ? "white" : i === step ? "var(--accent)" : "var(--text-muted)", border: `1.5px solid ${i <= step ? "var(--accent)" : "var(--border)"}` }}>
                {i < step ? "✓" : i + 1}
              </div>
              {i < steps.length - 1 && <div style={{ flex: 1, height: 1.5, background: i < step ? "var(--accent)" : "var(--border)" }} />}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          {steps.map((s, i) => <span key={s.label} style={{ fontSize: 12, color: i === step ? "var(--accent)" : i < step ? "var(--text-primary)" : "var(--text-muted)", fontWeight: i === step ? 500 : 400 }}>{s.label}</span>)}
        </div>
      </div>

      {/* Direction box */}
      <div style={{ margin: "0 16px 16px", background: "#eff6ff", border: "0.5px solid #bfdbfe", borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 12 }}>
        <span style={{ fontSize: 26, flexShrink: 0 }}>→</span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "var(--accent)", marginBottom: 4 }}>{current.instruction}</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{current.sub}</div>
        </div>
      </div>

      {/* Camera frame */}
      <div onClick={handlePhoto} style={{ margin: "0 16px 16px", borderRadius: 20, background: "#f7f6f3", border: "0.5px solid var(--border)", height: 240, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
        <div style={{ width: current.guide === "front" ? 130 : 110, height: current.guide === "front" ? 165 : 155, borderRadius: current.guide === "front" ? "50% 50% 45% 45%" : current.guide === "left" ? "50% 30% 35% 50%" : "30% 50% 50% 35%", border: "1.5px dashed var(--border-strong)", position: "relative" }}>
          {["tl","tr","bl","br"].map(c => (
            <div key={c} style={{ position: "absolute", width: 16, height: 16, borderColor: "var(--accent)", borderStyle: "solid", top: c.includes("t") ? -1 : "auto", bottom: c.includes("b") ? -1 : "auto", left: c.includes("l") ? -1 : "auto", right: c.includes("r") ? -1 : "auto", borderWidth: `${c.includes("t") ? 2 : 0}px ${c.includes("r") ? 2 : 0}px ${c.includes("b") ? 2 : 0}px ${c.includes("l") ? 2 : 0}px`, borderRadius: c === "tl" ? "3px 0 0 0" : c === "tr" ? "0 3px 0 0" : c === "bl" ? "0 0 0 3px" : "0 0 3px 0" }} />
          ))}
        </div>
        <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 14 }}>Tap to take photo</div>
      </div>

      {/* Thumbnails */}
      <div style={{ padding: "0 16px 16px", display: "flex", gap: 10 }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{ flex: 1, height: 76, borderRadius: 12, background: i < step ? "#eff6ff" : "#f7f6f3", border: i === step ? "1.5px solid var(--accent)" : i < step ? "0.5px solid var(--accent)" : "0.5px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <span style={{ fontSize: 22, color: i <= step ? "var(--accent)" : "var(--text-muted)" }}>{i < step ? "✓" : "📷"}</span>
            <span style={{ fontSize: 12, color: i <= step ? "var(--accent)" : "var(--text-muted)", fontWeight: i === step ? 500 : 400 }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div style={{ padding: "0 16px 16px" }}>
        <button onClick={handlePhoto} style={{ width: "100%", padding: "16px", borderRadius: 13, background: "var(--accent)", color: "white", fontSize: 16, fontWeight: 500, border: "none", cursor: "pointer" }}>
          📷 Take {current.label.toLowerCase()} photo
        </button>
      </div>

      {/* Privacy */}
      <div style={{ padding: "0 16px", display: "flex", alignItems: "flex-start", gap: 10 }}>
        <span style={{ fontSize: 16, flexShrink: 0 }}>🔒</span>
        <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>Photos are analyzed on-device only and never stored or shared.</span>
      </div>
    </div>
  );
}
