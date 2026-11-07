import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prixPour } from "@/lib/prix";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const origin = req.nextUrl.origin;
  const retour = (code: string) =>
    NextResponse.redirect(`${origin}/?paiement=${code}#formules`, 303);

  try {
    const data = await req.formData();
    const formule = String(data.get("formule") ?? "");
    if (formule !== "audit" && formule !== "abo") return retour("erreur");

    const cle = process.env.STRIPE_SECRET_KEY;
    if (!cle) return retour("erreur");

    const stripe = new Stripe(cle);
    const choix = prixPour(formule, cle);

    const session = await stripe.checkout.sessions.create({
      mode: choix.mode,
      line_items: [{ price: choix.id, quantity: 1 }],
      locale: "fr",
      success_url: `${origin}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?paiement=annule#formules`,
    });

    if (!session.url) return retour("erreur");
    return NextResponse.redirect(session.url, 303);
  } catch {
    return retour("erreur");
  }
}
