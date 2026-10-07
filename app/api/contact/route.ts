import { NextRequest, NextResponse } from "next/server";

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

const FIELD_MEETUP_CITY = "E7kIJxrw1rhGRTP5ud09";
const FIELD_TREATMENT_INTEREST = "iyr47KqHm1YFSur6YBVa";
const FIELD_PATIENT_MESSAGE = "Y2nKh5zrzvMuBecKNhgV";

function ghlHeaders() {
  return {
    Authorization: `Bearer ${process.env.GHL_API_KEY}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
  };
}

async function findContactByEmail(email: string): Promise<string | null> {
  const res = await fetch(
    `${GHL_BASE}/contacts/?locationId=${process.env.GHL_LOCATION_ID}&query=${encodeURIComponent(email)}`,
    { headers: ghlHeaders() }
  );
  if (!res.ok) return null;
  const data = await res.json();
  const match = (data.contacts ?? []).find(
    (c: { email: string; id: string }) =>
      c.email?.toLowerCase() === email.toLowerCase()
  );
  return match?.id ?? null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, city, treatment, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const parts = name.trim().split(" ");
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ") || "";

    const customFields = [
      city ? { id: FIELD_MEETUP_CITY, field_value: city } : null,
      treatment ? { id: FIELD_TREATMENT_INTEREST, field_value: treatment } : null,
      message ? { id: FIELD_PATIENT_MESSAGE, field_value: message } : null,
    ].filter(Boolean);

    const existingId = await findContactByEmail(email);

    let contactRes: Response;

    if (existingId) {
      // Update existing contact
      contactRes = await fetch(`${GHL_BASE}/contacts/${existingId}`, {
        method: "PUT",
        headers: ghlHeaders(),
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          source: "Scotland MeetUp Website",
          tags: ["Scotland MeetUp Lead"],
          customFields,
        }),
      });
    } else {
      // Create new contact
      contactRes = await fetch(`${GHL_BASE}/contacts/`, {
        method: "POST",
        headers: ghlHeaders(),
        body: JSON.stringify({
          locationId: process.env.GHL_LOCATION_ID,
          firstName,
          lastName,
          email,
          phone,
          source: "Scotland MeetUp Website",
          tags: ["Scotland MeetUp Lead"],
          customFields,
        }),
      });
    }

    const responseText = await contactRes.text();

    if (!contactRes.ok) {
      console.error("GHL error:", contactRes.status, responseText);
      return NextResponse.json({ error: "CRM error" }, { status: 500 });
    }

    return NextResponse.json({ success: true, updated: !!existingId });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
