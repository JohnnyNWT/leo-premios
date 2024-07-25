import Image from "next/image";
import Link from "next/link";
import ACOES from "@/app/data/data";

export default function Contato() {
  return (
    <div className="h-screen flex items-center flex-col max-sm:bg-[#E4E4E4]">
      <div className="bg-[#1d1d1d] w-full h-[70px] fixed z-[2]">
        <Link href="/">
          <Image src="/img/Logo.png" alt="Logo" className="" layout="fill" objectFit="contain" />
        </Link>
      </div>

      <div className="w-full h-[100px] bg-[#1d1d1d] absolute"></div>

      <div className="w-[600px] max-sm:w-full mt-20 flex flex-col rounded-3xl bg-[#E4E4E4] z-[1] min-h-[650px]">
        <h1 className="font-sans text-2xl p-4 font-semibold text-[#000000E6]">✉️ Contato <span className="text-base text-[#00000080] font-normal">Tire suas dúvidas.</span></h1>

        <div className="bg-white h-3/4 mx-4 p-3 rounded-lg shadow-xl">
          <form>
            <div className="flex flex-col">
              <label className="font-sans max-sm:text-sm font-semibold mb-2" htmlFor="nome" >Nome</label>
              <input className="border rounded-md shadow-sm text-[#5a5a5a] p-[6px] mb-2 outline-none" type="text" id="nome" name="nome" required />
            </div>

            <div className="flex flex-col">
              <label className="font-sans max-sm:text-sm font-semibold mb-2" htmlFor="phone">Telefone</label>
              <input className="border rounded-md shadow-sm text-[#5a5a5a] p-[6px] mb-2 outline-none" type="tel" id="phone" name="phone" placeholder="(__) _____-____" required/>
            </div>

            <div className="flex flex-col">
              <label className="font-sans max-sm:text-sm font-semibold mb-2" htmlFor="assunto">Assunto</label>
              <input className="border rounded-md shadow-sm text-[#5a5a5a] p-[6px] mb-2 outline-none" type="text" id="assunto" name="assunto" required/>
            </div>

            <div className="flex flex-col">
              <label className="font-sans max-sm:text-sm font-semibold mb-2" htmlFor="mensagem">Mensagem</label>
              <textarea className="border rounded-[10px] shadow-sm text-[#5a5a5a] p-[6px] mb-2 outline-none" type="text" id="mensagem" name="mensagem" rows="7" required/>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#0b5ed7] py-3 shadow-md text-white font-bold rounded-lg mt-14 w-full" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}