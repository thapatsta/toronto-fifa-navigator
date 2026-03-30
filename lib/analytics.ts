/**
 * GA4 custom event helper.
 *
 * Usage:
 *   trackEvent("directions_click", { match_id: "match-1" });
 *   trackEvent("team_follow", { team: "Canada" });
 *   trackEvent("match_save", { match_id: "match-3" });
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}
