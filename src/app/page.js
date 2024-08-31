import Image from "next/image";
import Link from "next/link";
import ACOES from "./data/data";

export default function Home() {

  return (
    <div className="h-screen flex items-center flex-col">
      <div className="bg-[#1d1d1d] w-full h-[70px] fixed z-[2] content-center">
        <div className="w-[550px] flex items-center justify-between max-sm:w-full" style={{ margin: "0 auto" }}>
          <div className="cursor-pointer max-sm:ml-2 max-sm:mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-filter-left text-white" viewBox="0 0 16 16">
              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <div>
            <Image src="/img/Logo.png" width={60} height={50} alt="Logo Icon" className="" />
          </div>
          <Link href="/contato">
            <div className="flex items-end flex-col cursor-pointer max-sm:mr-4 max-sm:mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-dots-fill text-[#8e8e8e]" viewBox="0 0 16 16">
                <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
              </svg>
              <p className="text-[#FDFFA9] font-semibold">Suporte</p>
            </div>
          </Link>

        </div>
      </div>

      <div className="w-full h-[100px] bg-[#1d1d1d] absolute"></div>

      <div className="w-[600px] h-full mt-20 flex flex-col gap-1 rounded-t-3xl bg-[#E4E4E4] z-[1] max-sm:w-full">
        <h1 className="font-sans text-2xl p-4 font-semibold text-[#000000E6]">⚡ Prêmios <span className="text-base text-[#00000080] font-normal">Escolha sua sorte</span></h1>


        <div className="flex flex-col gap-2" id="container-rifas">
          <a href="https://rd.app/s/1E2OBzZieeH">
            <div className="mx-3 cursor-pointer shadow-xl" id="rifa-principal">
              <div className="relative">
                <img src="/img/acao-golf.jpg" alt="Ação Golf" className="rounded-t-lg h-72 w-full" />
                <span className="p-1 px-2 rounded-md bg-[#198754] text-white text-xs font-mono font-bold shadow animate-pulse absolute top-64 left-2">Adquira já sua cota!</span>
              </div>

              <div className="bg-white rounded-b-lg">
                <div className="p-2">
                  <h2 className="font-sans text-lg font-medium text-[#202020]">GOLF SPORTLINE + CRF 230</h2>
                  <p className="text-sm font-light text-[#000000B3]">Imagina ganhar um Golf Sportline com apenas 0,10 centavos? E ainda está concorrendo a um bilhete premiado de uma CRF 230</p>
                </div>
              </div>
            </div>
          </a>

          <Link href="/sorteio/bombox">
            <div className="bg-white mx-3 p-1 rounded-[10px] flex items-center shadow-md cursor-pointer" id="rifa-bombox">
              <img src="/img/acao-bombox.jpg" alt="Ação Bombox" className="w-[90px] h-28 rounded-[10px]" />
              <div className="ml-3">
                <h2 className="font-sans text-lg font-semibold text-[#202020] max-sm:text-base">BOMBOX OU R$2.000,00 NA CONTA</h2>
                <p className="text-sm text-[#000000B3]">Bombox nova na caixa ou R$2.000,00...</p>
                <span className="p-1 px-2 rounded-md bg-[#212429] text-white text-xs font-mono shadow font-bold">Concluído!</span>
              </div>
            </div>
          </Link>

          <Link href="/sorteio/crf">
            <div className="bg-white mx-3 p-1 rounded-[10px] flex items-center shadow-md cursor-pointer" id="rifa-crf">
              <img src="/img/acao-crf.jpg" alt="Ação Bombox" className="w-[90px] h-28 rounded-[10px]" />

              <div className="ml-3">
                <h2 className="font-sans text-lg font-semibold text-[#202020] max-sm:text-base">KIT TRILHEIRO OU R$5.000,00</h2>
                <p className="text-sm text-[#000000B3]">CRF + capacete + roupa ou R$5.000,00...</p>
                <span className="p-1 px-2 rounded-md bg-[#212429] text-white text-xs font-mono shadow font-bold">Concluído</span>
              </div>
            </div>
          </Link>

          <Link href="/sorteio/iphone">
            <div className="bg-white mx-3 p-1 rounded-[10px] flex items-center shadow-md cursor-pointer" id="rifa-iphone">
              <img src="/img/acao-iphone.jpg" alt="Ação Iphone" className="w-[90px] h-28 rounded-[10px]" />

              <div className="ml-3">
                <h2 className="font-sans text-lg font-semibold text-[#202020] max-sm:text-base">IPHONE 11 OU R$1.200,00 NA CONTA</h2>
                <p className="text-sm text-[#000000B3]">Imagina ganhar um Iphone 11 com apenas...</p>
                <span className="p-1 px-2 rounded-md bg-[#212429] text-white text-xs font-mono shadow font-bold">Concluído</span>
              </div>
            </div>
          </Link>
        </div>

        <Link href="/contato">
          <div className="bg-[#E4E4E4]">
            <div id="duvidas" className="bg-[#ebebeb] mt-[16px] mx-3 p-[6px] rounded-[10px] shadow-md cursor-pointer flex items-center justify-center gap-2">
              <span className="p-3 bg-[#d6d8d7] rounded-lg text-xl">🤷</span>
              <div>
                <h3 className="font-sans text-xl text-[#000000E6]">Dúvidas</h3>
                <p className="text-base text-[#00000080] font-normal">Fale conosco</p>
              </div>
            </div>

          </div>
        </Link>

        <div className="bg-[#E4E4E4] flex flex-col gap-2" id="ganhadores-sortudos">
          <h1 className="font-sans text-2xl p-4 font-semibold text-[#000000E6]">🎉 Ganhadores <span className="text-base text-[#00000080] font-normal">sortudos</span></h1>

          {ACOES["rifa-bombox"].map((e) => (
            <Link href="/sorteio/bombox">
              <div className="bg-white mx-3 p-[6px] rounded-[10px] flex items-center shadow-md cursor-pointer" id={e.id}>
                <img src="/img/default.jpg" alt="Img ganhador" className="object-cover w-[90px] h-28 rounded-[10px] border-2 border-green-500" />
                <div className="ml-3">
                  <h2 className="font-sans text-xl font-medium text-[#323232] max-sm:text-base">{e.ganhador}</h2>
                  <h3 className="font-sans text-base font-medium text-[#323232]">BOMBOX OU R$2.000,00 NA CONTA</h3>
                  <p className="font-sans font-medium text-sm text-[#000000B3]">Número da sorte <span className="text-[#323232]">{e.cota}</span></p>
                  <p className="font-sans font-medium text-sm text-[#000000B3]">Data da premiação <span className="text-[#323232]">{e.sorteio}</span></p>
                </div>
              </div>
            </Link>
          ))}

          {ACOES["rifa-crf"].map((e) => (
            <Link href="/sorteio/crf">
              <div className="bg-white mx-3 p-[6px] rounded-[10px] flex items-center shadow-md cursor-pointer" id={e.id}>
                <img src="/img/default.jpg" alt="Img ganhador" className="object-cover w-[90px] h-28 rounded-[10px] border-2 border-green-500" />
                <div className="ml-3">
                  <h2 className="font-sans text-xl font-medium text-[#323232] max-sm:text-base">{e.ganhador}</h2>
                  <h3 className="font-sans text-base font-medium text-[#323232]">{e.titulo}</h3>
                  <p className="font-sans font-medium text-sm text-[#000000B3]">Número da sorte <span className="text-[#323232]">{e.cota}</span></p>
                  <p className="font-sans font-medium text-sm text-[#000000B3]">Data da premiação <span className="text-[#323232]">{e.sorteio}</span></p>
                </div>
              </div>
            </Link>
          ))}

          {ACOES["rifa-iphone"].map((e) => (
            <Link href="/sorteio/iphone">
              <div className="bg-white mx-3 p-[6px] rounded-[10px] flex items-center shadow-md cursor-pointer mb-4" id={e.id}>
                <img src="/img/default.jpg" alt="Img ganhador" className="object-cover w-[90px] h-28 rounded-[10px] border-2 border-green-500" />
                <div className="ml-3">
                  <h2 className="font-sans text-xl font-medium text-[#323232] max-sm:text-base">{e.ganhador}</h2>
                  <h3 className="font-sans text-base font-medium text-[#323232]">{e.titulo}</h3>
                  <p className="font-sans font-medium text-sm text-[#000000B3]">Número da sorte <span className="text-[#323232]">{e.cota}</span></p>
                  <p className="font-sans font-medium text-sm text-[#000000B3]">Data da premiação <span className="text-[#323232]">{e.sorteio}</span></p>
                </div>
              </div>
            </Link>
          ))}
          <span className="mt-2 text-center">2024 Leo Prêmios© - Todos os direitos reservados.</span>
          <span className="mb-5 text-center font-extralight">Desenvolvido por <a href="https://www.instagram.com/johnnydevdesigner/" target="_blank" className="text-white bg-black p-1 rounded-md">João Marcelo</a></span>
        </div>

      </div>
    </div>
  );
}
