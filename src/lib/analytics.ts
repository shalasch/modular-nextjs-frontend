/**
 * Analytics utilities — GA4 event tracking
 *
 * All WhatsApp CTA clicks must be tracked.
 * Events fire only in the browser and only if gtag is available.
 */

import type { WhatsAppSegment } from "./whatsapp";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      target: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

function track(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
}

/** Track WhatsApp CTA click with source + segment context */
export function trackWhatsAppClick(
  segment: WhatsAppSegment,
  source: string
): void {
  track("whatsapp_cta_click", {
    segment,
    source,
    event_category: "conversion",
    event_label: `${source}__${segment}`,
  });
}

/** Track page scroll depth milestones */
export function trackScrollDepth(depth: 25 | 50 | 75 | 90 | 100): void {
  track("scroll_depth", {
    percent: depth,
    event_category: "engagement",
  });
}

/** Track quiz start / completion */
export function trackQuizEvent(
  action: "start" | "complete",
  result?: string
): void {
  track("quiz_interaction", {
    action,
    result,
    event_category: "funnel",
  });
}

/** Track section visibility (scroll into view) */
export function trackSectionView(sectionName: string): void {
  track("section_view", {
    section: sectionName,
    event_category: "engagement",
  });
}
