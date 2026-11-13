import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SiteFooter } from "@/components/site-footer";
import { ServiceScene } from "@/components/service-scene";
import { Button } from "@/components/ui/button";
import { serviceModels } from "@/lib/service-models";

export const Route = createFileRoute("/modele/$slug")({
  head: () => ({
    meta: [
      { title: "Modele și servicii web — CICLOPYC" },
      {
        name: "description",
        content: "Detalii despre servicii, beneficii și modul în care se formează oferta CICLOPYC.",
      },
    ],
  }),
  component: ServiceModelPage,
});

function ServiceModelPage() {
  const { slug } = Route.useParams();
  const model = serviceModels.find((item) => item.slug === slug);

  if (!model) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-5 text-center text-foreground">
        <div>
          <p className="eyebrow">MODEL INDISPONIBIL</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Nu am găsit acest serviciu.</h1>
          <Link to="/" hash="shop" className="mt-6 inline-block underline underline-offset-4">
            Înapoi la modele
          </Link>
        </div>
      </main>
    );
  }

  const modelIndex = serviceModels.findIndex((item) => item.slug === model.slug);
  const related = serviceModels.filter((item) => item.slug !== model.slug);

  return (
    <>
      <main className={`service-page service-page-${model.slug} min-h-screen bg-background text-foreground`}>
        <nav className="service-topline mx-auto max-w-7xl px-5 py-5 md:px-8" aria-label="Navigație serviciu">
          <Link to="/" hash="shop">
            <Button variant="ghost" className="-ml-3 rounded-xl text-xs text-muted-foreground">
              <ArrowLeft /> Înapoi acasă
            </Button>
          </Link>
        </nav>

        <section className="service-hero relative overflow-hidden">
          <div className="service-hero-grid" aria-hidden="true" />
          <div className="service-hero-inner relative mx-auto grid max-w-7xl items-center gap-6 px-5 pb-12 pt-5 md:px-8 md:pb-20 lg:min-h-[680px] lg:grid-cols-[.9fr_1.1fr] lg:gap-2 lg:pt-0">
            <div className="service-hero-copy relative z-10">
              <p className="service-index"><span>0{modelIndex + 1}</span> / {model.type}</p>
              <p className="eyebrow mt-6">{model.category}</p>
              <h1 className="service-title mt-3 max-w-3xl font-display font-semibold leading-[.9]">
                {model.name}<span>.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">{model.description}</p>
              <p className="service-promise mt-5 max-w-xl text-sm font-semibold leading-7">{model.promise}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/" hash="contact">
                  <Button className="h-12 rounded-md bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90">
                    Discută proiectul <ArrowUpRight />
                  </Button>
                </Link>
                <a href="tel:+40752927479" className="service-call-link inline-flex h-12 items-center gap-2 px-4 text-sm font-semibold">
                  Sună-ne <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <figure className="service-stage relative min-h-[260px] sm:min-h-[380px] lg:min-h-[620px]" aria-label={model.detailImageAlt}>
              <ServiceScene kind={model.slug} image={model.detailImage} />
              <figcaption className="service-stage-caption absolute bottom-4 left-0 right-0 z-20 flex items-center justify-between px-1 text-[10px] font-bold uppercase">
                <span>{model.type}</span><span>0{modelIndex + 1} / 03</span>
              </figcaption>
              <span className="service-stage-mark absolute right-0 top-3 z-20 font-display text-[11px] font-semibold">CICLOPYC / 2026</span>
            </figure>
          </div>
        </section>

        <section className="service-feature-band border-y border-border">
          <div className="mx-auto grid max-w-7xl sm:grid-cols-3">
            {model.cardFeatures.map((feature, index) => (
              <div key={feature} className="service-feature flex items-start gap-4 border-b border-border px-5 py-5 last:border-0 sm:border-b-0 sm:border-r sm:px-8 sm:py-7 sm:last:border-0">
                <span className="font-display text-xs font-bold">0{index + 1}</span>
                <span className="text-sm font-semibold leading-6">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="service-audience section-shell">
          <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-16">
            <div>
              <p className="eyebrow">PENTRU CINE</p>
              <h2 className="mt-4 max-w-sm font-editorial text-4xl font-normal md:text-6xl">Cu cine colaborăm?</h2>
            </div>
            <div className="service-audience-copy">
              <p className="max-w-4xl text-2xl font-medium leading-[1.35] md:text-4xl">{model.audience}</p>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground">Pornim de la felul în care lucrezi acum și stabilim împreună ce trebuie să rămână simplu, ce automatizăm și de ce informații au nevoie clienții ca să te poată alege pe tine.</p>
            </div>
          </div>
        </section>

        <section className="service-photo-band relative overflow-hidden" aria-label={model.imageAlt}>
          <img src={model.image} alt={model.imageAlt} loading="lazy" className="absolute inset-0 size-full object-cover" />
          <div className="service-photo-overlay absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-end justify-between px-5 py-7 text-white md:min-h-[440px] md:px-8 md:py-10">
            <span className="text-xs font-bold uppercase">{model.category}</span>
            <span className="font-display text-xs font-bold">0{modelIndex + 1} / 03</span>
          </div>
        </section>

        <section className="service-results section-shell">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="eyebrow">REZULTATUL</p>
              <h2 className="mt-4 max-w-md font-editorial text-4xl font-normal md:text-6xl">Mai puțină muncă repetată, mai multe rezultate.</h2>
            </div>
            <ul className="service-benefits grid gap-x-10 sm:grid-cols-2">
              {model.benefits.map((benefit, index) => (
                <li key={benefit} className="flex gap-4 border-t border-border py-5 text-sm leading-6">
                  <span className="font-display text-xs font-bold text-signal">0{index + 1}</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="service-deliverables border-y border-border">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
            <div>
              <p className="eyebrow">CE LIVRĂM</p>
              <h2 className="mt-4 max-w-md font-editorial text-4xl font-normal md:text-6xl">Știi exact ce plătești.</h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Înainte să începem, realizăm un plan de lucru ușor de înțeles pentru client. Oferta precizează ce este inclus, calendarul și ce poate solicita clientul în plus.</p>
            </div>
            <ol className="service-deliverable-list divide-y divide-border border-y border-border">
              {model.deliverables.map((deliverable, index) => (
                <li key={deliverable} className="grid gap-3 py-4 sm:grid-cols-[2.5rem_1fr] sm:gap-5">
                  <span className="font-display text-xs font-bold text-signal">0{index + 1}</span>
                  <span className="text-sm leading-6">{deliverable}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-process section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">CUM LUCRĂM</p>
              <h2 className="mt-4 max-w-3xl font-editorial text-4xl font-normal md:text-6xl">Un parcurs clar, de la prima discuție până la lansare.</h2>
            </div>
            <span className="service-process-count font-display text-6xl font-bold md:text-8xl">0{model.process.length}</span>
          </div>
          <div className="service-process-list mt-10 border-y border-border">
            {model.process.map((step, index) => (
              <motion.article key={step.title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.45 }} className="service-process-step grid gap-4 border-b border-border py-6 last:border-0 md:grid-cols-[4rem_.8fr_1.2fr] md:items-start md:gap-8 md:py-8">
                <span className="font-display text-sm font-bold text-signal">0{index + 1}</span>
                <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{step.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="service-investment border-y border-border">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow">INVESTIȚIE</p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Cum calculăm prețul?</h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">{model.pricingIntro}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Valoarea facturii ține cont de:</p>
              <ul className="service-pricing-list mt-4 divide-y divide-border border-y border-border">
                {model.pricingFactors.map((factor, index) => (
                  <li key={factor} className="flex items-start gap-4 py-4 text-sm">
                    <span className="font-display text-xs font-bold text-signal">0{index + 1}</span><span>{factor}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-5 text-muted-foreground">Primești o ofertă clară înainte de începerea lucrului, cu livrabilele, calendarul și costurile convenite.</p>
            </div>
          </div>
        </section>

        <section className="service-related section-shell">
          <div className="flex flex-col justify-between gap-6 border-b border-border pb-7 sm:flex-row sm:items-end">
            <div><p className="eyebrow">ALTE DIRECȚII</p><h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">Compară și celelalte servicii.</h2></div>
            <Link to="/" hash="contact" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-signal underline-offset-4">Cere o recomandare <ArrowUpRight className="size-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2">
            {related.map((item, index) => (
              <Link key={item.slug} to="/modele/$slug" params={{ slug: item.slug }} className="service-related-item group grid gap-5 border-b border-border py-7 first:md:border-r first:md:pr-8 last:md:pl-8">
                <div className="grid gap-5 sm:grid-cols-[160px_1fr] sm:items-center">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div><p className="eyebrow">{item.type}</p><h3 className="mt-3 font-display text-2xl font-semibold">{item.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p></div>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold">Vezi serviciul <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
