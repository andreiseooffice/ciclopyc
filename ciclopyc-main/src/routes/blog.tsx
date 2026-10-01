import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import websiteArticleImage from "@/assets/unsplash-website-editorial.jpg";
import investmentArticleImage from "@/assets/unsplash-agency-investment.jpg";
import planningArticleImage from "@/assets/unsplash-service-planning.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — CICLOPYC" },
      { name: "description", content: "Ghiduri clare despre website-uri, achiziția unui site și alegerea pachetului potrivit pentru afacerea ta." },
      { property: "og:title", content: "Blog — CICLOPYC" },
      { property: "og:description", content: "Idei practice pentru o prezență online mai clară, mai rapidă și mai convingătoare." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const articles = [
  {
    number: "01",
    category: "STRATEGIE DIGITALĂ",
    title: "Cum știi dacă ai nevoie de un website",
    image: websiteArticleImage,
    imageAlt: "Laptop deschis pe un spațiu de lucru creativ",
    intro: "Un website nu este doar o carte de vizită online. Este locul în care un potențial client poate înțelege cine ești, ce oferi și de ce merită să te aleagă.",
    readTime: "6 min citire",
    sections: [
      ["Când depinzi prea mult de platforme care nu sunt ale tale", "Dacă toată afacerea ta trăiește într-o rețea socială, într-un marketplace sau într-un profil de hărți, nu controlezi complet relația cu publicul tău. Algoritmul se schimbă, reach-ul scade, iar informațiile importante se pierd printre postări. Un website îți oferă un spațiu propriu, stabil și construit în jurul obiectivelor tale."],
      ["Când clienții pun aceleași întrebări din nou și din nou", "Un site bun răspunde înainte ca vizitatorul să întrebe: ce vinzi, pentru cine este, cât durează, cât costă și cum poate începe. Astfel, echipa ta pierde mai puțin timp cu explicații repetitive, iar clienții potriviți ajung mai repede la următorul pas."],
      ["Când vrei să fii găsit și după ce trece o campanie", "O postare are o viață scurtă. Un website optimizat poate atrage trafic din Google luni sau ani după publicare. Pagini bine scrise pentru servicii, locații și întrebări frecvente construiesc vizibilitate în timp și transformă căutările în conversații reale."],
    ],
    conclusion: "Dacă ai o ofertă clară, clienți care caută informații online sau o afacere pe care vrei să o crești, probabil ai nevoie de un website. Nu trebuie să începi cu ceva complicat. Ai nevoie de o fundație clară, credibilă și ușor de folosit.",
  },
  {
    number: "02",
    category: "INVESTIȚIE DIGITALĂ",
    title: "Ce înseamnă achiziția unui website",
    image: investmentArticleImage,
    imageAlt: "Echipă care discută un proiect la masă",
    intro: "Când cumperi un website, nu cumperi doar câteva pagini și un domeniu. Cumperi un instrument care trebuie să lucreze pentru afacerea ta în fiecare zi.",
    readTime: "7 min citire",
    sections: [
      ["Strategie și structură", "Înainte de design, un website are nevoie de o logică. Stabilim ce trebuie să afle vizitatorul, ce acțiune vrem să facă și cum îl ghidăm acolo. Structura potrivită reduce confuzia și face oferta mai ușor de înțeles."],
      ["Design și identitate", "Primești o interfață construită în jurul brandului tău: culori, tipografie, imagini, ton și ierarhie vizuală. Designul nu este decor; el transmite nivelul de atenție pe care îl vei acorda clientului și face diferența dintre o pagină generică și o experiență memorabilă."],
      ["Dezvoltare, performanță și mobil", "Site-ul trebuie să se încarce rapid, să funcționeze corect pe telefon și să fie accesibil pentru motoarele de căutare. Un website cumpărat corect include implementare tehnică, formulare funcționale, pagini responsive și verificări înainte de lansare."],
      ["Lansare și control", "La final primești un website public, configurat și pregătit pentru utilizare. În funcție de pachet, poți primi și instruire, mentenanță, monitorizare sau sprijin pentru următoarele îmbunătățiri. Important este să știi ce deții și cum poate evolua site-ul după lansare."],
    ],
    conclusion: "O achiziție bună îți lasă mai mult decât un link. Îți lasă un sistem clar de prezentare și conversie, pe care îl poți folosi pentru a atrage, convinge și servi clienți mai bine.",
  },
  {
    number: "03",
    category: "GHID DE ALEGERE",
    title: "Cum să alegi pachetul potrivit pentru tine",
    image: planningArticleImage,
    imageAlt: "Colaborare pentru planificarea unui proiect digital",
    intro: "Pachetul potrivit nu este cel mai mare. Este cel care se potrivește cu etapa afacerii tale, cu obiectivele pe care le ai și cu nivelul de suport de care ai nevoie.",
    readTime: "8 min citire",
    sections: [
      ["Standard — 299€", "Pachetul Standard este potrivit dacă ai nevoie de o prezență online clară și profesionistă, fără o structură complicată. Include o pagină bine organizată sau un site de prezentare compact, conținut esențial, design responsive și un traseu simplu către contact. Este un punct de pornire bun pentru freelanceri, servicii locale și afaceri aflate la început."],
      ["Advanced — 599€", "Pachetul Advanced este pentru afaceri care vor mai mult decât o prezentare. Include mai multe pagini, o structură mai bogată pentru servicii, secțiuni dedicate conversiei, optimizare SEO de bază și interacțiuni care ajută vizitatorul să ia o decizie. Este alegerea echilibrată pentru un brand în creștere."],
      ["Premium — 1000+€", "Pachetul Premium este construit pentru branduri care vor o experiență digitală distinctă și mai multă flexibilitate. Include direcție vizuală personalizată, arhitectură complexă, animații atent dozate, funcții avansate și o atenție mai mare pentru performanță și conversie. Este potrivit când website-ul devine o parte centrală din vânzare."],
      ["Cum alegi practic", "Începe cu obiectivul, nu cu numărul de funcții. Dacă vrei doar să fii găsit și contactat, Standard poate fi suficient. Dacă ai mai multe servicii și vrei să explici diferențiatorii, Advanced oferă spațiul necesar. Dacă experiența brandului, lead-urile și personalizarea sunt prioritare, Premium îți oferă cea mai solidă bază."],
    ],
    conclusion: "Poți începe cu un pachet potrivit momentului actual și îl poți extinde pe măsură ce afacerea crește. Un website bun este o investiție care se dezvoltă împreună cu tine, nu o decizie definitivă luată într-o singură zi.",
  },
];

function Blog() {
  return (
    <>
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <section className="relative overflow-hidden border-b border-border px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
        <div className="relative mx-auto max-w-7xl">
          <Link to="/">
            <Button variant="ghost" className="-ml-3 mb-16 rounded-xl text-xs text-muted-foreground"><ArrowLeft /> Înapoi acasă</Button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <p className="eyebrow">CICLOPYC / IDEI DIGITALE</p>
            <h1 className="mt-5 font-editorial text-5xl font-normal leading-[.98] md:text-8xl">Un website bun începe cu <span className="text-signal">întrebările potrivite.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Ghiduri clare pentru antreprenori care vor să înțeleagă mai bine ce cumpără, de ce au nevoie și cum își pot construi următorul pas online.</p>
          </motion.div>
          <div className="mt-16 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[.12em] text-muted-foreground">
            <span className="rounded-full border border-border bg-card/70 px-4 py-2">3 ghiduri</span>
            <span className="rounded-full border border-border bg-card/70 px-4 py-2">Strategie, design, conversie</span>
            <span className="rounded-full border border-border bg-card/70 px-4 py-2">Actualizat 2026</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8">
          {articles.map((article, index) => (
            <motion.article key={article.number} id={`articol-${article.number}`} initial={{ opacity: 0, y: 54, scale: .93, rotateX: 7 }} whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} whileHover={{ y: -9, scale: 1.012 }} whileTap={{ y: 2, scale: .99 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.13, duration: .9, ease: "easeOut" }} style={{ transformPerspective: 1000 }} className="group tactile-card overflow-hidden rounded-xl border border-border bg-card">
              <div className="grid lg:grid-cols-[.34fr_1fr]">
                <div className="blog-photo relative flex min-h-[280px] overflow-hidden border-b border-border lg:min-h-full lg:border-b-0 lg:border-r">
                  <img src={article.image} alt={article.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="relative flex min-h-[280px] w-full flex-col justify-between p-6 md:p-8">
                    <span className="grid size-12 place-items-center rounded-full bg-white font-display text-lg font-semibold text-foreground">{article.number}</span>
                    <div className="w-fit rounded-md bg-white px-4 py-3 text-foreground">
                      <p className="text-[10px] font-bold text-signal">{article.category}</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="size-3.5" />{article.readTime}</div>
                    </div>
                  </div>
                </div>
                <div className="p-7 md:p-10 lg:p-14">
                  <h2 className="max-w-3xl font-editorial text-3xl font-normal leading-tight md:text-5xl">{article.title}</h2>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{article.intro}</p>
                  <div className="mt-10 grid gap-8 border-t border-border pt-10 md:grid-cols-2">
                    {article.sections.map(([heading, copy]) => (
                      <section key={heading}>
                        <h3 className="font-display text-xl font-semibold">{heading}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
                      </section>
                    ))}
                  </div>
                  <div className="mt-10 border-l-2 border-primary bg-background/60 p-5 md:p-6">
                    <p className="text-sm font-semibold leading-7">{article.conclusion}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div><p className="eyebrow">URMĂTORUL PAS</p><h2 className="mt-3 max-w-xl font-display text-3xl font-bold md:text-5xl">Ai întrebări despre website-ul tău?</h2><p className="mt-4 max-w-lg leading-7 text-muted-foreground">Spune-ne unde ești acum și îți recomandăm o direcție potrivită pentru obiectivele tale.</p></div>
          <Link to="/" hash="contact"><Button className="h-12 rounded-xl bg-primary px-6 font-bold text-primary-foreground shadow-sm hover:bg-primary/90">Cere un audit gratuit <ArrowUpRight /></Button></Link>
        </div>
      </section>
    </main>
    <SiteFooter />
    </>
  );
}
