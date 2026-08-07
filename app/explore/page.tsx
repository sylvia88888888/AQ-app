"use client";
import { useState } from "react";
import Link from "next/link";

const allTreatments = [
  { name: "Thermage FLX", desc: "Skin tightening · RF energy", price: "$2k – $5k", type: "Energy", goals: ["tighten", "wrinkles"], icon: "⚡", slug: "thermage-flx" },
  { name: "Ultherapy", desc: "Lifting · Ultrasound", price: "$3k – $6k", type: "Energy", goals: ["tighten"], icon: "〜", slug: "ultherapy" },
  { name: "RF Microneedling", desc: "Texture & tightening", price: "$800 – $1.8k", type: "Energy", goals: ["tighten", "wrinkles", "texture"], icon: "⚡", slug: "rf-microneedling" },
  { name: "Potenza", desc: "RF Microneedling · Advanced", price: "$800 – $2k", type: "Energy", goals: ["tighten", "wrinkles", "texture"], icon: "⚡", slug: "potenza" },
  { name: "BBL / IPL", desc: "Pigmentation & redness", price: "$400 – $900", type: "Energy", goals: ["brighten", "texture"], icon: "☀", slug: "bbl-ipl" },
  { name: "M22 IPL / ResurFX", desc: "Multi-platform · Tone & texture", price: "$400 – $1.8k", type: "Energy", goals: ["brighten", "wrinkles", "texture"], icon: "☀", slug: "m22" },
  { name: "Pico Toning", desc: "Pigmentation · Glass skin", price: "$300 – $600", type: "Energy", goals: ["brighten", "texture"], icon: "⚡", slug: "pico-toning" },
  { name: "Fraxel Laser", desc: "Resurfacing · Sun damage", price: "$1k – $2.5k", type: "Energy", goals: ["brighten", "wrinkles", "texture"], icon: "⚡", slug: "fraxel-laser" },
  { name: "Clear + Brilliant", desc: "Maintenance · Glow", price: "$300 – $600", type: "Energy", goals: ["brighten", "texture"], icon: "⚡", slug: "clear-brilliant" },
  { name: "HydraFacial", desc: "Hydration · Instant glow", price: "$200 – $400", type: "Energy", goals: ["brighten", "texture"], icon: "💧", slug: "hydrafacial" },
  { name: "Botox", desc: "Wrinkle relaxing · Neurotoxin", price: "$300 – $800", type: "Injectable", goals: ["wrinkles", "slim"], icon: "✦", slug: "botox" },
  { name: "Dysport", desc: "Wrinkle relaxing · Alternative", price: "$250 – $550", type: "Injectable", goals: ["wrinkles", "slim"], icon: "✦", slug: "dysport" },
  { name: "Filler", desc: "Volume & contour · HA", price: "$600 – $2k", type: "Injectable", goals: ["volume", "wrinkles"], icon: "💧", slug: "filler" },
  { name: "Sculptra", desc: "Collagen stimulator", price: "$800 – $1.8k", type: "Injectable", goals: ["volume", "tighten"], icon: "◉", slug: "sculptra" },
  { name: "Skinbooster", desc: "Deep hydration · Glow", price: "$600 – $1.2k", type: "Injectable", goals: ["brighten", "texture"], icon: "💧", slug: "skinbooster" },
  { name: "PRP", desc: "Platelet-rich plasma · Natural", price: "$600 – $1.5k", type: "Injectable", goals: ["texture", "tighten"], icon: "💉", slug: "prp" },
  { name: "Kybella", desc: "Double chin · Fat dissolve", price: "$1.2k – $2.5k", type: "Injectable", goals: ["slim"], icon: "💉", slug: "kybella" },
  { name: "Thread Lift", desc: "Lifting · PDO threads", price: "$1.5k – $4k", type: "Injectable", goals: ["tighten"], icon: "◈", slug: "thread-lift" },
  { name: "Face Lift", desc: "Surgical · Full rejuvenation", price: "$15k – $35k", type: "Surgical", goals: ["tighten", "wrinkles"], icon: "✚", slug: "face-lift" },
  { name: "Neck Lift", desc: "Surgical · Neck tightening", price: "$8k – $20k", type: "Surgical", goals: ["tighten"], icon: "✚", slug: "neck-lift" },
  { name: "Brow Lift", desc: "Surgical · Forehead lift", price: "$5k – $12k", type: "Surgical", goals: ["tighten"], icon: "✚", slug: "brow-lift" },
  { name: "Blepharoplasty", desc: "Surgical · Eyelid surgery", price: "$6k – $15k", type: "Surgical", goals: ["tighten", "wrinkles"], icon: "✚", slug: "blepharoplasty" },
  { name: "Rhinoplasty", desc: "Surgical · Nose reshaping", price: "$10k – $25k", type: "Surgical", goals: ["slim"], icon: "✚", slug: "rhinoplasty" },
  { name: "Porcelain Veneers", desc: "Dental · Smile makeover", price: "$1.5k – $2.5k/tooth", type: "Dental", goals: ["dental"], icon: "◻", slug: "porcelain-veneers" },
  { name: "Teeth Whitening", desc: "Dental · Brightening", price: "$300 – $800", type: "Dental", goals: ["dental", "brighten"], icon: "◻", slug: "teeth-whitening" },
  { name: "Invisalign", desc: "Dental · Clear aligners", price: "$3k – $7k", type: "Dental", goals: ["dental"], icon: "◻", slug: "invisalign" },
  { name: "Dental Bonding", desc: "Dental · Chips & gaps", price: "$300 – $600/tooth", type: "Dental", goals: ["dental"], icon: "◻", slug: "dental-bonding" },
];

