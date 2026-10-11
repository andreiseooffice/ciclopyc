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
    category: "DIGITALIZARE",
    title: "De ce ai nevoie de un website?",
    image: websiteArticleImage,
    imageAlt: "Laptop deschis pe un spațiu de lucru creativ",
    intro: "Digitalizarea accelerată din ultimii 10 ani a transformat serviciile de software într-o necesitate pentru toate firmele la nivel global. Încet dar sigur, traficul de clienți crește rapid doar din zona online.",
    readTime: "6 min citire",
    sections: [
      ["Pentru că chiar acum cineva te caută", "Undeva de acasă, cineva are nevoie de serviciul pe care îl oferi. Ce face? Caută pe Google, bineînțeles. Însă nu te găsește dacă tu nu vrei să fii găsit, așa că deschide primul website din căutări și ajunge direct la concurența ta. Practic ce s-a întâmplat? Faptul că poate ai deja vechime în zonă și afacerea este cunoscută nu te-a ajutat deoarece online, nu exiști. Însă acum poți schimba asta."],
      ["Pentru că lucrează pentru tine", "Un site bun răspunde înainte ca vizitatorul să întrebe: ce vinzi, pentru cine este, cât durează, cât costă și cum poate începe. Așa nu vei mai pierde timp cu explicații repetitive, iar clienții potriviți vor ajunge mai repede la următorul pas. Simplu și eficient, fără apeluri inutile, fără mesaje deranjante."],
      ["Pentru că nu cumperi doar un site", "Cumperi imagine și rezultate. Paginile bine scrise pentru servicii, locație și prezentare construiesc vizibilitatea și transformă căutările în conversații reale. Publicarea unei afaceri online transformă audiența sa de la câteva sute la milioane de oameni care citesc, se uită, se interesează."],
    ],
    conclusion: "Dacă ai o ofertă clară, clienți care caută informații online sau o afacere pe care vrei să o crești, probabil ai nevoie de un website. Nu trebuie să începi cu ceva complicat. Ai nevoie de o fundație clară, credibilă și ușor de folosit.",
  },
  {
    number: "02",
    category: "SaaS",
    title: "Ce înseamnă Software-as-a-Service?",
    image: investmentArticleImage,
    imageAlt: "Echipă care discută un proiect la masă",
    intro: "Când cumperi un serviciu software, nu cumperi doar o platformă și un domeniu. Cumperi un instrument care trebuie să lucreze pentru afacerea ta în fiecare zi.",
    readTime: "7 min citire",
    sections: [
      ["Structură", "Înainte de design, un serviciu software are nevoie de logică. Stabilim ce trebuie să afle vizitatorul, ce acțiune vrem să facă și îl ghidăm acolo. Structura potrivită elimină confuzia și face oferta ușor de înțeles, accesat și cumpărat."],
      ["Design și identitate", "Interfața pe care o primești este construită în jurul brandului tău: culori, tipografie, imagini, ton și ierarhie vizuală. Designul nu este decor; el transmite nivelul de atenție pe care îl vei acorda clientului și face diferența dintre o pagină generică și una construită de o echipă care știe ce are de făcut."],
      ["Dezvoltare, performanță și viteză", "Platforma trebuie să se încarce rapid, să funcționeze corect pe telefon și să fie accesibil pentru motoarele de căutare. Un website cumpărat corect include implementare tehnică, formulare funcționale, pagini responsive și verificări înainte de lansare. De aceea oferim mentenanță și suport tehnic 24/7 pe toată perioada contractului de lucru."],
      ["Lansare și control", "La final primești serviciul testat, configurat și pregătit pentru utilizare. În funcție de pachet, poți primi și instruire, mentenanță avansată, monitorizare sau îmbunătățiri și actualizări constante. Important este să știi ce deții și cum poate evolua chiar și după lansare."],
    ],
    conclusion: "O colaborare bună îți lasă mai mult decât un link. Îți lasă un sistem clar de prezentare și conversie, simplu de înțeles și folosit pentru oricine, care va lucra în locul tău continuu pentru a atrage, convinge și servi clienți mai bine.",
  },
  {
    number: "03",
    category: "CINE LIVREAZĂ",
    title: "Cine suntem și ce ne motivează",
    image: planningArticleImage,
    imageAlt: "Colaborare pentru planificarea unui proiect digital",
    intro: "Povestea noastră a început cu doi colegi pasionați de informatică și dezvoltare a softurilor moderne. În timp, cererea pieții ne-a adus mai aproape de cei pe care urmărim să-i ajutăm, așa că ne-am extins echipa, cunoștințele și orizontul.",
    readTime: "8 min citire",
    sections: [
      ["Cum lucrăm", "Procesul prin care trece fiecare dintre client al nostru este simplu și clar. Începem cu o discuție telefonică sau un apel zoom în care clientul decide, ajutat de noi dacă e cazul, elementele de design, aspectul exterior, numărul paginilor și ce funcționalități dorește pe site. Semnăm contractul de lucru, iar în cel mai scurt timp echipa noastră de dezvoltatori construiește serviciul. La final, livrăm produsul și emitem factura."],
      ["Ce platforme folosim", "În dezvoltarea serviciilor cu marca noastră folosim platforme de ultimă generație pentru cea mai bună performanță. Cele mai populare modele, recomandate de specialiști IT din stackul nostru sunt VS Code, Supabase, Firebase, Codex, Webflow și altele din aceeași generație."],
      ["Procesul prin care trec clienții noștri", "De la momentul semnării contractului, un membru al echipei se va ocupa de client și îl va ține la curent cu stadiile proiectului . Clientul primește un formular în care poate bifa tot ce dorește pentru platforma sa și completa cu informațiile de care avem noi nevoie. Pe toată durata procesului, ne ținem clienții la curent cu evoluția construcției. După emiterea facturii, oferim garanție și mentenanță."],
      ["Ce oferim fiecărui client", "Fiecare colaborator al nostru primește întâi oferta noastră, contractul de lucru, factura și garanția pentru că vrem să fim cât se poate de transparenți cu partenerii noștri."],
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
            <h1 className="mt-5 font-editorial text-5xl font-normal leading-[.98] md:text-8xl">Un website bun este un website care <span className="text-signal">aduce clienți.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Ghiduri clare pentru cei care vor să înțeleagă mai bine ce cumpără, de ce au nevoie și cum își pot construi următorul pas online.</p>
          </motion.div>
          <div className="mt-16 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[.12em] text-muted-foreground">
            <span className="rounded-full border border-border bg-card/70 px-4 py-2">Situația actuală</span>
            <span className="rounded-full border border-border bg-card/70 px-4 py-2">Software as a Service</span>
            <span className="rounded-full border border-border bg-card/70 px-4 py-2">Despre noi</span>
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
