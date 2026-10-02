import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Check, ChevronRight, Mail, Menu, MessageCircle, Phone, Star, X } from "lucide-react";
import { siFigma, siFramer, siGoogle, siWebflow, siWhatsapp } from "simple-icons";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import commerceImage from "@/assets/portfolio-commerce.jpg";
import fintechImage from "@/assets/portfolio-fintech.jpg";
import saasImage from "@/assets/portfolio-saas.jpg";
import maraAvatar from "@/assets/avatar-mara.jpg";
import victorAvatar from "@/assets/avatar-victor.jpg";
import dariaAvatar from "@/assets/avatar-daria.jpg";
import { serviceModels } from "@/lib/service-models";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CICLOPYC — Web design de înaltă performanță" },
      { name: "description", content: "Agenție de web design pentru experiențe digitale futuriste, rapide și construite pentru conversii." },
      { property: "og:title", content: "CICLOPYC — Web design de înaltă performanță" },
      { property: "og:description", content: "Design futurist, viteză sub o secundă și experiențe digitale care transformă vizitatorii în clienți." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const EMAIL = "office.andrei.seo@gmail.com";
const CONTACT_PHONE = "+40752927479";
const nav: Array<[string, string]> = [["Acasă", "home"], ["Portofoliu", "portofoliu"], ["Blog", "blog"], ["Statistici", "stats"], ["Recenzii", "reviews"], ["Modele", "shop"], ["FAQ", "faq"], ["Contact", "contact"]];
const projects = [
  { category: "HORECA", title: "EDEN / Restaurant", copy: "Imaginea online a restaurantului EDEN: meniu digital, rezervări, galerie foto și alte caracteristici orientate către conversii și promovare.", image: commerceImage, number: "01", loadSeconds: 0.8, durationDays: 10, priceEuros: 480 },
  { category: "BEAUTY SALON", title: "NOIR NAIL / Salon", copy: "O platformă cu automatizare integrată, care transformă programările într-un lucru simplu pentru clienți. Intri, selectezi serviciul, te programezi și gata.", image: fintechImage, number: "02", loadSeconds: 0.7, durationDays: 14, priceEuros: 650 },
  { category: "REGIM HOTELIER", title: "ALVERA / Hotel", copy: "Pagina de prezentare de care are nevoie orice hotel sau pensiune. Rezervări, detalii cazare, conversie clienți, toate într-un singur loc.", image: saasImage, number: "03", loadSeconds: 0.9, durationDays: 18, priceEuros: 820 },
];
const testimonials = [
  { quote: "CICLOPYC a transformat complet felul în care suntem percepuți. Conversiile au crescut din prima lună.", name: "Elena Mitu", role: "Founder Nail Noir", avatar: maraAvatar },
  { quote: "Un proces clar, rapid și fără jargon. Rezultatul pare cu doi ani înaintea industriei noastre.", name: "Viorel Pavăl", role: "Owner Frizeria VIO", avatar: victorAvatar },
  { quote: "Viteza site-ului este incredibilă, iar echipa noastră îl poate administra fără dificultăți.", name: "Daria Pop", role: "Marketing Lead, NEXUS", avatar: dariaAvatar },
];
const faqs = [
  ["Cât durează livrarea unui site?", "Un proiect complet durează, în medie, între 10 și 14 zile lucrătoare. Primești un calendar clar înainte de start și actualizări la fiecare etapă."],
  ["Ce tehnologii folosiți?", "Construim cu React, Next.js sau TanStack Start și Tailwind CSS. Alegem arhitectura potrivită obiectivelor, nu tehnologia cea mai la modă."],
  ["Oferiți mentenanță după lansare?", "Da. Pachetele de mentenanță includ actualizări, monitorizare, îmbunătățiri de performanță și suport prioritar."],
  ["Pot porni de la un model și să îl personalizez?", "Absolut. Modelele sunt o bază eficientă, iar culorile, conținutul, funcțiile și structura pot fi adaptate brandului tău."],
];
const toolBrands = [
  { mark: "F", name: "FIGMA", font: "figma", color: "#f24e1e", icon: siFigma },
  { mark: "</>", name: "VS CODE", font: "vscode", color: "#007acc" },
  { mark: "W", name: "WEBFLOW", font: "webflow", color: "#146ef5", icon: siWebflow },
  { mark: "G", name: "GOOGLE STUDIO", font: "google", color: "#4285f4", icon: siGoogle },
  { mark: "M", name: "MOTION", font: "motion", color: "#d94b78" },
  { mark: "Fr", name: "FRAMER", font: "framer", color: "#0055ff", icon: siFramer },
];
const heroPhrases = ["transformă vizitatorii în clienți.", "îți construiesc imaginea online.", "lucrează în locul tău."];

// Cronologia intro-ului (secunde). Aici reglezi tot.
const INTRO = {
  logoIn: 0.15,        // logo-ul apare în centru
  loadStart: 0.6,      // pornește "încărcarea"
  loadDuration: 1.4,
  loaderOut: 2.1,      // loader-ul dispare
  drift: 2.4,          // logo-ul pleacă spre stânga sus
  driftDuration: 1.1,
  overlayOut: 2.5,     // fundalul alb începe să se dizolve
  stage1: 3.0,         // nav + prima linie din titlu
  stage2: 3.5,         // textul roșu
  stage3: 3.9,         // butoane
  stage4: 4.3,         // carduri
};

/** Litera "O" din logo: un ochi care privește în jur și clipește. Dimensiunile sunt în em, deci urmează mărimea textului. */
function CyclopsEye() {
  const reduced = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className="relative mx-[.025em] inline-block size-[.74em] overflow-hidden rounded-full border-[.1em] border-current bg-background"
      animate={reduced ? false : { scaleY: [1, 1, 0.08, 1, 1] }}
      transition={{ duration: 5, times: [0, 0.86, 0.91, 0.96, 1], ease: "easeInOut", repeat: Infinity }}
    >
      <motion.span
        className="absolute inset-0 m-auto block size-[.3em] rounded-full bg-signal"
        animate={reduced ? false : {
          x: ["0%", "-40%", "-40%", "38%", "38%", "0%", "0%"],
          y: ["0%", "-10%", "-10%", "16%", "16%", "-30%", "0%"],
        }}
        transition={{ duration: 7, times: [0, 0.14, 0.3, 0.5, 0.66, 0.82, 1], ease: "easeInOut", repeat: Infinity }}
      >
        <span className="absolute inset-0 m-auto size-[44%] rounded-full bg-foreground" />
        <span className="absolute left-[18%] top-[14%] size-[24%] rounded-full bg-white/90" />
      </motion.span>
    </motion.span>
  );
}

