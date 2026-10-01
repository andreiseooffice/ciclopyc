import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CONSENT_KEY = "ciclopyc-cookie-consent-v1";
const defaults = { necessary: true, preferences: false, analytics: false, marketing: false };
type Consent = typeof defaults;

function readConsent(): Consent | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const value = JSON.parse(stored) as Partial<Consent> & { savedAt?: string };
    const savedAt = Date.parse(value.savedAt ?? "");
    if (Date.now() - savedAt > 180 * 24 * 60 * 60 * 1000) return null;
    if (Number.isFinite(savedAt) && [value.preferences, value.analytics, value.marketing].every((choice) => typeof choice === "boolean")) {
      return { necessary: true, preferences: value.preferences!, analytics: value.analytics!, marketing: value.marketing! };
    }
  } catch {
    return null;
  }
  return null;
}

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setConsent] = useState<Consent>(defaults);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setConsent(existing);
      setSaved(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const openSettings = () => setSettingsOpen(true);
    window.addEventListener("ciclopyc:cookie-settings", openSettings);
    return () => window.removeEventListener("ciclopyc:cookie-settings", openSettings);
  }, []);

  const save = (next: Consent) => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...next, savedAt: new Date().toISOString() }));
    } catch {
      // Keep the choice active for this visit when browser storage is unavailable.
    }
    setConsent(next);
    setSaved(true);
    setSettingsOpen(false);
  };

  const toggle = (key: "preferences" | "analytics" | "marketing") => (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.currentTarget.checked;
    setConsent((current) => ({ ...current, [key]: checked }));
  };

  if (!ready) return null;

  return <>
    {!saved && <aside aria-label="Consimțământ pentru cookie-uri" aria-live="polite" className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-4xl rounded-2xl border border-border bg-card p-5 shadow-2xl md:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="font-display text-lg font-semibold">Preferințele tale de confidențialitate</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Folosim stocarea strict necesară pentru reținerea alegerii tale. Nu folosim în prezent cookie-uri de analiză sau publicitate. Poți modifica oricând opțiunile.</p>
          <a href="/privacy" className="mt-2 inline-block text-xs font-semibold text-foreground underline underline-offset-4">Politica de confidențialitate</a>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button variant="outline" className="rounded-xl" onClick={() => save(defaults)}>Respinge opționalele</Button>
          <Button variant="outline" className="rounded-xl" onClick={() => setSettingsOpen(true)}>Personalizează</Button>
          <Button className="rounded-xl bg-primary font-bold" onClick={() => save({ necessary: true, preferences: true, analytics: true, marketing: true })}>Acceptă toate</Button>
        </div>
      </div>
    </aside>}

    <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
      <DialogContent className="max-w-lg rounded-2xl border-border bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Setări cookie-uri</DialogTitle>
          <DialogDescription className="leading-6">Alege categoriile opționale. Cele strict necesare sunt active pentru funcționarea site-ului și nu pot fi dezactivate.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <ConsentRow title="Strict necesare" detail="Reținerea preferinței de consimțământ și funcțiile de bază." checked disabled onChange={() => undefined} />
          <ConsentRow title="Preferințe" detail="Memorarea opțiunilor care personalizează experiența." checked={consent.preferences} onChange={toggle("preferences")} />
          <ConsentRow title="Analitice" detail="Nu sunt instalate în prezent servicii de analiză a traficului." checked={consent.analytics} onChange={toggle("analytics")} />
          <ConsentRow title="Marketing" detail="Nu sunt instalate în prezent servicii de publicitate sau urmărire." checked={consent.marketing} onChange={toggle("marketing")} />
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          <Button variant="outline" className="rounded-xl" onClick={() => save(defaults)}>Respinge opționalele</Button>
          <Button className="rounded-xl bg-primary font-bold" onClick={() => save(consent)}>Salvează preferințele</Button>
        </div>
      </DialogContent>
    </Dialog>
  </>;
}

function ConsentRow({ title, detail, checked, disabled = false, onChange }: { title: string; detail: string; checked: boolean; disabled?: boolean; onChange: React.ChangeEventHandler<HTMLInputElement> }) {
  return <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4">
    <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} className="mt-1 size-4 accent-primary disabled:cursor-not-allowed" />
    <span><span className="block text-sm font-semibold">{title}{disabled && <span className="ml-2 text-xs text-muted-foreground">Întotdeauna active</span>}</span><span className="mt-1 block text-xs leading-5 text-muted-foreground">{detail}</span></span>
  </label>;
}