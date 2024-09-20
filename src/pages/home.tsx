import Header from '../components/header';
import home from '../home';

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
          <p>Taça Mundial 2 títulos (1962 e 1963).

Taça Copa Libertadores da América 3 (títulos 1962, 1963 e 2011).

Taça Campeonato Brasileiro 8 títulos (1961, 1962, 1963, 1964, 1965, 1968, 2002 2004).

Taça Recopa Sul-Americana 1 título (1968).</p>
        </div>
        <div className="feature">
          <h2>Meninos da vila</h2>
          <p> Ser santista é ter orgulho de ver talentos brilhando dentro e fora do Brasil. Jogadores como Neymar, Rodrygo e tantos outros começaram no Santos, consolidando o clube como o melhor formador de craques do país. O futuro sempre reserva novos ídolos para o Peixe!






</p>
        </div>
        <div className="feature">
          <h2>Rivais</h2>
          <p>Se for corinthiano, palmeirense ou são paulino, saia daqui imediatamente.</p>
        </div>
      </section>

      <footer id="cta" className="footer">
        <h3>Entre em contato conosco</h3>
        <p>Email: Gabrisantista@hotmail.com</p>
        <p>Telefone: (44) 997364170</p>
      </footer>
    </div>
  );
};

export default Home;
