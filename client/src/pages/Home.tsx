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
    <div className="flex flex-col items-center bg-neutral-00">
      <section className="flex flex-col items-start gap-2.5 bg-[#ffffff] w-full">
        <img className="w-full" alt="Hero" src="/figmaAssets/hero.svg" />
      </section>

      <section className="w-full">
        <img
          className="w-full"
          alt="Mais lidas"
          src="/figmaAssets/mais-lidas.svg"
        />
      </section>

      <section className="w-full">
        <img
          className="w-full"
          alt="Newsletter"
          src="/figmaAssets/newsletter.svg"
        />
      </section>

      <section className="w-full">
        <img className="w-full" alt="Podcast" src="/figmaAssets/podcast.svg" />
      </section>

      <section className="w-full">
        <img
          className="w-full"
          alt="Universo de seguros"
          src="/figmaAssets/universo-de-seguros.svg"
        />
      </section>

      <footer className="flex flex-col items-center justify-center gap-14 pt-[72px] pb-10 px-[115px] bg-neutral-70 w-full">
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="flex items-start justify-center gap-4 w-full">
            {footerSections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-6 flex-1"
              >
                <h3 className="w-fit mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-neutral-00 text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                  {section.title}
                </h3>

                <nav className="flex flex-col items-start gap-2">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className={`${linkIndex === 0 ? "mt-[-1.00px]" : ""} w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral-00 text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)] hover:underline`}
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            ))}

            <div className="flex flex-col items-start gap-6 flex-1">
              <h3 className="w-fit mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-neutral-00 text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                Baixe nosso app
              </h3>

              <div className="flex flex-col items-start gap-4">
                {appDownloads.map((app, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center px-4 py-2 bg-neutral-60 rounded-xl gap-2 hover:bg-neutral-50 transition-colors"
                  >
                    <img
                      className="w-8 h-8"
                      alt={`${app.store} icon`}
                      src={app.icon}
                    />

                    <div className="flex flex-col items-start">
                      <span className="flex items-center justify-center w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-white text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                        Download now
                      </span>

                      <span className="flex items-center justify-center w-fit font-headline-subtitle font-[number:var(--headline-subtitle-font-weight)] text-white text-[length:var(--headline-subtitle-font-size)] tracking-[var(--headline-subtitle-letter-spacing)] leading-[var(--headline-subtitle-line-height)] whitespace-nowrap [font-style:var(--headline-subtitle-font-style)]">
                        {app.store}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 w-full">
            <p className="flex-1 mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutral-00 text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
              © 2022 CICLIC. Todos os direitos reservados.
              <br />
              Rua Alexandre Dumas, 1671 - Chácara Santo Antônio (Zona Sul), São
              Paulo - SP, Cep&nbsp;&nbsp;04717-004
            </p>

            <div className="flex items-center justify-end gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  <img
                    className="w-6 h-6"
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
