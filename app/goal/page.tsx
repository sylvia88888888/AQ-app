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
      <div className="top-nav">
        <Link href="/" className="back-btn">←</Link>
        <span className="page-title">What's your goal?</span>
      </div>

      {/* Progress */}
      <div style={{ padding: "0 16px 20px" }}>
        <div style={{ height: 3, background: "var(--border)", borderRadius: 2 }}>
          <div style={{ width: "65%", height: "100%", background: "var(--accent)", borderRadius: 2 }} />
        </div>
      </div>

      {/* Goals */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">Primary goal</div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>Select all that apply</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {goals.map(g => (
            <div key={g.id} onClick={() => toggleGoal(g.id)} style={{
              border: selectedGoals.includes(g.id) ? "1.5px solid var(--accent)" : "0.5px solid var(--border)",
              background: selectedGoals.includes(g.id) ? "var(--accent-light)" : "#f7f6f3",
              borderRadius: 12, padding: "12px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: 18, color: selectedGoals.includes(g.id) ? "var(--accent)" : "var(--text-muted)" }}>{g.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: selectedGoals.includes(g.id) ? "var(--accent)" : "var(--text-primary)" }}>{g.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Concerns */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">Specific concerns</div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>Pick what bothers you most</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {concerns.map(c => (
            <span key={c} onClick={() => toggleConcern(c)} style={{
              border: selectedConcerns.includes(c) ? "1px solid var(--accent)" : "0.5px solid var(--border)",
              background: selectedConcerns.includes(c) ? "var(--accent-light)" : "#f7f6f3",
              color: selectedConcerns.includes(c) ? "var(--accent)" : "var(--text-secondary)",
              borderRadius: 20, padding: "6px 12px", fontSize: 12, cursor: "pointer", fontWeight: selectedConcerns.includes(c) ? 500 : 400,
            }}>{c}</span>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Sliders */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">About you</div>
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>Age</span>
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--accent)" }}>{age}</span>
          </div>
          <input type="range" min={20} max={70} value={age} step={1} onChange={e => setAge(Number(e.target.value))} style={{ width: "100%" }} />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>Budget</span>
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--accent)" }}>${budget.toLocaleString()}</span>
          </div>
          <input type="range" min={500} max={10000} value={budget} step={100} onChange={e => setBudget(Number(e.target.value))} style={{ width: "100%" }} />
        </div>
      </div>

      <div className="divider" />

      {/* Skin type */}
      <div style={{ padding: "0 16px 20px" }}>
        <div className="section-label">Skin type</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {skinTypes.map(s => (
            <div key={s} onClick={() => setSkin(s)} style={{
              border: skin === s ? "1.5px solid var(--accent)" : "0.5px solid var(--border)",
              background: skin === s ? "var(--accent-light)" : "#f7f6f3",
              borderRadius: 10, padding: "10px", textAlign: "center", cursor: "pointer",
              fontSize: 12, fontWeight: skin === s ? 500 : 400,
              color: skin === s ? "var(--accent)" : "var(--text-secondary)",
            }}>{s}</div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 16px" }}>
        <button className="btn-primary" onClick={handleSubmit} disabled={selectedGoals.length === 0}>
          ✦ Find my treatments
        </button>
      </div>
    </div>
  );
}
