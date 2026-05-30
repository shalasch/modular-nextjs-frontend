import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/section";
import { WhatsAppButton } from "@/components/ui/button";
import { site } from "@/lib/site";
import { MessageCircle, Mail } from "lucide-react";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const PROGRAM_LINKS = [
  { label: "English for Offshore", href: "/#programas" },
  { label: "English for Interviews", href: "/#programas" },
  { label: "Professional Communication", href: "/#programas" },
  { label: "About Language School", href: "/#sobre" },
  { label: "Blog", href: "/blog" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacidade" },
  { label: "Terms of use", href: "/termos" },
];

export function SiteFooter() {
  return (
    <footer
      id="contato"
      role="contentinfo"
      className="bg-[var(--color-navy-800)] text-[var(--color-white)]"
    >
      <Container>
        <div className="pt-16 pb-8 lg:pt-20 lg:pb-10">

          {/* ── Top row ── */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-10 mb-12">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo-full.svg"
                  alt="Language School"
                  width={190}
                  height={60}
                  className="object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-[var(--text-body-s)] text-[var(--color-text-muted)] leading-[var(--leading-relaxed)] max-w-xs mb-6">
                Live professional English communication program — for professionals
                who need real results.
              </p>
              <WhatsAppButton
                segment="generic"
                source="footer"
                label="Schedule a trial lesson"
                size="sm"
                className="w-full justify-start px-5 text-sm whitespace-normal h-auto py-3 leading-snug"
              />
            </div>

            {/* Programs column */}
            <div className="lg:col-span-1">
              <p className="text-[var(--text-label)] uppercase tracking-[var(--tracking-wider)] font-semibold text-[var(--color-gold-500)] mb-5">
                Programs
              </p>
              <nav aria-label="Footer links">
                <ul className="space-y-3">
                  {PROGRAM_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[var(--text-body-s)] text-[var(--color-text-muted)] hover:text-[var(--color-white)] transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact column */}
            <div className="lg:col-span-2">
              <p className="text-[var(--text-label)] uppercase tracking-[var(--tracking-wider)] font-semibold text-[var(--color-gold-500)] mb-5">
                Professional contact
              </p>
              <p className="text-[var(--text-body-s)] text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-sm">
                For information about lessons, programs, or partnerships, reach
                out through the channels below.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FooterContactItem
                  icon={<MessageCircle className="h-4 w-4" />}
                  label="WhatsApp"
                  value={site.contact.phone}
                  href={site.contact.whatsappHref}
                />
                <FooterContactItem
                  icon={<Mail className="h-4 w-4" />}
                  label="E-mail"
                  value={site.contact.email}
                  href={`mailto:${site.contact.email}`}
                />
                <FooterContactItem
                  icon={<IconInstagram className="h-4 w-4" />}
                  label="Instagram"
                  value={site.contact.instagramHandle}
                  href={site.contact.instagramHref}
                />
              </div>

              <p className="text-[0.75rem] text-[var(--color-text-muted)] mt-5 opacity-60">
                We respond within 2h on business days.
              </p>
            </div>

          </div>

          {/* ── Divider ── */}
          <Divider width="full" className="opacity-20 mb-8" />

          {/* ── Legal row ── */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[var(--text-body-s)] text-[var(--color-text-muted)]">
              © {new Date().getFullYear()} Language School. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex gap-4">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-body-s)] text-[var(--color-text-muted)] hover:text-[var(--color-white)] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>
      </Container>
    </footer>
  );
}

function FooterContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 group"
    >
      <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-white)] transition-colors mt-0.5 shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[0.625rem] text-[var(--color-text-muted)] uppercase tracking-[0.1em] font-semibold">
          {label}
        </p>
        <p className="text-[0.8125rem] text-[var(--color-text-muted)] group-hover:text-[var(--color-white)] transition-colors truncate">
          {value}
        </p>
      </div>
    </a>
  );
}

export default SiteFooter;