const goalFilters = [
  { id: "tighten", label: "Tighten & Lift", icon: "↑" },
  { id: "wrinkles", label: "Smooth Wrinkles", icon: "—" },
  { id: "brighten", label: "Brighten & Spots", icon: "☀" },
  { id: "volume", label: "Add Volume", icon: "◉" },
  { id: "slim", label: "Slim & Contour", icon: "◇" },
  { id: "texture", label: "Skin Texture", icon: "✦" },
  { id: "dental", label: "Dental", icon: "◻" },
];

const typeFilters = ["All", "Energy", "Injectable", "Surgical", "Dental"];

const typeColor = (type: string) => {
  if (type === "Surgical") return { bg: "#fdf2f8", text: "#86198f" };
  if (type === "Dental") return { bg: "#f0f9ff", text: "#0369a1" };
  if (type === "Injectable") return { bg: "#eff6ff", text: "#1d4ed8" };
  return { bg: "#fffbeb", text: "#92400e" };
};

export default function ExplorePage() {
  const [activeGoal, setActiveGoal] = useState<string | null>(null);
  const [activeType, setActiveType] = useState("All");

  const filtered = allTreatments.filter(t => {
    const matchesGoal = !activeGoal || t.goals.includes(activeGoal);
    const matchesType = activeType === "All" || t.type === activeType;
    return matchesGoal && matchesType;
  });

  const handleGoal = (id: string) => {
    setActiveGoal(prev => prev === id ? null : id);
    setActiveType("All");
  };

  const handleType = (type: string) => {
    setActiveType(type);
    setActiveGoal(null);
  };

  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ padding: "52px 16px 14px" }}>
        <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.5 }}>Explore</div>
        <div style={{ fontSize: 13, color: "#a09d98", marginTop: 4 }}>
          {filtered.length} treatment{filtered.length !== 1 ? "s" : ""}
          {activeGoal ? ` · ${goalFilters.find(g => g.id === activeGoal)?.label}` : activeType !== "All" ? ` · ${activeType}` : " in AQ"}
        </div>
      </div>

      {/* Goal filters - by concern */}
      <div style={{ padding: "0 16px 6px" }}>
        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.7px", textTransform: "uppercase", color: "#a09d98", marginBottom: 8 }}>By concern</div>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
          {goalFilters.map(g => (
            <div key={g.id} onClick={() => handleGoal(g.id)} style={{
              padding: "8px 14px", borderRadius: 20, flexShrink: 0, cursor: "pointer",
              background: activeGoal === g.id ? "#1a1917" : "#f7f6f3",
              color: activeGoal === g.id ? "white" : "#6b6863",
              fontSize: 13, fontWeight: activeGoal === g.id ? 500 : 400,
              border: activeGoal === g.id ? "none" : "0.5px solid #e8e6e1",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{ fontSize: 14 }}>{g.icon}</span>
              {g.label}
            </div>
          ))}
        </div>
      </div>

      {/* Type filters - by modality */}
      <div style={{ padding: "8px 16px 16px" }}>
        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.7px", textTransform: "uppercase", color: "#a09d98", marginBottom: 8 }}>By type</div>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
          {typeFilters.map(t => (
            <div key={t} onClick={() => handleType(t)} style={{
              padding: "7px 16px", borderRadius: 20, flexShrink: 0, cursor: "pointer",
              background: activeType === t && !activeGoal ? "#1a1917" : "#f7f6f3",
              color: activeType === t && !activeGoal ? "white" : "#6b6863",
              fontSize: 13, fontWeight: activeType === t && !activeGoal ? 500 : 400,
              border: activeType === t && !activeGoal ? "none" : "0.5px solid #e8e6e1",
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* Treatment list */}
      <div style={{ padding: "0 16px" }}>
        {filtered.length === 0 ? (
          <div style={{ padding: "40px 0", textAlign: "center", color: "#a09d98", fontSize: 14 }}>
            No treatments match this filter
          </div>
        ) : (
          filtered.map(t => {
            const tc = typeColor(t.type);
            return (
              <Link key={t.slug} href={`/treatment/${t.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "0.5px solid #e8e6e1" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: tc.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{t.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1917" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#a09d98", marginTop: 2 }}>{t.desc}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 500, color: tc.text }}>{t.type}</div>
                    <div style={{ fontSize: 11, color: "#a09d98", marginTop: 3 }}>{t.price}</div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "white", borderTop: "0.5px solid #e8e6e1", padding: "10px 0 24px", display: "flex", justifyContent: "space-around" }}>
        {[{ icon: "⌂", label: "Home", href: "/" }, { icon: "⊕", label: "Explore", href: "/explore", active: true }, { icon: "♡", label: "Saved", href: "/saved" }, { icon: "◯", label: "Profile", href: "/profile" }].map(n => (
          <Link key={n.label} href={n.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 20, color: n.active ? "#2563eb" : "#a09d98" }}>{n.icon}</span>
            <span style={{ fontSize: 10, color: n.active ? "#2563eb" : "#a09d98" }}>{n.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
