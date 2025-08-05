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
    <section id="services" className="section container mx-auto flex flex-col items-center">
      <h2 className="text-4xl">SERVIÇOS</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        <a className="service-link"><Truck/>Coleta e transporte</a>
        <a className="service-link"><Trash2/>Recebimento</a>
        <a className="service-link"><Package/>Armazenamento</a>
        <a className="service-link"><FlaskConical/>Tratamento</a>
        <a className="service-link"><MapPinHouse/>Destinação Final</a>
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
