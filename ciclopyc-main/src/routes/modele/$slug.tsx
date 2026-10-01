import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SiteFooter } from "@/components/site-footer";
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

  const related = serviceModels.filter((item) => item.slug !== model.slug);

  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <section className="border-b border-border px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-10">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/"
              hash="shop"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Toate modelele
            </Link>
            <div className="mt-16 grid min-w-0 gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <div className="min-w-0">
                <p className="eyebrow">
                  {model.category} / {model.type}
                </p>
                <h1 className="mt-5 max-w-4xl break-words font-editorial text-5xl font-normal leading-[.98] md:text-8xl">
                  {model.name}
                  <span className="text-signal">.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
                  {model.description}
                </p>
                <p className="mt-5 max-w-2xl border-l-2 border-signal pl-4 text-base font-semibold leading-7">
                  {model.promise}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/" hash="contact">
                    <Button className="h-12 rounded-xl bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90">
                      Discută proiectul <ArrowUpRight />
                    </Button>
                  </Link>
                  <a
                    href={`tel:+40752927479`}
                    className="inline-flex h-12 items-center rounded-xl border border-border px-5 text-sm font-semibold transition-colors hover:bg-accent"
                  >
                    Sună-ne
                  </a>
                </div>
              </div>
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="overflow-hidden rounded-lg bg-surface"
              >
                <img
                  src={model.image}
                  alt={model.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.figure>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface px-5 py-8 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-3">
            {model.cardFeatures.map((feature, index) => (
              <div key={feature} className="flex items-center gap-4 bg-surface px-4 py-5 md:px-6">
                <span className="font-display text-xs font-semibold text-signal">0{index + 1}</span>
                <span className="text-sm font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-border bg-background px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow">PENTRU CINE</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Un serviciu cu un scop clar.
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{model.audience}</p>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
                Pornim de la felul în care lucrezi acum și stabilim împreună ce trebuie să rămână
                simplu, ce merită automatizat și ce informații au nevoie clienții ca să poată decide
                cu încredere.
              </p>
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="px-5 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow">REZULTATUL PENTRU TINE</p>
              <h2 className="mt-3 font-editorial text-4xl font-normal md:text-5xl">
                Mai multă claritate. Mai puțină muncă repetată.
              </h2>
            </div>
            <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {model.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 border-t border-border pt-4 text-sm leading-6"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <section className="border-y border-border bg-surface px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow">LIVRABILE</p>
              <h2 className="mt-3 font-editorial text-4xl font-normal md:text-5xl">
                Știi exact ce primești.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
                Înainte să începem, transformăm cerințele într-o listă clară de livrabile. Oferta
                finală precizează ce este inclus, calendarul și responsabilitățile fiecărei părți.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {model.deliverables.map((deliverable, index) => (
                <li key={deliverable} className="grid gap-3 py-4 sm:grid-cols-[2rem_1fr] sm:gap-5">
                  <span className="font-display text-xs font-semibold text-signal">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-6">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <figure className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <img
            src={model.detailImage}
            alt={model.detailImageAlt}
            loading="lazy"
            className="h-56 w-full rounded-lg object-cover md:h-80"
          />
        </figure>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow">CUM LUCRĂM</p>
              <h2 className="mt-3 font-editorial text-4xl font-normal md:text-5xl">
                Un proces clar, de la prima discuție până la lansare.
              </h2>
            </div>
            <div className="mt-10 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
              {model.process.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 38, scale: .92, rotateX: 8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  whileHover={{ y: -7, scale: 1.02 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.12, duration: .8, ease: "easeOut" }}
                  style={{ transformPerspective: 900 }}
                  className="bg-background p-5 md:p-6"
                >
                  <span className="font-display text-xs font-semibold text-signal">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="eyebrow">INVESTIȚIE</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                De ce diferă prețul?
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{model.pricingIntro}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Oferta ține cont de:</p>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {model.pricingFactors.map((factor, index) => (
                  <li key={factor} className="flex items-start gap-4 py-4 text-sm">
                    <span className="font-display text-xs font-semibold text-signal">
                      0{index + 1}
                    </span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-5 text-muted-foreground">
                Primești o ofertă clară înainte de începerea lucrului, cu livrabilele, calendarul și
                costurile convenite.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">ALTE DIRECȚII</p>
                <h2 className="mt-3 font-display text-3xl font-semibold">
                  Compară și celelalte servicii.
                </h2>
              </div>
              <Link
                to="/"
                hash="contact"
                className="text-sm font-semibold underline decoration-signal underline-offset-4"
              >
                Cere o recomandare
              </Link>
            </div>
            <div className="grid gap-px bg-border md:grid-cols-2">
              {related.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 40, scale: .94, rotateY: index ? 7 : -7 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * .14, duration: .85, ease: "easeOut" }}
                  style={{ transformPerspective: 950 }}
                  className="h-full bg-background"
                >
                <Link
                  to="/modele/$slug"
                  params={{ slug: item.slug }}
                  className="group flex min-h-48 h-full flex-col justify-between bg-background p-6 transition-colors hover:bg-surface md:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-[120px_1fr] sm:items-center">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-md object-cover"
                    />
                    <div>
                      <p className="eyebrow">{item.type}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold">{item.name}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Vezi serviciul{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
