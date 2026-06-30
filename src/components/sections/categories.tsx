"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { Bone, Pill, Bath, Tag, ShieldPlus, Scissors } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const categories = [
  {
    icon: Bone,
    title: "Ração Premium",
    description: "Para cães e gatos de todas as idades e portes",
    image: "/2.jpg",
    scale: 1.2,
    objectPosition: "center 20%",
  },
  {
    icon: Pill,
    title: "Suplementos e Vitaminas",
    description: "Saúde e bem-estar em dia",
    image: "/3.jpg",
    scale: 1,
    objectPosition: "center center",
  },
  {
    icon: Bath,
    title: "Higiene e Banho",
    description: "Produtos para limpeza e cuidado",
    image: "/4.jpg",
    scale: 1,
    objectPosition: "center center",
  },
  {
    icon: Tag,
    title: "Acessórios",
    description: "Coleiras, camas, brinquedos e mais",
    image: "/5.jpg",
    scale: 1.3,
    objectPosition: "center 30%",
  },
  {
    icon: ShieldPlus,
    title: "Medicamentos e Antipulgas",
    description: "Prevenção e tratamento",
    image: "/1.jpg",
    scale: 1.3,
    objectPosition: "center center",
  },
  {
    icon: Scissors,
    title: "Pet Shop, Banho e Tosa",
    description: "Cuidado completo pro seu pet",
    image: "/6.jpg",
    scale: 1,
    objectPosition: "center center",
  },
];

export function Categories() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="flex min-h-svh flex-col justify-center py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="mb-14 text-center"
          >
            <h2 className="font-heading text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Tudo o que seu pet precisa, em um só lugar
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ icon: Icon, title, description, image, scale, objectPosition }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="pt-4 pr-4"
              >
                <div className="relative flex h-full flex-col gap-4 rounded-xl border-2 border-primary bg-background p-6 transition-all duration-150 [box-shadow:4px_4px_0px_0px_var(--color-primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:2px_2px_0px_0px_var(--color-primary)]">
                  {/* Imagem circular — canto superior direito, sobreposição na borda */}
                  <div className="absolute -right-4 -top-4 size-20 overflow-hidden rounded-full border-2 border-primary bg-secondary">
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                      style={{ transform: `scale(${scale})`, objectPosition }}
                    />
                  </div>

                  {/* Ícone */}
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="size-6 text-secondary-foreground" aria-hidden="true" />
                  </div>

                  {/* Texto — margem direita para não sobrepor a imagem no topo */}
                  <div className="flex flex-col gap-1 pr-6">
                    <p className="font-heading text-base font-bold text-foreground">
                      {title}
                    </p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </MotionConfig>
  );
}
