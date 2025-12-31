import React from "react";
import { useRoute, Link } from "wouter";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/Newsletter";
import { Header } from "@/components/Header";

const imgArticleImage = "https://www.figma.com/api/mcp/asset/7d9994a9-3836-48a3-a9f1-e33596bab9ee";
const imgArticleImage1 = "https://www.figma.com/api/mcp/asset/f8212dcf-8598-47f5-852c-74b4a8f044bc";
const imgAdobeStock395605759Preview1 = "https://www.figma.com/api/mcp/asset/e0d8b088-ef4f-4680-932e-728932a6f576";
const imgLogoCiclic = "https://www.figma.com/api/mcp/asset/2c29545e-5ef2-49a3-8c1b-b7abbd9d7258";
const imgEllipse2Stroke = "https://www.figma.com/api/mcp/asset/6beb19d7-067f-4883-9455-2e629d44db6b";

export default function Article() {
  const [, params] = useRoute("/article/:id");
  const id = params?.id;

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
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-white pt-[56px] pb-0 px-[56px] flex justify-center h-[450px]">
        <div className="max-w-[1280px] w-full relative h-full rounded-[16px] overflow-hidden group">
          <img 
            src={imgArticleImage} 
            alt="Article Hero" 
            className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-[56px] py-[24px] gap-[10px]" style={{ backgroundImage: "linear-gradient(1.97deg, rgba(0, 0, 0, 0.83) 4.36%, rgba(102, 102, 102, 0.04) 95.19%)" }}>
            <div className="flex items-center gap-[8px] text-white font-bold text-[16px]">
              <Link href="/" className="hover:underline">Inicio</Link>
              <span>/</span>
              <span className="text-[#5AD93A]">{articleContent.category}</span>
            </div>
            <h1 className="text-white text-[48px] font-bold font-['Oscine'] leading-[56px] max-w-4xl">
              {articleContent.title}
            </h1>
            <div className="flex flex-wrap items-center gap-[39px] text-white text-[14px]">
              <div className="flex items-center gap-2 font-['Nunito']">
                <span className="opacity-90">postado em:</span>
                <span className="font-bold">{articleContent.date}</span>
              </div>
              <div className="flex items-center gap-2 font-['Nunito']">
                <span className="opacity-90">Atualizado em:</span>
                <span className="font-bold">{articleContent.updatedDate}</span>
              </div>
              <div className="flex items-center gap-2 font-['Nunito']">
                <span className="opacity-90">Por :</span>
                <span className="font-bold">{articleContent.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <main className="w-full max-w-[1280px] px-[115px] py-[64px] flex flex-col md:flex-row gap-[56px]">
        {/* Content Column */}
        <div className="flex-1 space-y-[26px]">
          <div className="flex items-center gap-2 text-[#76767A] text-[12px] font-['Nunito']">
            <span>Tempo de leitura: {articleContent.readingTime}</span>
          </div>

          {articleContent.sections.map((section, idx) => (
            <div key={idx} className="space-y-[16px]">
              <h2 className="text-[#373739] text-[24px] font-bold font-['Oscine'] leading-[32px]">
                {section.title}
              </h2>
              <p className="text-[#535355] text-[16px] leading-[24px] font-['Nunito']">
                {section.content}
              </p>
              {idx === 2 && (
                <div className="w-[626px] h-[205px] bg-[#f5f7fa] rounded-[8px] overflow-hidden my-[16px]">
                   <div className="relative w-full h-full">
                    <img src={imgArticleImage1} alt="Section visual 1" className="absolute inset-0 w-full h-full object-cover rounded-[8px]" />
                    <div className="absolute h-[504px] left-[calc(50%-0.5px)] top-0 translate-x-[-50%] w-[433px]">
                        <img src={imgArticleImage} alt="Section visual 2" className="absolute h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Article Feedback */}
          <div className="pt-[24px] flex items-center gap-[24px] border-t border-[#D5D5D7] mt-16">
            <span className="text-[#535355] font-bold text-[18px] font-['Nunito']">Este artigo foi util?</span>
            <button className="text-[#636D7A] text-[18px] hover:text-[#373739] transition-colors font-['Nunito']">Sim</button>
            <button className="text-[#636D7A] text-[18px] hover:text-[#373739] transition-colors font-['Nunito']">Não</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-[368px] space-y-[24px]">
          <div className="space-y-[4px]">
            <div className="space-y-[1px]">
              <h3 className="text-[#373739] text-[24px] font-bold font-['Oscine'] leading-[32px]">Assuntos deste artigo</h3>
              <div className="h-px bg-[#D5D5D7] w-full" />
            </div>
            <ul className="space-y-[12px] pt-[12px]">
              {articleContent.subjects.map((subject, idx) => (
                <li key={idx} className={`text-[16px] leading-tight cursor-pointer hover:opacity-80 transition-opacity font-['Nunito'] ${idx === 0 ? 'text-[#06A697] font-bold' : 'text-[#76767A] font-semibold'}`}>
                  {subject}
                </li>
              ))}
            </ul>
          </div>

          <Newsletter />
        </aside>
      </main>

      {/* Related Posts */}
      <section className="w-full bg-white px-[115px] py-[56px] flex justify-center">
        <div className="max-w-[1280px] w-full space-y-[24px]">
          <h2 className="text-[#373739] text-[32px] font-bold font-['Oscine'] leading-[1.25]">Posts relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {[1, 2, 3].map((post, idx) => (
              <div key={post} className="relative aspect-[334/366] rounded-[16px] overflow-hidden group cursor-pointer">
                <img src={idx === 1 ? imgArticleImage : imgArticleImage1} alt="Related post" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 rounded-[16px]" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.24)] rounded-[16px]" />
                <div className="absolute bottom-0 left-0 right-0 p-[24px] pb-[16px] bg-transparent space-y-[8px]">
                  <div className="bg-[#373739] text-[#F5F7FA] text-[14px] font-bold px-[8px] py-[4px] rounded-[24px] w-fit font-['Nunito']">
                    24 mai 2022
                  </div>
                  <h3 className="text-white text-[20px] font-bold font-['Oscine'] leading-[28px] line-clamp-2">
                    OMS reclassifica gravidade e altera o grupo de variantes do SARS-CoV-2
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Banner */}
      <section className="w-full bg-[#daf7f5] px-[115px] py-[72px] flex justify-center relative overflow-hidden">
        {/* Decorative Grafismos */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
            {[...Array(9)].map((_, i) => (
                <img key={i} src={imgEllipse2Stroke} alt="" className="absolute" style={{ left: `${i * 152}px`, top: '1px', width: '67px' }} />
            ))}
        </div>

        <div className="max-w-[1050px] w-full bg-[#373739] rounded-[12px] overflow-hidden flex flex-col md:flex-row items-center h-[424px]">
          <div className="flex-1 p-[48px] py-0 space-y-[32px] flex flex-col justify-center h-full">
            <div className="space-y-[16px]">
              <div className="flex items-center gap-[12px] text-white tracking-[1px] font-semibold text-[16px] font-['Nunito']">
                 <div className="overflow-clip relative size-[24px]">
                    <img src="https://www.figma.com/api/mcp/asset/6b0d6c9c-f97c-427b-844d-659e9ae5baaf" alt="Icon" className="w-full h-full" />
                 </div>
                <span>Universo Viagem</span>
              </div>
              <h2 className="text-white text-[32px] font-bold font-['Oscine'] leading-[40px] w-[495px]">
                Você protegido nos momentos mais importantes da sua viagem
              </h2>
            </div>
            
            <ul className="space-y-[12px] text-white font-semibold text-[16px] font-['Nunito']">
              <li className="flex items-center gap-[12px]">
                <img src="https://www.figma.com/api/mcp/asset/66cf06b3-f1ec-4760-9db0-96163fc132e2" alt="" className="size-[24px]" />
                Atraso de voo e bagagem
              </li>
              <li className="flex items-center gap-[12px]">
                <img src="https://www.figma.com/api/mcp/asset/03316eec-8e54-4198-aa5a-fbf87d5e92cc" alt="" className="size-[24px]" />
                Atendimento 24 Horas (em português)
              </li>
              <li className="flex items-center gap-[12px]">
                <img src="https://www.figma.com/api/mcp/asset/98186475-555a-4ac7-bd52-1573f600e113" alt="" className="size-[24px]" />
                Despesas médicas, hospitalares e muito mais
              </li>
            </ul>

            <Button className="bg-[#72F951] hover:bg-[#62E641] text-[#373739] font-bold rounded-[28px] px-[32px] py-[12px] h-[48px] text-[18px]">
              Conhecer agora
            </Button>
          </div>
          <div className="flex-[1] h-full relative">
             <img src={imgAdobeStock395605759Preview1} alt="Product" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-[rgba(114,249,81,0.06)]" />
          </div>
        </div>
      </section>
    </div>
  );
}
