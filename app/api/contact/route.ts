import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    message: String(form.get("message") || ""),
    ts: new Date().toISOString()
  };

  // Pour l’instant: log sur le serveur. Après, on branchera un envoi e‑mail ou Google Sheets.
  console.log("[lead]", payload);

  return NextResponse.redirect(new URL("/?sent=1", req.url));
}

