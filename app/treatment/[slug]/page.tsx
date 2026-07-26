import Link from "next/link";
import { notFound } from "next/navigation";

const treatments: Record<string, {
  name: string; type: string; icon: string; colorBg: string; match?: number;
  downtime: string; sessions: string; resultsLast: string;
  what: string;
  good: string[]; bad: string[];
  myths: { q: string; a: string }[];
  questions: string[];
  prices: { loc: string; price: string }[];
}> = {
  "thermage-flx": {
    name: "Thermage FLX", type: "Energy · Radiofrequency", icon: "⚡", colorBg: "#fffbeb",
    downtime: "None", sessions: "1 only", resultsLast: "1–2 years",
    what: "Thermage uses monopolar radiofrequency to heat the deep layers of skin, triggering collagen contraction and stimulating new collagen growth. The result is gradual tightening and smoothing — without surgery or downtime.",
    good: ["Ages 35–55 with mild to moderate skin laxity — collagen is still responsive enough to rebuild", "Combination or normal skin — heat tolerance is better than very thin or sensitive skin", "Those wanting tightening without injectables or surgery"],
    bad: ["Very thin or bony faces — less subcutaneous fat means less energy absorption and higher discomfort", "Severe laxity or deep jowls — results will be subtle; a surgical lift may be more effective", "Active skin infections, implanted metal devices, or pregnancy"],
    myths: [
      { q: "More shots = better results", a: "Shot count is often used as a selling point. What matters is energy level and placement — 600 well-placed shots outperform 1,200 shallow ones." },
      { q: "You'll see results immediately", a: "Collagen rebuilds slowly. Most people see gradual improvement over 3–6 months. Day-one results from swelling are temporary." },
      { q: "It's the same as Ultherapy", a: "Different technologies. Thermage uses RF to tighten surface layers; Ultherapy uses ultrasound to reach deeper SMAS tissue." },
    ],
    questions: ["What energy level and shot count do you recommend for my skin, and why?", "Are you using the FLX handpiece or an older model?", "How many Thermage treatments have you personally performed?", "Do you think Thermage alone is enough or would you combine it?"],
    prices: [{ loc: "Los Angeles", price: "$2,500 – $5,000" }, { loc: "US average", price: "$2,000 – $4,500" }, { loc: "Price per shot", price: "$3 – $8 / shot" }],
  },
  "ultherapy": {
    name: "Ultherapy", type: "Energy · Ultrasound", icon: "〜", colorBg: "#fffbeb",
    downtime: "1–2 days", sessions: "1 session", resultsLast: "1–2 years",
    what: "Ultherapy uses focused ultrasound energy to stimulate collagen production deep within the skin and foundational muscle layer (SMAS). It lifts and tightens the brow, chin, neck, and chest — without surgery.",
    good: ["Those with mild to moderate skin laxity on the face, neck, or brow", "People with good baseline fat volume — ultrasound energy needs tissue to work with", "Anyone wanting a non-surgical lift with longer-lasting results"],
    bad: ["Very thin or gaunt faces — ultrasound can cause further volume loss and make you look older", "Significant laxity that requires surgical intervention", "Those with open wounds, severe acne, or implanted metal devices in the treatment area"],
    myths: [
      { q: "More lines = better results", a: "Ultherapy is sold by 'lines' of energy. More lines doesn't always mean better outcomes — depth, placement, and operator skill matter far more." },
      { q: "Results appear right away", a: "Collagen stimulation takes time. Most people see peak results at 3–6 months, with continued improvement for up to a year." },
      { q: "It's painful for everyone", a: "Discomfort varies widely by person and provider settings. Ask about pain management options — many clinics offer numbing cream or adjusted settings." },
    ],
    questions: ["How many lines do you recommend for my concern areas, and at what depth?", "How will you manage my comfort during the procedure?", "How many Ultherapy procedures have you performed?", "Do I have enough tissue volume for this to be effective?"],
    prices: [{ loc: "Los Angeles", price: "$3,500 – $6,000" }, { loc: "US average", price: "$3,000 – $5,500" }, { loc: "Full face + neck", price: "$4,000 – $6,000" }],
  },
  "filler": {
    name: "Filler", type: "Injectable · Hyaluronic Acid", icon: "💧", colorBg: "#eff6ff",
    downtime: "Minimal", sessions: "1 session", resultsLast: "6–18 months",
    what: "Hyaluronic acid (HA) fillers restore lost volume, smooth folds, and enhance facial contours. Results are immediate and reversible — HA fillers can be dissolved with hyaluronidase if needed.",
    good: ["Those with volume loss in cheeks, lips, under-eyes, or nasolabial folds", "People wanting immediate, visible results", "Anyone looking for a reversible option"],
    bad: ["Those with active skin infections or cold sores near the treatment area", "People prone to excessive scarring or keloids", "Anyone expecting permanent results — fillers require maintenance"],
    myths: [
      { q: "More filler = more youthful", a: "Over-filling creates the 'pillow face' look. Skilled injectors use conservative amounts to restore natural proportions." },
      { q: "Filler stretches your skin permanently", a: "Quality HA fillers are biodegradable and dissolve naturally. Skin elasticity returns to baseline over time." },
      { q: "All fillers are the same", a: "Different HA fillers have different thicknesses for different uses — lip filler is not the same product as cheek filler." },
    ],
    questions: ["Which filler brand and product are you using, and why is it right for my concern?", "How much product do you plan to use, and where exactly?", "What's your approach if I don't like the results?", "Do you have hyaluronidase on hand to dissolve if needed?"],
    prices: [{ loc: "Per syringe (LA)", price: "$700 – $1,200" }, { loc: "Per syringe (US avg)", price: "$600 – $1,000" }, { loc: "Lips (1 syringe)", price: "$600 – $900" }],
  },
  "botox": {
    name: "Botox", type: "Injectable · Neurotoxin", icon: "✦", colorBg: "#eff6ff",
    downtime: "None", sessions: "Every 3–4 months", resultsLast: "3–4 months",
    what: "Botox temporarily relaxes the muscles that cause dynamic wrinkles — lines that appear when you make expressions. It prevents existing lines from deepening and delays new ones from forming.",
    good: ["Those with forehead lines, crow's feet, or frown lines (11s)", "Anyone starting preventative treatment in their late 20s to 30s", "People wanting a quick, no-downtime treatment with predictable results"],
    bad: ["Those with static wrinkles (lines present even at rest) — Botox won't erase these", "Pregnant or breastfeeding women", "Anyone expecting permanent results or significant lifting"],
    myths: [
      { q: "Botox makes your face look frozen", a: "A skilled injector uses conservative doses to soften lines while maintaining natural expression. 'Frozen face' is a sign of over-treatment." },
      { q: "Once you start, you can't stop", a: "You can stop at any time. Muscles gradually return to normal. Some find wrinkles are less severe after years of treatment due to muscle re-training." },
      { q: "Botox is only for wrinkles", a: "It's also used for jaw slimming, brow lifting, lip flipping, excessive sweating, and neck bands." },
    ],
    questions: ["How many units do you recommend for each area, and what's your pricing per unit?", "Which brand of neurotoxin are you using (Botox, Dysport, Xeomin)?", "How do you adjust for my facial anatomy and movement patterns?", "What should I expect in terms of onset and duration for my first treatment?"],
    prices: [{ loc: "Per unit (LA)", price: "$14 – $20 / unit" }, { loc: "Per unit (US avg)", price: "$10 – $18 / unit" }, { loc: "Full forehead", price: "$300 – $600" }],
  },
  "sculptra": {
    name: "Sculptra", type: "Injectable · Biostimulator", icon: "◉", colorBg: "#eff6ff",
    downtime: "Minimal", sessions: "3 sessions", resultsLast: "Up to 2 years",
    what: "Sculptra is a poly-L-lactic acid (PLLA) biostimulator that triggers your body's own collagen production. Unlike HA fillers, it doesn't add immediate volume — instead, it gradually rebuilds collagen over months for natural, long-lasting improvement.",
    good: ["Those wanting gradual, natural-looking volume restoration", "People with overall facial volume loss rather than isolated areas", "Anyone who wants longer-lasting results than standard fillers"],
    bad: ["Those wanting immediate results — Sculptra takes months to show full effect", "People with very little time between treatments — the protocol requires spacing sessions weeks apart", "Anyone expecting the same precision as HA filler for targeted areas like lips"],
    myths: [
      { q: "Results appear after the first session", a: "Sculptra works by stimulating collagen over time. Most people see gradual improvement starting around 6–8 weeks, with full results at 6 months." },
      { q: "It's the same as regular filler", a: "Sculptra is a biostimulator, not a filler. It doesn't add physical volume directly — it signals your body to produce collagen." },
      { q: "Three sessions is optional", a: "The 3-session protocol is standard for a reason. Skipping sessions reduces effectiveness and can lead to uneven results." },
    ],
    questions: ["How many vials per session do you recommend based on my degree of volume loss?", "What's your massage protocol after treatment to avoid nodules?", "How do you track my collagen response between sessions?", "Is Sculptra right for my specific concerns, or would another biostimulator work better?"],
    prices: [{ loc: "Per vial (LA)", price: "$800 – $1,000" }, { loc: "Full protocol (3 sessions)", price: "$2,400 – $4,500" }, { loc: "US average per vial", price: "$700 – $900" }],
  },
  "rf-microneedling": {
    name: "RF Microneedling", type: "Energy · Radiofrequency", icon: "⚡", colorBg: "#fffbeb",
    downtime: "2–3 days", sessions: "3 sessions", resultsLast: "1–2 years",
    what: "RF microneedling combines tiny needles with radiofrequency energy to stimulate collagen at multiple skin depths simultaneously. It improves texture, tightness, pore size, and mild laxity.",
    good: ["Those with acne scarring, enlarged pores, or skin texture concerns", "People with mild to moderate laxity who want skin quality improvement alongside tightening", "Those who have plateaued with topical treatments"],
    bad: ["Active acne breakouts or skin infections in the treatment area", "Those on blood thinners or with clotting disorders", "Very dark skin tones — some devices carry a higher risk of hyperpigmentation (consult your provider)"],
    myths: [
      { q: "It's the same as regular microneedling", a: "Standard microneedling only creates micro-channels. RF microneedling adds heat energy deep into the dermis for significantly more collagen stimulation." },
      { q: "More sessions always means better results", a: "3 sessions spaced 4–6 weeks apart is the standard protocol. More sessions beyond that show diminishing returns for most patients." },
      { q: "Downtime is minimal", a: "Most people experience 2–3 days of redness and mild swelling. Some have pinpoint bleeding immediately after. Plan around social commitments." },
    ],
    questions: ["Which RF microneedling device do you use (Morpheus8, Vivace, Potenza)?", "What depth and energy settings do you plan to use for my skin concerns?", "How does this compare to Thermage or laser for my specific concerns?", "What skincare should I avoid before and after treatment?"],
    prices: [{ loc: "Los Angeles", price: "$800 – $1,800 / session" }, { loc: "US average", price: "$700 – $1,500 / session" }, { loc: "Package of 3", price: "$2,000 – $4,500" }],
  },
};

