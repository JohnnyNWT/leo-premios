import Image from "next/image";
import Link from "next/link";

export default function SorteioCRF() {
    return (
      <div className="h-screen flex items-center flex-col">
      <div className="bg-[#1d1d1d] w-full h-[70px] fixed z-[2]">
        <Link href="/">
          <Image src="/img/Logo.png" alt="Logo" className="" layout="fill" objectFit="contain" />
        </Link>
      </div>
      <div className="w-full h-[100px] bg-[#1d1d1d] absolute">
      </div>
      <div className="w-[600px] h-full mt-20 flex flex-col gap-1 rounded-t-3xl bg-[#E4E4E4] z-[1]">


        <div className="flex flex-col gap-2" id="container-rifas">

          <div className="mx-3 mt-3 cursor-pointer shadow-xl" id="rifa-golf">
            <div className="relative">
              <img src="/img/crf.jpg" alt="Ação Bombox" className="rounded-t-lg h-72 w-full" />
              <span className="p-1 px-2 rounded-md bg-[#212429] text-white text-xs font-mono font-bold shadow absolute top-64 left-2">Concluído</span>
            </div>

            <div className="bg-white rounded-b-lg">
              <div className="p-2">
                <h2 className="font-sans text-lg font-medium text-[#202020]">CRF ou 5000 MIL REAIS</h2>
                <p className="text-sm font-light text-[#000000B3]">CRF NOVA ou 5000 MIL REAIS</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    )
  }