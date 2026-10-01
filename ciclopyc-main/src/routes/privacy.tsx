import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Politica de confidențialitate — CICLOPYC" },
      { name: "description", content: "Informații despre datele personale, stocarea locală și serviciile terțe folosite de CICLOPYC." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return <>
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell max-w-5xl pt-28">
        <p className="eyebrow">INFORMAȚII LEGALE</p>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">Politica de confidențialitate</h1>
        <p className="mt-5 text-sm text-muted-foreground">Ultima actualizare: 1 octombrie 2026</p>
        <div role="note" className="mt-8 rounded-xl border border-primary/40 bg-card p-5 text-sm leading-6">
          <strong>Informare incompletă.</strong> Datele de identificare și contact ale operatorului au fost omise. Această pagină nu este o informare GDPR completă pentru publicare și necesită verificare juridică.
        </div>

        <div className="mt-10 space-y-10 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">1. Ce date prelucrăm și de ce</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Mesaje și solicitări:</strong> dacă alegi să ne contactezi prin e-mail, datele pe care le incluzi sunt trimise din aplicația ta de e-mail către noi. Formularele acestui site deschid aplicația de e-mail și nu transmit mesajul către un server al site-ului.</li>
              <li><strong className="text-foreground">Preferința de consimțământ:</strong> opțiunile cookie sunt salvate în stocarea locală a browserului, pentru a reține alegerea ta. Poți șterge această stocare din setările browserului sau poți schimba alegerea din „Setări cookie-uri”.</li>
              <li><strong className="text-foreground">Date tehnice:</strong> furnizorul de găzduire poate înregistra date tehnice precum adresa IP, data solicitării și informații despre browser, pentru livrarea și securizarea site-ului. Furnizor: <strong className="text-foreground">[numele și politica furnizorului de găzduire]</strong>; perioadă de păstrare: <strong className="text-foreground">[perioada confirmată de furnizor]</strong>.</li>
              <li><strong className="text-foreground">Fonturi web:</strong> fonturile sunt găzduite pe același domeniu cu site-ul, astfel încât pagina nu solicită fonturi de la un furnizor extern.</li>
              <li><strong className="text-foreground">Legături externe:</strong> dacă deschizi WhatsApp, Instagram, TikTok sau alte site-uri externe, furnizorul respectiv prelucrează date conform propriei politici. Legăturile nu transmit date către acești furnizori până când nu le accesezi.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">2. Temeiuri și destinatari</h2>
            <p className="mt-3">Solicitările sunt folosite pentru a răspunde cererii tale și, când este cazul, pentru măsuri precontractuale sau executarea contractului. Securitatea și funcționarea serviciului pot avea la bază interesul legitim al operatorului. Orice analiză sau publicitate opțională trebuie să rămână dezactivată până la acordul tău prealabil; în versiunea actuală nu sunt instalate servicii de analiză sau publicitate. Destinatari: furnizorul de găzduire <strong className="text-foreground">[de completat]</strong> și furnizorii pe care alegi să îi contactezi prin linkurile externe, după caz.</p>
            <p className="mt-3">Transferurile în afara Spațiului Economic European pot apărea prin serviciile terțe menționate. Pentru fiecare transfer, operatorul trebuie să confirme mecanismul și garanțiile aplicabile înainte de publicare.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">3. Păstrarea datelor</h2>
            <p className="mt-3">Preferința de consimțământ rămâne în browser cel mult 6 luni, cu excepția cazului în care o modifici sau ștergi mai devreme datele locale. Mesajele primite prin e-mail sunt păstrate atât cât este necesar pentru gestionarea solicitării și, dacă se încheie un contract, potrivit obligațiilor legale aplicabile. Completează perioada concretă pentru solicitările fără contract: <strong className="text-foreground">[perioada și criteriul de ștergere]</strong>.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">4. Drepturile tale</h2>
            <p className="mt-3">În condițiile GDPR, poți solicita accesul la date, rectificarea, ștergerea, restricționarea prelucrării, portabilitatea, te poți opune prelucrării sau îți poți retrage consimțământul. Poți depune o plângere la <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer" className="text-foreground underline">ANSPDCP</a>. Pentru exercitarea drepturilor, folosește canalul de contact publicat pe site. Operatorul trebuie să verifice identitatea solicitantului și să răspundă în termenul prevăzut de lege.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">5. Cookie-uri și tehnologii similare</h2>
            <p className="mt-3">În prezent, site-ul nu utilizează cookie-uri de analiză sau publicitate. Panoul de consimțământ salvează preferințele în stocarea locală a browserului, iar serviciile opționale nu se activează automat. Unele funcții tehnice pot utiliza stocare strict necesară. Orice instrument nou de analiză sau publicitate trebuie adăugat numai după actualizarea acestei politici și obținerea consimțământului prealabil, acolo unde este cerut.</p>
          </section>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}