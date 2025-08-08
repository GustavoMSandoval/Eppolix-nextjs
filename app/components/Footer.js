import { Gavel, Mail, MapPin, Phone, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer id='contacts' className="bg-gray-100 text-gray-800 text-sm">
      <section className="py-8 border-b border-gray-300">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h2 className="footer-subtitle text-lg font-semibold mb-4 border-b border-gray-300 pb-2">
              <Phone size={18}/> Contato
            </h2>
            <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="mr-2 mt-0.5 flex-shrink-0" size={16} />
              <span>Rua das Samambaias, 10 – Chácara Estela – Santana de Parnaíba/SP – Brasil - CEP: 06513-200</span>
            </li>
            <li>
              <div className="flex items-start">
                <Phone className="mr-2 mt-0.5 flex-shrink-0" size={16} />
                <div className="grid grid-cols-2 gap-1">
                  <span>+55 11 4154-4526</span>
                  <span>+55 11 4154-5804</span>
                  <span>+55 11 4154-5497</span>
                  <span>+55 11 4154-2165</span>
                  <span>+55 11 4154–4561</span>
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <Mail className="mr-2 mt-0.5 flex-shrink-0" size={16} />
              <a href="mailto:comercial@eppolix.com.br" className="hover:underline hover:text-blue-700">
                comercial@eppolix.com.br
              </a>
            </li>
          </ul>

            <h2 className="footer-subtitle text-lg font-semibold mt-8 mb-4 border-b border-gray-300 pb-2">
              <Users/> Canal de Ética
            </h2>
            <ul>
              <li>
                <a href="https://eppolix.becompliance.com/canal-etica/canal-denuncias" target="_blank" className="hover:underline">
                  Confira nosso canal de ética
                </a>
              </li>
            </ul>

            <h2 className="footer-subtitle text-lg font-semibold mt-8 mb-4 border-b border-gray-300 pb-2">
              <Gavel/> Código de Conduta
            </h2>
            <ul>
              <li>
                <a href="pdfs/CODIGO DE CONDUTA - EPPOLIX.pdf" target="_blank" className="hover:underline">
                  Confira nosso código de conduta
                </a>
              </li>
            </ul>
          </div>
          <div className="h-full">
            <h2 className="footer-subtitle text-lg font-semibold mb-4 border-b border-gray-300 pb-2">
             <MapPin/> Localização
            </h2>
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.126281376727!2d-46.91754592473835!3d-23.52950966021446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03a20d8fb0c9%3A0x9f5d7a8a2e78b1b5!2sR.%20das%20Samambaias%2C%2010%20-%20Ch%C3%A1cara%20Estela%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP%2C%2006513-200!5e0!3m2!1spt-BR!2sbr!4v1718215728755!5m2!1spt-BR!2sbr" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Eppolix"
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="footer-subtitle text-lg font-semibold mb-4 border-b border-gray-300 pb-2">
              <Mail/> Envie uma mensagem
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium">Nome <span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">Mensagem <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" className="w-full border border-gray-300 rounded-md px-3 py-2 min-h-[100px]" required />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Enviar
                </button>
                <button type="reset" className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-200 transition-colors">
                  Limpar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="py-6 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 text-base font-medium">
            <li><a href="#" className="footer-link hover:underline">Sobre</a></li>
            <li><a href="#services" className="footer-link hover:underline">Serviços</a></li>
            <li><a href="#technology" className="footer-link hover:underline">Tecnologia</a></li>
            <li><a href="#treatment" className="footer-link hover:underline">Tratamento</a></li>
            <li><a href="#contacts" className="footer-link hover:underline">Contato</a></li>
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