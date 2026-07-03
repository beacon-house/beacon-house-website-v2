// Lead-source attribution for CTA clicks into the Apply v3 LP form
// (admissions.beaconhouse.in). The LP form reads UTM params from its own
// URL at load and writes them to the lead record — so attribution works
// only if the CTA href carries the params. Interim fix until the unified
// form component ships; see .context/todo.md.

// Exactly the params the LP form parses (repo/src/lib/utm.ts in 04.a-apply-v3-lp).
export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "campaign_id",
  "utm_adset",
  "adset_id",
  "ad_id",
  "utm_placement",
] as const;

const STORAGE_KEY = "bh_utm";

export function captureUtmsToSession(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) utms[key] = value;
    }
    // A fresh campaign visit overwrites; a param-less visit never clears.
    if (Object.keys(utms).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
    }
  } catch {
    // Storage unavailable (e.g. blocked): CTA falls back to organic tagging.
  }
}

function getStoredUtms(): Record<string, string> | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const utms: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = (parsed as Record<string, unknown>)[key];
      if (typeof value === "string" && value) utms[key] = value;
    }
    return Object.keys(utms).length > 0 ? utms : null;
  } catch {
    return null;
  }
}

export function buildCtaHref(baseUrl: string, pathname: string): string {
  try {
    const url = new URL(baseUrl);
    const stored = getStoredUtms();
    if (stored) {
      // Paid/campaign visitor: forward the original params verbatim so ad
      // attribution survives the website hop. No website markers added.
      for (const [key, value] of Object.entries(stored)) {
        url.searchParams.set(key, value);
      }
    } else {
      // Organic/direct visitor: tag the lead as website-originated, with
      // the converting page path as the campaign.
      url.searchParams.set("utm_source", "website");
      url.searchParams.set("utm_medium", "organic");
      url.searchParams.set("utm_campaign", pathname || "/");
    }
    return url.toString();
  } catch {
    return baseUrl;
  }
}
