"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="flex flex-col overflow-hidden bg-portfolio-bg-primary">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-portfolio-text-primary">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&h=720&fit=crop"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      <div className="min-h-screen bg-portfolio-bg-primary flex items-center justify-center p-8">
        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <ArrowUpRight className="h-2 w-2 text-gray-300" />
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Meteors because they&apos;re cool
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              Explore
            </button>

            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
