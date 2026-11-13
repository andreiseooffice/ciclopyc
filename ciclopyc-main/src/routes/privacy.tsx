
import { SiteFooter } from "@/components/site-footer";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Politica de confidențialitate — CICLOPYC" },
      { name: "description", content: "Datele colectate prin formular, serviciile care le procesează și opțiunile de confidențialitate CICLOPYC." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return <>
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell max-w-5xl pt-28">
        <Link to="/">
          <Button variant="outline" className="mb-8 -ml-3 rounded-xl text-xs"><Home /> Acasă</Button>
        </Link>
        <p className="eyebrow">INFORMAȚII LEGALE</p>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">Politica de confidențialitate</h1>
        <p className="mt-5 text-sm text-muted-foreground">Ultima actualizare: 12 noiembrie 2026</p>
       

        <div className="mt-10 space-y-10 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">1. Ce date prelucrăm și de ce</h2>
            <p className="mt-3">CICLOPYC este brandul sub care sunt prezentate servicii digitale. Operatorul datelor personale este Grigoraș Andrei, care poate fi contactat la office.andrei.seo@gmail.com.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">2. Ce date colectăm</h2>
            <p className="mt-3">Formularul colectează obligatoriu numele (maximum 100 de caractere), numărul de telefon (maximum 30 de caractere) și un interval de buget: 300€ — 500€, 500€ — 700€, 700€ — 1.000€ sau peste 1.000€. Adresa website-ului actual este opțională și are o limită de 255 de caractere. Formularul nu cere o adresă de e-mail și nu include un câmp pentru mesaj liber. Un câmp tehnic ascuns este folosit doar ca măsură anti-spam; dacă este completat, solicitarea este respinsă și nu este trimisă.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">3. Scopul prelucrării</h2>
            <p className="mt-3">Datele din formular sunt folosite pentru a evalua solicitarea, a analiza website-ul indicat și a contacta persoana la numărul furnizat în legătură cu serviciile cerute. Nu folosim aceste date pentru profilare sau publicitate.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">4. Temeiul prelucrării</h2>
            <p className="mt-3">Datele sunt prelucrate pentru a răspunde solicitării și, după caz, pentru demersuri precontractuale la cererea persoanei vizate. Datele a căror păstrare este impusă de lege pot fi păstrate pe durata obligatorie.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">5. Stocarea și destinatarii datelor</h2>
            <p className="mt-3">La trimitere, numele, telefonul, URL-ul completat și bugetul sunt transmise prin conexiune securizată către Web3Forms, serviciul folosit pentru livrarea formularelor, apoi sunt trimise la adresa de e-mail a operatorului, găzduită de Gmail. Web3Forms și Google pot prelucra aceste date și metadate tehnice necesare transmiterii și prevenirii abuzurilor, conform propriilor politici.

Site-ul este găzduit momentan pe Render, iar infrastructura se poate modifica ulterior. Furnizorul de găzduire procesează date tehnice obișnuite ale conexiunii, precum adresa IP, data și ora solicitării și informații despre browser, în jurnalele operaționale și de securitate. În previzualizarea Lovable, când mecanismul de raportare este disponibil, erorile runtime pot transmite către Lovable mesajul erorii, calea paginii și stack-ul, pentru diagnostic; acestea nu sunt colectate prin formular și nu sunt trimise la fiecare vizită. Datele personale nu sunt vândute. Linkurile către telefon, e-mail, WhatsApp și rețele sociale deschid servicii externe; datele comunicate prin acestea sunt prelucrate de furnizorii respectivi, nu prin formularul site-ului.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">6. Perioada de păstrare</h2>
            <p className="mt-3">Solicitările care nu duc la o colaborare sunt păstrate, în mod obișnuit, cel mult 3 luni, după care sunt șterse, cu excepția cazurilor în care păstrarea este necesară pentru respectarea obligațiilor legale sau soluționarea unor pretenții.

Dacă se încheie o colaborare, anumite date pot fi păstrate pentru perioada impusă de lege.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">7. Drepturile persoanelor vizate</h2>
            <p className="mt-3">În condițiile legislației aplicabile, persoanele vizate pot solicita accesul la date, rectificarea, ștergerea sau restricționarea prelucrării și pot exercita dreptul de opoziție, atunci când este aplicabil.

Solicitările pot fi transmise la office.andrei.seo@gmail.com. Există, de asemenea, dreptul de a depune o plângere la autoritatea competentă pentru protecția datelor.

</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">8. Cookie-uri și stocare locală</h2>
            <p className="mt-3">Bannerul de confidențialitate salvează în memoria locală a browserului (localStorage) opțiunile pentru categorii strict necesare, preferințe, analiză și marketing, împreună cu data salvării. Alegerea expiră după 180 de zile. Componenta bannerului nu creează cookie-uri. În prezent site-ul nu încarcă servicii de analiză a traficului sau de publicitate, chiar dacă o categorie opțională este selectată.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">9. Actualizări</h2>
            <p className="mt-3">Politica poate fi actualizată atunci când se modifică site-ul, serviciile sau modul de prelucrare a datelor. Versiunea actuală va fi publicată pe această pagină.</p>
          </section>

        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}