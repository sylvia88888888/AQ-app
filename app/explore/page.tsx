"use client";
import { useState } from "react";
import Link from "next/link";

const allTreatments = [
  { name: "Thermage FLX", desc: "Skin tightening · RF energy", price: "$2k – $5k", type: "Energy", icon: "⚡", slug: "thermage-flx" },
  { name: "Ultherapy", desc: "Lifting · Ultrasound", price: "$3k – $6k", type: "Energy", icon: "〜", slug: "ultherapy" },
  { name: "RF Microneedling", desc: "Texture & tightening", price: "$800 – $1.8k", type: "Energy", icon: "⚡", slug: "rf-microneedling" },
  { name: "Potenza", desc: "RF Microneedling · Advanced", price: "$800 – $2k", type: "Energy", icon: "⚡", slug: "potenza" },
  { name: "BBL / IPL", desc: "Pigmentation & redness", price: "$400 – $900", type: "Energy", icon: "☀", slug: "bbl-ipl" },
  { name: "M22 IPL / ResurFX", desc: "Multi-platform · Tone & texture", price: "$400 – $1.8k", type: "Energy", icon: "☀", slug: "m22" },
  { name: "Pico Toning", desc: "Pigmentation · Glass skin", price: "$300 – $600", type: "Energy", icon: "⚡", slug: "pico-toning" },
  { name: "Fraxel Laser", desc: "Resurfacing · Sun damage", price: "$1k – $2.5k", type: "Energy", icon: "⚡", slug: "fraxel-laser" },
  { name: "Clear + Brilliant", desc: "Maintenance · Glow", price: "$300 – $600", type: "Energy", icon: "⚡", slug: "clear-brilliant" },
  { name: "HydraFacial", desc: "Hydration · Instant glow", price: "$200 – $400", type: "Energy", icon: "💧", slug: "hydrafacial" },
  { name: "Botox", desc: "Wrinkle relaxing · Neurotoxin", price: "$300 – $800", type: "Injectable", icon: "✦", slug: "botox" },
  { name: "Dysport", desc: "Wrinkle relaxing · Alternative", price: "$250 – $550", type: "Injectable", icon: "✦", slug: "dysport" },
  { name: "Filler", desc: "Volume & contour · HA", price: "$600 – $2k", type: "Injectable", icon: "💧", slug: "filler" },
  { name: "Sculptra", desc: "Collagen stimulator", price: "$800 – $1.8k", type: "Injectable", icon: "◉", slug: "sculptra" },
  { name: "Skinbooster", desc: "Deep hydration · Glass skin", price: "$600 – $1.2k", type: "Injectable", icon: "💧", slug: "skinbooster" },
  { name: "PRP", desc: "Platelet-rich plasma · Natural", price: "$600 – $1.5k", type: "Injectable", icon: "💉", slug: "prp" },
  { name: "Kybella", desc: "Double chin · Fat dissolve", price: "$1.2k – $2.5k", type: "Injectable", icon: "💉", slug: "kybella" },
  { name: "Thread Lift", desc: "Lifting · PDO threads", price: "$1.5k – $4k", type: "Injectable", icon: "◈", slug: "thread-lift" },
  { name: "Face Lift", desc: "Surgical · Full rejuvenation", price: "$15k – $35k", type: "Surgical", icon: "✚", slug: "face-lift" },
  { name: "Neck Lift", desc: "Surgical · Neck tightening", price: "$8k – $20k", type: "Surgical", icon: "✚", slug: "neck-lift" },
  { name: "Brow Lift", desc: "Surgical · Forehead lift", price: "$5k – $12k", type: "Surgical", icon: "✚", slug: "brow-lift" },
  { name: "Blepharoplasty", desc: "Surgical · Eyelid surgery", price: "$6k – $15k", type: "Surgical", icon: "✚", slug: "blepharoplasty" },
  { name: "Rhinoplasty", desc: "Surgical · Nose reshaping", price: "$10k – $25k", type: "Surgical", icon: "✚", slug: "rhinoplasty" },
  { name: "Porcelain Veneers", desc: "Dental · Smile makeover", price: "$1.5k – $2.5k/tooth", type: "Dental", icon: "◻", slug: "porcelain-veneers" },
  { name: "Teeth Whitening", desc: "Dental · Brightening", price: "$300 – $800", type: "Dental", icon: "◻", slug: "teeth-whitening" },
  { name: "Invisalign", desc: "Dental · Clear aligners", price: "$3k – $7k", type: "Dental", icon: "◻", slug: "invisalign" },
  { name: "Dental Bonding", desc: "Dental · Chips & gaps", price: "$300 – $600/tooth", type: "Dental", icon: "◻", slug: "dental-bonding" },
];

const typeColor = (type: string) => {
  if (type === "Surgical") return { bg: "#fdf2f8", text: "#86198f" };
  if (type === "Dental") return { bg: "#f0f9ff", text: "#0369a1" };
  if (type === "Injectable") return { bg: "#eff6ff", text: "#1d4ed8" };
  return { bg: "#fffbeb", text: "#92400e" };
};

const categories = ["All", "Energy", "Injectable", "Surgical", "Dental"];

export default function ExplorePage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allTreatments : allTreatments.filter(t => t.type === active);

  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ padding: "52px 16px 16px" }}>
        <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.5 }}>Explore</div>
        <div style={{ fontSize: 13, color: "#a09d98", marginTop: 4 }}>
          {filtered.length} treatment{filtered.length !== 1 ? "s" : ""}{active !== "All" ? ` · ${active}` : " in AQ"}
        </div>
      </div>

      <div style={{ padding: "0 16px 20px", display: "flex", gap: 8, overflowX: "auto" }}>
        {categories.map(c => (
          <div key={c} onClick={() => setActive(c)} style={{ padding: "8px 18px", borderRadius: 20, flexShrink: 0, cursor: "pointer", background: active === c ? "#1a1917" : "#f7f6f3", color: active === c ? "white" : "#6b6863", fontSize: 13, fontWeight: active === c ? 500 : 400, border: active === c ? "none" : "0.5px solid #e8e6e1" }}>{c}</div>
        ))}
      </div>

      <div style={{ padding: "0 16px" }}>
        {filtered.map(t => {
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
        })}
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
