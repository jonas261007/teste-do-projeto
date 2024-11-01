import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden z-10 flex-col gap-2.5 pt-16 pr-14 pb-20 pl-14 bg-slate-50 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col min-w-[240px] text-neutral-950 w-[270px]">
              <h3 className="text-2xl font-medium">Pawcare</h3>
              <nav className="flex flex-col mt-6 max-w-full text-xl font-light w-[270px]">
                <a href="#consulta">Consulta</a>
                <a href="#produtos" className="mt-3">Produtos</a>
                <a href="#envio" className="mt-3">Envio</a>
                <a href="#devolucoes" className="mt-3">Devoluções</a>
                <a href="#sobre-nos" className="mt-3">Sobre nós</a>
              </nav>
            </div>
            <div className="flex flex-col min-w-[240px] w-[360px]">
              <h3 className="text-2xl font-medium text-neutral-950">Fique conectado</h3>
              <div className="flex flex-col mt-6 w-full">
                <p className="text-xl font-light text-neutral-950">
                  Contato: hi.pawpeople@pawcare.com
                </p>
                <div className="flex gap-1 items-start self-start mt-3">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/a6cf8abda3e44fbf9d8bd92d4a5d04c3/567e76ef9ced1d3fa087073bc062c3d4ba0b8a9ec37c321bd0a31b0b3b16a9d7?apiKey=a6cf8abda3e44fbf9d8bd92d4a5d04c3&" alt="Social media icon" className="object-contain shrink-0 w-8 aspect-square" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/a6cf8abda3e44fbf9d8bd92d4a5d04c3/18f4552d78a3ae1a7b5772e8c0306ffe20cec8697955beee31fd83102266c7cd?apiKey=a6cf8abda3e44fbf9d8bd92d4a5d04c3&" alt="Social media icon" className="object-contain shrink-0 w-8 aspect-square" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xl font-medium min-w-[240px] text-neutral-950 w-[360px]">
            <h3 className="text-2xl">Junte-se à família Paw e ganhe 10% OFF</h3>
            <p className="mt-6 font-light">Nossos serviços estão abertos para você</p>
            <button className="gap-3 self-start px-8 py-4 mt-6 rounded-2xl border border-solid border-zinc-500 min-h-[56px] max-md:px-5">
              Parte da nossa família
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center self-start mt-14 text-xl font-light text-zinc-500 max-md:mt-10 max-md:max-w-full">
          <p className="self-stretch my-auto w-[135px]">© Pawcare.co</p>
          <span className="self-stretch my-auto text-2xl w-[11px]">•</span>
          <a href="#terms" className="self-stretch my-auto w-[374px]">Termos e Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;