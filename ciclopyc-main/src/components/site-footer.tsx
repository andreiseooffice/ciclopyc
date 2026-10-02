import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { siTiktok } from "simple-icons";
import { Button } from "@/components/ui/button";
import salPictogram from "@/assets/sal-online-pictogram.png";
import europeanCommissionLogo from "@/assets/eu-commission-logo.svg";

const EMAIL = "office.andrei.seo@gmail.com";
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/ciclopyc/", icon: <Instagram className="size-4" /> },
  { label: "TikTok", href: "https://www.tiktok.com/@ciclopyc", icon: <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d={siTiktok.path} /></svg> },
  { label: "Email", href: `mailto:${EMAIL}`, icon: <Mail className="size-4" /> },
];

function openCookieSettings() {
  window.dispatchEvent(new Event("ciclopyc:cookie-settings"));
}

export function SiteFooter() {
  return <footer className="border-t border-border px-5 py-9 md:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <Link to="/" aria-label="CICLOPYC, pagina principal" className="inline-flex items-center gap-2 font-display text-lg font-bold text-foreground transition-colors hover:text-primary">
          <span className="grid size-7 place-items-center rounded-md border border-border text-xs">C</span>
          <span>CICLOPYC</span>
        </Link>
        <p className="mt-3 text-sm text-muted-foreground">Digital experiences, engineered to convert.</p>
        <a href={`mailto:${EMAIL}`} className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground">{EMAIL}</a>
        <div className="mt-4 flex gap-2">
          {socials.map(({ label, href, icon }) => <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label}>
            <Button variant="outline" size="icon" className="rounded-xl border-border bg-card hover:border-primary/50" aria-label={label}>{icon}</Button>
          </a>)}
        </div>
        <nav aria-label="Informații legale" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <Link to="/privacy" className="transition-colors hover:text-foreground">Confidențialitate</Link>
          <Link to="/terms" className="transition-colors hover:text-foreground">Termeni și condiții</Link>
          <button type="button" onClick={openCookieSettings} className="transition-colors hover:text-foreground">Setări cookie-uri</button>
          <a href="https://www.anpc.ro/sal/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">S.A.L. România</a>
        </nav>
        <p className="mt-5 text-[11px] text-muted-foreground">© 2026 CICLOPYC STUDIO · TOATE DREPTURILE REZERVATE</p>
      </div>
      <div className="flex flex-wrap items-center gap-5 lg:justify-end">
        <a href="https://www.anpc.ro/sal/" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center rounded-lg border border-border px--1 transition-transform hover:-translate-y-1 active:translate-y-0.5" aria-label="Deschide pagina oficială ANPC despre soluționarea alternativă a litigiilor">
          <img src={salPictogram} alt="Pictograma oficială ANPC S.A.L." className="max-h-42 max-w-180 object-contain" />
         
        </a>
        <a href="https://consumer-redress.ec.europa.eu/solution-finder_en" target="_blank" rel="noopener noreferrer" className="block h-[42px] w-[180px] overflow-hidden rounded-lg transition-transform hover:-translate-y-1 active:translate-y-0.5" aria-label="Deschide portalul oficial al Comisiei Europene pentru soluționarea online a litigiilor">
          <img src={europeanCommissionLogo} alt="" className="h-full w-full object-cover" />
        </a>
      </div>
    </div>
  </footer>;
}