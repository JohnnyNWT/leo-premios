import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center flex-col">
      <div className="bg-[#1d1d1d] w-full h-24 fixed">
        <Image src="/img/Logo.png" alt="Logo" className="" layout="fill" objectFit="contain" />
      </div>
      <div className="w-1/3 h-full absolute top-16 flex flex-col rounded-t-2xl bg-[#E4E4E4]">
        <h1 className="font-sans text-2xl p-4 font-semibold text-[#000000E6]">⚡ Prêmios <span className="text-base text-[#00000080]">Escolha sua sorte</span></h1>

        <div className="p-3" id="rifa-golf">
            <img src="/img/acao-golf.jpg" alt="Ação Golf" className="w-full max-h-96 rounded-t-xl" />
            {/* <Image src="/img/acao-golf.jpg" alt="Ação Golf" className="w-full" width={500} /> */}
          <div className="bg-white rounded-b-xl">
            <div className="p-2">
              <h2 className="font-sans text-lg font-medium text-[#202020]">Golf Sportline ou 30 MIL REAIS</h2>
              <p className="text-sm font-light text-[#000000B3]">Carro ou 30 MIL REAIS + Moto</p>
            </div>
          </div>
        </div>

        <div className="bg-white m-3 p-2 rounded-xl flex items-center" id="rifa-bombox">
          <img src="/img/bombox.jpg" alt="Ação Bombox" className="w-24 h-28 rounded-lg" />

          <div className="ml-4">
            <h2 className="font-sans text-lg font-semibold text-[#202020]">BOMBOX ou SALÁRIO MÍNIMO</h2>
            <p className="text-sm text-[#000000B3]">Bombox NOVA ou 1500 REAIS</p>
            <span>Adquira já!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
