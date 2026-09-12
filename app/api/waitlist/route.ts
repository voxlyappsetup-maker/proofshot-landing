import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email).trim().toLowerCase()
      : "";

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Waitlist storage is not configured yet." },
      { status: 500 }
    );
  }

  const response = await fetch(
    `${supabaseUrl.replace(/\/$/, "")}/rest/v1/proofshot_waitlist`,
    {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email,
        created_at: new Date().toISOString(),
      }),
    }
  );

  if (response.status === 409) {
    return NextResponse.json({ ok: true, alreadyJoined: true });
  }

  if (!response.ok) {
    const details = await response.text();
    const isDuplicate =
      response.status === 400 && /duplicate|unique/i.test(details);

    if (isDuplicate) {
      return NextResponse.json({ ok: true, alreadyJoined: true });
    }

    console.error("Supabase waitlist insert failed", response.status, details);
    return NextResponse.json(
      { error: "Could not save your email. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
