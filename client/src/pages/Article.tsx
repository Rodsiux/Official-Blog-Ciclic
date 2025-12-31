import React from "react";
import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Article() {
  const [, params] = useRoute("/article/:id");
  const id = params?.id;

  // Mock content for demonstration
  const articleContent = {
    title: "Tudo o que você precisa saber sobre Seguro Viagem",
    category: "Seguro Viagem",
    date: "22 de Outubro, 2025",
    content: `
      O seguro viagem é um item indispensável para quem planeja viajar, seja para destinos nacionais ou internacionais. 
      Ele oferece cobertura para diversas situações imprevistas, desde emergências médicas até extravio de bagagem.

      Neste guia completo, exploramos os principais benefícios, como escolher a melhor cobertura e por que a Ciclic é a sua melhor parceira na hora de proteger sua viagem.
    `
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      <div className="w-full max-w-4xl px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="mb-6 gap-2"
          data-testid="button-back"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>

        <article className="space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-medium text-sm">{articleContent.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">
              {articleContent.title} (Artigo {id})
            </h1>
            <p className="text-neutral-500 text-sm">{articleContent.date}</p>
          </div>

          <img
            src="/figmaAssets/hero.svg"
            alt="Article Hero"
            className="w-full rounded-xl object-cover h-[300px] md:h-[450px]"
          />

          <div className="prose prose-neutral max-w-none">
            {articleContent.content.split('\n').map((paragraph, i) => (
              <p key={i} className="text-neutral-700 leading-relaxed text-lg">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
