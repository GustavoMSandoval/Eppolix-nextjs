import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 text-sm">
      <section className="py-8 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <h2 className="flex gap-2 items-center text-lg font-semibold mb-4"><Phone size={18}/> Contato</h2>
            <ul className="space-y-2">
              <li className="location">Rua das Samambaias, 10 – Sombra do Ipê – Santana de Parnaíba/SP – Brasil - CEP: 06513-200</li>
              <li className="phone">+55 11 4154-4526 | +55 11 4154-5804 | +55 11 4154-5497 | +55 11 4154-2165</li>
              <li className="phone">FAX: +55 11 4154–4561</li>
              <li className="email">comercial@eppolix.com.br</li>
              <li className="link"><a href="https://eppolix.becompliance.com/canal-etica/canal-denuncias">eppolix.becompliance.com/canal-etica/canal-denuncias</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 text-base font-medium">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">Empresa</a></li>
            <li><a href="#" className="footer-link">Serviços</a></li>
            <li><a href="#" className="footer-link">Tecnologia</a></li>
            <li><a href="#" className="footer-link">Tratamento</a></li>
            <li><a href="#" className="footer-link">Legislação</a></li>
            <li><a href="#" className="footer-link">Contato</a></li>
          </ul>
        </div>
      </section>

      <section className="py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-center md:text-left text-xs text-gray-600">
          <div>Copyright © 2025. Todos os direitos reservados.</div>
          <div>Desenvolvido por Gustavo</div>
        </div>
      </section>
    </footer>

  )
}
