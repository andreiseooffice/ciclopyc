import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";

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
        <p className="eyebrow">INFORMAȚII LEGALE</p>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">Termeni și condiții</h1>
        <p className="mt-5 text-sm text-muted-foreground">Ultima actualizare: 1 octombrie 2026</p>
        <div role="note" className="mt-8 rounded-xl border border-primary/40 bg-card p-5 text-sm leading-6">
          <strong>Informare incompletă.</strong> Datele de identificare și contact ale furnizorului au fost omise. Acești termeni nu sunt compleți pentru publicare și trebuie verificați juridic înainte de a fi folosiți pentru contractarea cu consumatori.
        </div>

        <div className="mt-10 space-y-10 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">1. Domeniu</h2>
            <p className="mt-3">Acești termeni se aplică navigării site-ului și solicitărilor de ofertă. Prestarea efectivă a serviciilor este guvernată de oferta și contractul acceptate de părți. Dacă o clauză de aici intră în conflict cu o ofertă semnată, documentul contractual specific prevalează în măsura permisă de lege.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">2. Servicii, ofertă și preț</h2>
            <p className="mt-3">Serviciile pot include design și dezvoltare web, configurare, integrare, mentenanță sau produse digitale. Conținutul livrabilelor, prețul, moneda, taxele aplicabile, calendarul, numărul de revizii, responsabilitatea pentru conținut și cerințele tehnice se stabilesc în scris pentru fiecare proiect. Prețurile afișate ca exemple sau în portofoliu nu constituie o ofertă contractuală decât dacă sunt confirmate în oferta individuală.</p>
            <p className="mt-3">Condiții de plată: <strong className="text-foreground">[avans, tranșe, scadențe, metode de plată și regimul TVA]</strong>. Termenul de livrare începe după îndeplinirea condițiilor definite în ofertă, inclusiv primirea materialelor și aprobărilor necesare.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">3. Comenzi, cooperare și acceptanță</h2>
            <p className="mt-3">O solicitare trimisă prin e-mail nu încheie singură un contract. Începerea proiectului, etapele de feedback, acceptarea livrabilelor și gestionarea întârzierilor se stabilesc în oferta sau contractul acceptat. Clientul răspunde pentru drepturile și legalitatea materialelor furnizate și pentru transmiterea la timp a informațiilor necesare.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">4. Drepturi de autor și licențe</h2>
            <p className="mt-3">Drepturile asupra livrabilelor, momentul transferului sau acordării licenței, utilizarea lucrărilor în portofoliu și drepturile asupra instrumentelor, fonturilor ori componentelor terțe trebuie precizate în oferta sau contractul individual: <strong className="text-foreground">[completează regimul drepturilor și momentul transferului]</strong>. Niciun termen de aici nu transferă drepturi asupra materialelor terților pe care Furnizorul nu le deține.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">5. Consumatori, retragere și anulare</h2>
            <p className="mt-3">Dacă un client este consumator, i se aplică drepturile imperative prevăzute de legislația privind protecția consumatorilor și contractele la distanță. Orice perioadă de retragere, excepție pentru conținut digital sau începerea prestării în perioada de retragere trebuie comunicată înainte de încheierea contractului și acceptată în forma cerută de lege. Nu se limitează prin acești termeni drepturile legale ale consumatorului.</p>
            <p className="mt-3">Procedura concretă de retragere/anulare, adresa de notificare și formularul-model aplicabil: <strong className="text-foreground">[completează după stabilirea fluxului de vânzare și a tipului de client]</strong>. Pentru contractele dintre profesioniști, regulile de anulare se stabilesc în contractul individual.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">6. Reclamații și soluționarea litigiilor</h2>
            <p className="mt-3">Pentru o problemă legată de serviciu, folosește canalul de contact publicat pe site. Consumatorii pot consulta informațiile oficiale ANPC despre <a href="https://www.anpc.ro/sal/" target="_blank" rel="noopener noreferrer" className="text-foreground underline">soluționarea alternativă a litigiilor (S.A.L.)</a> și portalul oficial al Comisiei Europene pentru soluționarea litigiilor. Disponibilitatea unui organism ADR pentru un anumit litigiu depinde de competența și regulile acelui organism.</p>
            <p className="mt-3">Legea aplicabilă: România, fără a aduce atingere normelor imperative de protecție a consumatorilor. Instanța competentă se stabilește potrivit normelor legale aplicabile.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">7. Limitări și actualizări</h2>
            <p className="mt-3">Nicio informație de pe site nu garantează un anumit nivel de vânzări, trafic sau poziționare în motoarele de căutare. Angajamentele concrete sunt numai cele incluse în oferta sau contractul acceptat. Termenii pot fi actualizați pentru viitor; versiunea aplicabilă unei comenzi este cea comunicată și acceptată la data încheierii contractului.</p>
          </section>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}