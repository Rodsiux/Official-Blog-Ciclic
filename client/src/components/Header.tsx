import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const imgLogoCiclic = "https://www.figma.com/api/mcp/asset/2c29545e-5ef2-49a3-8c1b-b7abbd9d7258";

export function Header() {
  return (
    <header className="w-full border-b border-[#D5D5D7] px-4 md:px-[115px] py-[20px] flex justify-center items-center bg-white sticky top-0 z-50">
      <div className="max-w-[1280px] w-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src={imgLogoCiclic} alt="Logo Ciclic" className="h-[25px] w-auto" />
            <div className="ml-[20px] h-[24px] w-px bg-[#D5D5D7]" />
            <span className="ml-[20px] font-bold text-[#373739] font-['Oscine'] text-[15px]">Blog</span>
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-[24px]">
          <Button variant="outline" className="border-[#D5D5D7] border-solid text-[#373739] font-bold rounded-[8px] h-[44px] px-[16px] hidden sm:flex">
            Assinar newsletter
          </Button>
          <Button className="bg-[#535355] hover:bg-[#373739] text-white font-bold rounded-[8px] h-[44px] px-[16px]">
            Quero ser cliente
          </Button>
        </div>
      </div>
    </header>
  );
}
