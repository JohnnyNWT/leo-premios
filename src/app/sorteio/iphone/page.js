"use client"

import Image from "next/image"
import Link from "next/link"
import ACOES from "@/app/data/data"

export default function SorteioIphone() {
  return (
    <div className="h-screen flex items-center flex-col ">
      <div className="bg-[#1d1d1d] w-full h-[70px] fixed z-[2]">
        <Link href="/">
          <Image src="/img/Logo.png" alt="Logo" className="" layout="fill" objectFit="contain" />
        </Link>
      </div>

      <div className="w-full h-[100px] bg-[#1d1d1d] absolute"></div>

      {ACOES["rifa-iphone"].map((e) => (
        <div className="w-[600px] max-sm:w-full h-full mt-20 flex flex-col gap-1 rounded-t-3xl bg-[#E4E4E4] z-[1]" key={e.id}>
          <div className="flex flex-col gap-2" id="container-rifas">
            <div className="mx-3 mt-3 cursor-pointer shadow-xl" id={e.id}>
              <div className="relative">
                <img src="/img/acao-iphone.jpg" alt="Ação Iphone" className="rounded-t-lg h-72 w-full" />
                <span className="p-1 px-2 rounded-md bg-[#212429] text-white text-xs font-mono font-bold shadow absolute top-64 left-2">{e.status}</span>
              </div>

              <div className="bg-white rounded-b-lg p-2">
                <h2 className="font-sans text-lg font-medium text-[#202020]">{e.titulo}</h2>
                <p className="text-sm font-light text-[#000000B3]">{e.desc}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center my-2">
            <div className="flex items-baseline gap-1">
              <p className="text-sm font-medium font-mono text-[#323232]">Sorteio</p>
              <span className="p-1 px-2 bg-[#FFFFFF80] text-[#212529] rounded font-mono font-bold text-xs shadow-md">{e.sorteio}</span>
            </div>

            <div className="flex items-baseline gap-1">
              <p className="text-sm font-medium font-mono text-[#323232]">Por apenas</p>
              <span className="p-1 px-2 bg-[#1D1D1D] text-white rounded font-sans font-semibold shadow-md">{e.valor}</span>
            </div>
          </div>

          <div className="bg-[#188754] mx-3 p-1 rounded-[10px] flex items-center shadow-md cursor-pointer" id={`ganhador-${e.id}`}>
            <img src="/img/img-ganhador.png" alt="Ganhador Ação iphone" className="w-[80px] h-22 rounded-[10px]" />
            <div className="ml-3">
              <h2 className="font-sans text-2xl font-semibold text-[white]">{e.ganhador}</h2>
              <p className="text-base text-[#383838] font-medium font-sans">Ganhador(a) com o número da sorte <span className="text-[#1b1b1b]">{e.cota}</span></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}