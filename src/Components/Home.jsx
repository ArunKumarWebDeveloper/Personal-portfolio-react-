import BlurText from "./BlurText";

function Home() {
 const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <section id="home" >
      <img src="/img2 (4).jpg" className="home-image" alt="Coding workspace"></img>
      <div className="home-overlay">
        
<BlurText className="text-type"
  text="ARUN KUMAR.R"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
/>

<BlurText className="text-p"
  text="Web Developer | Programmer"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
/>
      </div>
    </section>
  );
}

export default Home;
