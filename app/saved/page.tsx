"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { treatments } from "../treatment/shared";

const typeColor = (type: string) => {
  if (type === "Surgical") return { bg: "#fdf2f8", text: "#86198f" };
  if (type === "Dental") return { bg: "#f0f9ff", text: "#0369a1" };
  if (type === "Injectable") return { bg: "#eff6ff", text: "#1d4ed8" };
  return { bg: "#fffbeb", text: "#92400e" };
};

export default function SavedPage() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("aq-saved") || "[]");
    setSavedSlugs(list);
  }, []);

  const remove = (slug: string) => {
    const newList = savedSlugs.filter(s => s !== slug);
    setSavedSlugs(newList);
    localStorage.setItem("aq-saved", JSON.stringify(newList));
  };

  const savedTreatments = savedSlugs.map(slug => ({ slug, ...treatments[slug] })).filter(t => t.name);

  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ padding: "52px 16px 16px" }}>
        <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.5 }}>Saved</div>
        <div style={{ fontSize: 13, color: "#a09d98", marginTop: 4 }}>
          {savedTreatments.length > 0 ? `${savedTreatments.length} treatment${savedTreatments.length !== 1 ? "s" : ""} saved` : "Your bookmarked treatments"}
        </div>
      </div>

      {savedTreatments.length === 0 ? (
        <div style={{ padding: "60px 32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>♡</div>
          <div style={{ fontSize: 16, fontWeight: 500, color: "#1a1917", marginBottom: 8 }}>Nothing saved yet</div>
          <div style={{ fontSize: 13, color: "#a09d98", lineHeight: 1.6, marginBottom: 24 }}>
            Tap the ♡ on any treatment page to save it here for easy reference.
          </div>
          <Link href="/explore" style={{ padding: "12px 24px", borderRadius: 12, background: "#2563eb", color: "white", fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            Browse treatments
          </Link>
        </div>
      ) : (
        <div style={{ padding: "0 16px" }}>
          {savedTreatments.map(t => {
            const tc = typeColor(t.type);
            return (
              <div key={t.slug} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "0.5px solid #e8e6e1" }}>
                <Link href={`/treatment/${t.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: tc.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{t.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1917" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "#a09d98", marginTop: 2 }}>{t.type} · {t.downtime} downtime</div>
                  </div>
                </Link>
                <button onClick={() => remove(t.slug)} style={{ width: 32, height: 32, borderRadius: "50%", border: "0.5px solid #e8e6e1", background: "#f7f6f3", cursor: "pointer", fontSize: 14, color: "#a09d98", flexShrink: 0 }}>✕</button>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 390, background: "white", borderTop: "0.5px solid #e8e6e1", padding: "10px 0 24px", display: "flex", justifyContent: "space-around" }}>
        {[{ icon: "⌂", label: "Home", href: "/" }, { icon: "⊕", label: "Explore", href: "/explore" }, { icon: "♡", label: "Saved", href: "/saved", active: true }, { icon: "◯", label: "Profile", href: "/profile" }].map(n => (
          <Link key={n.label} href={n.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 20, color: n.active ? "#2563eb" : "#a09d98" }}>{n.icon}</span>
            <span style={{ fontSize: 10, color: n.active ? "#2563eb" : "#a09d98" }}>{n.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
