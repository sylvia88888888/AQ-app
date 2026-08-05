import Link from "next/link";

export const treatments: Record<string, {
  name: string; type: string; icon: string; colorBg: string;
  downtime: string; sessions: string; resultsLast: string;
  what: string; good: string[]; bad: string[];
  myths: { q: string; a: string }[];
  questions: string[];
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
      { q: "More lines = better results", a: "More lines doesn't always mean better outcomes — depth, placement, and operator skill matter far more." },
      { q: "Results appear right away", a: "Most people see peak results at 3–6 months, with continued improvement for up to a year." },
      { q: "It's painful for everyone", a: "Discomfort varies widely. Ask about pain management options — many clinics offer numbing cream or adjusted settings." },
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
      { q: "Filler stretches your skin permanently", a: "Quality HA fillers are biodegradable and dissolve naturally over time." },
      { q: "All fillers are the same", a: "Different HA fillers have different thicknesses for different uses — lip filler is not the same product as cheek filler." },
    ],
    questions: ["Which filler brand and product are you using, and why?", "How much product do you plan to use, and where exactly?", "What's your approach if I don't like the results?", "Do you have hyaluronidase on hand to dissolve if needed?"],
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
    questions: ["How many units do you recommend for each area, and what's your pricing per unit?", "Which brand are you using (Botox, Dysport, Xeomin)?", "How do you adjust for my facial anatomy?", "What should I expect in terms of onset and duration?"],
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
    questions: ["How many vials per session do you recommend?", "What's your massage protocol to avoid nodules?", "How do you track my collagen response between sessions?"],
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
    questions: ["Which device do you use (Morpheus8, Vivace, Potenza)?", "What depth and energy settings do you plan to use?", "What skincare should I avoid before and after?"],
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
    questions: ["Are you board-certified in plastic surgery?", "What technique do you use — SMAS, deep plane, or composite?", "What are the realistic risks for my anatomy and health?"],
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
    questions: ["Do you recommend upper, lower, or both?", "Will you use local or general anesthesia?", "Do I have any risk factors for dry eye?"],
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
    questions: ["How much enamel will you need to remove?", "Can I see a digital mock-up before committing?", "What's your warranty if a veneer chips?"],
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
    questions: ["How many vials per session do you recommend?", "What can I expect in terms of swelling?", "Is Kybella right for me or would liposuction give better results?"],
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
    questions: ["What concentration of whitening agent do you use?", "How many shades lighter can I realistically expect?", "Do I need any pre-treatment for sensitivity?", "What take-home maintenance do you recommend after?"],
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
    questions: ["Am I a good candidate for Invisalign or do I need traditional braces?", "How many aligners will my treatment require, and what's the estimated timeline?", "What happens if I lose or break an aligner?", "Will I need any attachments (small tooth-colored bumps) on my teeth?"],
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
    questions: ["Is bonding or a veneer more appropriate for my specific concern?", "What shade of resin will best match my surrounding teeth?", "How durable will the bonding be given my bite?", "How do I care for bonded teeth to maximize longevity?"],
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
    questions: ["What device do you use — BBL, IPL, or another brand?", "Is my skin tone a good candidate, and what's the risk of pigment changes?", "How many sessions do you recommend for my specific concerns?", "What sun protection protocol do I need before and after?"],
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
    questions: ["Which Fraxel setting do you recommend — Restore or Repair?", "How many sessions do you suggest for my concerns?", "What's the risk of pigment changes for my skin tone?", "What skincare routine do I need before and after?"],
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
    questions: ["Is Clear + Brilliant strong enough for my concerns, or should I do Fraxel?", "How many sessions do you recommend as a starting point?", "Can I combine this with other treatments in the same visit?"],
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
    questions: ["Why do you recommend Dysport over Botox for my concerns?", "How many units do you recommend, and how does that translate to Botox units?", "How quickly will I see results, and how long should they last?"],
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
    questions: ["Do you recommend a neck lift alone or combined with a face lift for my concerns?", "What technique do you use, and how will you address the platysma bands?", "What are my realistic risks given my health history?"],
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
    questions: ["Can you show me computer imaging of potential results?", "What approach do you recommend — open or closed rhinoplasty?", "How many rhinoplasties do you perform per year?", "What are the realistic limitations for my specific nose structure?"],
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
    questions: ["Do I need a brow lift, eyelid surgery, or both?", "Which technique do you recommend — endoscopic, temporal, or direct?", "How will this affect my hairline?"],
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
        {t.isSurgical
          ? "⚠️ For general reference only. Surgical outcomes vary significantly. Consult a board-certified surgeon."
          : "For reference only. Results vary by provider skill, device, and individual skin condition."}
      </p>
    </div>
  );
}
