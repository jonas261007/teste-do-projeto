import React from 'react';

const ClinicSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-32 w-full text-2xl bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center mb-0 w-full max-w-[1222px] max-md:mb-2.5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/a6cf8abda3e44fbf9d8bd92d4a5d04c3/a1453d4b61e191e4f64f1018c7128c62dde8c1a4c3326c8fe161adcefdcdedf5?apiKey=a6cf8abda3e44fbf9d8bd92d4a5d04c3&"
          alt="Clinic interior"
          className="object-contain flex-1 shrink self-stretch my-auto w-full rounded-3xl aspect-[1.05] basis-0 min-w-[240px] max-md:max-w-full"
        />
        <div className="flex flex-col items-start self-stretch my-auto min-w-[240px] w-[588px] max-md:max-w-full">
          <h2 className="gap-2.5 self-stretch py-2.5 text-5xl font-bold leading-none text-neutral-950 max-md:max-w-full max-md:text-4xl">
            Visite nossa clínica
          </h2>
          <p className="self-stretch mt-6 leading-9 text-zinc-500 max-md:max-w-full">
            Visite nossa clínica para atendimento veterinário abrangente. Nossa experiente equipe oferece exames físicos completos, diagnósticos avançados e tratamentos personalizados para garantir a saúde e o bem-estar do seu animal de estimação. Agende hoje mesmo sua consulta na clínica para obter o melhor em cuidados com animais de estimação.
          </p>
          <button className="flex gap-5 justify-center items-center py-5 pr-9 pl-12 mt-6 font-medium leading-none text-center text-white bg-indigo-500 min-h-[72px] rounded-[72px] max-md:px-5">
            <span className="self-stretch my-auto">Agende uma visita</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/a6cf8abda3e44fbf9d8bd92d4a5d04c3/22e556650375fca5b64ac43b2d69257701d0a1bb9f0cbf53ec2c26156725dff9?apiKey=a6cf8abda3e44fbf9d8bd92d4a5d04c3&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;