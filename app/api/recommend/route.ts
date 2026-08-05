import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { goals, concerns, age, budget, skin } = await req.json();

    const goalList = Array.isArray(goals) ? goals : (goals || "").split(",").filter(Boolean);
    const concernList = Array.isArray(concerns) ? concerns : (concerns || "").split(",").filter(Boolean);
    const includeSurgery = goalList.includes("surgery");
    const includeTeeth = goalList.includes("teeth");

    const prompt = `You are AQ, a medical aesthetics AI advisor. A user has the following profile:
- Goals: ${goalList.join(", ")}
- Specific concerns: ${concernList.length > 0 ? concernList.join(", ") : "none specified"}
- Age: ${age}
- Budget: ${budget >= 20000 ? "$20,000+" : "$" + budget}
- Skin type: ${skin}

Available treatments to recommend from:
ENERGY: Thermage FLX, Ultherapy, RF Microneedling, BBL IPL, Fraxel Laser, Clear + Brilliant
INJECTABLES: Botox, Filler, Sculptra, Kybella, Dysport
${includeSurgery ? "SURGICAL: Face Lift, Brow Lift, Blepharoplasty, Rhinoplasty, Neck Lift" : ""}
${includeTeeth ? "DENTAL: Porcelain Veneers, Teeth Whitening, Invisalign, Dental Bonding" : ""}

Recommend exactly 3 treatments most relevant to the user's goals and profile.

Respond ONLY with valid JSON, no markdown:
{
  "recommendations": [
    {
      "name": "Treatment Name",
      "type": "Energy|Injectable|Surgical|Dental",
      "match": 92,
      "reason": "2-3 sentences specific to this user's age, budget, skin type and concerns",
      "onsetTime": "3-6 months",
      "resultsLast": "1-2 years",
      "downtime": "None",
      "sessions": "1 session",
      "priceRange": "$2,000 – $5,000",
      "isBestMatch": true,
      "isSurgical": false
    }
  ]
}

Rules:
- Order by match score descending
- Only top result has isBestMatch: true
- Set isSurgical: true for any surgical procedures
- Be honest about budget fit — don't recommend $10k treatments if budget is $1k
- onsetTime = when they'll start seeing results
- resultsLast = how long results last after full effect`;

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.content[0].type === "text" ? response.content[0].text.trim() : "";
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const data = JSON.parse(cleaned);
    return NextResponse.json(data);

  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({
      recommendations: [
        { name: "Thermage FLX", type: "Energy", match: 90, reason: "Excellent for skin tightening with no downtime. RF energy stimulates collagen production gradually over months.", onsetTime: "3-6 months", resultsLast: "1-2 years", downtime: "None", sessions: "1 session", priceRange: "$2,000 – $5,000", isBestMatch: true, isSurgical: false },
        { name: "Ultherapy", type: "Energy", match: 75, reason: "Ultrasound-based lifting targets deeper tissue for longer-lasting results, especially along the jawline and brow.", onsetTime: "2-3 months", resultsLast: "1-2 years", downtime: "1-2 days", sessions: "1 session", priceRange: "$3,000 – $6,000", isBestMatch: false, isSurgical: false },
        { name: "Botox", type: "Injectable", match: 60, reason: "Preventative treatment to soften dynamic lines and slow further wrinkle formation. Quick and effective.", onsetTime: "1-2 weeks", resultsLast: "3-4 months", downtime: "None", sessions: "Every 3-4 months", priceRange: "$300 – $800", isBestMatch: false, isSurgical: false },
      ]
    });
  }
}
