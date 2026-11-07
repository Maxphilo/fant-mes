// Identifiants de prix Stripe (non secrets). Test et réel ont des identifiants différents.
const TEST = {
  audit: "price_1UYkNzFQvRN0XS5GnSbrp32O",
  abo: "price_1UYkOdFQvRN0XS5GIQ2OD2j7",
};
const REEL = {
  audit: "price_1UZCUPJwMMgpnMeBfrQ0duMr",
  abo: "price_1UZCUPJwMMgpnMeBnZIYSIdi",
};

export type Formule = "audit" | "abo";

// Le mode est déduit de la clé secrète : sk_live_… = réel, sinon test.
export function prixPour(formule: Formule, cleSecrete: string) {
  const reel = cleSecrete.startsWith("sk_live_") || cleSecrete.startsWith("rk_live_");
  const ids = reel ? REEL : TEST;
  return {
    id: ids[formule],
    mode: (formule === "audit" ? "payment" : "subscription") as "payment" | "subscription",
  };
}