/** Loader-ul din splash: inel cu progres + procent, interactiv la hover/tap. */
function IntroLoader({ progress, done }: { progress: MotionValue<number>; done: boolean }) {
  const arc = useTransform(progress, (v) => v / 100);
  const label = useTransform(progress, (v) => `${Math.round(v)}%`);
  return (
    <div className="absolute left-1/2 top-1/2 mt-[3.25rem] -translate-x-1/2 md:mt-[4.5rem]">
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.85 }}
        animate={done
          ? { opacity: 0, y: -8, scale: 0.8, transition: { duration: 0.5, ease: "easeOut" } }
          : { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: INTRO.loadStart - 0.25, ease: "easeOut" } }}
        whileHover={done ? {} : { scale: 1.12, transition: { type: "spring", stiffness: 300, damping: 18 } }}
        whileTap={done ? {} : { scale: 0.9 }}
        className="relative grid size-14 cursor-pointer place-items-center text-foreground"
      >
        <svg viewBox="0 0 56 56" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
          <circle cx="28" cy="28" r="24" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth="3" />
          <motion.circle cx="28" cy="28" r="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" style={{ pathLength: arc }} className="text-signal" />
        </svg>
        <motion.span className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 1.8, ease: "linear", repeat: Infinity }}>
          <span className="absolute -top-[3px] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-foreground" />
        </motion.span>
        <motion.span className="text-[11px] font-bold tabular-nums">{label}</motion.span>
      </motion.div>
    </div>
  );
}

