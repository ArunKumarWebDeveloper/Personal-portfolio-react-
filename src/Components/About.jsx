import SplitText from "./SplitText";

function About() {

  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

  return (
    <section id="about" className="section2">
      <h2>About Me</h2>
      <div className="about-container">
      
          <img
            src="/Profile.jpg"
            alt="Arun Kumar R"
            className="profile-image"
            loading="lazy"
          />


<div className="p">
<SplitText
  text="I'm Arun Kumar R, a passionate web developer with a keen interest in creating dynamic and responsive web applications. I am skilled in HTML, CSS, JavaScript, and frameworks like React. I love solving problems and building real-world projects that make a difference."
  delay={6}
  duration={0.5}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
</div>


               
          <div className="tool1">
            <SplitText
  text="Tools I Use for Web Development "
  className="tp"
  delay={7}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
      
            <div className="tool-card">
              <img src="/vs.png" alt="VS Code" />
              
            </div>
            <div className="tool-card">
              <img src="/postman.png" alt="Postman" />
    
            </div>
            <div className="tool-card">
              <img src="/github.png" alt="GitHub" />
     
            </div>
          </div>
        </div>
    </section>
  );
}

export default About;


