"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureUtmsToSession, buildCtaHref } from "@/lib/attribution";

const LP_HOST = "admissions.beaconhouse.in";

function isLpAnchor(anchor: HTMLAnchorElement): boolean {
  try {
    return new URL(anchor.href).hostname === LP_HOST;
  } catch {
    return false;
  }
}

function decorate(anchor: HTMLAnchorElement, pathname: string): void {
  anchor.href = buildCtaHref(anchor.href, pathname);
}

// Renders nothing. Captures campaign UTMs on entry and rewrites every CTA
// anchor pointing at the LP so the form receives attribution params.
// Mounted once in the root layout — individual CTA components stay untouched.
export default function CTAAttribution() {
  const pathname = usePathname();

  useEffect(() => {
    captureUtmsToSession();
  }, []);

  // Rewrite pass on every route change: makes the DOM href itself correct,
  // covering left/middle/cmd-click, copy-link, and keyboard navigation.
  useEffect(() => {
    document
      .querySelectorAll<HTMLAnchorElement>("a[href]")
      .forEach((anchor) => {
        if (isLpAnchor(anchor)) decorate(anchor, pathname);
      });
  }, [pathname]);

  // Fallback for anchors mounted after the pass (mobile menu, lazy sections):
  // re-decorate just before any interaction commits.
  useEffect(() => {
    const onPointerDown = (event: Event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (anchor && isLpAnchor(anchor)) decorate(anchor, pathname);
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onPointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onPointerDown, true);
    };
  }, [pathname]);

  return null;
}
