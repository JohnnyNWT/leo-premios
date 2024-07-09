import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center flex-col">
      <div className="bg-[#1d1d1d] w-full h-24 fixed">
         <Image src="/img/Logo.png" alt="Logo" className="h-full" layout="fill" objectFit="contain"/>
      </div>

      <div className="w-2/5 h-full absolute top-16 flex rounded-t-2xl bg-[#E4E4E4]">
        <h1 className="font-sans text-2xl p-4 font-semibold text-[#000000E6]">⚡ Prêmios <span className="text-base text-[#00000080]">Escolha sua sorte</span></h1>
        <div className="">
          <Image src="/img/acao-golf.jpg" alt="Ação Golf" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
