// Identifiants de prix Stripe (mode test). Non secrets.
export const PRIX = {
  audit: { id: "price_1UYkNzFQvRN0XS5GnSbrp32O", mode: "payment" as const },
  abo: { id: "price_1UYkOdFQvRN0XS5GIQ2OD2j7", mode: "subscription" as const },
};
export type Formule = keyof typeof PRIX;
