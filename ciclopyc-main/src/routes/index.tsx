import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type FormEvent, type PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Check, ChevronRight, Instagram, Mail, Menu, ShoppingBag, Star, X } from "lucide-react";
import { siClaude, siFigma, siFramer, siGoogle, siWebflow } from "simple-icons";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import commerceImage from "@/assets/portfolio-commerce.jpg";
import fintechImage from "@/assets/portfolio-fintech.jpg";
import saasImage from "@/assets/portfolio-saas.jpg";
import beautyImage from "@/assets/template-beauty.jpg";
import cafeImage from "@/assets/template-cafe.jpg";
import estateImage from "@/assets/template-estate.jpg";
import maraAvatar from "@/assets/avatar-mara.jpg";
import victorAvatar from "@/assets/avatar-victor.jpg";
import dariaAvatar from "@/assets/avatar-daria.jpg";
import heroBg from "@/assets/hero-bg.jpg";

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
const nav: Array<[string, string]> = [["Acasă", "home"], ["Portofoliu", "portofoliu"], ["Blog", "blog"], ["Statistici", "stats"], ["Recenzii", "reviews"], ["Modele", "shop"], ["FAQ", "faq"], ["Contact", "contact"]];
const TikTokIcon = ({ className = "size-4" }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M19.6 6.7a5 5 0 0 1-3.6-4.4V2h-3.3v13.2a2.9 2.9 0 1 1-2-2.7V9.1a6.2 6.2 0 1 0 5.3 6.1V8.9a8.2 8.2 0 0 0 4.6 1.4V7a5 5 0 0 1-1-.3Z" /></svg>;
const socials: Array<[string, string, "instagram" | "tiktok" | "mail"]> = [["Instagram", "https://www.instagram.com/ciclopyc/", "instagram"], ["TikTok", "https://www.tiktok.com/@ciclopyc", "tiktok"], ["Email", `mailto:${EMAIL}`, "mail"]];
const projects = [
  { category: "E-COMMERCE", title: "NOIR / Objects", copy: "Un magazin digital construit ca o galerie — rapid, tactil și fără fricțiune.", image: commerceImage, number: "01" },
  { category: "FINTECH", title: "VOLT / Capital", copy: "O platformă financiară care transformă datele complexe în decizii clare.", image: fintechImage, number: "02" },
  { category: "SAAS", title: "NEXUS / Flow", copy: "Un spațiu de lucru modular creat pentru echipe care cresc rapid.", image: saasImage, number: "03" },
];
const templates = [
  { name: "Salon & Beauty", price: "299€", type: "ELEGANCE", image: beautyImage, features: ["Programări online", "Galerie servicii", "Optimizare locală"] },
  { name: "Cafenea & Bistro", price: "599€", type: "ATMOSPHERE", image: cafeImage, features: ["Meniu digital", "Rezervări rapide", "Hartă & program"] },
  { name: "Imobiliare Premium", price: "1000+€", type: "ESTATE", image: estateImage, features: ["Filtrare proprietăți", "Tururi video", "Formular lead-uri"] },
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
  { mark: "F", name: "FIGMA", font: "figma", icon: siFigma },
  { mark: "</>", name: "VS CODE", font: "vscode" },
  { mark: "W", name: "WEBFLOW", font: "webflow", icon: siWebflow },
  { mark: "C", name: "CLAUDE", font: "claude", icon: siClaude },
  { mark: "G", name: "GOOGLE STUDIO", font: "google", icon: siGoogle },
  { mark: "CX", name: "CODEX", font: "codex" },
  { mark: "M", name: "MOTION", font: "motion" },
  { mark: "Fr", name: "FRAMER", font: "framer", icon: siFramer },
  { mark: "O", name: "OPEN AI", font: "openai" },
];
const heroPhrases = ["transformă vizitatorii în clienți.", "îți construiesc imaginea online.", "lucrează în locul tău."];

function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

function Counter({ value, suffix = "", label, compact = false }: { value: number; suffix?: string; label: string; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 2200, bounce: 0 });
  const replay = useCallback(() => {
    spring.jump(0);
    count.set(0);
    if (valueRef.current) valueRef.current.textContent = `0${suffix}`;
    requestAnimationFrame(() => count.set(value));
  }, [count, spring, suffix, value]);
  useEffect(() => { if (inView) replay(); }, [inView, replay]);
  useEffect(() => spring.on("change", (latest) => { if (valueRef.current) valueRef.current.textContent = `${Math.round(latest)}${suffix}`; }), [spring, suffix]);
  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={`Reia numărătoarea pentru ${label}`}
      onClick={replay}
      onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); replay(); } }}
      className={compact ? "tactile-card stat-slot rounded-2xl border border-border bg-card/70 p-4 text-center backdrop-blur-xl" : "tactile-card stat-slot bg-background p-7 text-center md:p-10"}
    >
      <p className={`stat-value font-display font-black ${compact ? "text-xl md:text-2xl" : "text-4xl md:text-6xl"}`}><span ref={valueRef}>0{suffix}</span></p>
      <p className={compact ? "mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground" : "mt-3 text-xs uppercase text-muted-foreground"}>{label}</p>
    </div>
  );
}

