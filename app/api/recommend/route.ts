import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { goals, concerns, age, budget, skin } = await req.json();

    const prompt = `You are AQ, a medical aesthetics AI advisor. A user has the following profile:
- Goals: ${Array.isArray(goals) ? goals.join(", ") : goals}
- Specific concerns: ${Array.isArray(concerns) && concerns.length > 0 ? concerns.join(", ") : "none specified"}
- Age: ${age}
- Budget: $${budget}
- Skin type: ${skin}

Recommend exactly 3 treatments from this list: Thermage FLX, Ultherapy, Filler, Botox, Sculptra, RF Microneedling, BBL IPL, Chemical Peel.

You MUST respond with ONLY a valid JSON object. No markdown, no backticks, no explanation. Just the raw JSON:
{"recommendations":[{"name":"Thermage FLX","type":"Energy","match":92,"reason":"2-3 sentences explaining why this suits their specific profile.","downtime":"None","sessions":"1 session","results":"3-6 months","priceRange":"$2,000 – $5,000","isBestMatch":true},{"name":"Ultherapy","type":"Energy","match":78,"reason":"2-3 sentences.","downtime":"1-2 days","sessions":"1 session","results":"2-3 months","priceRange":"$3,000 – $6,000","isBestMatch":false},{"name":"Botox","type":"Injectable","match":65,"reason":"2-3 sentences.","downtime":"None","sessions":"3-4x per year","results":"3-4 months","priceRange":"$300 – $800","isBestMatch":false}]}

Replace the example data with real recommendations based on the user profile. Order by match score descending. Only isBestMatch:true for the top result.`;

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.content[0].type === "text" ? response.content[0].text.trim() : "";
    
    // Strip any markdown if present
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const data = JSON.parse(cleaned);
    
    return NextResponse.json(data);
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ 
      recommendations: [
        { name: "Thermage FLX", type: "Energy", match: 90, reason: "Excellent choice for skin tightening with no downtime. Radiofrequency energy stimulates collagen production gradually.", downtime: "None", sessions: "1 session", results: "3-6 months", priceRange: "$2,000 – $5,000", isBestMatch: true },
        { name: "Ultherapy", type: "Energy", match: 75, reason: "Ultrasound-based lifting targets deeper tissue layers for longer-lasting results, especially along the jawline.", downtime: "1-2 days", sessions: "1 session", results: "2-3 months", priceRange: "$3,000 – $6,000", isBestMatch: false },
        { name: "Botox", type: "Injectable", match: 60, reason: "Preventative treatment to soften dynamic lines and slow further wrinkle formation. Quick and effective.", downtime: "None", sessions: "3-4x per year", results: "3-4 months", priceRange: "$300 – $800", isBestMatch: false }
      ]
    });
  }
}
