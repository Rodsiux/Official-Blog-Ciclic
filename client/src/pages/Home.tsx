import React from "react";

const footerSections = [
  {
    title: "Serviços",
    links: [
      "Seguro Viagem",
      "Seguro Portáteis",
      "Seguro Auto",
      "Saúde Pet",
      "Seguro Residencial",
      "Saúde Protegida",
      "Empréstimo",
      "Previdência",
    ],
  },
  {
    title: "Empresa",
    links: [
      "Sobre nós",
      "Seja um parceiro",
      "Blog",
      "Dúvidas frequentes",
      "Carreiras",
      "Imprensa",
    ],
  },
  {
    title: "Transparência",
    links: [
      "O Polen",
      "Termos de uso",
      "Privacidade",
      "Termos legais",
      "Denúncias",
    ],
  },
];

const appDownloads = [
  {
    icon: "/figmaAssets/group-89.png",
    store: "Google Play",
  },
  {
    icon: "/figmaAssets/group-90.png",
    store: "Apple Store",
  },
];

const socialMedia = [
  {
    name: "Instagram",
    icon: "/figmaAssets/social--media-instagram.svg",
  },
  {
    name: "Facebook",
    icon: "/figmaAssets/social--media-facebook.svg",
  },
  {
    name: "LinkedIn",
    icon: "/figmaAssets/social--media-linkedin.svg",
  },
  {
    name: "YouTube",
    icon: "/figmaAssets/social--media-youtube.svg",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-neutral-00">
      <section className="w-full">
        <img
          className="w-full h-auto"
          alt="Hero"
          src="/figmaAssets/hero.svg"
        />
      </section>

      <section className="w-full">
        <img
          className="w-full h-auto"
          alt="Mais lidas"
          src="/figmaAssets/mais-lidas.svg"
        />
      </section>

      <section className="w-full">
        <img
          className="w-full h-auto"
          alt="Newsletter"
          src="/figmaAssets/newsletter.svg"
        />
      </section>

      <section className="w-full">
        <img
          className="w-full h-auto"
          alt="Podcast"
          src="/figmaAssets/podcast.svg"
        />
      </section>

      <section className="w-full">
        <img
          className="w-full h-auto"
          alt="Universo de seguros"
          src="/figmaAssets/universo-de-seguros.svg"
        />
      </section>

      <footer className="w-full bg-neutral-70 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14 w-full max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start justify-start gap-8 sm:gap-6 md:gap-4 w-full flex-wrap">
            {footerSections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 sm:gap-6 flex-1 min-w-[160px]"
              >
                <h3 className="w-fit mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-neutral-00 text-sm sm:text-base md:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                  {section.title}
                </h3>

                <nav className="flex flex-col items-start gap-2 w-full">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className={`${linkIndex === 0 ? "mt-[-1.00px]" : ""} w-fit text-xs sm:text-sm font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral-00 text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)] hover:underline transition-colors`}
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            ))}

            <div className="flex flex-col items-start gap-4 sm:gap-6 flex-1 min-w-[160px] w-full sm:w-auto">
              <h3 className="w-fit mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-neutral-00 text-sm sm:text-base md:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                Baixe nosso app
              </h3>

              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full">
                {appDownloads.map((app, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center px-3 sm:px-4 py-2 bg-neutral-60 rounded-lg sm:rounded-xl gap-2 hover:bg-neutral-50 transition-colors w-full sm:w-auto"
                  >
                    <img
                      className="w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0"
                      alt={`${app.store} icon`}
                      src={app.icon}
                    />

                    <div className="flex flex-col items-start min-w-0">
                      <span className="text-xs sm:text-sm font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-white text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-tight [font-style:var(--body-small-regular-font-style)]">
                        Download now
                      </span>

                      <span className="text-xs sm:text-sm font-headline-subtitle font-[number:var(--headline-subtitle-font-weight)] text-white text-[length:var(--headline-subtitle-font-size)] tracking-[var(--headline-subtitle-letter-spacing)] leading-tight [font-style:var(--headline-subtitle-font-style)]">
                        {app.store}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 w-full">
            <p className="md:flex-1 mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral-00 text-xs sm:text-sm text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)] text-center md:text-left">
              © 2022 CICLIC. Todos os direitos reservados.
              <br />
              Rua Alexandre Dumas, 1671 - Chácara Santo Antônio (Zona Sul), São
              Paulo - SP, Cep&nbsp;&nbsp;04717-004
            </p>

            <div className="flex items-center justify-center gap-3 flex-shrink-0">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  <img
                    className="w-5 sm:w-6 h-5 sm:h-6"
                    alt={`Social media ${social.name}`}
                    src={social.icon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
