function About() {
  return (
    <section id="about" className="section2">
      <h2>About Me</h2>
      <div className="about-container">
        <img src="/2517915.jpg"
          alt="Arun Kumar R"
          className="profile-image"
          loading="lazy"
        />
        <p>
          Hi, I'm Arun Kumar R, a passionate web developer with a keen interest in
          creating dynamic and responsive web applications. I am skilled in HTML, CSS,
          JavaScript, and frameworks like React. I love solving problems and building
          real-world projects that make a difference.
        </p>
     <div className="tool1">
  <div className="tool-card">
    <img src="/vs.png" alt="VS Code" />
    <p>VS Code</p>
  </div>
  <div className="tool-card">
    <img src="/chrome.png" alt="Chrome DevTools" />
    <p>Chrome DevTools</p>
  </div>
   <div className="tool-card">
    <img src="/github.png" alt="Chrome DevTools" />
    <p>GitHub</p>
  </div>
</div>
      </div>
    </section>
  );
}

export default About;

