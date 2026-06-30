"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-svh flex-col overflow-hidden bg-background text-foreground">
        {/* Logo watermark — grande, sangra pela borda direita; oculto em mobile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[18%] select-none md:block"
          style={{ width: "min(106vh, 1110px)", filter: "grayscale(1) opacity(0.07)" }}
        >
          <Image
            src="/logo-2.png"
            alt=""
            width={500}
            height={500}
            className="w-full h-auto"
            sizes="70vh"
          />
        </div>

        <div className="mx-auto flex flex-1 w-full max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 md:flex-row md:items-stretch md:gap-8 md:py-0 lg:px-8">

          {/* Coluna de texto — h1 lidera, sem badge pill */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
            className="flex flex-col items-center justify-center text-center md:w-5/12 md:flex-shrink-0 md:items-start md:py-24 md:text-left"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease }}
              className="mb-5 text-balance font-heading text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Tudo para o seu pet, com quem entende do assunto
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease }}
              className="mb-10 max-w-md text-lg text-muted-foreground sm:text-xl"
            >
              {business.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button
                asChild
                variant="secondary"
                className="h-12 gap-2 px-7 text-base font-semibold"
              >
                <a href={business.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Fale no WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 gap-2 px-7 text-base font-semibold"
              >
                <a href={business.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                  Ver no Instagram
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Coluna da imagem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.42 }}
            className="flex flex-col items-center justify-center overflow-visible md:flex-1 md:justify-end"
          >
            <div className="relative w-full max-w-[440px] md:max-w-none md:w-[calc(100%+12vw)]">
              {/* Blob orgânico atrás dos pets */}
              <PetBlob />

              {/* Imagem dos pets */}
              <Image
                src="/pets-hero.png"
                alt="Gato e dois cachorros"
                width={6067}
                height={3467}
                priority
                className="relative z-10 w-full"
                sizes="(max-width: 768px) 80vw, 57vw"
              />

              {/* Selo de avaliação — carimbo rotacionado */}
              <motion.div
                initial={{ scale: 0.45, opacity: 0, rotate: -22 }}
                animate={{ scale: 1, opacity: 1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.85 }}
                className="absolute left-[6%] top-[6%] z-20 w-28 md:w-[130px]"
                style={{ transformOrigin: "center" }}
                aria-hidden="true"
              >
                <StampBadge />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Blob decorativo ---------- */

function PetBlob() {
  return (
    <svg
      aria-hidden="true"
      viewBox="-15 -5 450 250"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute left-[-5%] top-[-12%] z-0 w-[115%] opacity-40"
      style={{ filter: "blur(6px)" }}
    >
      <path
        d="M 55,40 C 90,5 195,0 280,18 C 365,36 418,80 415,125 C 412,168 368,215 282,222 C 196,229 92,218 40,188 C -12,158 6,108 14,74 C 22,40 20,76 55,40 Z"
        className="fill-secondary"
      />
    </svg>
  );
}

/* ---------- Selo/carimbo de avaliação ---------- */

function StampBadge() {
  return (
    <svg
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${business.rating} — ${business.reviewsCount} avaliações no Google`}
      className="w-full"
    >
      <defs>
        {/*
          Círculo completo partindo das 9h (esquerda), sentido horário.
          Texto ao longo do arco superior fica legível de fora.
        */}
        <path id="seal-arc" d="M 12,70 a 58,58 0 1,1 0.001,0" />
      </defs>

      {/* Círculo de fundo amarelo */}
      <circle
        cx="70"
        cy="70"
        r="67"
        className="fill-secondary stroke-primary"
        strokeWidth="2.5"
      />

      {/* Anel interno tracejado — efeito carimbo */}
      <circle
        cx="70"
        cy="70"
        r="53"
        className="fill-none stroke-primary"
        strokeWidth="1"
        strokeDasharray="3 2.5"
      />

      {/* Texto curvado ao longo do arco */}
      <text
        fontSize="7.5"
        fontWeight="700"
        letterSpacing="2.6"
        className="fill-primary"
      >
        <textPath href="#seal-arc" startOffset="4%">
          {business.reviewsCount} AVALIAÇÕES NO GOOGLE
        </textPath>
      </text>

      {/* Nota central em Fraunces Black */}
      <text
        x="70"
        y="68"
        textAnchor="middle"
        fontSize="33"
        fontWeight="900"
        fontFamily="var(--font-fraunces, serif)"
        className="fill-primary"
      >
        {business.rating}
      </text>

      {/* Estrelas */}
      <text
        x="70"
        y="86"
        textAnchor="middle"
        fontSize="10"
        letterSpacing="2"
        className="fill-primary"
      >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </text>
    </svg>
  );
}

/* ---------- Ícones ---------- */

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

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
