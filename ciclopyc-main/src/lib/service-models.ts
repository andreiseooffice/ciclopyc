import websiteImage from "@/assets/unsplash-studio-workspace.jpg";
import storeImage from "@/assets/unsplash-commerce-checkout.jpg";
import automationImage from "@/assets/unsplash-team-automation.jpg";
import websiteDetailImage from "@/assets/unsplash-website-editorial.jpg";
import automationDetailImage from "@/assets/unsplash-agency-investment.jpg";

export const serviceModels = [
  {
    slug: "website",
    name: "Site Web",
    
    category: "PREZENȚĂ DIGITALĂ",
    image: websiteImage,
    imageAlt: "Spațiu de lucru luminos pentru proiectarea unui website",
    detailImage: websiteDetailImage,
    detailImageAlt: "Interfață de lucru pentru dezvoltarea unui website",
    summary:
      "Un website construit în jurul deciziei pe care vrei s-o ia clientul: să ceară o ofertă, să facă o programare sau să te contacteze.",
    description:
      "Când cineva caută serviciul tău, are nevoie să înțeleagă rapid dacă ești alegerea potrivită și ce are de făcut mai departe. Construim un website care pune oferta în prim-plan, răspunde întrebărilor importante și transformă interesul într-un pas concret. Primești o prezență digitală proprie, cu structură, design și funcții alese după felul în care lucrează afacerea ta.",
    audience:
      "Pentru afaceri care au crescut din recomandări și sunt gata să fie găsite și de clienți noi. Pentru specialiști, clinici, studiouri și companii care vor să explice mai bine ce oferă, să-și prezinte serviciile profesionist și să nu depindă de o singură platformă socială.",
    promise:
      "Un punct de plecare clar pentru fiecare client: ce oferi, de ce să te aleagă și cum poate începe. Fără să-l pui să caute răspunsurile prin postări, mesaje și pagini disparate.",
    cardFeatures: [
      "Mesaj și structură orientate spre acțiune",
      "Design personalizat, pregătit pentru mobil",
      "Contact simplu, măsurabil și funcțional",
    ],
    deliverables: [
      "Arhitectura paginilor pornită de la serviciile profitabile, întrebările clienților și acțiunea principală pe care vrei s-o obții.",
      "O direcție vizuală distinctă, aliniată brandului tău și construită să păstreze atenția pe ofertă.",
      "Ierarhie de conținut care conduce vizitatorul de la problemă la soluție, diferențiatori și următorul pas.",
      "Pagini rapide și responsive, cu navigare și butoane de contact ușor de folosit pe telefon.",
      "Formulare, apelare directă, programări sau integrările agreate în ofertă, testate înainte de lansare.",
      "Configurare tehnică de bază pentru titluri, descrieri, partajare și indexarea paginilor publice.",
      "Verificări pe ecrane și browsere uzuale, publicare și predarea acceselor convenite.",
      "O sesiune de predare ca să știi unde actualizezi conținutul și cum gestionezi solicitările primite.",
    ],
    process: [
      {
        title: "Descoperim oportunitatea",
        detail:
          "Analizăm oferta, clienții pe care vrei să-i atragi și ce îi oprește astăzi să te contacteze.",
      },
      {
        title: "Punem oferta în ordine",
        detail:
          "Definim paginile, mesajele, dovezile și traseul scurt de la prima vizită la solicitare.",
      },
      {
        title: "Proiectăm și dezvoltăm",
        detail:
          "Construim interfața și funcțiile stabilite, apoi integrăm conținutul și verificăm experiența cap-coadă.",
      },
      {
        title: "Lansăm cu încredere",
        detail:
          "Facem ultimele verificări împreună, publicăm website-ul și îți predăm accesul și pașii de administrare.",
      },
    ],
    benefits: [
      "Prezinți valoarea serviciilor înainte ca un client să fie nevoit să ceară explicații în privat.",
      "Înlocuiești traseul fragmentat dintre social media, mesaje și documente cu o destinație clară pentru interesul clientului.",
      "Îți prezinți experiența, procesul și diferențiatorii într-un mod coerent, la orice oră.",
      "Faci contactul mai simplu prin apel, formular sau programare, în funcție de cum vinzi.",
      "Ai o bază proprie pentru campanii, recomandări și căutări organice, fără să depinzi exclusiv de algoritmul unei platforme.",
      "Poți extinde structura cu servicii, pagini de destinație și funcții noi pe măsură ce afacerea evoluează.",
    ],
    pricingIntro:
      "Investiția se stabilește după ce știm ce trebuie să facă website-ul pentru afacerea ta. O prezentare compactă are alte cerințe decât un site cu mai multe servicii, programări și integrări. Primești o ofertă structurată pe livrabile și etape, astfel încât să poți vedea ce este esențial acum și ce poate fi adăugat ulterior.",
    pricingFactors: [
      "Numărul de pagini și complexitatea traseelor de conversie",
      "Pregătirea conținutului, imaginilor și materialelor de brand",
      "Formulare, programări, CRM și integrările solicitate",
      "Calendarul, rundele de feedback și nivelul de suport după lansare",
    ],
  },
  {
    slug: "magazin-online",
    name: "Magazin online",
    category: "VÂNZARE ONLINE",
    image: storeImage,
    imageAlt: "Căști audio fotografiate ca produs pentru un magazin online",
    detailImage: storeImage,
    detailImageAlt: "Fotografie de produs cu căști audio pe fundal galben",
    summary:
      "Un magazin online care face produsele ușor de ales, comenzile ușor de plasat și administrarea mai puțin dependentă de mesaje manuale.",
    description:
      "Un produs bun merită un proces de cumpărare la fel de bun. Construim magazinul în jurul modului în care clienții compară și aleg: catalog ușor de explorat, pagini de produs care răspund obiecțiilor și un checkout fără surprize despre preț, plată sau livrare. Conectăm furnizorii pe care îi folosești deja, acolo unde platformele și accesul tehnic permit, apoi testăm o comandă completă înainte de lansare.",
    audience:
      "Pentru branduri care vor să transforme un catalog, comenzile din mesaje sau vânzările din social media într-un canal de comerț online pe care îl pot administra. Este potrivit când ai produse și cerere, dar clienții întâmpină dificultăți la alegere, iar echipa pierde timp confirmând manual detalii repetitive.",
    promise:
      "De la prima vizită la confirmarea comenzii, fiecare pas explică ce cumpără clientul și ce urmează. Tu păstrezi controlul asupra produselor, comenzilor și regulilor comerciale.",
    cardFeatures: [
      "Catalog care ajută clientul să aleagă",
      "Checkout clar, optimizat pentru mobil",
      "Plăți, livrare și notificări conectate",
    ],
    deliverables: [
      "Categorii și navigație construite după felul în care clienții compară și caută produsele.",
      "Pagini de produs cu imagini, beneficii, specificații, variante și răspunsuri la întrebările care pot bloca achiziția.",
      "Coș și checkout simplificate, cu costuri și pași vizibili înainte de confirmarea comenzii.",
      "Configurarea metodelor de plată și livrare agreate, în funcție de eligibilitatea și accesul furnizorilor.",
      "Panou de administrare pentru catalog, stocuri și comenzi, în limitele platformei alese.",
      "Emailuri sau notificări de comandă și stări configurate pentru fluxul stabilit.",
      "Conectarea instrumentelor externe incluse în ofertă, dacă API-urile și planurile lor permit integrarea.",
      "Testarea unei comenzi cap-coadă pe telefon și desktop, cu verificarea punctelor de abandon evidente.",
    ],
    process: [
      {
        title: "Cartografiem vânzarea",
        detail:
          "Inventariem produsele, variantele, stocurile și felul în care o comandă ajunge astăzi de la client la echipa ta.",
      },
      {
        title: "Proiectăm experiența",
        detail:
          "Stabilim ce informații ajută clientul să aleagă și eliminăm ambiguitățile din coș și checkout.",
      },
      {
        title: "Construim și conectăm",
        detail:
          "Configurăm catalogul, plățile, livrarea și notificările agreate, cu atenție la limitele furnizorilor.",
      },
      {
        title: "Testăm și predăm controlul",
        detail:
          "Simulăm cumpărarea, corectăm problemele găsite și îți arătăm cum gestionezi produse și comenzi.",
      },
    ],
    benefits: [
      "Clienții pot compara produsele după categorii și detalii relevante, nu printr-un șir nesfârșit de mesaje.",
      "Prețul, opțiunile și costul livrării sunt prezentate înainte de ultimul pas, reducând surprizele la checkout.",
      "Comenzile și datele clientului ajung într-un flux organizat, în loc să rămână împrăștiate în conversații.",
      "Actualizezi produse și variante din panoul magazinului, fără să refaci manual fiecare pagină.",
      "Confirmările clarifică faptul că o comandă a fost înregistrată și ce urmează după cumpărare.",
      "Poți extinde catalogul și integrările pe măsură ce cresc gama și operațiunile, în limitele platformei.",
    ],
    pricingIntro:
      "Investiția este determinată de cât de complex este catalogul și de ce trebuie să se întâmple după ce clientul apasă „Comandă”. Un magazin cu produse simple și livrare standard are un flux diferit de unul cu multe variante, importuri de stoc sau reguli speciale. Oferta separă costul construirii de abonamentele și comisioanele furnizorilor terți, ca să știi ce plătești o singură dată și ce poate deveni recurent.",
    pricingFactors: [
      "Numărul produselor și al variantelor",
      "Procesatorul de plăți și regulile de livrare",
      "Importuri, stocuri sau sisteme externe",
      "Automatizări, notificări și particularități de checkout",
    ],
  },
  {
    slug: "implementare-ai",
    name: "Implementare AI",
    
    category: "FLUXURI DE LUCRU",
    image: automationImage,
    imageAlt: "Echipă care analizează împreună un proces de lucru",
    detailImage: automationDetailImage,
    detailImageAlt: "Echipă care planifică și îmbunătățește un proces digital",
    summary:
      "Transformăm pașii repetitivi într-un flux automatizat, cu instrumentele potrivite și control uman acolo unde decizia contează.",
    description:
      "Ai cereri care trebuie triere, date copiate între aplicații sau întrebări la care echipa răspunde zilnic? Proiectăm o automatizare în jurul unui proces real, nu adăugăm AI de dragul etichetei. Alegem între automatizare clasică, asistent AI sau o combinație, apoi conectăm sursele și instrumentele agreate. Știi ce poate face sistemul, ce nu poate face și când pasează cazul unei persoane.",
    audience:
      "Pentru echipe care au procese recurente, reguli suficient de clare și volum care justifică reducerea pașilor manuali. Potrivit dacă solicitările se pierd între canale, informațiile sunt recopiate sau timpul specialiștilor este consumat de sarcini care pot fi pregătite automat.",
    promise:
      "Un flux concret, documentat și testat înainte să intre în lucru, cu permisiuni limitate, rezultate verificabile și o cale simplă de intervenție sau oprire.",
    cardFeatures: [
      "Proces mapat înainte de alegerea tehnologiei",
      "Conectări și automatizări potrivite fluxului",
      "Teste, limite și predare către echipă",
    ],
    deliverables: [
      "O analiză a procesului actual, a volumului, a blocajelor și a rezultatului pe care vrei să-l obții.",
      "O hartă a fluxului propus, cu intrări, pași, excepții, responsabilități și puncte de control.",
      "Recomandarea motivată între reguli automate, AI sau combinația minimă care rezolvă problema.",
      "Configurarea conectărilor și a permisiunilor necesare, în limita API-urilor și acceselor furnizorilor.",
      "Pentru funcțiile AI: surse delimitate, instrucțiuni, tipuri de răspuns și cazuri în care sistemul refuză să improvizeze.",
      "Teste cu exemple reale anonimizate, cazuri-limită și verificarea traseului de eroare.",
      "Escaladare către o persoană, jurnalizare sau aprobare manuală acolo unde procesul o cere.",
      "Documentație de utilizare și predare privind accesul, monitorizarea, costurile recurente și oprirea fluxului.",
    ],
    process: [
      {
        title: "Măsurăm munca repetitivă",
        detail:
          "Selectăm un singur flux, estimăm frecvența și clarificăm ce rezultat ar face automatizarea utilă.",
      },
      {
        title: "Proiectăm controlul",
        detail:
          "Definim datele accesibile, regulile, excepțiile și momentele când o persoană aprobă sau preia cazul.",
      },
      {
        title: "Integrăm și validăm",
        detail:
          "Conectăm instrumentele incluse și testăm scenarii normale și de eroare înainte de utilizarea operațională.",
      },
      {
        title: "Lansăm cu echipa ta",
        detail:
          "Primești instruire, costurile furnizorilor la vedere și pașii pentru verificare, oprire sau ajustare.",
      },
    ],
    benefits: [
      "Reduci pașii de copiere, căutare și triere care întrerup munca echipei în fiecare zi.",
      "Solicitările ajung deja clasificate sau completate la colegul care le poate rezolva.",
      "Cazurile neclare, sensibile sau în afara regulilor sunt trimise unei persoane, nu tratate automat.",
      "Datele circulă între instrumentele agreate fără introducere repetată, dacă integrarea este disponibilă.",
      "Înainte de lansare vezi cum se comportă fluxul pe exemple normale, excepții și erori.",
      "Echipa știe ce verifică, cine răspunde de sistem și cum îl poate opri sau modifica.",
    ],
    pricingIntro:
      "Investiția depinde de ce vrei să elimini din munca manuală și de cât de sigur trebuie să funcționeze fluxul. Estimăm separat analiza, integrarea, testele și predarea, iar abonamentele, creditele AI și costurile furnizorilor rămân vizibile înainte de acord. Începem cu o automatizare restrânsă și verificabilă; extinderea are sens numai după ce soluția se potrivește procesului real.",
    pricingFactors: [
      "Numărul pașilor, ramificațiilor și excepțiilor din proces",
      "Aplicațiile conectate, API-urile și nivelul de acces disponibil",
      "Sensibilitatea datelor și verificările sau aprobările necesare",
      "Testare, documentare, monitorizare și suport după lansare",
    ],
  },
] as const;

export type ServiceModel = (typeof serviceModels)[number];
