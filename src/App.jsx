const projects = [
  {
    name: 'Career Councellor',
    description: 'Built with Spring Boot for career guidance and counseling support.',
  },
  {
    name: 'Tunr',
    description: 'Movie and song recommendation app built with React and Django.',
  },
  {
    name: 'ML Project',
    description: 'Malicious links and PDF checker using machine learning techniques.',
  },
];

const skills = ['Java', 'Python', 'C', 'OOP', 'ML', 'SQL'];

const career = [
  {
    level: '10th',
    place: 'Samashti International School',
    score: '87%',
  },
  {
    level: '12th',
    place: 'Page Junior College',
    score: '92%',
  },
  {
    level: 'Engineering',
    place: 'Current GPA',
    score: '9.85',
  },
];

const socials = [
  {
    name: 'CodeChef',
    href: 'https://www.codechef.com/users/veda_2006',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/veda-kosuri-603b47367/',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/vedakosuri06',
  },
];

const currentFocus = [
  'Open to internships and project collaboration',
  'Building full-stack apps with React and Spring Boot',
  'Interested in ML, backend systems, and practical problem solving',
];

const quickInfo = [
  'Engineering student',
  'React and backend projects',
  'Simple, practical UI focus',
];

function App() {
  return (
    <main className="page-shell">
      <section className="simple-card">
        <h1 className="name-title">Veda Kosuri</h1>
        <p className="about-text">
          I am an engineering student who enjoys building simple, useful applications with
          React, Spring Boot, Django, and machine learning.
        </p>
        <p className="subtitle-text">
          I like turning ideas into practical projects and learning by building.
        </p>
      </section>

      <section className="simple-card">
        <h2 className="section-title">Projects I did</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-item" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-card">
        <h2 className="section-title">Skills</h2>
        <div className="skill-list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="simple-card">
        <h2 className="section-title">Currently</h2>
        <div className="focus-list">
          {currentFocus.map((item) => (
            <div className="focus-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="simple-card">
        <h2 className="section-title">Quick info</h2>
        <div className="quick-grid">
          {quickInfo.map((item) => (
            <div className="quick-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="simple-card">
        <h2 className="section-title">Career</h2>
        <div className="career-list">
          {career.map((item) => (
            <article className="career-item" key={item.level}>
              <div>
                <p className="career-label">{item.level}</p>
                <h3>{item.place}</h3>
              </div>
              <div className="career-score">{item.score}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-card">
        <h2 className="section-title">Important links</h2>
        <div className="link-list">
          <a className="simple-link simple-link-primary" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          {socials.map((social) => (
            <a
              className="simple-link"
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}

export default App;
