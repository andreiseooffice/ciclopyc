import websiteImage from "@/assets/unsplash-studio-workspace.jpg";
import storeImage from "@/assets/unsplash-commerce-checkout.jpg";
import automationImage from "@/assets/unsplash-team-automation.jpg";
import websiteDetailImage from "@/assets/unsplash-website-editorial.jpg";
import storeDetailImage from "@/assets/template-cafe.jpg";
import automationDetailImage from "@/assets/unsplash-agency-investment.jpg";

export const serviceModels = [
  {
    slug: "website",
    name: "Site de prezentare",
    type: "WEBSITE",
    category: "PREZENȚĂ DIGITALĂ",
    image: websiteImage,
    imageAlt: "Spațiu de lucru luminos pentru proiectarea unui website",
    detailImage: websiteDetailImage,
    detailImageAlt: "Interfață de lucru pentru dezvoltarea unui website",
    summary:
      "O prezență online construită să explice rapid de ce să te aleagă și să transforme interesul în cereri reale.",
    description:
      "Primești mai mult decât o pagină frumoasă: un website propriu care îți prezintă oferta cu claritate, răspunde la întrebările importante și conduce vizitatorul spre următorul pas. Structura, textele și interfața sunt gândite împreună pentru afacerea ta, astfel încât brandul să pară la fel de profesionist online precum este în realitate.",
    audience:
      "Pentru afaceri de servicii, cabinete, studiouri și branduri care depind prea mult de rețele sociale sau recomandări. Este o bază solidă atunci când vrei să fii găsit, să explici mai bine ce faci și să primești solicitări fără să răspunzi de fiecare dată la aceleași întrebări.",
    promise:
      "La final ai un punct de referință digital al brandului tău: clar, ușor de folosit pe telefon și pregătit să susțină conversații comerciale.",
    cardFeatures: [
      "Structură și design personalizate",
      "Optimizat pentru mobil",
      "Formulare și trasee de contact",
    ],
    deliverables: [
      "O structură de pagini stabilită după serviciile, publicul și obiectivul principal al afacerii.",
      "Direcție vizuală și interfață adaptate identității brandului, nu un model copiat ca atare.",
      "Textele și mesajele tale aranjate într-o ordine ușor de parcurs, cu loc pentru copywriting dacă este inclus în ofertă.",
      "Pagini responsive, navigație clară și butoane de contact vizibile pe mobil și desktop.",
      "Formulare, legături de apel sau alte funcții stabilite împreună înainte de lucru.",
      "Configurare de bază pentru titluri, descrieri, partajare socială și indexare.",
      "Verificare înainte de lansare, publicare și predarea acceselor convenite.",
    ],
    process: [
      {
        title: "Descoperim",
        detail:
          "Clarificăm clienții tăi, oferta, materialele existente și ce înseamnă o solicitare bună pentru afacere.",
      },
      {
        title: "Organizăm",
        detail:
          "Stabilim paginile, ordinea informației și mesajele care ajută vizitatorul să ia o decizie.",
      },
      {
        title: "Construim",
        detail:
          "Proiectăm și dezvoltăm website-ul, apoi integrăm conținutul și funcțiile stabilite.",
      },
      {
        title: "Lansăm",
        detail:
          "Testăm pe ecrane diferite, corectăm detaliile și publicăm site-ul după aprobarea ta.",
      },
    ],
    benefits: [
      "Clienții înțeleg mai repede ce oferi și dacă serviciul li se potrivește.",
      "Un traseu simplu de la prima vizită până la mesaj, apel sau programare.",
      "Mai puține întrebări repetitive, pentru că informațiile importante sunt deja la vedere.",
      "O impresie coerentă și credibilă pe mobil, tabletă și desktop.",
      "O pagină proprie pe care o poți trimite în oferte, reclame și conversații comerciale.",
      "O fundație pe care poți adăuga ulterior pagini, servicii sau funcții noi.",
    ],
    pricingIntro:
      "Prețul reflectă munca necesară pentru a transforma informațiile despre afacerea ta într-un website coerent, nu doar numărul de ecrane. O ofertă bună include timp pentru structură, design, dezvoltare, adaptare pe mobil și verificare, cu livrabile stabilite înainte de start. Primești costul și calendarul în scris înainte să înceapă proiectul.",
    pricingFactors: [
      "Numărul și tipul paginilor",
      "Copywriting, editarea și pregătirea imaginilor",
      "Formulare, integrări și funcții speciale",
      "Calendarul, feedbackul și suportul după lansare",
    ],
  },
  {
    slug: "magazin-online",
    name: "Magazin online",
    type: "E-COMMERCE",
    category: "VÂNZARE ONLINE",
    image: storeImage,
    imageAlt: "Plată cu cardul la un terminal pentru cumpărături online",
    detailImage: storeDetailImage,
    detailImageAlt: "Produse pregătite pentru prezentarea într-un magazin online",
    summary:
      "Un magazin ușor de administrat, în care clienții găsesc produsul potrivit și pot comanda fără pași neclari.",
    description:
      "Primești un canal de vânzare organizat în jurul produselor tale, nu un catalog generic. Construim categoriile, paginile de produs, coșul și checkout-ul astfel încât clientul să știe ce cumpără, cât costă livrarea și ce urmează după comandă. Integrările se aleg împreună, în funcție de furnizorii pe care îi folosești și de procesele pe care vrei să le simplifici.",
    audience:
      "Pentru branduri care vând produse fizice sau digitale și vor să dețină mai bine experiența de cumpărare. Este potrivit dacă preiei comenzi manual, prezinți produsele doar pe social media sau ai nevoie de un catalog cu prețuri, variante și stocuri mai ușor de urmărit.",
    promise:
      "Clientul poate descoperi produsele, înțelege opțiunile și trimite o comandă într-un flux coerent; tu primești un instrument mai clar pentru administrarea vânzărilor.",
    cardFeatures: [
      "Catalog și pagini de produs",
      "Flux de comandă adaptat",
      "Plăți și livrare integrate",
    ],
    deliverables: [
      "Categorii și navigație organizate după felul în care clienții caută produsele.",
      "Pagini de produs pentru imagini, descrieri, prețuri, variante și informații utile înainte de cumpărare.",
      "Coș și checkout cu pașii și câmpurile de care afacerea are nevoie.",
      "Configurarea procesatorului de plăți și a opțiunilor de livrare convenite, în funcție de furnizorii disponibili.",
      "Un panou de administrare pentru produse, variante și comenzi, în limitele platformei alese.",
      "Mesaje de confirmare și stări de comandă configurate pentru fluxul agreat.",
      "Testare a experienței de cumpărare pe telefon și desktop înainte de lansare.",
    ],
    process: [
      {
        title: "Înțelegem catalogul",
        detail:
          "Clarificăm gama de produse, variantele, stocurile, livrarea și modul în care preiei comenzile acum.",
      },
      {
        title: "Proiectăm cumpărarea",
        detail:
          "Organizăm categoriile și stabilim ce trebuie să afle un client înainte să adauge un produs în coș.",
      },
      {
        title: "Configurăm magazinul",
        detail:
          "Construim catalogul și conectăm plățile, livrarea și notificările incluse în oferta acceptată.",
      },
      {
        title: "Testăm și predăm",
        detail:
          "Verificăm o comandă cap-coadă, corectăm blocajele și îți prezentăm administrarea produselor și comenzilor.",
      },
    ],
    benefits: [
      "Produsele pot fi găsite după categorii și informații relevante, nu doar derulate într-o listă lungă.",
      "Prețurile, variantele și costurile de livrare sunt mai clare înainte de checkout.",
      "Comenzile ajung într-un loc organizat și sunt mai ușor de urmărit decât în mesaje disparate.",
      "Poți actualiza catalogul fără să reconstruiești paginile de fiecare dată.",
      "Clientul primește confirmare și știe ce se întâmplă după ce plasează comanda.",
      "Structura este pregătită să crească odată cu gama și operațiunile tale.",
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
    type: "AUTOMATIZARE",
    category: "FLUXURI DE LUCRU",
    image: automationImage,
    imageAlt: "Echipă care analizează împreună un proces de lucru",
    detailImage: automationDetailImage,
    detailImageAlt: "Echipă care planifică și îmbunătățește un proces digital",
    summary:
      "Automatizăm sarcini repetitive și conectăm instrumentele echipei, cu verificări și predare către o persoană când situația o cere.",
    description:
      "Nu începem cu un chatbot doar pentru că este la modă. Începem cu procesul care consumă timp: solicitări care trebuie clasificate, informații mutate între aplicații sau întrebări repetitive. Apoi alegem împreună dacă se potrivește o automatizare clasică, un asistent AI sau o combinație. Primești o soluție configurată pentru datele și regulile afacerii, cu limitele explicate și un mod clar de intervenție umană.",
    audience:
      "Pentru echipe care pierd timp cu aceiași pași administrativi, răspund la multe solicitări similare sau copiază informații între instrumente. Este util când există un proces repetabil, reguli care pot fi explicate și un responsabil care poate verifica rezultatele.",
    promise:
      "Scopul este să recuperezi timp dintr-un flux precis și să reduci munca manuală, fără să lași deciziile sensibile sau excepțiile în seama unui sistem automatizat.",
    cardFeatures: [
      "Analiză de proces înainte de integrare",
      "Asistenți și automatizări configurate",
      "Testare și limite documentate",
    ],
    deliverables: [
      "O hartă a procesului ales, cu pașii, excepțiile și punctele în care trebuie să intervină o persoană.",
      "Recomandarea unei soluții potrivite: automatizare clasică, asistent AI sau o combinație justificată de proces.",
      "Configurarea fluxului și a instrumentelor incluse în oferta acceptată, în limita API-urilor și acceselor disponibile.",
      "Instrucțiuni și surse de informație delimitate pentru asistent, dacă proiectul folosește AI.",
      "Teste cu exemple normale și cazuri-limită, împreună cu verificarea răspunsurilor și a erorilor.",
      "Reguli de escaladare către o persoană și documentarea situațiilor în care soluția nu trebuie să răspundă singură.",
      "Predare cu explicații despre acces, utilizare, costuri recurente și pașii de mentenanță conveniți.",
    ],
    process: [
      {
        title: "Alegem procesul",
        detail:
          "Identificăm o sarcină concretă, volumul ei și ce înseamnă o eroare acceptabilă sau inacceptabilă.",
      },
      {
        title: "Proiectăm limitele",
        detail:
          "Stabilim ce poate face automatizarea, ce informații folosește și când transferă cazul către echipă.",
      },
      {
        title: "Integrăm și testăm",
        detail:
          "Configurăm conexiunile permise și testăm exemple reprezentative înainte de folosirea în lucru.",
      },
      {
        title: "Predăm controlul",
        detail:
          "Primești instrucțiuni, costuri estimate ale furnizorilor și o cale de oprire sau ajustare a fluxului.",
      },
    ],
    benefits: [
      "Timpul echipei se întoarce către sarcini care cer judecată, nu copiere și triere repetitivă.",
      "Solicitările pot fi clasificate și pregătite înainte să ajungă la persoana potrivită.",
      "Conversațiile neclare sau sensibile pot fi trimise către un coleg, nu improvizate de automatizare.",
      "Instrumentele pot schimba date prin integrări documentate, dacă furnizorii oferă accesul necesar.",
      "Testezi comportamentul înainte de lansare și cunoști cazurile în care fluxul nu trebuie folosit.",
      "Echipa primește instrucțiuni despre verificare, costuri și controlul soluției după predare.",
    ],
    pricingIntro:
      "Un proiect de automatizare se estimează după proces și riscuri, nu după eticheta „AI”. Contează câte sisteme trebuie conectate, ce date pot fi folosite, cât de multe excepții există și ce nivel de verificare este necesar înainte ca un rezultat să ajungă la client. Abonamentele, creditele AI și alte costuri ale platformelor terțe se explică separat și nu se activează fără acordul tău.",
    pricingFactors: [
      "Numărul și complexitatea fluxurilor",
      "Instrumentele, API-urile și permisiunile disponibile",
      "Volumul de date și cerințele de securitate",
      "Testare, monitorizare și mentenanță ulterioară",
    ],
  },
] as const;

export type ServiceModel = (typeof serviceModels)[number];
