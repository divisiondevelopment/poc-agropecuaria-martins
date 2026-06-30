"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function About() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-end lg:gap-16 lg:px-8">

        {/* Portal image — esquerda, alinhado à base */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease }}
          className="flex-shrink-0 self-end pt-16 lg:w-[42%] lg:pt-0"
        >
          {/*
            Portal shape:
            border-radius: 50% 50% 0 0  →  H-radius = W/2 em cada canto superior,
            os dois arcos se encontram no centro criando o semicírculo.
            V-radius = 50% da altura; com aspect-ratio 3/4 (H > W) as laterais
            ficam retas abaixo da metade da altura.
            Fundo bg-secondary visível nos cantos arredondados da imagem.
          */}
          <div
            className="relative w-full overflow-hidden bg-secondary"
            style={{
              aspectRatio: "3 / 4",
              borderRadius: "50% 50% 0 0",
            }}
          >
            <Image
              src="/about-bg.png"
              alt="Equipe Martins Agropecuária"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 42vw"
            />
          </div>
        </motion.div>

        {/* Conteúdo — direita */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease, delay: 0.12 }}
          className="relative z-10 flex flex-col items-center pb-16 text-center lg:items-start lg:py-24 lg:text-left"
        >
          <h2 className="font-heading mb-6 max-w-lg text-balance text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3rem]">
            Recomendado por quem cuida do seu pet há mais de 20 anos
          </h2>

          <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
            Mais de 1.000 pets atendidos com carinho. Receba recomendação
            personalizada de ração direto no WhatsApp, sem fila e sem
            complicação.
          </p>

          <Button
            asChild
            variant="secondary"
            className="h-12 gap-2 px-7 text-base font-semibold"
          >
            <a
              href={business.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Fale no WhatsApp
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.525 5.847L.057 23.882a.5.5 0 0 0 .606.65l6.242-1.637A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.372l-.359-.213-3.718.976.994-3.62-.234-.372A9.818 9.818 0 1 1 12 21.818z" />
    </svg>
  );
}