export default function TreatmentPage({ params, searchParams }: { params: { slug: string }, searchParams: { match?: string } }) {
  const t = treatments[params.slug];
  if (!t) notFound();
  const matchScore = searchParams.match ? Number(searchParams.match) : null;

  return (
    <div style={{ paddingBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "52px 16px 14px" }}>
        <Link href="/" style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid #d0cdc7", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1917", background: "white", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>←</Link>
        <button style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid #e8e6e1", background: "white", cursor: "pointer", fontSize: 16 }}>♡</button>
      </div>

      <div style={{ margin: "0 16px 20px", background: t.colorBg, borderRadius: 18, padding: "18px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{t.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 19, fontWeight: 500 }}>{t.name}</div>
            <div style={{ fontSize: 11, color: "#6b6863", marginTop: 2 }}>{t.type}</div>
          </div>
          {matchScore && <div style={{ background: "white", borderRadius: 20, padding: "4px 10px", fontSize: 11, fontWeight: 500, color: "#2563eb" }}>{matchScore}% match</div>}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[["Downtime", t.downtime], ["Sessions", t.sessions], ["Results last", t.resultsLast]].map(([l, v]) => (
            <div key={l} style={{ background: "white", borderRadius: 10, padding: "8px 10px" }}>
              <div style={{ fontSize: 10, color: "#a09d98", marginBottom: 3 }}>{l}</div>
              <div style={{ fontSize: 12, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 10 }}>What it does</div>
        <p style={{ fontSize: 13, color: "#6b6863", lineHeight: 1.7 }}>{t.what}</p>
      </div>
      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 20px" }} />

      <div style={{ padding: "0 16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 10 }}>Who it's right for</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {t.good.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "10px 12px", background: "#f0fdf4", borderRadius: 12 }}>
              <span style={{ color: "#15803d", flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 12, color: "#15803d", lineHeight: 1.6 }}>{f}</span>
            </div>
          ))}
          {t.bad.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "10px 12px", background: "#fff1f2", borderRadius: 12 }}>
              <span style={{ color: "#be123c", flexShrink: 0 }}>✕</span>
              <span style={{ fontSize: 12, color: "#be123c", lineHeight: 1.6 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 20px" }} />

      <div style={{ padding: "0 16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 10 }}>Common myths</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {t.myths.map((m, i) => (
            <div key={i} style={{ background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 12, padding: "12px 14px" }}>
              <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 5, display: "flex", gap: 6 }}><span style={{ color: "#b45309" }}>⚠</span>{m.q}</div>
              <p style={{ fontSize: 12, color: "#6b6863", lineHeight: 1.6 }}>{m.a}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 20px" }} />

      <div style={{ padding: "0 16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 10 }}>Questions to ask your provider</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {t.questions.map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "10px 12px", background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 12 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 500, color: "#2563eb", flexShrink: 0 }}>{i + 1}</div>
              <span style={{ fontSize: 12, color: "#6b6863", lineHeight: 1.6 }}>{q}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "0.5px", background: "#e8e6e1", margin: "0 16px 20px" }} />

      <div style={{ padding: "0 16px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 10 }}>Price range</div>
        <div style={{ background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 14, padding: "4px 16px" }}>
          {t.prices.map(({ loc, price }, i) => (
            <div key={loc} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < t.prices.length - 1 ? "0.5px solid #e8e6e1" : "none" }}>
              <span style={{ fontSize: 12, color: "#6b6863" }}>{loc}</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{price}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 11, color: "#a09d98", textAlign: "center", padding: "0 20px 20px", lineHeight: 1.6 }}>
        For reference only. Results vary by provider skill, device, and individual skin condition.
      </p>
    </div>
  );
}
