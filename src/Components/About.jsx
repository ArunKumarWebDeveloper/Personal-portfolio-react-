import ScrollReveal from './ScrollReveal';

function About() {

  return (
    <section id="about" className="section2">
      <h2>About Me</h2>
      <div className="about-container">
        {/* Left: Profile Image */}
        <div className="about-image">
          <img
            src="/profile.jpg"
            alt="Arun Kumar R"
            className="profile-image"
            loading="lazy"
          />
        </div>

        {/* Right: Text and Tool Cards */}
        <div className="about-content-right">
         <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  Hi, I'm Arun Kumar R, a passionate web developer with a keen interest in
            creating dynamic and responsive web applications. I am skilled in HTML, CSS,
            JavaScript, and frameworks like React. I love solving problems and building
            real-world projects that make a difference.
</ScrollReveal>
          <p class="pa">Tools Worked with</p>
          <div className="tool1">
            
            <div className="tool-card">
              <img src="/vs.png" alt="VS Code" />
              <p>VS Code</p>
            </div>
            <div className="tool-card">
              <img src="/postman.png" alt="Postman" />
              <p>Postman</p>
            </div>
            <div className="tool-card">
              <img src="/github.png" alt="GitHub" />
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


