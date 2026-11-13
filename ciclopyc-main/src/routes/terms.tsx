import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { ArrowUpRight, Check, Clock3, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Termeni și condiții — CICLOPYC" },
      { name: "description", content: "Termeni pentru solicitarea și contractarea serviciilor CICLOPYC." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return <>
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell max-w-5xl pt-28">
        <Link to="/">
                    <Button variant="outline" className="-ml-3 mb-16 rounded-xl text-xs"><Home /> Acasă</Button>
                  </Link>
        <p className="eyebrow">INFORMAȚII LEGALE</p>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">Termeni și condiții</h1>
        <p className="mt-5 text-sm text-muted-foreground">Ultima actualizare: 11 octombrie 2026</p>
        

        <div className="mt-10 space-y-10 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">1. Dispoziții generale</h2>
            <p className="mt-3">CICLOPYC este un brand sub care sunt prezentate servicii de web design, dezvoltare web, magazine online, SEO, implementări AI, automatizări, integrări API, mentenanță și consultanță digitală.

Site-ul este destinat exclusiv firmelor și persoanelor care solicită servicii în scop profesional. Operatorul site-ului poate fi contactat la office.andrei.seo@gmail.com. </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">2. Solicitări și contracte</h2>
            <p className="mt-3">Formularul de pe site permite transmiterea unei solicitări de informații sau ofertă. Trimiterea formularului nu reprezintă o comandă și nu creează automat un contract.

Serviciile, livrabilele, termenele, prețurile și condițiile de plată se stabilesc individual, prin oferta acceptată și/sau contractul aplicabil.</p>
            
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">3. Prețuri și plăți</h2>
            <p className="mt-3">Prețurile comunicate sunt exprimate fără TVA, dacă nu se precizează altfel. Tratamentul fiscal și facturarea se realizează conform structurii contractuale și legislației aplicabile.

Condițiile de plată, inclusiv eventualele avansuri, sunt stabilite pentru fiecare proiect. Predarea finală a livrabilelor se face după plata integrală, în condițiile convenite.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">4. Obligațiile clientului</h2>
            <p className="mt-3">Clientul trebuie să furnizeze informații, materiale și accesuri corecte și să dețină drepturile necesare asupra materialelor transmise.

Solicitările suplimentare sau modificările care depășesc scopul convenit pot implica termene și costuri suplimentare, stabilite de comun acord.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">5. Livrare și garanție</h2>
            <p className="mt-3">Pentru erorile tehnice reproductibile cauzate direct de implementare se oferă o perioadă de remediere de 30 de zile de la livrare.

Aceasta nu acoperă problemele cauzate de modificări efectuate de terți, utilizare necorespunzătoare, servicii externe sau modificări ale platformelor și API-urilor.</p>
            
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">6. Proprietate intelectuală</h2>
            <p className="mt-3">După plata integrală, clientul dobândește drepturile convenite asupra livrabilelor personalizate, în limitele legii și ale licențelor aplicabile.

Instrumentele proprii, componentele reutilizabile, metodele de lucru și know-how-ul preexistent rămân ale titularilor lor. Materialele și serviciile terților sunt supuse licențelor și condițiilor acestora.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">7. SEO, AI și servicii externe</h2>
            <p className="mt-3">Nu se garantează poziții specifice în motoarele de căutare, un anumit nivel de trafic, vânzări, venituri sau rezultate exacte ale instrumentelor AI.

Disponibilitatea și funcționarea platformelor, API-urilor și serviciilor externe pot depinde de factori care nu se află sub controlul CICLOPYC.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">8. Utilizarea site-ului și răspunderea</h2>
            <p className="mt-3">Utilizatorii nu pot folosi site-ul în scopuri ilegale sau pentru a afecta funcționarea acestuia ori drepturile altor persoane.

În limitele permise de lege, nu se asumă răspunderea pentru pierderi cauzate exclusiv de factori externi și necontrolabili. Nicio prevedere nu exclude răspunderea care nu poate fi limitată legal.</p>
          </section>

<section>
            <h2 className="font-display text-2xl font-semibold text-foreground">9. Legea aplicabilă și contact</h2>
            <p className="mt-3">Termenii sunt interpretați în conformitate cu legislația română. Pentru întrebări privind site-ul și serviciile prezentate, ne poți contacta la office.andrei.seo@gmail.com.

Acești termeni pot fi actualizați, iar versiunea curentă va fi publicată pe site.</p>
          </section>

        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}