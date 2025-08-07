import { Gavel, Phone, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer id='contacts' className="bg-gray-100 text-gray-800 text-sm">
      <section className="py-8 border-b border-gray-300">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col">
            <h2 className="footer-subtitle text-lg font-semibold mb-4 border-b border-gray-300 pb-2">
              <Phone size={18}/> Contato
            </h2>
            <ul className="space-y-2">
              <li>Rua das Samambaias, 10 – Sombra do Ipê – Santana de Parnaíba/SP – Brasil - CEP: 06513-200</li>
              <li>+55 11 4154-4526 | +55 11 4154-5804 | +55 11 4154-5497 | +55 11 4154-2165 | +55 11 4154–4561</li>
              <li>comercial@eppolix.com.br</li>
            </ul>

            <h2 className="footer-subtitle text-lg font-semibold mt-8 mb-4 border-b border-gray-300 pb-2">
              <Users/> Canal de Ética
            </h2>
            <ul>
              <li>
                <a href="https://eppolix.becompliance.com/canal-etica/canal-denuncias" target="_blank">
                  eppolix.becompliance.com/canal-etica/canal-denuncias
                </a>
              </li>
            </ul>

            <h2 className="footer-subtitle text-lg font-semibold mt-8 mb-4 border-b border-gray-300 pb-2">
              <Gavel/> Código de Conduta
            </h2>
            <ul>
              <li>
                <a href="pdfs/CODIGO DE CONDUTA - EPPOLIX.pdf" target="_blank">
                  Confira nosso código de conduta
                </a>
              </li>
            </ul>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium">Nome <span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">Mensagem <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[100px]" />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-md">Enviar</button>
                <button type="reset" className="px-4 py-2 border border-gray-400 rounded-md">Limpar</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 text-base font-medium">
            <li><a href="#" className="footer-link">Sobre</a></li>
            <li><a href="#services" className="footer-link">Serviços</a></li>
            <li><a href="#technology" className="footer-link">Tecnologia</a></li>
            <li><a href="#treatment" className="footer-link">Tratamento</a></li>
            <li><a href="#contacts" className="footer-link">Contato</a></li>
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
