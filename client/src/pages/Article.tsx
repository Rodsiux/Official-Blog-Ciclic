import React from "react";
import { useRoute, Link } from "wouter";
import { ArrowLeft, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Article() {
  const [, params] = useRoute("/article/:id");
  const id = params?.id;

  // Mock content for demonstration based on Figma design
  const articleContent = {
    title: "OMS reclassifica gravidade e altera o grupo de variantes do SARS-CoV-2",
    category: "Universo Viagem",
    date: "24 de maio de 2022",
    updatedDate: "08 de julho de 2022",
    author: "Marina Basteiro",
    readingTime: "10 minutos",
    sections: [
      {
        title: "O que mudou na classificação das variantes pela OMS?",
        content: "Nas últimas semanas, a Organização Mundial da Saúde (OMS) redefiniu a gravidade de algumas variantes do vírus SARS-CoV-2. A entidade diminuiu consideravelmente a quantidade de cepas enquadradas como VOI (variantes de interesse, na sigla em inglês), mantendo na categoria apenas a lambda e a mu, que têm grande circulação na América Latina, e criou o grupo Variantes Sob Monitoramento ou VUM (em inglês, variants under monitoring). Com essa mudança, as variantes eta, iota e kappa foram reclassificadas como “ex-VOIs” e agora se enquadram como VUM."
      },
      {
        title: "Fim da pandemia?",
        content: "A nova categoria compreende cepas que podem alterar geneticamente o vírus e representar um risco futuramente, mas que ainda exigem novas avaliações antes de se tornar uma VOI ou VOC (variante de preocupação na sigla em inglês, em referência às cepas mais transmissíveis e que provocam infecções mais graves de Covid-19). Apesar das mudanças nas VOI e da criação das VUM, as VOC seguem as mesmas: alfa, beta, gama e delta."
      },
      {
        title: "Os diferentes tipos de infecções e lugares com maior indice de contato com virus.",
        content: "A decisão de alterar a classificação das variantes aconteceu depois de uma criteriosa avaliação de especialistas e do Grupo de Trabalho de Evolução do Vírus SARS-CoV-2, ligado à OMS. A mudança foi baseada na incidência e prevalência das variantes entre as amostras sequenciadas ao longo do tempo, entre as mais diferentes localizações geográficas, e na detecção da presença ou ausência de fatores de risco."
      }
    ],
    subjects: [
      "O que mudou na classificação das variantes pela OMS?",
      "Fim da pandemia?",
      "Efeitos pós pandemia",
      "Os diferentes tipos de infecções e lugares com maior indice de contato com virus.",
      "A importancia da atividade física"
    ]
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Header */}
      <header className="w-full border-b border-[#D5D5D7] px-6 py-4 flex justify-center items-center bg-white sticky top-0 z-50">
        <div className="max-w-[1280px] w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <img src="/figmaAssets/social--media-linkedin.svg" alt="Logo" className="h-6 w-auto grayscale brightness-0" />
              <div className="ml-4 h-6 w-px bg-[#D5D5D7]" />
              <span className="ml-4 font-bold text-[#373739] font-['Oscine']">Blog</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-[#D5D5D7] text-[#373739] font-bold rounded-lg hidden md:flex">
              Assinar newsletter
            </Button>
            <Button className="bg-[#535355] hover:bg-[#373739] text-white font-bold rounded-lg px-6">
              Quero ser cliente
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-white pt-14 pb-0 px-6 flex justify-center">
        <div className="max-w-[1280px] w-full relative h-[450px] rounded-2xl overflow-hidden group">
          <img 
            src="/figmaAssets/hero.svg" 
            alt="Article Hero" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-14 gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Link href="/" className="hover:underline">Inicio</Link>
              <span>/</span>
              <span className="text-[#5AD93A]">{articleContent.category}</span>
            </div>
            <h1 className="text-white text-5xl md:text-5xl font-bold font-['Oscine'] leading-tight max-w-4xl">
              {articleContent.title}
            </h1>
            <div className="flex flex-wrap items-center gap-10 text-white text-sm opacity-90">
              <div className="flex items-center gap-2">
                <span>postado em:</span>
                <span className="font-bold">{articleContent.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Atualizado em:</span>
                <span className="font-bold">{articleContent.updatedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Por :</span>
                <span className="font-bold">{articleContent.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <main className="w-full max-w-[1280px] px-6 py-16 flex flex-col md:flex-row gap-14">
        {/* Content Column */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2 text-[#76767A] text-xs uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Tempo de leitura: {articleContent.readingTime}</span>
          </div>

          {articleContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-[#373739] text-2xl font-bold font-['Oscine'] leading-relaxed">
                {section.title}
              </h2>
              <p className="text-[#535355] text-lg leading-relaxed font-['Nunito']">
                {section.content}
              </p>
              {idx === 1 && (
                <div className="w-full h-[205px] bg-[#F5F7FA] rounded-lg overflow-hidden my-8">
                  <img src="/figmaAssets/hero.svg" alt="Section visual" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          ))}

          {/* Article Feedback */}
          <div className="pt-10 flex items-center gap-6 border-t border-[#D5D5D7] mt-16">
            <span className="text-[#535355] font-bold text-lg">Este artigo foi util?</span>
            <button className="text-[#636D7A] text-lg hover:text-[#373739] transition-colors">Sim</button>
            <button className="text-[#636D7A] text-lg hover:text-[#373739] transition-colors">Não</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-[368px] space-y-10">
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-[#373739] text-2xl font-bold font-['Oscine']">Assuntos deste artigo</h3>
              <div className="h-px bg-[#D5D5D7] w-full" />
            </div>
            <ul className="space-y-4">
              {articleContent.subjects.map((subject, idx) => (
                <li key={idx} className={`text-base font-bold leading-tight cursor-pointer hover:opacity-80 transition-opacity ${idx === 0 ? 'text-[#06A697]' : 'text-[#76767A] font-semibold'}`}>
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="bg-[#F5F7FA] p-6 rounded-2xl space-y-8">
            <div className="space-y-4">
              <div className="h-4 w-40 bg-[#62E641] rounded-full" />
              <h3 className="text-[#373739] text-3xl font-bold font-['Oscine'] leading-tight">
                Assine a newsletter e receba conteudos exclusivos.
              </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: <MessageSquare className="w-5 h-5" />, text: "Artigos e notícias" },
                { icon: <MessageSquare className="w-5 h-5" />, text: "Promoções" },
                { icon: <MessageSquare className="w-5 h-5" />, text: "Novidades sobre os produtos" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[#535355] font-semibold">
                  <div className="text-[#535355]">{item.icon}</div>
                  <span className="text-base">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Digite seu email" 
                className="w-full h-14 bg-white border border-[#E8E8E8] rounded-full px-6 focus:outline-none focus:ring-2 focus:ring-[#72F951] text-[#B6B6B9]"
              />
              <button className="absolute right-2 w-10 h-10 bg-[#72F951] rounded-full flex items-center justify-center hover:bg-[#62E641] transition-colors shadow-lg">
                <ArrowRight className="w-5 h-5 text-[#373739]" />
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* Related Posts */}
      <section className="w-full bg-white px-6 py-14 flex justify-center border-t border-[#D5D5D7]">
        <div className="max-w-[1280px] w-full space-y-8">
          <h2 className="text-[#373739] text-3xl font-bold font-['Oscine']">Posts relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div key={post} className="relative aspect-[334/366] rounded-2xl overflow-hidden group cursor-pointer">
                <img src="/figmaAssets/hero.svg" alt="Related post" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-sm space-y-3">
                  <div className="bg-[#373739] text-[#F5F7FA] text-xs font-bold px-3 py-1 rounded-full w-fit">
                    24 mai 2022
                  </div>
                  <h3 className="text-white text-xl font-bold font-['Oscine'] leading-tight line-clamp-2">
                    OMS reclassifica gravidade e altera o grupo de variantes do SARS-CoV-2
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Banner */}
      <section className="w-full bg-[#DAF7F5] px-6 py-16 flex justify-center">
        <div className="max-w-[1050px] w-full bg-[#373739] rounded-xl overflow-hidden flex flex-col md:flex-row items-center">
          <div className="flex-1 p-12 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white tracking-widest font-semibold uppercase text-base">
                <img src="/figmaAssets/social--media-instagram.svg" alt="Icon" className="w-6 h-6 invert" />
                <span>Universo Viagem</span>
              </div>
              <h2 className="text-white text-4xl font-bold font-['Oscine'] leading-tight">
                Você protegido nos momentos mais importantes da sua viagem
              </h2>
            </div>
            
            <ul className="space-y-3 text-white/90 font-semibold text-base">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#72F951]" />
                Atraso de voo e bagagem
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#72F951]" />
                Atendimento 24 Horas (em português)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#72F951]" />
                Despesas médicas, hospitalares e muito mais
              </li>
            </ul>

            <Button className="bg-[#72F951] hover:bg-[#62E641] text-[#373739] font-bold rounded-full px-10 h-12 text-lg">
              Conhecer agora
            </Button>
          </div>
          <div className="flex-1 h-full min-h-[424px] bg-[#373739]">
             <img src="/figmaAssets/hero.svg" alt="Product" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </section>
    </div>
  );
}
