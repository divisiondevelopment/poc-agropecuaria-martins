import { business } from "@/lib/constants";

export function Footer() {
  return (
    <footer>
      <div className="h-1 bg-secondary" aria-hidden="true" />

      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-xl font-bold">
                {business.name}
              </h3>
              <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/40">
                Desde 2001
              </p>
              <address className="mt-2 not-italic text-sm leading-relaxed text-primary-foreground/65">
                {business.address}
              </address>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
                Horário
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                {business.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="text-primary-foreground/65">{h.day}</span>
                    <span className="font-medium text-primary-foreground">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40">
                Contato
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li>
                  <a
                    href={`tel:${business.phone.replace(/\D/g, "")}`}
                    className="text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                  >
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={business.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/35">
            {business.name} — Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}
