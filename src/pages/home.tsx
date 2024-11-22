import Header from '../components/header';
import './home.css';

const Home = () => {
  return (
    <div className="landing-page">
      <Header />
      <header className="main-header">
        <h1>Bem-vindo à página do SANTOS FC</h1>
        <p>O ÚNICO TIME A PARAR UMA GUERRA</p>
        <a href="#cta" className="cta-button">Saiba Mais</a>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Títulos mais importantes</h2>
          <p>Taça Mundial 2 títulos (1962 e 1963).</p>
          <p>Taça Copa Libertadores da América 3 (títulos 1962, 1963 e 2011).</p>
          <p>Taça Campeonato Brasileiro 8 títulos (1961, 1962, 1963, 1964, 1965, 1968, 2002 2004).</p>
          <p>Taça Recopa Sul-Americana 1 título (1968).</p>
        </div>
        <div className="feature">
          <h2>Meninos da vila</h2>
          <p>Ser santista é ter orgulho de ver talentos brilhando dentro e fora do Brasil. Jogadores como Neymar, Rodrygo e tantos outros começaram no Santos, consolidando o clube como o melhor formador de craques do país. O futuro sempre reserva novos ídolos para o Peixe!</p>
        </div>
        <div className="feature">
          <h2>Rivais</h2>
          <p>Se for corinthiano, palmeirense ou são paulino, saia daqui imediatamente.</p>
        </div>
      </section>

      {/* Componente de Contato */}
      <section className="contact-component" id="contact">
        <h2>Entre em contato</h2>
        <p>Envie sua dúvida, estamos à disposição para responder!</p>
        <form action="#" method="POST">
          <input type="email" placeholder="Seu melhor Email" required />
          <textarea placeholder="Motivo do contato" required></textarea>
          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer id="cta" className="footer">
        <div className="footer-logo">
          <p>LogoMarca</p>
          <div className="social-icons">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Empresa</h3>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Faça parte do time</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Funcionalidades</h3>
            <ul>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Análise de dados</a></li>
              <li><a href="#">Boot discord</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Recursos</h3>
            <ul>
              <li><a href="#">IOS & Android</a></li>
              <li><a href="#">Teste a Demo</a></li>
              <li><a href="#">Clientes</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-note">Feito com amor na aula de Programação Web 💙 &copy;2024 AktieTech - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
