function Projects() {
  return (
   <section id="projects" className="section3">
    <h2>Projects</h2>
    <p>Here are some of my recent projects that showcase my skills and creativity.</p>
    <div className="projects-container">
    <div className="project-card">
      <h3>Portfolio Website </h3>
      <img src="/landing.jpg" alt="Project 1" class="project-image" loading="lazy" />
       <p>A personal portfolio website showcasing my skills and projects.</p>
     <div class="project-buttons">
     <a href="https://your-live-site.com" target="_blank" class="site-link">View Site</a>
     <a href="https://github.com/your-repo-link" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
      </a>
      </div>
      </div>


      <div className="project-card">
        <h3>Portfolio Website </h3>
        <img src="/landing.jpg" alt="Project 2" class="project-image" loading="lazy" />
        <p>A personal portfolio website showcasing my skills and projects.</p>
      <div class="project-buttons">
     <a href="https://your-live-site.com" target="_blank" class="site-link">View Site</a>
     <a href="https://github.com/your-repo-link" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
      </a>
      </div>
      </div>

      <div className="project-card">
        <h3>Portfolio Website </h3>
        <img src="/landing.jpg" alt="Project 4" class="project-image" loading="lazy" />
        <p>A personal portfolio website showcasing my skills and projects.</p>
       <div class="project-buttons">
      <a href="https://your-live-site.com" target="_blank" class="site-link">View Site</a>
      <a href="https://github.com/your-repo-link" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
    </a>
    </div>
     </div>
    </div>
  </section>
  );
}

export default Projects;
