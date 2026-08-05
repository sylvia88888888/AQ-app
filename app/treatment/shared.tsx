import Link from "next/link";

export const treatments: Record<string, {
  name: string; type: string; icon: string; colorBg: string;
  downtime: string; sessions: string; resultsLast: string;
  what: string; good: string[]; bad: string[];
  myths: { q: string; a: string }[];
  questions: { q: string; hint: string }[];
  prices: { loc: string; price: string }[];
  isSurgical?: boolean;
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
    questions: [
      { q: "What energy level and shot count do you recommend for my skin, and why?", hint: "A good provider should recommend at least 900–1,200 shots for a full face at 85–125+ joules. Be cautious if they can't explain their energy settings or suggest fewer than 600 shots." },
      { q: "Are you using the FLX handpiece or an older model?", hint: "The FLX is the current generation with a larger tip and better comfort. Older models (like the CPT) can still work but the FLX is preferred. Price should not be the same as older equipment." },
      { q: "How many Thermage treatments have you personally performed?", hint: "Look for someone who has done at least 50–100 procedures. Thermage results are highly operator-dependent — technique and experience matter enormously." },
      { q: "Do you think Thermage alone is enough or would you combine it?", hint: "An honest provider will tell you if your concerns are beyond what Thermage can achieve. Combining with Ultherapy or filler is common — beware of upselling without clear rationale." },
    ],
    prices: [{ loc: "Los Angeles", price: "$2,500 – $5,000" }, { loc: "US average", price: "$2,000 – $4,500" }, { loc: "Price per shot", price: "$3 – $8 / shot" }],
  },
  "ultherapy": {
    name: "Ultherapy", type: "Energy · Ultrasound", icon: "〜", colorBg: "#fffbeb",
    downtime: "1–2 days", sessions: "1 session", resultsLast: "1–2 years",
    what: "Ultherapy uses focused ultrasound energy to stimulate collagen production deep within the skin and foundational muscle layer (SMAS). It lifts and tightens the brow, chin, neck, and chest — without surgery.",
    good: ["Those with mild to moderate skin laxity on the face, neck, or brow", "People with good baseline fat volume — ultrasound energy needs tissue to work with", "Anyone wanting a non-surgical lift with longer-lasting results"],
    bad: ["Very thin or gaunt faces — ultrasound can cause further volume loss and make you look older", "Significant laxity that requires surgical intervention", "Those with open wounds, severe acne, or implanted metal devices in the treatment area"],
    myths: [
      { q: "More lines = better results", a: "More lines doesn't always mean better outcomes — depth, placement, and operator skill matter far more." },
      { q: "Results appear right away", a: "Most people see peak results at 3–6 months, with continued improvement for up to a year." },
      { q: "It's painful for everyone", a: "Discomfort varies widely. Ask about pain management options — many clinics offer numbing cream or adjusted settings." },
    ],
    questions: [
      { q: "How many lines do you recommend for my concern areas, and at what depth?", hint: "A full face typically uses 300–600 lines across depths of 1.5mm, 3mm, and 4.5mm. If a provider quotes far fewer without explanation, ask why. Depth matters as much as quantity." },
      { q: "How will you manage my comfort during the procedure?", hint: "Numbing cream, nerve blocks, or oral pain medication should be offered. Ultherapy can be uncomfortable — a provider who dismisses pain concerns is a red flag." },
      { q: "How many Ultherapy procedures have you performed?", hint: "Look for 50+ procedures minimum. Results are heavily operator-dependent. Ask to see before-and-after photos of their own patients, not stock images." },
      { q: "Do I have enough tissue volume for this to be effective?", hint: "Critical question. If you have a very thin or gaunt face, Ultherapy may worsen volume loss. An honest provider will tell you if you're not a good candidate." },
    ],
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
      { q: "Filler stretches your skin permanently", a: "Quality HA fillers are biodegradable and dissolve naturally over time." },
      { q: "All fillers are the same", a: "Different HA fillers have different thicknesses for different uses — lip filler is not the same product as cheek filler." },
    ],
    questions: [
      { q: "Which filler brand and product are you using, and why?", hint: "Reputable brands: Juvederm, Restylane, Sculptra, Radiesse. Different products suit different areas — Voluma for cheeks, Volbella for lips. A provider using one product everywhere may lack experience." },
      { q: "How much product do you plan to use, and where exactly?", hint: "Cheeks: 1–2 syringes. Lips: 0.5–1 syringe. Under-eyes: 0.5–1 syringe. Be cautious of anyone recommending 4+ syringes in one session without a very clear, area-by-area plan." },
      { q: "What's your approach if I don't like the results?", hint: "HA fillers can be dissolved with hyaluronidase. A reputable injector should confirm willingness to dissolve if you're unhappy. This reflects confidence in their work and respect for your autonomy." },
      { q: "Do you have hyaluronidase on hand to dissolve if needed?", hint: "The answer must be yes. Hyaluronidase dissolves HA fillers and is essential for emergencies (vascular occlusion) and aesthetic corrections. Never proceed without this assurance." },
    ],
    prices: [{ loc: "Per syringe (LA)", price: "$700 – $1,200" }, { loc: "Per syringe (US avg)", price: "$600 – $1,000" }, { loc: "Lips (1 syringe)", price: "$600 – $900" }],
  },
  "botox": {
    name: "Botox", type: "Injectable · Neurotoxin", icon: "✦", colorBg: "#eff6ff",
    downtime: "None", sessions: "Every 3–4 months", resultsLast: "3–4 months",
    what: "Botox temporarily relaxes the muscles that cause dynamic wrinkles — lines that appear when you make expressions. It prevents existing lines from deepening and delays new ones from forming.",
    good: ["Those with forehead lines, crow's feet, or frown lines (11s)", "Anyone starting preventative treatment in their late 20s to 30s", "People wanting a quick, no-downtime treatment with predictable results"],
    bad: ["Those with static wrinkles (lines present even at rest) — Botox won't erase these", "Pregnant or breastfeeding women", "Anyone expecting permanent results or significant lifting"],
    myths: [
      { q: "Botox makes your face look frozen", a: "A skilled injector uses conservative doses to soften lines while maintaining natural expression." },
      { q: "Once you start, you can't stop", a: "You can stop at any time. Muscles gradually return to normal." },
      { q: "Botox is only for wrinkles", a: "It's also used for jaw slimming, brow lifting, lip flipping, excessive sweating, and neck bands." },
    ],
    questions: [
      { q: "How many units do you recommend for each area, and what's your pricing per unit?", hint: "Typical: forehead 10–20 units, glabella (11s) 15–25 units, crow's feet 10–15/side. Be wary of flat-fee pricing that doesn't discuss units — you may be getting less than you think." },
      { q: "Which brand are you using (Botox, Dysport, Xeomin)?", hint: "All three are FDA-approved. Botox is most studied; Dysport spreads more (better for forehead); Xeomin has no additives (good for those with resistance). Ask why they prefer theirs." },
      { q: "How do you adjust for my facial anatomy?", hint: "A skilled injector watches you make expressions before injecting. Cookie-cutter patterns without individual assessment are a red flag. Your muscle patterns are unique." },
      { q: "What should I expect in terms of onset and duration?", hint: "Botox: kicks in 5–7 days, full effect at 2 weeks, lasts 3–4 months. If a provider promises 6+ months from standard doses, be skeptical — that's not clinically accurate." },
    ],
    prices: [{ loc: "Per unit (LA)", price: "$14 – $20 / unit" }, { loc: "Per unit (US avg)", price: "$10 – $18 / unit" }, { loc: "Full forehead", price: "$300 – $600" }],
  },
  "sculptra": {
    name: "Sculptra", type: "Injectable · Biostimulator", icon: "◉", colorBg: "#eff6ff",
    downtime: "Minimal", sessions: "3 sessions", resultsLast: "Up to 2 years",
    what: "Sculptra is a poly-L-lactic acid (PLLA) biostimulator that triggers your body's own collagen production. Unlike HA fillers, it doesn't add immediate volume — instead, it gradually rebuilds collagen over months.",
    good: ["Those wanting gradual, natural-looking volume restoration", "People with overall facial volume loss", "Anyone who wants longer-lasting results than standard fillers"],
    bad: ["Those wanting immediate results — Sculptra takes months to show full effect", "Anyone expecting the same precision as HA filler for targeted areas like lips"],
    myths: [
      { q: "Results appear after the first session", a: "Most people see gradual improvement starting around 6–8 weeks, with full results at 6 months." },
      { q: "It's the same as regular filler", a: "Sculptra is a biostimulator — it signals your body to produce collagen rather than adding direct volume." },
      { q: "Three sessions is optional", a: "The 3-session protocol is standard. Skipping sessions reduces effectiveness." },
    ],
    questions: [
      { q: "How many vials per session do you recommend?", hint: "Typically 1–2 vials for moderate volume loss, up to 3–4 for significant loss. The '1 vial per decade of life' is a rough guide. Be cautious of 5+ vials in one session." },
      { q: "What's your massage protocol to avoid nodules?", hint: "Standard is the '5-5-5 rule': massage 5 times a day, 5 minutes each, for 5 days. A provider who doesn't mention this or has a different protocol should explain their reasoning." },
      { q: "How do you track my collagen response between sessions?", hint: "Good providers take standardized photos and reassess before each session. They should adjust the plan based on how you're responding — not just follow a fixed protocol regardless." },
    ],
    prices: [{ loc: "Per vial (LA)", price: "$800 – $1,000" }, { loc: "Full protocol (3 sessions)", price: "$2,400 – $4,500" }, { loc: "US average per vial", price: "$700 – $900" }],
  },
  "rf-microneedling": {
    name: "RF Microneedling", type: "Energy · Radiofrequency", icon: "⚡", colorBg: "#fffbeb",
    downtime: "2–3 days", sessions: "3 sessions", resultsLast: "1–2 years",
    what: "RF microneedling combines tiny needles with radiofrequency energy to stimulate collagen at multiple skin depths simultaneously. It improves texture, tightness, pore size, and mild laxity.",
    good: ["Those with acne scarring, enlarged pores, or skin texture concerns", "People with mild to moderate laxity wanting skin quality improvement alongside tightening"],
    bad: ["Active acne breakouts or skin infections in the treatment area", "Those on blood thinners or with clotting disorders"],
    myths: [
      { q: "It's the same as regular microneedling", a: "RF microneedling adds heat energy deep into the dermis for significantly more collagen stimulation." },
      { q: "More sessions always means better results", a: "3 sessions spaced 4–6 weeks apart is the standard protocol." },
    ],
    questions: [
      { q: "Which device do you use (Morpheus8, Vivace, Potenza)?", hint: "Morpheus8 is the most widely studied and reaches deepest tissue (up to 8mm). Vivace and Potenza are also reputable. Ask why they chose their device and what depth they'll use for your concerns." },
      { q: "What depth and energy settings do you plan to use?", hint: "For tightening: deeper settings (3–4mm). For texture/pores: shallower (1–2mm). Generic settings for every patient is a red flag — your concerns should drive the protocol." },
      { q: "What skincare should I avoid before and after?", hint: "Avoid retinoids 5–7 days before. No active skincare (acids, vitamin C) for 1 week after. Strict sun protection after. Detailed aftercare instructions signal an experienced provider." },
    ],
    prices: [{ loc: "Los Angeles", price: "$800 – $1,800 / session" }, { loc: "US average", price: "$700 – $1,500 / session" }, { loc: "Package of 3", price: "$2,000 – $4,500" }],
  },
  "face-lift": {
    name: "Face Lift", type: "Surgical · Rhytidectomy", icon: "✚", colorBg: "#fdf2f8", isSurgical: true,
    downtime: "2–4 weeks", sessions: "1 procedure", resultsLast: "7–10 years",
    what: "A face lift surgically repositions and tightens the underlying facial muscles and removes excess skin to address significant laxity, deep jowls, and neck sagging. It provides the most dramatic and longest-lasting results of any facial rejuvenation procedure.",
    good: ["Those with significant skin laxity, jowling, or neck sagging", "Patients in good overall health, non-smokers, with realistic expectations", "Ages 45–70 who want long-lasting results"],
    bad: ["Anyone who cannot tolerate general anesthesia", "Smokers — smoking severely impairs healing", "Those expecting perfection"],
    myths: [
      { q: "Face lifts look obvious and 'pulled'", a: "Modern techniques reposition deeper tissue rather than just pulling skin, creating natural-looking results." },
      { q: "Results last forever", a: "Most patients enjoy results for 7–10 years before considering revision." },
    ],
    questions: [
      { q: "Are you board-certified in plastic surgery?", hint: "Look for board certification from the American Board of Plastic Surgery (ABPS). This is a minimum — also check how many face lifts they perform annually (100+ per year indicates high volume)." },
      { q: "What technique do you use — SMAS, deep plane, or composite?", hint: "SMAS is most common and reliable. Deep plane reaches deeper tissue for longer-lasting results but is more complex. The right choice depends on your anatomy. A surgeon should explain their recommendation." },
      { q: "What are the realistic risks for my anatomy and health?", hint: "Expect discussion of: hematoma (most common complication), nerve injury, scarring, asymmetry, anesthesia risks. A surgeon who only discusses positives without acknowledging risks is a red flag." },
      { q: "Can I see before-and-after photos of patients with similar anatomy to mine?", hint: "Look for natural results without obvious pulling or windswept appearance. Ask if the photos are their own patients (not stock). Also ask about their revision rate." },
    ],
    prices: [{ loc: "Los Angeles", price: "$15,000 – $35,000" }, { loc: "US average", price: "$12,000 – $28,000" }],
  },
  "blepharoplasty": {
    name: "Blepharoplasty", type: "Surgical · Eyelid Surgery", icon: "✚", colorBg: "#fdf2f8", isSurgical: true,
    downtime: "1–2 weeks", sessions: "1 procedure", resultsLast: "5–10 years",
    what: "Blepharoplasty removes excess skin, fat, and muscle from the upper and/or lower eyelids. It addresses hooded upper lids, under-eye bags, and puffiness that make you look tired.",
    good: ["Those with hooded upper eyelids that impair vision or create a tired appearance", "People with persistent under-eye bags unresponsive to fillers"],
    bad: ["Those with dry eye syndrome — surgery can worsen symptoms", "Anyone with uncontrolled thyroid disease or glaucoma"],
    myths: [
      { q: "It removes dark circles", a: "Blepharoplasty removes bags and excess skin, but dark circles from pigmentation are a separate issue." },
      { q: "Both eyes will look identical after", a: "Natural facial asymmetry means eyes will be improved but not perfectly symmetrical." },
    ],
    questions: [
      { q: "Do you recommend upper, lower, or both — and why based on my anatomy?", hint: "Upper blepharoplasty addresses hooding; lower addresses bags and hollows. Sometimes a brow lift is the correct solution for apparent eyelid drooping. An experienced surgeon distinguishes these carefully." },
      { q: "Will you use local or general anesthesia?", hint: "Upper lid surgery is often done under local with sedation. Lower lid or combined procedures may require general anesthesia. Ask where surgery will be performed — accredited surgical facility is important." },
      { q: "Do I have any risk factors for dry eye or other complications?", hint: "Dry eye syndrome can worsen significantly after blepharoplasty. Thyroid disease, previous LASIK, and certain medications also increase risk. A thorough pre-op evaluation should identify these." },
    ],
    prices: [{ loc: "Los Angeles (both lids)", price: "$6,000 – $15,000" }, { loc: "Upper lids only", price: "$3,000 – $7,000" }, { loc: "Lower lids only", price: "$4,000 – $9,000" }],
  },
  "porcelain-veneers": {
    name: "Porcelain Veneers", type: "Dental · Cosmetic", icon: "◻", colorBg: "#f0f9ff",
    downtime: "Minimal", sessions: "2–3 visits", resultsLast: "10–20 years",
    what: "Porcelain veneers are ultra-thin ceramic shells bonded to the front surface of teeth to correct color, shape, size, or spacing. They provide dramatic smile transformations and are highly stain-resistant.",
    good: ["Those with discolored teeth unresponsive to whitening", "People with chipped, worn, or slightly misaligned teeth wanting a complete smile transformation"],
    bad: ["People with significant tooth decay or gum disease — these must be treated first", "Those with teeth-grinding without a night guard"],
    myths: [
      { q: "Veneers look fake and too white", a: "Modern veneers are customized to match natural tooth translucency and color." },
      { q: "They don't require maintenance", a: "Veneers last longer with good oral hygiene, regular dental visits, and avoiding hard foods." },
    ],
    questions: [
      { q: "How much enamel will you need to remove?", hint: "Minimal prep veneers (like Lumineers) remove very little enamel. Traditional veneers require 0.5–0.7mm removal. No-prep veneers exist but aren't suitable for everyone. Less removal is generally better." },
      { q: "Can I see a digital mock-up before committing?", hint: "A digital smile design or wax mock-up lets you preview the result before any irreversible work is done. Dentists who skip this step are asking you to commit blind — a legitimate concern." },
      { q: "What's your warranty or touch-up policy if a veneer chips or debonds?", hint: "Quality veneers should last 10–20 years. Some dentists offer 1–5 year warranties. Ask what events are covered and what the cost would be for replacement. Get this in writing." },
      { q: "Do I need any preparatory work before veneers?", hint: "Gum contouring, teeth whitening of non-veneer teeth, or cavity treatment may be needed first. A complete treatment plan before starting is a sign of thorough care." },
    ],
    prices: [{ loc: "Per tooth (LA)", price: "$1,500 – $2,500" }, { loc: "Full set of 8 (LA)", price: "$12,000 – $20,000" }, { loc: "US average per tooth", price: "$1,000 – $2,000" }],
  },
  "kybella": {
    name: "Kybella", type: "Injectable · Deoxycholic Acid", icon: "💉", colorBg: "#eff6ff",
    downtime: "1–2 weeks", sessions: "2–4 sessions", resultsLast: "Permanent",
    what: "Kybella permanently destroys fat cells under the chin. Once destroyed, those cells cannot store fat again. It's the only FDA-approved injectable for double chin reduction.",
    good: ["Those with moderate submental fat ('double chin')", "People who want a non-surgical alternative to liposuction for the chin area"],
    bad: ["Those with very loose neck skin — Kybella removes fat but doesn't tighten skin", "People wanting immediate results"],
    myths: [
      { q: "One session is enough", a: "Most patients need 2–4 sessions spaced 4–6 weeks apart." },
      { q: "The swelling means it's not working", a: "Significant swelling is normal and expected — it indicates fat cells are being destroyed." },
    ],
    questions: [
      { q: "How many vials per session do you recommend?", hint: "Typically 2 vials per session for moderate submental fat. Some cases require up to 4 vials per session. More than that in one session raises safety concerns." },
      { q: "What can I expect in terms of swelling?", hint: "Significant swelling ('Kybella bullfrog') lasting 1–2 weeks is expected and normal. Plan social commitments accordingly. Swelling indicates the fat cells are being destroyed — this is working as intended." },
      { q: "Is Kybella right for me or would neck liposuction give better results?", hint: "If you have significant fat or want faster results, liposuction may be more effective in one session. A provider who only offers Kybella without considering alternatives may not have your best interests first." },
    ],
    prices: [{ loc: "Per session (LA)", price: "$1,200 – $2,500" }, { loc: "Full treatment", price: "$2,400 – $8,000" }],
  },
  "teeth-whitening": {
    name: "Teeth Whitening", type: "Dental · Cosmetic", icon: "◻", colorBg: "#f0f9ff",
    downtime: "None", sessions: "1 session", resultsLast: "6–12 months",
    what: "Professional in-office teeth whitening uses high-concentration bleaching agents activated by light or laser to lighten teeth by several shades in a single visit. Results are immediate and significantly more effective than over-the-counter options.",
    good: ["Those with yellowing or staining from coffee, tea, wine, or aging", "Anyone wanting a quick, non-invasive smile refresh", "People before a big event wanting immediate results"],
    bad: ["Those with caps, crowns, or veneers — whitening won't affect these restorations", "People with severe tooth sensitivity or enamel erosion", "Those with intrinsic staining (from antibiotics or fluorosis) — whitening is less effective"],
    myths: [
      { q: "Whitening damages enamel", a: "Professional whitening is safe when done correctly. Temporary sensitivity is common but enamel damage from properly supervised treatment is rare." },
      { q: "Results are permanent", a: "Whitening fades over time, especially with continued coffee, tea, or wine consumption. Touch-ups every 6–12 months maintain results." },
      { q: "All whitening products are equal", a: "In-office professional whitening uses higher concentrations than store-bought kits, producing faster and more dramatic results." },
    ],
    questions: [
      { q: "What concentration of whitening agent do you use?", hint: "In-office systems typically use 25–40% hydrogen peroxide. Higher concentration means faster results but more sensitivity risk. Laser-activated systems allow lower concentrations with comparable results." },
      { q: "How many shades lighter can I realistically expect?", hint: "Most patients achieve 3–8 shades lighter in one session. Results depend on starting shade and tooth structure. Intrinsic staining (from antibiotics or fluorosis) responds less well — a good provider will tell you this upfront." },
      { q: "Do I need any pre-treatment for sensitivity?", hint: "If you have sensitive teeth, ask about desensitizing treatments before and after. Potassium nitrate toothpaste in the days before can reduce discomfort. A provider should screen for this, not wait for you to complain." },
      { q: "What take-home maintenance do you recommend?", hint: "Touch-up trays with lower-concentration gel (10–16% carbamide peroxide) maintain results. Avoid coffee, tea, red wine, and smoking for at least 48 hours after treatment when 'rebound staining' is highest." },
    ],
    prices: [{ loc: "In-office (LA)", price: "$300 – $800" }, { loc: "US average", price: "$250 – $600" }, { loc: "Take-home kit", price: "$100 – $400" }],
  },
  "invisalign": {
    name: "Invisalign", type: "Dental · Orthodontics", icon: "◻", colorBg: "#f0f9ff",
    downtime: "None", sessions: "Ongoing (12–24 months)", resultsLast: "Permanent with retainer",
    what: "Invisalign uses a series of custom clear aligners to gradually shift teeth into the desired position. Nearly invisible and removable, they offer an aesthetic alternative to traditional metal braces for mild to moderate alignment issues.",
    good: ["Adults and teens with mild to moderate crowding, spacing, or bite issues", "Those wanting a discreet orthodontic option", "People committed to wearing aligners 20–22 hours per day"],
    bad: ["Those with severe misalignment or complex bite issues — traditional braces may be more effective", "People who won't comply with wearing aligners consistently — results depend on compliance", "Those with certain types of dental work like bridges that can't be moved"],
    myths: [
      { q: "Invisalign works for everyone", a: "It's highly effective for mild to moderate cases, but severe crowding, large gaps, or complex bite issues may require traditional orthodontics." },
      { q: "You can take them out whenever you want", a: "Aligners must be worn 20–22 hours daily for treatment to work on schedule. Frequent removal extends treatment time significantly." },
      { q: "Treatment ends when you finish aligners", a: "Retainers must be worn indefinitely (nightly) after treatment to maintain results." },
    ],
    questions: [
      { q: "Am I a good candidate for Invisalign or do I need traditional braces?", hint: "Invisalign works well for mild-moderate cases. Severe crowding, large gaps, significant bite issues, or teeth that need significant rotation often require traditional braces. An honest orthodontist will tell you which is better for your case." },
      { q: "How many aligners will my treatment require, and what's the estimated timeline?", hint: "Simple cases: 6–12 months, 20–30 aligners. Moderate: 12–18 months, 30–50 aligners. Complex: 18–24+ months. Providers who promise unusually short timelines for complex cases should be questioned." },
      { q: "What happens if I lose or break an aligner?", hint: "You'll typically need to pay for replacement ($50–150) and may step back or forward in your series. Ask about their process upfront — some practices include replacements, others charge each time." },
      { q: "Will I need attachments on my teeth?", hint: "Small tooth-colored bumps (attachments) help aligners grip for complex movements. They're common and necessary for many cases. A provider who never uses attachments may be oversimplifying complex movements." },
    ],
    prices: [{ loc: "Los Angeles", price: "$4,000 – $8,000" }, { loc: "US average", price: "$3,000 – $7,000" }, { loc: "Invisalign Lite (minor cases)", price: "$2,000 – $4,000" }],
  },
  "dental-bonding": {
    name: "Dental Bonding", type: "Dental · Cosmetic", icon: "◻", colorBg: "#f0f9ff",
    downtime: "None", sessions: "1 visit", resultsLast: "3–10 years",
    what: "Dental bonding uses tooth-colored composite resin to repair chips, cracks, gaps, or discoloration. It's applied directly to the tooth and sculpted by hand — a quick, affordable, and reversible cosmetic solution.",
    good: ["Those with minor chips, cracks, or small gaps between teeth", "People wanting an affordable alternative to veneers", "Those wanting a reversible option with no enamel removal required"],
    bad: ["People with significant discoloration — bonding can stain over time and may not match perfectly", "Those with heavy bite pressure or grinding habits — bonding chips more easily than porcelain", "Anyone expecting the longevity of veneers or crowns"],
    myths: [
      { q: "Bonding looks as good as veneers", a: "Bonding is more opaque and less translucent than porcelain. Skilled dentists can achieve natural results, but veneers typically look more lifelike long-term." },
      { q: "It lasts as long as veneers", a: "Bonding typically lasts 3–10 years versus 10–20 for porcelain veneers, and is more prone to chipping and staining." },
      { q: "It's a permanent fix", a: "Bonding is considered reversible since no enamel is removed, but the resin will need replacement over time." },
    ],
    questions: [
      { q: "Is bonding or a veneer more appropriate for my specific concern?", hint: "Bonding is reversible, faster, and cheaper — ideal for small chips or gaps. Veneers are more durable, stain-resistant, and natural-looking — better for significant cosmetic changes. Choose based on the extent of your concern, not just cost." },
      { q: "What shade of resin will best match my surrounding teeth?", hint: "Ask to see the shade guide selection in your mouth before bonding. Resin can be slightly opaque compared to natural enamel — a skilled dentist layers translucent and opaque shades to mimic natural tooth structure." },
      { q: "How durable will the bonding be given my bite?", hint: "If you have a heavy bite, grind your teeth, or bite your nails, bonding is more prone to chipping. Ask if a night guard is recommended and whether bonding is appropriate for the specific tooth given your habits." },
      { q: "How do I care for bonded teeth to maximize longevity?", hint: "Avoid biting hard objects (ice, pen caps, hard candy). Staining foods (coffee, tea, red wine) affect bonding more than natural enamel — rinse after consuming them. Bonding may need polishing or replacement every 3–10 years." },
    ],
    prices: [{ loc: "Per tooth (LA)", price: "$300 – $600" }, { loc: "US average per tooth", price: "$200 – $500" }, { loc: "Multiple teeth", price: "$1,000 – $3,000" }],
  },
  "bbl-ipl": {
    name: "BBL / IPL", type: "Energy · Broadband Light", icon: "☀", colorBg: "#fffbeb",
    downtime: "1–3 days", sessions: "3–5 sessions", resultsLast: "1–2 years",
    what: "Broadband Light (BBL) and Intense Pulsed Light (IPL) use broad-spectrum light to target pigmentation, redness, sun damage, and broken capillaries. BBL is the more advanced version, with research showing it can reverse signs of aging at the cellular level with regular treatment.",
    good: ["Those with sun damage, age spots, redness, or rosacea", "People with fair to medium skin tones (higher risk of pigmentation changes in darker skin)", "Anyone wanting to address uneven skin tone without downtime"],
    bad: ["Those with very dark skin tones — higher risk of hyperpigmentation", "Active tan or recently sun-exposed skin", "People on photosensitizing medications"],
    myths: [
      { q: "One treatment is enough", a: "A series of 3–5 treatments spaced 3–4 weeks apart produces optimal results. Annual maintenance keeps results consistent." },
      { q: "It's the same as laser", a: "IPL/BBL uses broad-spectrum light across multiple wavelengths, while lasers use a single focused wavelength. Different tools for different concerns." },
      { q: "It's too painful", a: "Most patients describe it as a rubber band snap. Cooling systems and topical numbing make it very manageable." },
    ],
    questions: [
      { q: "What device do you use — BBL, IPL, or another brand?", hint: "Sciton BBL is the gold standard with the most research, including studies showing anti-aging effects at the cellular level. Standard IPL varies widely by brand. Ask specifically about the device model and whether it has adjustable wavelength filters." },
      { q: "Is my skin tone a good candidate, and what's the risk of pigment changes?", hint: "Fitzpatrick skin types I–III (lighter skin) are ideal candidates. Types IV–VI carry higher risk of post-inflammatory hyperpigmentation. A provider should assess your skin tone carefully and may do a test spot first." },
      { q: "How many sessions do you recommend for my specific concerns?", hint: "Most protocols recommend 3–5 sessions spaced 3–4 weeks apart. Annual or bi-annual maintenance sessions keep results consistent. Single sessions provide improvement but a series produces significantly better results." },
      { q: "What sun protection protocol do I need before and after?", hint: "Avoid sun exposure and self-tanner for 2–4 weeks before treatment. SPF 30+ every day after treatment is non-negotiable. Tanned skin dramatically increases the risk of burns and pigmentation — a provider should screen for this." },
    ],
    prices: [{ loc: "Per session (LA)", price: "$400 – $900" }, { loc: "Package of 3 (LA)", price: "$1,000 – $2,500" }, { loc: "US average per session", price: "$300 – $700" }],
  },
  "fraxel-laser": {
    name: "Fraxel Laser", type: "Energy · Fractional Laser", icon: "⚡", colorBg: "#fffbeb",
    downtime: "3–7 days", sessions: "1–3 sessions", resultsLast: "1–3 years",
    what: "Fraxel is a fractional laser that treats thousands of microscopic columns of skin while leaving surrounding tissue intact. This stimulates rapid healing and collagen production, addressing wrinkles, acne scars, sun damage, and skin texture with significant results.",
    good: ["Those with moderate to severe sun damage, acne scars, or wrinkles", "People willing to tolerate 3–7 days of downtime for more dramatic results", "Those who have not responded adequately to milder treatments"],
    bad: ["Active acne or skin infections", "Very dark skin tones — higher risk of post-inflammatory hyperpigmentation", "Those who cannot avoid sun exposure during recovery"],
    myths: [
      { q: "One treatment fixes everything", a: "One session produces noticeable improvement, but 2–3 sessions spaced 4–6 weeks apart are often recommended for optimal results." },
      { q: "Recovery is unbearable", a: "Skin feels sunburned for 1–2 days and peels for 3–5 days. Most people return to normal activities within a week." },
      { q: "It's the same as ablative laser resurfacing", a: "Fraxel is fractional — it treats zones of skin while leaving others intact, producing faster healing than fully ablative lasers." },
    ],
    questions: [
      { q: "Which Fraxel setting do you recommend — Restore or Repair?", hint: "Fraxel Restore (non-ablative) has less downtime (3–5 days) and addresses texture and mild wrinkles. Fraxel Repair (ablative CO2) is more aggressive with 7–10 days downtime but better results for deeper lines and scarring. The choice depends on your goals and downtime tolerance." },
      { q: "How many sessions do you suggest for my concerns?", hint: "Restore typically requires 3–5 sessions. Repair usually 1–2. More sessions at lower settings is generally safer than one aggressive treatment, especially for first-time patients." },
      { q: "What's the risk of pigment changes for my skin tone?", hint: "Higher Fitzpatrick skin types (IV–VI) carry significant hyperpigmentation risk with Fraxel. A provider should discuss this honestly and may recommend alternative treatments or conservative settings with a test patch." },
      { q: "What skincare routine do I need before and after?", hint: "Before: discontinue retinoids, acids, and vitamin C 1–2 weeks prior. Hydroquinone may be prescribed preventatively for darker skin. After: gentle cleanser, growth factor serum, heavy moisturizer, and strict SPF. Ask for a written protocol." },
    ],
    prices: [{ loc: "Per session (LA)", price: "$1,000 – $2,500" }, { loc: "US average per session", price: "$800 – $2,000" }, { loc: "Series of 3", price: "$2,500 – $6,000" }],
  },
  "clear-brilliant": {
    name: "Clear + Brilliant", type: "Energy · Fractional Laser", icon: "⚡", colorBg: "#fffbeb",
    downtime: "1–2 days", sessions: "4–6 sessions", resultsLast: "6–12 months",
    what: "Clear + Brilliant is a gentle fractional laser often called 'baby Fraxel.' It addresses early signs of aging, dullness, and uneven texture with minimal downtime — ideal for maintenance or as an entry-level laser treatment.",
    good: ["Those in their 20s–40s wanting preventative skin maintenance", "People with mild texture, dullness, or early sun damage", "Anyone wanting laser benefits with minimal social downtime"],
    bad: ["Those with significant scarring, deep wrinkles, or advanced sun damage — need a stronger treatment", "Active tan or recent sun exposure", "Pregnant or breastfeeding women"],
    myths: [
      { q: "It's as effective as Fraxel", a: "Clear + Brilliant uses lower energy and is designed for maintenance, not correction. Think of it as a tune-up versus a full renovation." },
      { q: "Results are immediate", a: "Skin glows right after but texture and tone improvements develop over 2–4 weeks as collagen remodels." },
    ],
    questions: [
      { q: "Is Clear + Brilliant strong enough for my concerns, or should I do Fraxel?", hint: "Clear + Brilliant is ideal for maintenance and early prevention. If you have significant sun damage, acne scarring, or deeper wrinkles, Fraxel or other more aggressive treatments will produce better results. An honest provider will tell you if you need more." },
      { q: "How many sessions do you recommend as a starting point?", hint: "A series of 4–6 sessions spaced 2–4 weeks apart produces best initial results, followed by quarterly maintenance. Single sessions are beneficial but the cumulative effect of a series is significantly more noticeable." },
      { q: "Can I combine this with other treatments in the same visit?", hint: "Clear + Brilliant is often combined with injectables, PRP, or hydrating treatments in the same session. Ask what combinations they recommend for your specific goals — combination approaches often produce synergistic results." },
    ],
    prices: [{ loc: "Per session (LA)", price: "$300 – $600" }, { loc: "Package of 4", price: "$1,000 – $2,000" }, { loc: "US average per session", price: "$250 – $500" }],
  },
  "dysport": {
    name: "Dysport", type: "Injectable · Neurotoxin", icon: "✦", colorBg: "#eff6ff",
    downtime: "None", sessions: "Every 3–4 months", resultsLast: "3–4 months",
    what: "Dysport is a botulinum toxin type A — the same category as Botox — used to temporarily relax facial muscles and reduce dynamic wrinkles. Many patients prefer Dysport for its faster onset and slightly more natural spread, especially for the forehead.",
    good: ["Those with forehead lines, frown lines, or crow's feet", "People who have tried Botox and want to compare alternatives", "Those wanting faster results — Dysport often kicks in within 2–3 days vs 5–7 for Botox"],
    bad: ["Those with static wrinkles (present at rest) — neurotoxins address dynamic lines only", "Pregnant or breastfeeding women", "Anyone with a known allergy to cow's milk protein (Dysport contains trace amounts)"],
    myths: [
      { q: "Dysport and Botox are identical", a: "Both are botulinum toxin type A but different formulations. Dysport diffuses more, making it better for larger areas like the forehead; Botox stays more localized." },
      { q: "Units are the same between products", a: "Dysport units are not equivalent to Botox units — typically 2.5–3 Dysport units equal 1 Botox unit. Don't compare prices by unit alone." },
    ],
    questions: [
      { q: "Why do you recommend Dysport over Botox for my concerns?", hint: "Dysport diffuses more widely, making it well-suited for larger areas like the forehead. Botox is more localized, better for precision areas like crow's feet. If a provider uses only one product for all areas without explanation, ask why." },
      { q: "How many units do you recommend, and how does that translate to Botox units?", hint: "The conversion is roughly 2.5–3 Dysport units = 1 Botox unit. A typical forehead in Dysport uses 50–75 units. Don't compare prices by unit count alone — always ask the Botox-equivalent dose to compare fairly." },
      { q: "How quickly will I see results, and how long should they last?", hint: "Dysport often kicks in within 2–3 days (faster than Botox's 5–7 days). Duration is similar at 3–4 months. Some patients find one lasts longer than the other — it's worth trying both to see which you prefer." },
    ],
    prices: [{ loc: "Per unit (LA)", price: "$5 – $8 / unit" }, { loc: "Forehead (50–70 units)", price: "$250 – $550" }, { loc: "US average per unit", price: "$4 – $7" }],
  },
  "neck-lift": {
    name: "Neck Lift", type: "Surgical · Platysmaplasty", icon: "✚", colorBg: "#fdf2f8", isSurgical: true,
    downtime: "2–3 weeks", sessions: "1 procedure", resultsLast: "5–10 years",
    what: "A neck lift surgically tightens the neck muscles (platysma), removes excess fat, and trims loose skin to address sagging, banding, and a 'turkey neck' appearance. Often performed alongside a face lift for comprehensive lower face and neck rejuvenation.",
    good: ["Those with significant neck laxity, jowling, or prominent neck bands", "People whose neck aging is out of proportion to their face", "Non-smokers in good health with realistic expectations"],
    bad: ["Those with mild laxity — non-surgical options like Ultherapy or Thermage may be sufficient", "Smokers — significantly higher complication risk", "Anyone with major health conditions affecting healing"],
    myths: [
      { q: "A neck lift and face lift are the same", a: "They're related but distinct procedures. A neck lift focuses on the neck; a face lift addresses the mid and lower face. Many surgeons perform them together." },
      { q: "Results look unnatural", a: "Modern neck lift techniques create natural contours rather than the 'tight' look associated with older approaches." },
    ],
    questions: [
      { q: "Do you recommend a neck lift alone or combined with a face lift?", hint: "Isolated neck lifts work well for patients whose face is still relatively youthful. If you also have significant jowling or lower face laxity, combining with a face lift produces more harmonious results. A surgeon should explain their recommendation based on your specific anatomy." },
      { q: "What technique do you use, and how will you address the platysma bands?", hint: "The platysma is the neck muscle that creates visible bands. Platysmaplasty (surgical tightening or cutting of the platysma) is necessary for significant banding. Ask specifically how they plan to address this if bands are a concern." },
      { q: "What are my realistic risks given my health history?", hint: "Key risks: hematoma, nerve injury (particularly the marginal mandibular nerve affecting smile), infection, poor healing, and asymmetry. Smokers face significantly higher complication rates. Demand an honest, complete risk discussion." },
      { q: "How will you manage my scars, and where will incisions be placed?", hint: "Incisions are typically behind the ears and under the chin. Ask to see examples of healed scars from their patients. Good technique places scars in natural creases and minimizes tension during healing." },
    ],
    prices: [{ loc: "Los Angeles", price: "$8,000 – $20,000" }, { loc: "US average", price: "$6,000 – $15,000" }, { loc: "Combined with face lift", price: "$18,000 – $40,000" }],
  },
  "rhinoplasty": {
    name: "Rhinoplasty", type: "Surgical · Nose Reshaping", icon: "✚", colorBg: "#fdf2f8", isSurgical: true,
    downtime: "1–2 weeks visible, 1 year full", sessions: "1 procedure", resultsLast: "Permanent",
    what: "Rhinoplasty reshapes the nose by modifying bone, cartilage, and soft tissue. It can address the size, shape, tip, bridge, nostrils, and symmetry. Results are permanent, but swelling takes up to a year to fully resolve.",
    good: ["Those with a specific aesthetic concern about nose shape, size, or symmetry", "People with breathing issues related to nasal structure (functional rhinoplasty)", "Adults whose nose is fully developed (typically 16+ for women, 17+ for men)"],
    bad: ["Anyone with unrealistic expectations — rhinoplasty refines but doesn't create a completely different face", "Those who haven't finished facial development", "People seeking surgery to please someone else rather than themselves"],
    myths: [
      { q: "You'll see final results right away", a: "Significant swelling is normal for months. The nose continues to refine for up to 12 months, sometimes longer for thick skin." },
      { q: "Rhinoplasty is purely cosmetic", a: "Many rhinoplasties include functional correction of a deviated septum or other structural issues that affect breathing." },
      { q: "Revision is easy if you don't like it", a: "Revision rhinoplasty is significantly more complex than primary surgery. Choosing the right surgeon the first time is critical." },
    ],
    questions: [
      { q: "Can you show me computer imaging of potential results?", hint: "Digital imaging is a communication tool, not a guarantee. Ask the surgeon to show you conservative, realistic changes rather than dramatic transformations. Be wary of surgeons who show unrealistically dramatic imaging — it sets false expectations." },
      { q: "What approach do you recommend — open or closed rhinoplasty?", hint: "Open rhinoplasty provides better visualization for complex changes but leaves a small scar under the nose. Closed rhinoplasty leaves no visible scar but is more technically limiting. The right choice depends on the complexity of your case." },
      { q: "How many rhinoplasties do you perform per year?", hint: "Rhinoplasty is among the most technically demanding procedures in plastic surgery. Look for surgeons who perform 100+ per year and specialize in rhinoplasty. Ask what percentage of their practice is rhinoplasty." },
      { q: "What are the realistic limitations for my specific nose structure?", hint: "Thick skin limits tip refinement; thin skin shows every irregularity. Ethnic rhinoplasty requires specific expertise. A surgeon who tells you anything is possible without discussing limitations is not being honest with you." },
    ],
    prices: [{ loc: "Los Angeles", price: "$10,000 – $25,000" }, { loc: "US average", price: "$8,000 – $20,000" }, { loc: "Revision rhinoplasty", price: "$12,000 – $30,000" }],
  },
  "brow-lift": {
    name: "Brow Lift", type: "Surgical · Forehead Lift", icon: "✚", colorBg: "#fdf2f8", isSurgical: true,
    downtime: "1–2 weeks", sessions: "1 procedure", resultsLast: "5–10 years",
    what: "A brow lift elevates the eyebrows and smooths forehead wrinkles by repositioning the underlying tissue and skin. It addresses a heavy, drooping brow that creates a tired or angry appearance — often complementing eyelid surgery.",
    good: ["Those with significantly drooping brows that hood the upper eyelids", "People whose brow position creates a persistently tired or stern expression", "Anyone who has considered upper eyelid surgery — sometimes a brow lift is the more appropriate solution"],
    bad: ["Those with mild brow drooping — Botox brow lifting may be sufficient", "People with very high hairlines — certain techniques can raise the hairline further", "Smokers — higher healing risks"],
    myths: [
      { q: "A brow lift always looks surprised", a: "Modern endoscopic techniques allow precise, natural elevation without the 'perpetually surprised' look of older approaches." },
      { q: "It's the same as an eyelid lift", a: "They address different structures. A brow lift raises the brow position; blepharoplasty removes excess eyelid skin. Both may be needed for full rejuvenation." },
    ],
    questions: [
      { q: "Do I need a brow lift, eyelid surgery, or both?", hint: "This distinction matters enormously. A drooping brow causing hooded upper lids needs a brow lift — upper blepharoplasty alone will make it worse. A surgeon should photograph your brows in their natural relaxed position to assess which procedure addresses the root cause." },
      { q: "Which technique do you recommend — endoscopic, temporal, or direct?", hint: "Endoscopic is most common with small incisions and fastest recovery. Temporal lift targets the outer brow. Direct lift (scar above brow) is reserved for specific cases. Ask why they recommend their approach for your anatomy." },
      { q: "How will this affect my hairline?", hint: "Coronal brow lifts (older technique) can significantly raise the hairline — problematic if your hairline is already high. Endoscopic techniques have less hairline effect. Discuss your current hairline position and what change is expected." },
      { q: "What's the expected amount of brow elevation?", hint: "Overcorrection ('surprised look') is a risk with brow lifts. The goal is 3–5mm of elevation for most patients. Ask to see before-and-afters of their patients at rest (not smiling) — this reveals the natural result." },
    ],
    prices: [{ loc: "Los Angeles", price: "$5,000 – $12,000" }, { loc: "US average", price: "$4,000 – $10,000" }, { loc: "Combined with blepharoplasty", price: "$8,000 – $18,000" }],
  },
};

