"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const goals = [
  { id: "lift", label: "Lift & tighten", icon: "↑" },
  { id: "young", label: "Look younger", icon: "◎" },
  { id: "volume", label: "Add volume", icon: "◉" },
  { id: "wrinkles", label: "Smooth wrinkles", icon: "—" },
  { id: "tone", label: "Even skin tone", icon: "☀" },
  { id: "glow", label: "Overall glow", icon: "✦" },
];

const concerns = ["Jawline sagging","Nasolabial folds","Under-eye hollows","Forehead lines","Lip thinning","Crow's feet","Neck laxity","Cheek volume loss"];
const skinTypes = ["Dry", "Combination", "Oily", "Sensitive"];

export default function GoalPage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [age, setAge] = useState(38);
  const [budget, setBudget] = useState(2000);
  const [skin, setSkin] = useState("Combination");

  const toggleGoal = (id: string) => setSelectedGoals(p => p.includes(id) ? p.filter(g => g !== id) : [...p, id]);
  const toggleConcern = (c: string) => setSelectedConcerns(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

  const handleSubmit = () => {
    if (selectedGoals.length === 0) return;
    const params = new URLSearchParams({
      goals: selectedGoals.join(","),
      concerns: selectedConcerns.join(","),
      age: age.toString(),
      budget: budget.toString(),
      skin,
    });
    router.push(`/results?${params.toString()}`);
  };

  return (
    <div style={{ paddingBottom: 100 }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", padding: "52px 16px 16px", gap: 12 }}>
        <Link href="/" style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-primary)", background: "white", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>←</Link>
        <span style={{ fontSize: 17, fontWeight: 500 }}>What's your goal?</span>
      </div>

      {/* Progress */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ height: 3, background: "var(--border)", borderRadius: 2 }}>
          <div style={{ width: "65%", height: "100%", background: "var(--accent)", borderRadius: 2 }} />
        </div>
      </div>

      {/* Goals */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Primary goal</div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 14 }}>Select all that apply</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {goals.map(g => (
            <div key={g.id} onClick={() => toggleGoal(g.id)} style={{
              border: selectedGoals.includes(g.id) ? "1.5px solid var(--accent)" : "0.5px solid var(--border)",
              background: selectedGoals.includes(g.id) ? "#eff6ff" : "#f7f6f3",
              borderRadius: 12, padding: "14px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ fontSize: 20, color: selectedGoals.includes(g.id) ? "var(--accent)" : "var(--text-muted)" }}>{g.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: selectedGoals.includes(g.id) ? "var(--accent)" : "var(--text-primary)" }}>{g.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "0.5px", background: "var(--border)", margin: "0 16px 24px" }} />

      {/* Concerns */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>Specific concerns</div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 14 }}>Pick what bothers you most</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {concerns.map(c => (
            <span key={c} onClick={() => toggleConcern(c)} style={{
              border: selectedConcerns.includes(c) ? "1.5px solid var(--accent)" : "0.5px solid var(--border)",
              background: selectedConcerns.includes(c) ? "#eff6ff" : "#f7f6f3",
              color: selectedConcerns.includes(c) ? "var(--accent)" : "var(--text-secondary)",
              borderRadius: 20, padding: "8px 14px", fontSize: 13, cursor: "pointer", fontWeight: selectedConcerns.includes(c) ? 500 : 400,
            }}>{c}</span>
          ))}
        </div>
      </div>

      <div style={{ height: "0.5px", background: "var(--border)", margin: "0 16px 24px" }} />

      {/* Sliders */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 20 }}>About you</div>
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Age</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: "var(--accent)" }}>{age}</span>
          </div>
          <input type="range" min={20} max={70} value={age} step={1} onChange={e => setAge(Number(e.target.value))} style={{ width: "100%" }} />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Budget</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: "var(--accent)" }}>${budget.toLocaleString()}</span>
          </div>
          <input type="range" min={500} max={10000} value={budget} step={100} onChange={e => setBudget(Number(e.target.value))} style={{ width: "100%" }} />
        </div>
      </div>

      <div style={{ height: "0.5px", background: "var(--border)", margin: "0 16px 24px" }} />

      {/* Skin type */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 14 }}>Skin type</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {skinTypes.map(s => (
            <div key={s} onClick={() => setSkin(s)} style={{
              border: skin === s ? "1.5px solid var(--accent)" : "0.5px solid var(--border)",
              background: skin === s ? "#eff6ff" : "#f7f6f3",
              borderRadius: 10, padding: "12px", textAlign: "center", cursor: "pointer",
              fontSize: 14, fontWeight: skin === s ? 500 : 400,
              color: skin === s ? "var(--accent)" : "var(--text-secondary)",
            }}>{s}</div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 16px" }}>
        {selectedGoals.length === 0 && (
          <p style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center", marginBottom: 10 }}>Select at least one goal above to continue</p>
        )}
        <button onClick={handleSubmit} disabled={selectedGoals.length === 0} style={{
          width: "100%", padding: "16px", borderRadius: 13,
          background: selectedGoals.length > 0 ? "var(--accent)" : "#e0e0e0",
          color: selectedGoals.length > 0 ? "white" : "#999",
          fontSize: 16, fontWeight: 500, border: "none",
          cursor: selectedGoals.length > 0 ? "pointer" : "not-allowed",
          transition: "all 0.2s",
        }}>
          ✦ Find my treatments
        </button>
      </div>
    </div>
  );
}
