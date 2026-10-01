import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import edenImage from "@/assets/eden-restaurant.jpg";
import noirImage from "@/assets/noir-salon.jpg";
import commerceImage from "@/assets/portfolio-commerce.jpg";
import hotelAlveraImage from "@/assets/hotel-alvera.jpg";

export const Route = createFileRoute("/portofoliu")({
  head: () => ({
    meta: [
      { title: "Portofoliu — CICLOPYC" },
      { name: "description", content: "Proiecte web livrate de CICLOPYC: restaurante, saloane de beauty și magazine online — cu linkuri către site-urile live." },
      { property: "og:title", content: "Portofoliu — CICLOPYC" },
      { property: "og:description", content: "Proiecte web reale, livrate de CICLOPYC. Vezi site-urile live." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portofoliu" }],
  }),
  component: Portofoliu,
});

const liveProjects = [
  {
    name: "Eden Garden",
    category: "RESTAURANT",
    url: "https://suceava-charm.vercel.app/",
    copy: "Un site de restaurant construit ca o invitație la masă — atmosferă caldă, meniu imersiv și rezervări fără fricțiune.",
    image: edenImage,
    number: "01",
    stats: [["+38%", "Rezervări"], ["0.9s", "Încărcare"], ["100", "Scor Lighthouse"]],
  },
  {
    name: "Noir Nail Salon",
    category: "SALON & BEAUTY",
    url: "https://noirenail.vercel.app/",
    copy: "O prezență digitală elegantă, cu programări online fluide și o galerie care vinde înainte ca clientul să intre pe ușă.",
    image: noirImage,
    number: "02",
    stats: [["+52%", "Programări"], ["0.8s", "Încărcare"], ["3×", "Engagement"]],
  },
  {
    name: "Hotel Alvera",
    category: "HOTEL & HOSPITALITY",
    url: "https://alvera-hotel.vercel.app/",
    copy: "O experiență digitală premium pentru un hotel contemporan, cu prezentare clară, atmosferă elegantă și acces rapid către informațiile esențiale.",
    image: hotelAlveraImage,
    number: "03",
    stats: [["Hotel", "Website"], ["Mobil", "Responsive"], ["Live", "Online"]],
  },
];

function Portofoliu() {
  return (
    <>
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <section className="section-shell pt-32">
        <Link to="/">
          <Button variant="ghost" className="mb-8 -ml-3 rounded-xl text-xs text-muted-foreground"><ArrowLeft /> Înapoi acasă</Button>
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="eyebrow">PORTOFOLIU / LIVE</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-7xl">Proiecte <span className="text-primary">CICLOPYC.</span></h1>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground">Site-uri reale, live chiar acum. Fiecare proiect a fost construit pentru viteză, claritate și conversii — apasă și explorează-le direct.</p>
        </motion.div>

        <div className="mt-14 grid gap-8">
          {liveProjects.map((project, index) => (
            <motion.article key={project.name} initial={{ opacity: 0, y: 64, scale: .92, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} whileHover={{ y: -12, scale: 1.015, rotateZ: index % 2 ? .35 : -.35 }} whileTap={{ y: 2, scale: .99 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: index * 0.16, duration: .95, ease: "easeOut" }} style={{ transformPerspective: 1100 }} className="group tactile-card overflow-hidden rounded-3xl border border-border bg-card">
              <div className="grid lg:grid-cols-[1.1fr_.9fr]">
                <div className="project-art min-h-[280px] lg:min-h-[420px]">
                  <img src={project.image} alt={`Site-ul ${project.name}`} loading="lazy" width={1536} height={1024} />
                  <span className="project-number">{project.number}</span>
                  <div className="mock-window"><div className="mock-top"><i /><i /><i /></div><div className="mock-photo"><img src={project.image} alt="" /></div></div>
                </div>
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <p className="text-[10px] font-bold text-primary">{project.category}</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{project.name}</h2>
                    <p className="mt-4 leading-7 text-muted-foreground">{project.copy}</p>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {project.stats.map(([value, label]) => (
                        <div key={label} className="rounded-xl border border-border bg-background/60 p-3 text-center">
                          <b className="font-display text-lg">{value}</b>
                          <p className="mt-1 text-[10px] uppercase text-muted-foreground">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-8">
                    <Button className="h-12 w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-sm hover:bg-primary/90 sm:w-auto">
                      <Globe /> Vizitează site-ul live <ArrowUpRight />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/50 bg-card p-8 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-5">
            <img src={commerceImage} alt="" className="hidden size-16 rounded-2xl border border-border object-cover sm:block" />
            <div>
              <p className="text-[10px] font-bold text-primary">URMĂTORUL PROIECT</p>
              <h3 className="mt-1 font-display text-2xl font-semibold">Al tău poate fi aici.</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">Cere un audit gratuit și îți arătăm exact ce poate deveni prezența ta online.</p>
            </div>
          </div>
          <Link to="/" hash="contact">
            <Button className="h-12 rounded-xl bg-primary px-6 font-bold text-primary-foreground shadow-sm hover:bg-primary/90">Cere audit gratuit <ArrowUpRight /></Button>
          </Link>
        </motion.div>
      </section>
    </main>
    <SiteFooter />
    </>
  );
}
