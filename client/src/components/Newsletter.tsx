import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <div className="bg-[#F5F7FA] p-6 sm:p-8 rounded-2xl space-y-8 w-full max-w-[450px] mx-auto overflow-hidden relative" data-node-id="2551:11763">
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
            <span className="text-base font-['Nunito']">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="relative flex items-center mt-8">
        <input 
          type="email" 
          placeholder="Digite seu email" 
          className="w-full h-14 bg-white border border-[#E8E8E8] rounded-full px-6 focus:outline-none focus:ring-2 focus:ring-[#72F951] text-[#B6B6B9] font-['Rubik']"
        />
        <button className="absolute right-2 w-10 h-10 bg-[#72F951] rounded-full flex items-center justify-center hover:bg-[#62E641] transition-colors shadow-lg">
          <ArrowRight className="w-5 h-5 text-[#373739]" />
        </button>
      </div>

      <div className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none">
        <img 
          src="https://www.figma.com/api/mcp/asset/26e122d6-387d-4bf5-ba98-9f65f90998b3" 
          alt="Decoration" 
          className="w-48 h-48"
        />
      </div>
    </div>
  );
}
