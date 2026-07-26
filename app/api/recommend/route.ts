import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { goals, concerns, age, budget, skin } = await req.json();

  const prompt = `You are AQ, a medical aesthetics AI advisor. A user has the following profile:
- Goals: ${goals.join(", ")}
- Specific concerns: ${concerns.join(", ") || "none specified"}
- Age: ${age}
- Budget: $${budget}
- Skin type: ${skin}

Recommend exactly 3 treatments from this list: Thermage FLX, Ultherapy, Filler (HA), Botox, Sculptra, RF Microneedling, BBL/IPL, Chemical Peel.

Respond ONLY with valid JSON, no markdown, no explanation outside the JSON:
{
  "recommendations": [
    {
      "name": "Treatment Name",
      "type": "Energy|Injectable|Laser",
      "match": 92,
      "reason": "2-3 sentence explanation of why this suits their profile specifically",
      "downtime": "None|1-2 days|etc",
      "sessions": "1 session|3 sessions|etc",
      "results": "3-6 months|etc",
      "priceRange": "$2,000 – $5,000",
      "isBestMatch": true
    }
  ]
}

Order by match score descending. Only the top result should have isBestMatch: true. Be honest — if budget is low, don't recommend expensive treatments as top pick. Match scores should reflect the actual fit.`;

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    const data = JSON.parse(text);
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to get recommendations" }, { status: 500 });
  }
}