function MenuButton({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const rotateX = useSpring(targetX, { stiffness: 360, damping: 24, mass: 0.55 });
  const rotateY = useSpring(targetY, { stiffness: 360, damping: 24, mass: 0.55 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    targetX.set(y * -7);
    targetY.set(x * 9);
  };

  const resetTilt = () => {
    targetX.set(0);
    targetY.set(0);
  };

  return (
    <motion.div
      className="menu-button-shell"
      initial={{ opacity: 0, y: -18, rotateX: -24 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      style={{ rotateX, rotateY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <Button onClick={onToggle} aria-expanded={open} aria-label={open ? "Închide meniul" : "Deschide meniul"} className="menu-trigger h-14 rounded-2xl border border-primary/40 bg-card px-5 font-display font-bold text-foreground hover:bg-accent">
        <span className="menu-trigger-icon grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">{open ? <X /> : <Menu />}</span>
        <span className="hidden sm:inline">{open ? "ÎNCHIDE" : "MENIU"}</span>
      </Button>
    </motion.div>
  );
}

const binaryRain = [
  "01001101011001010110111001110101",
  "10110100100101101101001011010011",
  "00110110111001001011010100101101",
  "11001010010110100110110010100110",
  "01101001011011001010010110100101",
  "10010110100101101001011011010010",
  "01011010011001011010010110100110",
  "10100110100101101001011001011010",
  "00101101001011010010110100101101",
  "11010010110100101101001011010010",
];

function BinaryRain() {
  return <div className="binary-rain" aria-hidden="true">{binaryRain.map((line, index) => <span key={index} className="binary-column" style={{ "--rain-index": index } as CSSProperties}>{line.split("").map((bit, bitIndex) => <b key={bitIndex}>{bit}</b>)}</span>)}</div>;
}


function Index() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState<(typeof projects)[number] | null>(null);
  const [template, setTemplate] = useState<(typeof templates)[number] | null>(null);
  const [heroPhraseIndex, setHeroPhraseIndex] = useState(0);

  useEffect(() => {
    const phraseTimer = window.setInterval(() => {
      setHeroPhraseIndex((index) => (index + 1) % heroPhrases.length);
    }, 3600);
    return () => window.clearInterval(phraseTimer);
  }, []);

  const submitAudit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").slice(0, 100);
    const email = String(data.get("email") ?? "").slice(0, 255);
    const url = String(data.get("url") ?? "").slice(0, 255);
    const budget = String(data.get("budget") ?? "");
    const body = `Nume: ${name}\nEmail: ${email}\nSite actual: ${url.trim() || "Nu are site"}\nBuget: ${budget}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Audit Web Gratuit — " + name)}&body=${encodeURIComponent(body)}`;
    event.currentTarget.reset();
    toast.success("Cererea este pregătită.", { description: `Se deschide aplicația ta de e-mail către ${EMAIL}.` });
  };

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").slice(0, 100);
    const email = String(data.get("email") ?? "").slice(0, 255);
    const body = `Nume: ${name}\nEmail: ${email}\nModel dorit: ${template?.name ?? ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Comandă model — " + (template?.name ?? ""))}&body=${encodeURIComponent(body)}`;
    setTemplate(null);
    toast.success("Comanda este pregătită.", { description: `Se deschide aplicația ta de e-mail către ${EMAIL}.` });
  };

  return (
    <main id="home" className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="fixed right-5 top-5 z-[60] md:right-8 md:top-8">
        <div className="hidden items-center gap-1 rounded-2xl border border-border bg-card/75 p-1.5 shadow-[0_12px_32px_oklch(0_0_0_/_0.38)] backdrop-blur-xl md:flex">
          {["Portofoliu", "Blog", "Modele", "Contact"].map((label) => {
            const id = label === "Portofoliu" ? "portofoliu" : label === "Blog" ? "blog" : label === "Modele" ? "shop" : "footer";
            return <motion.button key={label} whileHover={{ y: -2 }} whileTap={{ scale: .96 }} onClick={() => { if (id === "portofoliu") navigate({ to: "/portofoliu" }); else if (id === "blog") navigate({ to: "/blog" }); else scrollTo(id); }} className="rounded-xl px-4 py-2.5 text-xs font-bold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">{label}</motion.button>;
          })}
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: .96 }} onClick={() => scrollTo("contact")} className="rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-neon transition-colors hover:bg-primary/90">Cere audit</motion.button>
        </div>
        <div className="md:hidden">
          <MenuButton open={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && <motion.div className="fixed inset-0 z-50 bg-background/70 p-4 backdrop-blur-md md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMenuOpen(false)}>
          <motion.nav aria-label="Navigație principală" initial={{ opacity: 0, y: -30, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -18, scale: .98 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} onClick={(event) => event.stopPropagation()} className="menu-panel mx-auto mt-20 max-w-3xl overflow-hidden rounded-3xl border border-primary/30 bg-nav p-6 backdrop-blur-2xl md:p-10">
            <div className="mb-8 flex items-center gap-3 border-b border-border pb-6"><span className="grid size-10 place-items-center rounded-xl border border-primary/40 bg-primary/10 font-black text-primary">C</span><p className="font-display text-xl font-bold">CICLO<span className="text-primary">PYC</span></p></div>
            <div className="grid gap-2 sm:grid-cols-2">{nav.map(([label, id], index) => <Button key={id} variant="ghost" className="h-auto justify-between rounded-2xl border border-transparent px-5 py-4 text-left font-display text-lg hover:border-border hover:bg-accent" onClick={() => { setMenuOpen(false); if (id === "portofoliu") navigate({ to: "/portofoliu" }); else if (id === "blog") navigate({ to: "/blog" }); else scrollTo(id); }}><span><small className="mr-3 text-[10px] text-primary">0{index + 1}</small>{label}</span><ArrowUpRight /></Button>)}</div>
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground"><span>BUCUREȘTI / RO</span><span>AVAILABLE FOR PROJECTS</span></div>
          </motion.nav>
        </motion.div>}
      </AnimatePresence>

      <section className="relative min-h-screen overflow-hidden border-b border-border">
        {/* Fundal hero — înlocuiește adresa imaginii de mai jos cu fotografia ta */}
        <img src={heroBg} alt="" className="absolute inset-0 z-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/20 to-background/95" />
        <BinaryRain />
        <div className="perspective-grid absolute inset-x-0 bottom-0 h-1/2 opacity-40" />
        <div className="red-haze absolute right-0 top-12 h-[600px] w-[600px]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-10 pt-8 md:px-8 md:pb-14 md:pt-10 lg:pb-16 lg:pt-12">
          <motion.h1
            aria-label="CICLOPYC"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { delayChildren: .12, staggerChildren: .06 } } }}
            className="relative z-10 flex self-start overflow-visible font-display text-[clamp(3rem,8vw,6rem)] font-black leading-[.8] lg:-ml-8"
          >
            {Array.from("CICLOPYC").map((letter, index) => (
              <motion.span
                aria-hidden="true"
                key={`${letter}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 24, rotateX: -60, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 190, damping: 18 } },
                }}
                whileHover={{ y: -8, scale: 1.08, rotateX: 10, transition: { type: "spring", stiffness: 320, damping: 14 } }}
                className="brand-shine hero-letter inline-block origin-bottom"
                style={{ transformPerspective: 700 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <div className="relative z-10 mx-auto mt-14 flex w-full max-w-3xl flex-1 flex-col items-center justify-center pb-20 text-center md:mt-24 md:pb-24 lg:mt-32">
            <h2 className="hero-headline max-w-3xl font-display text-3xl font-semibold leading-[1.05] md:text-5xl">Site-uri web de înaltă performanță care <span className="relative mt-2 block min-h-[2.2em] text-primary md:min-h-[1.1em]"><AnimatePresence mode="wait"><motion.span key={heroPhrases[heroPhraseIndex]} initial={{ opacity: 0, y: 16, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(8px)" }} transition={{ duration: .45, ease: "easeOut" }} className="block">{heroPhrases[heroPhraseIndex]}</motion.span></AnimatePresence></span></h2>
            <div className="mt-10 flex w-full max-w-sm flex-col items-center gap-4">
              <Button onClick={() => scrollTo("shop")} className="h-16 w-full rounded-2xl bg-primary px-8 text-base font-bold shadow-neon hover:bg-primary/90">Comandă acum <ArrowUpRight /></Button>
              <Button onClick={() => scrollTo("contact")} className="h-16 w-full rounded-2xl border border-primary/50 bg-card/80 px-8 text-base font-bold text-foreground backdrop-blur-xl hover:bg-accent">Cere audit <ChevronRight /></Button>
            </div>
            <div className="mt-8 grid w-full max-w-sm grid-cols-2 gap-3">
              <Counter value={24} suffix="/7" label="Suport" compact />
              <Counter value={14} suffix=" zile" label="Gata de lansare" compact />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-shell">
        <SectionHead eyebrow="01 / SELECTED WORK" title="Proiecte selectate" copy="Interfețe create pentru branduri care refuză să treacă neobservate." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="tactile-card group overflow-hidden rounded-2xl border border-border bg-card">
            <div className="project-art"><img src={item.image} alt={`Previzualizare ${item.title}`} loading="lazy" /><span className="project-number">{item.number}</span><div className="mock-window"><div className="mock-top"><i /><i /><i /></div><div className="mock-photo"><img src={item.image} alt="" /></div></div></div>
            <div className="p-6"><p className="text-[10px] font-bold text-primary">{item.category}</p><h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p><Button variant="ghost" className="mt-5 -ml-3 rounded-xl text-xs" onClick={() => setProject(item)}>Vezi proiectul <ArrowUpRight /></Button></div>
          </motion.article>)}
        </div>
        <div className="mt-10 flex justify-center"><Link to="/portofoliu"><Button className="h-12 rounded-xl bg-primary px-6 font-bold shadow-neon hover:bg-primary/90">Vezi portofoliul complet cu site-uri live <ArrowUpRight /></Button></Link></div>
      </section>

      <section id="stats" className="border-y border-border bg-surface py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border px-0 md:grid-cols-4">
          {[[99, "%", "Satisfacție"], [100, "+", "Site-uri livrate"], [1, "s", "Timp de încărcare"], [24, "/7", "Monitorizare"]].map(([value, suffix, label]) => <Counter key={String(label)} value={Number(value)} suffix={String(suffix)} label={String(label)} />)}

        </div>
        <div className="marquee mt-14 overflow-hidden py-7"><div className="marquee-track flex w-max items-center gap-20">{[...Array(2)].flatMap((_, copy) => toolBrands.map(({ mark, name, font, icon }) => <span key={`${copy}-${name}`} className={`marquee-brand marquee-brand-${font}`}><i className="marquee-mark" aria-hidden="true">{icon ? <svg viewBox="0 0 24 24" role="img" aria-label={`${name} logo`}><path d={icon.path} /></svg> : mark}</i>{name}</span>))}</div></div>
      </section>

      <section id="reviews" className="section-shell">
        <SectionHead eyebrow="02 / CLIENT VOICES" title="Rezultate care se simt" copy="Parteneriate măsurate în creștere, nu în promisiuni." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, avatar }) => <article key={name} tabIndex={0} className="tactile-card rounded-2xl border border-border bg-card p-6"><div className="mb-6 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</div><p className="text-lg leading-7">„{quote}”</p><div className="mt-8 flex items-center gap-3 border-t border-border pt-5"><img src={avatar} alt={`Portret ${name}`} loading="lazy" className="size-10 rounded-full object-cover" /><div><p className="text-sm font-semibold">{name}</p><p className="text-xs text-muted-foreground">{role}</p></div></div></article>)}
        </div>
      </section>

      <section id="shop" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8"><SectionHead eyebrow="03 / BASE MODELS" title="Lansează mai repede" copy="Baze premium, personalizate pentru identitatea și obiectivele afacerii tale." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">{templates.map((item, index) => <article key={item.name} tabIndex={0} className="tactile-card relative overflow-hidden rounded-2xl border border-border bg-card p-6"><div className="template-visual mb-7"><img src={item.image} alt={`Model ${item.name}`} loading="lazy" /><span>{item.type}</span><div className="template-lines"><i /><i /><i /></div></div><p className="text-[10px] font-bold text-primary">MODEL 0{index + 1}</p><h3 className="mt-2 font-display text-2xl font-semibold">{item.name}</h3><ul className="mt-6 space-y-3">{item.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground"><Check className="size-4 text-primary" />{feature}</li>)}</ul><div className="mt-8 flex items-center justify-between border-t border-border pt-6"><div><p className="text-[10px] text-muted-foreground">DE LA</p><p className="font-display text-2xl font-bold">{item.price}</p></div><Button onClick={() => setTemplate(item)} className="rounded-xl bg-primary font-bold shadow-neon hover:bg-primary/90"><ShoppingBag /> Trimite comandă</Button></div></article>)}</div>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <div className="audit-shell relative overflow-hidden rounded-3xl border border-primary/50 bg-card p-6 md:p-12 lg:p-16">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="eyebrow">04 / FREE AUDIT</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Solicită un Audit Web <span className="text-primary">Gratuit.</span></h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Îți arătăm unde pierzi viteză, claritate și conversii. Fără obligații, fără discurs de vânzare.</p>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"><span className="grid size-10 place-items-center rounded-xl border border-border bg-background"><Mail className="size-4 text-primary" /></span>{EMAIL}</a>
              <div className="flex gap-2 pt-2">{socials.filter(([, , kind]) => kind !== "mail").map(([label, href, kind]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Button variant="outline" size="icon" className="rounded-xl border-border bg-background hover:border-primary/50" aria-label={label}>{kind === "instagram" ? <Instagram className="size-4" /> : <TikTokIcon />}</Button></a>)}</div>
            </div>
          </div>
            <form onSubmit={submitAudit} className="grid gap-4 rounded-2xl border border-border bg-background/70 p-5 backdrop-blur-xl sm:grid-cols-2">
              <label className="field-label">Nume<input required name="name" maxLength={100} placeholder="Numele tău" className="field" /></label>
              <label className="field-label">Email<input required name="email" type="email" maxLength={255} placeholder="email@companie.ro" className="field" /></label>
              <label className="field-label sm:col-span-2">URL site actual <span className="text-[10px] font-medium normal-case text-muted-foreground">(opțional)</span><input name="url" type="url" maxLength={255} placeholder="https:// — dacă ai deja un site" className="field" /></label>
              <label className="field-label sm:col-span-2">Buget estimat<select required name="budget" defaultValue="" className="field"><option value="" disabled>Alege un interval</option><option>300€</option><option>500€</option><option>700€ — 1.000€</option><option>Peste 1.000€+</option></select></label>
              <Button type="submit" className="mt-2 h-12 rounded-xl bg-primary font-bold shadow-neon hover:bg-primary/90 sm:col-span-2">Cere audit <ArrowUpRight /></Button>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-surface py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[.7fr_1.3fr]"><SectionHead eyebrow="05 / FAQ" title="Întrebări. Răspunsuri clare." copy="Tot ce ai nevoie să știi înainte să începem." /><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem value={`item-${index}`} key={question} className="border-border"><AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <footer id="footer" className="border-t border-border px-5 py-10 md:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="font-display text-2xl font-bold">CICLO<span className="text-primary">PYC</span></p><p className="mt-3 max-w-sm text-sm text-muted-foreground">Digital experiences, engineered to convert.</p><a href={`mailto:${EMAIL}`} className="mt-3 inline-block text-sm font-semibold text-foreground transition-colors hover:text-primary">{EMAIL}</a><p className="mt-8 text-[11px] text-muted-foreground">© 2026 CICLOPYC STUDIO · TOATE DREPTURILE REZERVATE · INFORMAȚII FISCALE LA CERERE</p></div><div className="flex gap-2">{socials.map(([label, href, kind]) => <a key={label} href={href} target={kind === "mail" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label}><Button variant="outline" size="icon" className="rounded-xl border-border bg-card hover:border-primary/50" aria-label={label}>{kind === "instagram" ? <Instagram className="size-4" /> : kind === "tiktok" ? <TikTokIcon /> : <Mail className="size-4" />}</Button></a>)}</div></div></footer>

      <Dialog open={Boolean(project)} onOpenChange={(open) => !open && setProject(null)}><DialogContent className="max-w-xl rounded-2xl border-border bg-card"><DialogHeader><p className="text-[10px] font-bold text-primary">{project?.category}</p><DialogTitle className="font-display text-3xl">{project?.title}</DialogTitle><DialogDescription className="pt-3 leading-6">{project?.copy}</DialogDescription></DialogHeader><div className="project-detail rounded-xl border border-border bg-background p-6"><p className="text-sm font-semibold">Impact proiect</p><div className="mt-5 grid grid-cols-3 gap-3 text-center"><div><b className="text-xl">+42%</b><small>Conversii</small></div><div><b className="text-xl">0.8s</b><small>Încărcare</small></div><div><b className="text-xl">3×</b><small>Engagement</small></div></div></div></DialogContent></Dialog>
      <Dialog open={Boolean(template)} onOpenChange={(open) => !open && setTemplate(null)}><DialogContent className="rounded-2xl border-border bg-card"><DialogHeader><DialogTitle className="font-display text-2xl">Comandă {template?.name}</DialogTitle><DialogDescription>Trimite-ne datele tale și revenim cu pașii de personalizare.</DialogDescription></DialogHeader><form onSubmit={submitOrder} className="grid gap-4"><label className="field-label">Nume<input required name="name" maxLength={100} className="field" /></label><label className="field-label">Email<input required name="email" type="email" maxLength={255} className="field" /></label><Button type="submit" className="mt-2 h-11 rounded-xl bg-primary font-bold">Trimite comanda <ArrowUpRight /></Button></form></DialogContent></Dialog>
    </main>
  );
}

function SectionHead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">{title}</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{copy}</p></motion.div>;
}