/** Text care apare cuvânt cu cuvânt, urcând dintr-o mască. */
function RevealWords({ text, show, delay = 0 }: { text: string; show: boolean; delay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden py-[.14em] -my-[.14em] align-bottom">
            <motion.span
              className="inline-block"
              initial={false}
              animate={show ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
              transition={{ duration: 0.7, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}

function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

function Counter({ value, suffix = "", label, compact = false, dialog = false, decimals = 0 }: { value: number; suffix?: string; label: string; compact?: boolean; dialog?: boolean; decimals?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const timerRef = useRef<number | null>(null);
  const format = (current: number) => `${decimals ? current.toFixed(decimals) : Math.round(current)}${suffix}`;

  const replay = useCallback(() => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    setDisplayValue(0);
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }
    const startedAt = performance.now();
    timerRef.current = window.setInterval(() => {
      const progress = Math.min((performance.now() - startedAt) / 1800, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * easedProgress);
      if (progress >= 1 && timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
        setDisplayValue(value);
      }
    }, 40);
  }, [prefersReducedMotion, value]);

  useEffect(() => () => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      role="button"
      tabIndex={0}
      aria-label={`${label}: ${format(value)}. Reia numărătoarea.`}
      onClick={replay}
      onViewportEnter={replay}
      onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); replay(); } }}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30, scale: .9, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      whileHover={prefersReducedMotion ? {} : { y: -6, scale: 1.035 }}
      viewport={{ once: false, amount: .45, margin: "-30px" }}
      transition={{ duration: .85, ease: "easeOut" }}
      style={{ transformPerspective: 900 }}
      className={dialog ? "tactile-card stat-card project-metric rounded-xl border border-border bg-card p-4 text-center" : compact ? "tactile-card stat-card rounded-xl border border-border bg-white/90 p-4 text-center" : "tactile-card stat-card bg-background p-7 text-center md:p-10"}
    >
      <p className={`stat-value font-display font-black ${dialog ? "text-xl" : compact ? "text-xl md:text-2xl" : "text-4xl md:text-6xl"}`}>{format(displayValue)}</p>
      <p className={dialog || compact ? "mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground" : "mt-3 text-xs uppercase text-muted-foreground"}>{label}</p>
    </motion.div>
  );
}