export function TreatmentDetail({ slug, matchScore }: { slug: string; matchScore: number | null }) {
  const t = treatments[slug];
  if (!t) return null;

  return (
    <div style={{ paddingBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "52px 16px 14px" }}>
        <Link href="/" style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid #d0cdc7", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1917", background: "white", textDecoration: "none", fontSize: 16, flexShrink: 0 }}>←</Link>
        <button style={{ width: 34, height: 34, borderRadius: "50%", border: "0.5px solid #e8e6e1", background: "white", cursor: "pointer", fontSize: 16 }}>♡</button>
      </div>

      {t.isSurgical && (
        <div style={{ margin: "0 16px 16px", background: "#fdf2f8", border: "1.5px solid #f0abfc", borderRadius: 12, padding: "14px 16px" }}>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#86198f", marginBottom: 4 }}>Surgical procedure — higher risk</div>
              <div style={{ fontSize: 12, color: "#a21caf", lineHeight: 1.7 }}>All information is for general reference only and does not constitute medical advice. Surgical procedures carry significant risks including infection, scarring, nerve damage, and anesthesia complications. Always consult multiple board-certified surgeons before making any decision.</div>
            </div>
          </div>
        </div>
      )}

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
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.8px", textTransform: "uppercase", color: "#a09d98", marginBottom: 4 }}>Questions to ask your provider</div>
        <p style={{ fontSize: 12, color: "#a09d98", marginBottom: 12, lineHeight: 1.5 }}>Tap each question to see what a good answer looks like.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {t.questions.map((item, i) => (
            <details key={i} style={{ background: "#f7f6f3", border: "0.5px solid #e8e6e1", borderRadius: 12, overflow: "hidden" }}>
              <summary style={{ display: "flex", gap: 10, padding: "12px 14px", cursor: "pointer", listStyle: "none", alignItems: "flex-start" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "#2563eb", flexShrink: 0, marginTop: 1 }}>{i + 1}</div>
                <span style={{ fontSize: 13, color: "#1a1917", lineHeight: 1.5, flex: 1, fontWeight: 500 }}>{item.q}</span>
                <span style={{ color: "#a09d98", fontSize: 14, flexShrink: 0 }}>▾</span>
              </summary>
              <div style={{ padding: "0 14px 14px 46px" }}>
                <div style={{ background: "#eff6ff", border: "0.5px solid #bfdbfe", borderRadius: 10, padding: "10px 12px" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "#2563eb", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 5 }}>💡 What a good answer looks like</div>
                  <p style={{ fontSize: 12, color: "#1e40af", lineHeight: 1.6 }}>{item.hint}</p>
                </div>
              </div>
            </details>
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
        {t.isSurgical
          ? "⚠️ For general reference only. Surgical outcomes vary significantly. Consult a board-certified surgeon."
          : "For reference only. Results vary by provider skill, device, and individual skin condition."}
      </p>
    </div>
  );
}
