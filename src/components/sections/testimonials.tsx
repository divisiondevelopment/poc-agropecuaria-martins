"use client";

import { motion, MotionConfig } from "motion/react";
import { business, testimonials } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Testimonials() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="flex min-h-svh flex-col justify-center py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="flex items-baseline gap-4"
            >
              <span className="font-heading text-7xl font-black leading-none text-foreground">
                {business.rating}
              </span>
              <div className="flex flex-col items-start gap-1.5">
                <StarRow size="lg" />
                <span className="text-sm text-muted-foreground">
                  {business.reviewsCount} avaliações no Google
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              className="text-balance font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              O que dizem nossos clientes
            </motion.h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              >
                <div className="flex h-full flex-col gap-3 rounded-xl border-2 border-primary bg-background p-5 transition-all duration-150 [box-shadow:4px_4px_0px_0px_var(--color-primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:2px_2px_0px_0px_var(--color-primary)]">
                  <div
                    aria-hidden="true"
                    className="font-heading text-5xl font-black leading-none text-secondary"
                  >
                    &ldquo;
                  </div>
                  <p className="flex-1 text-base leading-relaxed text-foreground">
                    {t.text}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-3">
                    <StarRow size="sm" />
                    <span className="text-xs text-muted-foreground">Google</span>
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

function StarRow({ size }: { size: "sm" | "lg" }) {
  const cls = size === "sm" ? "size-3.5" : "size-6";
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label="5 estrelas"
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${cls} text-secondary`}
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}