function MenuButton({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return <Button onClick={onToggle} aria-expanded={open} aria-label={open ? "Închide meniul" : "Deschide meniul"} className="menu-trigger h-12 rounded-xl border border-border bg-card px-4 font-display font-bold text-foreground hover:bg-accent">
    <span className="menu-trigger-icon grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">{open ? <X /> : <Menu />}</span>
    <span className="hidden sm:inline">{open ? "ÎNCHIDE" : "MENIU"}</span>
  </Button>;
}

function Index() {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const [introVisible, setIntroVisible] = useState(true);
  const [revealStage, setRevealStage] = useState(0);
  const [introDone, setIntroDone] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const loadProgress = useMotionValue(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState<(typeof projects)[number] | null>(null);
  const [heroPhraseIndex, setHeroPhraseIndex] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const phrasesActive = revealStage >= 3;
  useEffect(() => {
    if (!phrasesActive) return;
    const phraseTimer = window.setInterval(() => {
      setHeroPhraseIndex((index) => (index + 1) % heroPhrases.length);
    }, 2800);
    return () => window.clearInterval(phraseTimer);
  }, [phrasesActive]);
  useEffect(() => {
    if (!contactOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setContactOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [contactOpen]);

  useEffect(() => {
    if (reducedMotion === null) return;
    const el = logoRef.current;
    if (!el) return;

    if (reducedMotion) {
      el.style.opacity = "1";
      setIntroVisible(false);
      setLoaderDone(true);
      setRevealStage(4);
      setIntroDone(true);
      return;
    }

    const parent = el.offsetParent as HTMLElement | null;
    if (!parent) return;

    // blochează scroll-ul și pornește de sus (altfel #contact din URL ar scoate logo-ul din ecran)
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    const prevGutter = root.style.scrollbarGutter;
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // cât trebuie mutat logo-ul din locul lui final în centrul ecranului
    const box = parent.getBoundingClientRect();
    const dx = root.clientWidth / 2 - (box.left + el.offsetLeft + el.offsetWidth / 2);
    const dy = window.innerHeight / 2 - (box.top + el.offsetTop + el.offsetHeight / 2);
    const startScale = root.clientWidth >= 768 ? 0.8 : 0.85;

    loadProgress.set(0);
    animate(el, { x: dx, y: dy, scale: startScale }, { duration: 0 });

    const controls = [
      animate(el, { opacity: [0, 1], filter: ["blur(10px)", "blur(0px)"] }, { delay: INTRO.logoIn, duration: 0.8, ease: "easeOut" }),
      animate(loadProgress, 100, { delay: INTRO.loadStart, duration: INTRO.loadDuration, ease: [0.5, 0, 0.2, 1] }),
      animate(el, { x: [dx, 0], y: [dy, 0], scale: [startScale, 1] }, { delay: INTRO.drift, duration: INTRO.driftDuration, ease: [0.76, 0, 0.24, 1] }),
    ];

    const at = (seconds: number, fn: () => void) => window.setTimeout(fn, seconds * 1000);
    const timers = [
      at(INTRO.loaderOut, () => setLoaderDone(true)),
      at(INTRO.overlayOut, () => setIntroVisible(false)),
      at(INTRO.stage1, () => setRevealStage(1)),
      at(INTRO.stage2, () => setRevealStage(2)),
      at(INTRO.stage3, () => setRevealStage(3)),
      at(INTRO.stage4, () => setRevealStage(4)),
      at(INTRO.drift + INTRO.driftDuration, () => { setIntroDone(true); root.style.overflow = prevOverflow; root.style.scrollbarGutter = prevGutter; }),
    ];

    return () => {
      controls.forEach((control) => control.stop());
      timers.forEach((timer) => window.clearTimeout(timer));
      root.style.overflow = prevOverflow;
      root.style.scrollbarGutter = prevGutter;
    };
  }, [reducedMotion, loadProgress]);

  const submitAudit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // honeypot anti-spam
    const name = String(data.get("name") ?? "").slice(0, 100);
    const email = String(data.get("email") ?? "").slice(0, 255);
    const url = String(data.get("url") ?? "").slice(0, 255);
    const budget = String(data.get("budget") ?? "");

    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env['VITE_WEB3FORMS_KEY'],
          subject: `Audit Web Gratuit — ${name}`,
          from_name: "CICLOPYC · Audit",
          name,
          email,
          "Site actual": url.trim() || "Nu are site",
          Buget: budget,
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      form.reset();
      toast.success("Cererea a fost trimisă!", { description: "Te vom contacta în maxim 24 de ore." });
    } catch {
      toast.error("Nu s-a putut trimite.", { description: `Încearcă din nou sau scrie-ne direct la ${EMAIL}.` });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {introVisible && <motion.div key="intro-splash" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }} className="fixed inset-0 z-[100] bg-background" aria-hidden="true">
          <IntroLoader progress={loadProgress} done={loaderDone} />
        </motion.div>}
      </AnimatePresence>
    <main id="home" className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <motion.div initial={false} animate={revealStage >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }} transition={{ duration: .7, ease: "easeOut" }} style={{ pointerEvents: revealStage >= 1 ? "auto" : "none" }} className="fixed right-5 top-5 z-[60] md:right-8 md:top-8">
        <div className="hidden items-center gap-1 rounded-xl border border-border bg-card p-1.5 shadow-sm md:flex">
          {["Portofoliu", "Blog", "Modele", "Contact"].map((label) => {
            const id = label === "Portofoliu" ? "portofoliu" : label === "Blog" ? "blog" : label === "Modele" ? "shop" : "footer";
            return <motion.button key={label} whileHover={{ y: -2 }} whileTap={{ scale: .96 }} onClick={() => { if (id === "portofoliu") navigate({ to: "/portofoliu" }); else if (id === "blog") navigate({ to: "/blog" }); else scrollTo(id); }} className="rounded-xl px-4 py-2.5 text-xs font-bold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">{label}</motion.button>;
          })}
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: .96 }} onClick={() => scrollTo("contact")} className="rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90">Hai să vorbim</motion.button>
        </div>
        <div className="md:hidden">
          <MenuButton open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />
        </div>
      </motion.div>
      <AnimatePresence>
        {menuOpen && <motion.div className="fixed inset-0 z-50 bg-background/90 p-4 md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)}>
          <motion.nav aria-label="Navigație principală" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} onClick={(event) => event.stopPropagation()} className="menu-panel mx-auto mt-20 max-w-3xl overflow-hidden rounded-2xl border border-border bg-nav p-6 md:p-10">
            <div className="mb-8 flex items-center gap-3 border-b border-border pb-6"><span className="grid size-10 place-items-center rounded-xl border border-primary/40 bg-primary/10 font-black text-primary">C</span><p className="font-display text-xl font-bold">CICLO<span className="text-primary">PYC</span></p></div>
            <div className="grid gap-2 sm:grid-cols-2">{nav.map(([label, id], index) => <Button key={id} variant="ghost" className="h-auto justify-between rounded-2xl border border-transparent px-5 py-4 text-left font-display text-lg hover:border-border hover:bg-accent" onClick={() => { setMenuOpen(false); if (id === "portofoliu") navigate({ to: "/portofoliu" }); else if (id === "blog") navigate({ to: "/blog" }); else scrollTo(id); }}><span><small className="mr-3 text-[10px] text-primary">0{index + 1}</small>{label}</span><ArrowUpRight /></Button>)}</div>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground"><span>BUCUREȘTI / RO</span><span>AVAILABLE FOR PROJECTS</span></div>
          </motion.nav>
        </motion.div>}
      </AnimatePresence>

      <section className="relative min-h-screen overflow-hidden">
        <img src={serviceModels[0].detailImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/74" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-6 pt-8 md:px-8 md:pb-8 md:pt-10 lg:pt-12">
          <div className="h-[3.75rem] md:h-24" aria-hidden="true" />
          <h1 ref={logoRef} aria-label="CICLOPYC" style={{ opacity: 0 }} className={`absolute left-5 top-8 font-display text-6xl font-black leading-none text-foreground will-change-transform md:left-8 md:top-10 md:text-8xl ${introDone ? "z-10" : "z-[110]"}`}>CICL<CyclopsEye />PYC</h1>
          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center py-8 pb-10 text-center">
            <div className="max-w-3xl">
              <h2 className="hero-headline mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] md:text-6xl"><span className="block"><RevealWords text="Site-uri web de înaltă performanță care" show={revealStage >= 1} /></span><span className="relative mt-2 block min-h-[2.3em] text-signal">{revealStage >= 2 && <AnimatePresence mode="wait"><motion.span key={heroPhrases[heroPhraseIndex]} initial={{ opacity: 0, y: 22, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }} exit={{ opacity: 0, y: -10, filter: "blur(6px)", transition: { duration: 0.6, ease: "easeInOut" } }} className="block">{heroPhrases[heroPhraseIndex]}</motion.span></AnimatePresence>}</span></h2>

              <motion.div initial={false} animate={revealStage >= 3 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: .96 }} transition={{ duration: .9, ease: "easeOut" }} className="mx-auto mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:flex-row">
                <Button onClick={() => scrollTo("shop")} className="hero-action h-14 rounded-lg bg-primary px-7 text-base font-bold text-primary-foreground shadow-sm hover:bg-primary/90">Vezi serviciile <ArrowUpRight /></Button>
                <Button onClick={() => scrollTo("contact")} className="hero-action h-14 rounded-lg border border-border bg-card px-7 text-base font-bold text-foreground hover:bg-accent">Hai să discutăm <ChevronRight /></Button>
              </motion.div>
              <motion.div initial={false} animate={revealStage >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.85, ease: "easeOut" }} className="mx-auto mt-8 grid w-full max-w-sm grid-cols-2 gap-3">
                <Counter key={`s-${revealStage >= 4}`} value={24} suffix="/7" label="Suport" compact />
                <Counter key={`z-${revealStage >= 4}`} value={14} suffix=" zile" label="Gata de lansare" compact />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-shell">
        <SectionHead eyebrow="01 / PROIECTE" title="Proiecte selectate" copy="Interfețe create pentru branduri care refuză să treacă neobservate." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 54, scale: .92, rotateX: 7 }} whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} whileHover={{ y: -12, scale: 1.025, rotateZ: index === 1 ? 0 : index === 0 ? -.35 : .35 }} whileTap={{ y: 2, scale: .985 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: index * .14, duration: .9, ease: "easeOut" }} style={{ transformPerspective: 1000 }} className="tactile-card group overflow-hidden rounded-2xl border border-border bg-card">
            <div className="project-art"><img src={item.image} alt={`Previzualizare ${item.title}`} loading="lazy" /><span className="project-number">{item.number}</span><div className="mock-window"><div className="mock-top"><i /><i /><i /></div><div className="mock-photo"><img src={item.image} alt="" /></div></div></div>
            <div className="p-6"><p className="text-[10px] font-bold text-primary">{item.category}</p><h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p><Button variant="ghost" className="mt-5 -ml-3 rounded-xl text-xs" onClick={() => setProject(item)}>Vezi proiectul <ArrowUpRight /></Button></div>
          </motion.article>)}
        </div>
        <div className="mt-10 flex justify-center"><Link to="/portofoliu"><Button className="h-12 rounded-lg bg-primary px-6 font-bold text-primary-foreground shadow-sm hover:bg-primary/90">Vezi portofoliul complet <ArrowUpRight /></Button></Link></div>
      </section>

      <section id="stats" className="border-y border-border bg-surface py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border px-0 md:grid-cols-4">
            {[[100, "%", "Proiecte live"], [2, "+", "Ani de experiență"], [1, "s", "Timp de încărcare"], [24, "/7", "Monitorizare"]].map(([value, suffix, label]) => <Counter key={String(label)} value={Number(value)} suffix={String(suffix)} label={String(label)} />)}

        </div>
        <div className="marquee mt-14 overflow-hidden py-7" aria-label="Instrumente folosite în proiecte"><motion.div className="flex w-max items-center gap-12 md:gap-20" animate={reducedMotion ? { x: 0 } : { x: ["0%", "-50%"] }} transition={{ duration: 36, ease: "linear", repeat: Infinity }}>{[...Array(2)].flatMap((_, copy) => toolBrands.map(({ mark, name, font, color, icon }) => <motion.span key={`${copy}-${name}`} whileHover={reducedMotion ? {} : { y: -7, scale: 1.08, rotate: -1 }} transition={{ type: "spring", stiffness: 240, damping: 16 }} className={`marquee-brand marquee-brand-${font}`}><i className="marquee-mark" style={{ color }} aria-hidden="true">{icon ? <svg viewBox="0 0 24 24" role="img" aria-label={`${name} logo`}><path d={icon.path} /></svg> : mark}</i>{name}</motion.span>))}</motion.div></div>
      </section>

      <section id="reviews" className="section-shell">
        <SectionHead eyebrow="02 / RECENZII" title="Rezultate care se simt" copy="Parteneriate măsurate în creștere, nu în promisiuni." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, avatar }, index) => <motion.article key={name} tabIndex={0} initial={{ opacity: 0, y: 48, scale: .94, rotateY: index % 2 ? 7 : -7 }} whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }} whileHover={{ y: -10, scale: 1.025 }} whileTap={{ scale: .99 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * .16, duration: .85, ease: "easeOut" }} style={{ transformPerspective: 900 }} className="tactile-card rounded-2xl border border-border bg-card p-6"><div className="mb-6 flex gap-1 text-signal">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div><p className="text-lg leading-7">„{quote}”</p><div className="mt-8 flex items-center gap-3 border-t border-border pt-5"><img src={avatar} alt={`Portret ${name}`} loading="lazy" className="size-10 rounded-full object-cover" /><div><p className="text-sm font-semibold">{name}</p><p className="text-xs text-muted-foreground">{role}</p></div></div></motion.article>)}
        </div>
      </section>

      <section id="shop" className="border-y border-border bg-surface py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8"><SectionHead eyebrow="03 / SERVICII" title="Servicii cu scop clar." copy="Alege direcția potrivită și vezi ce include, cui i se potrivește și cum se formează oferta." />
          <div className="service-grid mt-12 grid gap-6 lg:grid-cols-3">{serviceModels.map((item, index) => <Link key={item.slug} to="/modele/$slug" params={{ slug: item.slug }} className="service-card-link group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"><motion.article initial={{ opacity: 0, y: 70, scale: .88, rotateX: 12 }} whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} whileHover={{ y: -14, scale: 1.035, rotateZ: index === 1 ? 0 : index === 0 ? -.6 : .6 }} whileTap={{ y: 2, scale: .985 }} viewport={{ once: true, margin: "-70px" }} transition={{ delay: index * .18, duration: 1.05, ease: "easeOut" }} style={{ transformPerspective: 1100 }} className="service-card tactile-card flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors group-hover:border-signal/60"><div className="template-visual"><img src={item.image} alt={`Exemplu pentru ${item.name}`} loading="lazy" /><span>0{index + 1} / {item.type}</span></div><div className="flex flex-1 flex-col p-6"><p className="eyebrow">{item.category}</p><h3 className="mt-3 font-display text-2xl font-semibold">{item.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p><ul className="mt-6 space-y-3">{item.cardFeatures.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-signal" />{feature}</li>)}</ul></div></motion.article></Link>)}</div>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <div className="audit-shell relative overflow-hidden rounded-3xl border border-primary/50 bg-card p-6 md:p-12 lg:p-16">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="eyebrow">04 / FREE AUDIT</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Solicită un Audit Web <span className="text-primary">Gratuit.</span></h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Îți arătăm unde pierzi viteză, claritate și conversii. Fără obligații, fără discurs de vânzare.</p>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"><span className="grid size-10 place-items-center rounded-xl border border-border bg-background"><Mail className="size-4 text-primary" /></span>{EMAIL}</a>
            </div>
          </div>
            <form onSubmit={submitAudit} className="grid gap-4 rounded-2xl border border-border bg-background/70 p-5 backdrop-blur-xl sm:grid-cols-2">
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <label className="field-label">Nume<input required name="name" maxLength={100} placeholder="Numele tău" className="field" /></label>
              <label className="field-label">Email<input required name="email" type="email" maxLength={255} placeholder="email@companie.ro" className="field" /></label>
              <label className="field-label sm:col-span-2">URL site actual <span className="text-[10px] font-medium normal-case text-muted-foreground">(opțional)</span><input name="url" type="url" maxLength={255} placeholder="https:// — dacă ai deja un site" className="field" /></label>
              <label className="field-label sm:col-span-2">Buget estimat<select required name="budget" defaultValue="" className="field"><option value="" disabled>Alege un interval</option><option>300€ — 500€</option><option>500€ — 700€</option><option>700€ — 1.000€</option><option>Peste 1.000€</option></select></label>
              <Button type="submit" disabled={sending} className="mt-2 h-12 rounded-xl bg-primary font-bold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-60 sm:col-span-2">{sending ? "Se trimite..." : <>Cere audit <ArrowUpRight /></>}</Button>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-surface py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.7fr_1.3fr]"><SectionHead eyebrow="05 / FAQ" title="Întrebări. Răspunsuri clare." copy="Tot ce ai nevoie să știi înainte să începem." /><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem value={`item-${index}`} key={question} className="border-border"><AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <div id="footer"><SiteFooter /></div>

      <Dialog open={Boolean(project)} onOpenChange={(open) => !open && setProject(null)}><DialogContent className="max-w-xl rounded-2xl border-border bg-card"><DialogHeader><p className="text-[10px] font-bold text-primary">{project?.category}</p><DialogTitle className="font-display text-3xl">{project?.title}</DialogTitle><DialogDescription className="pt-3 leading-6">{project?.copy}</DialogDescription></DialogHeader><div className="project-detail rounded-xl border border-border bg-background p-5"><p className="text-sm font-semibold">Detalii proiect</p><div className="mt-4 grid grid-cols-3 gap-2 text-center"><Counter value={project?.loadSeconds ?? 0} suffix="s" decimals={1} label="Încărcare" dialog /><Counter value={project?.durationDays ?? 0} suffix=" zile" label="Finalizat în" dialog /><Counter value={project?.priceEuros ?? 0} suffix="€" label="Preț" dialog /></div></div></DialogContent></Dialog>
            {contactOpen && <div className="fixed inset-0 z-30" onClick={() => setContactOpen(false)} aria-hidden="true" />}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
        <AnimatePresence>
          {contactOpen && <motion.div initial={{ opacity: 0, y: 12, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: .96 }} style={{ transformOrigin: "bottom right" }} className="grid min-w-52 gap-1 rounded-2xl border border-border bg-card/95 p-2 shadow-2xl backdrop-blur-xl">
            <a href={`tel:${CONTACT_PHONE}`} onClick={() => setContactOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors hover:bg-accent"><Phone className="size-4" />Sună-ne</a>
            <a href={`https://wa.me/${CONTACT_PHONE.replace("+", "")}`} target="_blank" rel="noopener noreferrer" onClick={() => setContactOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors hover:bg-accent"><svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true"><path d={siWhatsapp.path} /></svg>WhatsApp</a>
            <a href={`mailto:${EMAIL}`} onClick={() => setContactOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors hover:bg-accent"><Mail className="size-4" />Email</a>
          </motion.div>}
        </AnimatePresence>
        <div className="relative">
          
          
          <motion.div
            animate={introDone && !contactOpen && !reducedMotion ? { rotate: [0, 0, -7, 7, -5, 5, 0, 0] } : { rotate: 0 }}
            transition={{ duration: 4.8, times: [0, 0.6, 0.66, 0.72, 0.78, 0.84, 0.9, 1], ease: "easeInOut", repeat: Infinity }}
          >
            <Button onClick={() => setContactOpen((open) => !open)} aria-expanded={contactOpen} aria-label={contactOpen ? "Închide opțiunile de contact" : "Deschide opțiunile de contact"} className="relative h-14 rounded-full bg-primary px-5 font-bold text-primary-foreground shadow-sm"><span>{contactOpen ? "Închide" : "Mesaj"}</span>{contactOpen ? <X /> : <MessageCircle />}</Button>
          </motion.div>
        </div>
      </div>
    </main>
    </>
  );
}

function SectionHead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">{title}</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{copy}</p></motion.div>;
}

