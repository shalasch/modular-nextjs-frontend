"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { stickyNavBackground } from "@/lib/motion";
import type { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#sobre" },
  { label: "Programs", href: "#programas" },
  { label: "Methodology", href: "#metodologia" },
  { label: "Materials", href: "/materiais" },
  { label: "Contact", href: "#contato" },
];

export function SiteNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const prefersReduced = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 80);
  });

  React.useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[var(--z-sticky)]"
        initial="transparent"
        animate={scrolled ? "solid" : "transparent"}
        variants={prefersReduced ? {} : stickyNavBackground}
        style={prefersReduced && scrolled ? {
          backgroundColor: "rgba(250, 250, 250, 0.97)",
          boxShadow: "0 1px 0 rgba(10, 22, 40, 0.07)",
        } : undefined}
      >
        <Container>
          <div className="h-20 flex items-center justify-between gap-4">

            {/* ── Logo ── */}
            <Link
              href="/"
              aria-label="Language School — go to homepage"
              className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-500)] focus-visible:ring-offset-2 rounded-sm"
            >
              <Image
                src="/logo-full.svg"
                alt="Language School"
                width={180}
                height={60}
                priority
                className="object-contain"
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-6"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  external={item.external}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:block">
              <WhatsAppButton
                segment="generic"
                source="nav"
                label="Talk to us"
                size="sm"
              />
            </div>

            {/* ── Mobile: CTA + hamburger ── */}
            <div className="flex lg:hidden items-center gap-3">
              <WhatsAppButton
                segment="generic"
                source="nav_mobile"
                label="Talk to us"
                size="sm"
                className="text-sm px-4"
              />
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
                className={cn(
                  "p-2 rounded-sm",
                  "text-[var(--color-navy-900)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-500)]"
                )}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* ── Mobile menu overlay ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          className={cn(
            "fixed inset-0 z-[calc(var(--z-sticky)-1)]",
            "bg-[var(--color-navy-900)]",
            "flex flex-col pt-20 pb-safe",
            "lg:hidden"
          )}
        >
          <nav className="flex flex-col px-6 gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-4 border-b border-[rgb(255_255_255_/_8%)]",
                  "font-body text-[var(--text-body-l)] text-[var(--color-white)]",
                  "hover:text-[var(--color-gold-400)] transition-colors",
                  "focus-visible:outline-none focus-visible:text-[var(--color-gold-500)]"
                )}
                onClick={() => setMobileOpen(false)}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 px-6">
            <WhatsAppButton
              segment="generic"
              source="nav_mobile_menu"
              label="Schedule a call"
              size="full"
              onClick={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

/* ── NavLink — dark text on light nav ── */

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function NavLink({ href, children, external }: NavLinkProps) {
  const isAnchor = href.startsWith("#") || href.startsWith("/#");
  const Comp = isAnchor ? "a" : Link;
  const extraProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Comp
      href={href}
      className={cn(
        "font-body text-[var(--text-body-s)] font-medium",
        "text-[var(--color-navy-900)] opacity-70",
        "hover:opacity-100 hover:text-[var(--color-navy-900)]",
        "transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-500)] focus-visible:ring-offset-2 rounded-sm"
      )}
      {...extraProps}
    >
      {children}
    </Comp>
  );
}

export default SiteNav;
