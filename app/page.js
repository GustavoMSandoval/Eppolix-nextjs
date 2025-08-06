import { FlaskConical, MapPinHouse, Package, Trash2, Truck } from "lucide-react"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section
      id="about"
      className="section grid grid-cols-1 md:grid-cols-6 items-center h-[700px] px-6 md:px-12"
    >
      <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-3 flex flex-col items-start max-w-2xl mx-auto md:mx-0">
        <h1 className="text-4xl md:text-5xl font-semibold">
          SOMOS A EPPOLIX
        </h1>
        <p className="about-text mt-4 text-justify text-base md:text-lg max-w-lg">
          Especializada em Coleta, Transporte, Tratamento e Destinação Final de Resíduos de Serviços
          de Saúde – R.S.S. Nossa Unidade de Tratamento de Resíduos localizada em Santana de Parnaíba, detém a mais
          eficaz tecnologia existente no mercado,
          Tratamento por Autoclavagem com Pré Trituração.
        </p>
        <a className="btn">
          contato
        </a>
      </div>
    </section>
    <section id="services" className="section container mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold text-center">SERVIÇOS</h2>

    <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
      <div className="service-card p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <div className="flex items-center gap-3 mb-4 text-green-600 text-3xl">
          <Truck />
          <h3 className="text-xl font-semibold">Coleta</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Resíduos acondicionados em sacos plásticos homologados e caixas de segurança,
          coletados em hospitais, clínicas, postos de saúde e transportados de forma
          segura por veículos certificados.
        </p>
      </div>

      <div className="service-card p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <div className="flex items-center gap-3 mb-4 text-green-600 text-3xl">
          <Truck />
          <h3 className="text-xl font-semibold">Transporte</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Veículos especializados conforme ABNT/NBR 7500, conduzidos por profissionais
          treinados para garantir eficiência e segurança.
        </p>
      </div>

      <div className="service-card p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <div className="flex items-center gap-3 mb-4 text-green-600 text-3xl">
          <Trash2 />
          <h3 className="text-xl font-semibold">Recebimento</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Descarregamento em esteiras rolantes e containers sem contato manual, reduzindo
          riscos de acidentes.
        </p>
      </div>
      <div className="service-card p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <div className="flex items-center gap-3 mb-4 text-green-600 text-3xl">
          <Package />
          <h3 className="text-xl font-semibold">Armazenamento</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Resíduos direcionados a containers e armazenados até o momento do tratamento.
        </p>
      </div>
      <div className="service-card p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <div className="flex items-center gap-3 mb-4 text-green-600 text-3xl">
          <FlaskConical />
          <h3 className="text-xl font-semibold">Tratamento</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Autoclavagem com pré-trituração, tornando resíduos irreconhecíveis e
          esterilizados, com redução de até 80% no volume.
        </p>
      </div>
      <div className="service-card p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
        <div className="flex items-center gap-3 mb-4 text-green-600 text-3xl">
          <MapPinHouse />
          <h3 className="text-xl font-semibold">Destinação Final</h3>
        </div>
        <p className="text-gray-600 text-sm">
          Resíduos tratados destinados a aterros Classe II ou incineração, garantindo
          preservação ambiental e segurança.
        </p>
      </div>
    </div>
  </section>
  <section id="technology" className="section container mx-auto px-6 py-16 text-center">
    <div className="mb-12">
      <h2 className="text-4xl font-bold uppercase">Nossas Tecnologias</h2>
      <p className="mt-6 text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
        Utilizamos tecnologia moderna no tratamento de resíduos de serviços de saúde,
        garantindo segurança, eficiência e respeito ao meio ambiente.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
          <Image src="/technologies/tecnologia.jpg" alt="Tecnologia" width={160} height={160} className="object-cover w-full h-full" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Tecnologia de Tratamento</h3>
        <p className="mt-2 text-gray-600 text-sm max-w-sm">
          O tratamento por autoclave com trituração prévia reduz em até 80% o volume
          dos resíduos, tornando-os irreconhecíveis e esterilizados.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
          <Image src="/technologies/vantagens.jpg" alt="Vantagens" width={160} height={160} className="object-cover w-full h-full" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Vantagens Técnicas</h3>
        <p className="mt-2 text-gray-600 text-sm max-w-sm">
          Sistema automatizado que garante esterilização completa sem gerar poluentes,
          minimizando riscos de contaminação e acidentes de trabalho.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
          <Image src="/technologies/compromisso.jpg" alt="Compromisso" width={160} height={160} className="object-cover w-full h-full" />
        </div>
        <h3 className="mt-6 text-xl font-semibold">Compromisso Ambiental</h3>
        <p className="mt-2 text-gray-600 text-sm max-w-sm">
          Monitoramento contínuo, reciclagem de água e processos sustentáveis
          reforçam nosso cuidado com a saúde e o meio ambiente.
        </p>
      </div>
    </div>
  </section>
  <section id="clients" className="section container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold uppercase text-center">Nossos Clientes</h2>
      <div className="my-12 flex flex-col gap-8">
        <div className="flex justify-center lg:gap-4">
          <div className="client-card">
            <Image src="/clients/prefeitura_de_itu.png" alt="Prefeitura de Itu" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/prefeitura_de_cabreuva.jpg" alt="Prefeitura de Cabreúva" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/diagnostico_da_america.png" alt="Diagnóstico da América" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/prefeitura_de_barueri.png" alt="Prefeitura de Barueri" width={160} height={80} className="object-contain" />
          </div>
        </div>
        <div className="flex justify-center lg:gap-12">
          <div className="client-card">
            <Image src="/clients/unimed_sorocaba.png" alt="Unimed Sorocaba" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/prefeitura_de_aracariguama.png" alt="Prefeitura de Araçariguama" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/prefeitura_de_carapicuiba.png" alt="Prefeitura de Carapicuíba" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/prefeitura_de_franco_da_rocha.png" alt="Prefeitura de Franco da Rocha" width={160} height={80} className="object-contain" />
          </div>
        </div>
        <div className="flex justify-center lg:gap-4">
          <div className="client-card">
            <Image src="/clients/prefeitura_de_porto_feliz.png" alt="Prefeitura de Porto Feliz" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/prefeitura_de_caieiras.png" alt="Prefeitura de Caieiras" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/prefeitura_santana_de_parnaiba.jpg" alt="Prefeitura de Santana de Parnaíba" width={160} height={80} className="object-contain" />
          </div>
          <div className="client-card">
            <Image src="/clients/client-5.png" alt="Cliente 5" width={160} height={80} className="object-contain" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
