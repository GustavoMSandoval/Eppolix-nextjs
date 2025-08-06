import { FlaskConical, MapPinHouse, Package, Trash2, Truck } from "lucide-react"

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

    <section id="clients" className="section container mx-auto">
      <h2 className="text-4xl uppercase">nossos CLIENTES</h2>
      <div>

      </div>
    </section>
    </>
  );
}
