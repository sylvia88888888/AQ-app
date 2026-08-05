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
  { id: "slimface", label: "Slim / V-face", icon: "◇" },
  { id: "acne", label: "Clear acne", icon: "○" },
  { id: "spots", label: "Remove dark spots", icon: "◐" },
  { id: "maintenance", label: "Regular maintenance", icon: "↻" },
  { id: "teeth", label: "Dental aesthetics", icon: "◻" },
  { id: "surgery", label: "Surgical options", icon: "✚" },
];

const concerns = [
  "Jawline sagging","Nasolabial folds","Under-eye hollows","Forehead lines",
  "Lip thinning","Crow's feet","Neck laxity","Cheek volume loss",
  "Large pores","Acne scarring","Hyperpigmentation","Uneven skin tone",
  "Double chin","Brow drooping","Neck bands","Thin lips",
];

const skinTypes = ["Dry", "Combination", "Oily", "Sensitive"];

export default function GoalPage() {
  const router = useRouter();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [age, setAge] = useState(38);
  const [budget, setBudget] = useState(2000);
  const [budgetMax, setBudgetMax] = useState(false);
  const [skin, setSkin] = useState("Combination");

  const toggleGoal = (id: string) => setSelectedGoals(p => p.includes(id) ? p.filter(g => g !== id) : [...p, id]);
  const toggleConcern = (c: string) => setSelectedConcerns(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

  const handleSubmit = () => {
    if (selectedGoals.length === 0) return;
    const budgetVal = budgetMax ? 20000 : budget;
    const params = new URLSearchParams({
      goals: selectedGoals.join(","),
      concerns: selectedConcerns.join(","),
      age: age.toString(),
      budget: budgetVal.toString(),
      skin,
    });
    router.push(`/results?${params.toString()}`);
  };

  const formatBudget = (val: number) => budgetMax ? "$20,000+" : `$${val.toLocaleString()}`;

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ display: "flex", alignItems: "center", padding: "52px 16px 16px", gap: 12 }}>
        <Link href="/" style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid #d0cdc7", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1917", background: "white", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>←</Link>
        <span style={{ fontSize: 17, fontWeight: 500 }}>What's your goal?</span>
      </div>

      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ height: 3, background: "#e8e6e1", borderRadius: 2 }}>
          <div style={{ width: "65%", height: "100%", background: "#2563eb", borderRadius: 2 }} />
        </div>
      </div>

      {/* Goals */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 6 }}>Primary goal</div>
        <p style={{ fontSize: 13, color: "#a09d98", marginBottom: 14 }}>Select all that apply</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {goals.map(g => (
            <div key={g.id} onClick={() => toggleGoal(g.id)} style={{
              border: selectedGoals.includes(g.id) ? "1.5px solid #2563eb" : "0.5px solid #e8e6e1",
              background: selectedGoals.includes(g.id) ? "#eff6ff" : "#f7f6f3",
              borderRadius: 12, padding: "14px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ fontSize: 18, color: selectedGoals.includes(g.id) ? "#2563eb" : "#a09d98" }}>{g.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: selectedGoals.includes(g.id) ? "#2563eb" : "#1a1917" }}>{g.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 24px" }} />

      {/* Concerns */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 6 }}>Specific concerns</div>
        <p style={{ fontSize: 13, color: "#a09d98", marginBottom: 14 }}>Pick what bothers you most</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {concerns.map(c => (
            <span key={c} onClick={() => toggleConcern(c)} style={{
              border: selectedConcerns.includes(c) ? "1.5px solid #2563eb" : "0.5px solid #e8e6e1",
              background: selectedConcerns.includes(c) ? "#eff6ff" : "#f7f6f3",
              color: selectedConcerns.includes(c) ? "#2563eb" : "#6b6863",
              borderRadius: 20, padding: "8px 14px", fontSize: 13, cursor: "pointer",
              fontWeight: selectedConcerns.includes(c) ? 500 : 400,
            }}>{c}</span>
          ))}
        </div>
      </div>

      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 24px" }} />

      {/* Age & Budget */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 20 }}>About you</div>

        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Age</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: "#2563eb" }}>{age}</span>
          </div>
          <input type="range" min={20} max={85} value={age} step={1}
            onChange={e => setAge(Number(e.target.value))} style={{ width: "100%" }} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <span style={{ fontSize: 11, color: "#a09d98" }}>20</span>
            <span style={{ fontSize: 11, color: "#a09d98" }}>85</span>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Budget</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: "#2563eb" }}>{formatBudget(budget)}</span>
          </div>
          <input type="range" min={500} max={20000} value={budgetMax ? 20000 : budget} step={100}
            onChange={e => {
              const val = Number(e.target.value);
              if (val >= 20000) { setBudgetMax(true); setBudget(20000); }
              else { setBudgetMax(false); setBudget(val); }
            }} style={{ width: "100%" }} />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <span style={{ fontSize: 11, color: "#a09d98" }}>$500</span>
            <span style={{ fontSize: 11, color: "#a09d98" }}>$20,000+</span>
          </div>
        </div>
      </div>

      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 24px" }} />

      {/* Skin type */}
      <div style={{ padding: "0 16px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 14 }}>Skin type</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {skinTypes.map(s => (
            <div key={s} onClick={() => setSkin(s)} style={{
              border: skin === s ? "1.5px solid #2563eb" : "0.5px solid #e8e6e1",
              background: skin === s ? "#eff6ff" : "#f7f6f3",
              borderRadius: 10, padding: "12px", textAlign: "center", cursor: "pointer",
              fontSize: 14, fontWeight: skin === s ? 500 : 400,
              color: skin === s ? "#2563eb" : "#6b6863",
            }}>{s}</div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 16px" }}>
        {selectedGoals.length === 0 && (
          <p style={{ fontSize: 13, color: "#a09d98", textAlign: "center", marginBottom: 10 }}>Select at least one goal above to continue</p>
        )}
        <button onClick={handleSubmit} disabled={selectedGoals.length === 0} style={{
          width: "100%", padding: "16px", borderRadius: 13,
          background: selectedGoals.length > 0 ? "#2563eb" : "#e0e0e0",
          color: selectedGoals.length > 0 ? "white" : "#999",
          fontSize: 16, fontWeight: 500, border: "none",
          cursor: selectedGoals.length > 0 ? "pointer" : "not-allowed",
        }}>
          ✦ Find my treatments
        </button>
      </div>
    </div>
  );
}
