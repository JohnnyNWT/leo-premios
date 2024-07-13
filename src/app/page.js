import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="h-screen flex items-center flex-col">
      <div className="bg-[#1d1d1d] w-full h-[70px] fixed z-[2]">
        <Image src="/img/Logo.png" alt="Logo" className="" layout="fill" objectFit="contain" />
      </div>
      <div className="w-full h-[100px] bg-[#1d1d1d] absolute">
      </div>
      <div className="w-[600px] h-full mt-20 flex flex-col gap-1 rounded-t-3xl bg-[#E4E4E4] z-[1]">
        <h1 className="font-sans text-2xl p-4 font-semibold text-[#000000E6]">⚡ Prêmios <span className="text-base text-[#00000080]">Escolha sua sorte</span></h1>


        <div className="flex flex-col gap-2" id="container-rifas">

          <div className="mx-3 cursor-pointer shadow-xl" id="rifa-golf">
            <div className="relative">
              <img src="/img/acao-golf.jpg" alt="Ação Golf" className="rounded-t-lg h-72 w-full" />
              <span className="p-1 px-2 rounded-md bg-[#198754] text-white text-xs font-mono font-bold shadow animate-pulse absolute top-64 left-2">Adquira já!</span>
            </div>

            <div className="bg-white rounded-b-lg">
              <div className="p-2">
                <h2 className="font-sans text-lg font-medium text-[#202020]">Golf Sportline ou 30 MIL REAIS</h2>
                <p className="text-sm font-light text-[#000000B3]">Carro ou 30 MIL REAIS + Moto</p>
              </div>
            </div>
          </div>
          <a href="https://rifa.digital/s/bBCUZ9hAsht">
            <div className="bg-white mx-3 p-1 rounded-[10px] flex items-center shadow-md cursor-pointer" id="rifa-bombox">
              <img src="/img/bombox.jpg" alt="Ação Bombox" className="w-[90px] h-28 rounded-[10px]" />
              <div className="ml-3">
                <h2 className="font-sans text-lg font-semibold text-[#202020]">BOMBOX ou SALÁRIO MÍNIMO</h2>
                <p className="text-sm text-[#000000B3]">Bombox NOVA ou 1500 REAIS</p>
                <span className="p-1 px-2 rounded-md bg-[#198754] text-white text-xs font-mono shadow font-bold">Corre que está acabando!</span>
              </div>
            </div>
          </a>
          <Link href="/sorteio/crf">
            <div className="bg-white mx-3 p-1 rounded-[10px] flex items-center shadow-md cursor-pointer" id="rifa-crf">
              <img src="/img/crf.jpg" alt="Ação Bombox" className="w-[90px] h-28 rounded-[10px]" />

              <div className="ml-3">
                <h2 className="font-sans text-lg font-semibold text-[#202020]">CRF ou 5000 MIL REAIS</h2>
                <p className="text-sm text-[#000000B3]">CRF NOVA ou 5000 MIL REAIS</p>
                <span className="p-1 px-2 rounded-md bg-[#212429] text-white text-xs font-mono shadow font-bold">Concluído</span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
