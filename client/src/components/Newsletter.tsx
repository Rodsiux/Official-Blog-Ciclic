import React from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <div className="bg-[#f5f7fa] content-stretch flex flex-col items-start max-w-[450px] overflow-clip p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Newsletter Container" data-node-id="2551:11763">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Newsletter Content" data-node-id="2551:11764">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Newsletter Text Container" data-node-id="2551:11765">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title" data-node-id="2551:11766">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0 w-full" data-name="Newsletter Text" data-node-id="2551:11767">
              <div className="bg-[#62e641] col-[1] h-[17px] ml-[120px] mt-[16px] rounded-[80px] row-[1] w-[158px]" data-name="Newsletter Button" data-node-id="2551:11768" />
              <div className="col-[1] flex flex-col font-['Oscine'] font-bold justify-center leading-[1.25] ml-0 mt-[60px] not-italic relative row-[1] text-[#373739] text-[32px] translate-y-[-50%] w-full whitespace-pre-wrap" data-node-id="2551:11769">
                <p className="mb-0">Assine a <span className="relative z-10">newsletter</span></p>
                <p className="mb-0">e receba conteudos</p>
                <p>exclusivos.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Icons" data-node-id="2551:11770">
            <div className="flex items-center gap-[12px]">
              <img src="https://www.figma.com/api/mcp/asset/981bf47f-0dea-478f-8a44-fb2d96fb4fd8" alt="" className="size-[24px]" />
              <span className="font-['Nunito'] font-semibold text-[#535355] text-[16px]">Artigos e notícias</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <img src="https://www.figma.com/api/mcp/asset/a43e6b96-e8a3-48e8-9469-a8e5306ebbfd" alt="" className="size-[24px]" />
              <span className="font-['Nunito'] font-semibold text-[#535355] text-[16px]">Promoções</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <img src="https://www.figma.com/api/mcp/asset/29905612-5a39-49b7-beef-aa3b668a09f6" alt="" className="size-[24px]" />
              <span className="font-['Nunito'] font-semibold text-[#535355] text-[16px]">Novidades sobre os produtos</span>
            </div>
          </div>
          <div className="bg-white border border-[#e8e8e8] border-solid content-stretch flex h-[56px] items-center justify-between pl-[24px] pr-[12px] py-[12px] relative rounded-[100px] shrink-0 w-full" data-name="Input" data-node-id="2551:11781">
            <input 
              type="email" 
              placeholder="Digite seu email" 
              className="bg-transparent border-none outline-none flex-1 font-['Rubik'] text-[16px] text-[#b6b6b9] placeholder:text-[#b6b6b9]"
            />
            <div className="bg-[#72f951] content-stretch flex h-[40px] items-center justify-center p-[10px] relative rounded-full shrink-0 w-[40px] cursor-pointer hover:bg-[#62e641] transition-colors" data-name="Floating Button" data-node-id="2551:11784">
              <ArrowRight className="size-[24px] text-[#373739]" />
            </div>
          </div>
        </div>
        <div className="aspect-square w-full max-w-[328px] relative shrink-0" data-name="Newsletter Icon" data-node-id="2551:11785">
          <img alt="" className="block max-w-none size-full object-contain" src="https://www.figma.com/api/mcp/asset/26e122d6-387d-4bf5-ba98-9f65f90998b3" />
        </div>
      </div>
    </div>
  );
}
