import { FlaskConical, MapPinHouse, Package, Trash2, Truck } from "lucide-react"

export default function Home() {
  return (
    <>
    <section id="carousel"></section>
    <section id="about" className="section container mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-semibold">SOMOS A EPPOLIX</h1>
      <p className="lg:w-4xl text-justify mt-3">
        A EPPOlix Tratamento de Resíduos Especiais é uma empresa 
        especializada em Coleta, Transporte, Tratamento e Destinação 
        Final de Resíduos de Serviços de Saúde – R.S.S., tendo como 
        compromisso maior, a preservação da Saúde e do Meio Ambiente. 
        Nossa Unidade de Tratamento de Resíduos de Serviços de Saúde – 
        R.S.S. localizada em Santana de Parnaíba - São Paulo, detém a mais
        eficaz tecnologia existente no mercado mundial de Tratamento de
        R.S.S.: O Tratamento por Autoclavagem com Pré Trituração.
      </p>
    </section>
    <section id="duty">
      <div className="section container mx-auto flex flex-col items-center">
        <h2 className="text-3xl py-6">Responsabilidade Socioambiental</h2>
        <p className="py-6">"A responsabilidade social e a preservação ambiental significam um compromisso com a vida”</p>
      </div>
    </section>
    <section id="services" className="section container mx-auto flex flex-col items-center">
      <h2 className="text-2xl">OFERECEMOS GERENCIAMENTO DE RESÍDUOS DE SERVIÇOS DE SAÚDE:</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        <a className="service-link"><Truck/>Coleta e transporte</a>
        <a className="service-link"><Trash2/>Recebimento</a>
        <a className="service-link"><Package/>Armazenamento</a>
        <a className="service-link"><FlaskConical/>Tratamento</a>
        <a className="service-link"><MapPinHouse/>Destinação Final</a>
      </div>
    </section>
    <section id="clients" className="section container mx-auto">
      <h2 className="text-2xl">CLIENTES</h2>
    </section>
    </>
  );
}
