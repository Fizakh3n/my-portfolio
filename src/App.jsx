function App() {
  return (
    <div>
      <header>
        <h1>Fiza's Portfolio</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero">
        <h2>Hey, I’m Fiza 👋</h2>
        <p>Aspiring Data Scientist. Deep Learning + NLP Lover. Future Product Queen.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {/* Later we'll map cards here */}
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>Currently pursuing BTech. Passionate about Data, Design, and Dua.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Let’s connect: fiza@example.com</p>
      </section>

      <footer>
        Built with 💻 + ☕ + 🧕🏽 by Fiza • © {new Date().getFullYear()}
      </footer>

    </div>
  );
}
export default App;


