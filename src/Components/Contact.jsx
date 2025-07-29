import React from 'react';

function Contact() {

  return (
   <section id="contact" className="section7">
  <h2>Contact Me</h2>
  <p>If you'd like to get in touch, feel free to reach out via email, phone, or social media.</p>

  <div className="contact-info">
  <div className="Contact"><img className="contact-img"src="/email.png" alt="Email"></img>
      <a href="mailto:arunlokesh78@gmail.com">arunlokesh78@gmail.com</a>
   </div>

      <div className="Contact"> <img className="contact-img" src="/phone.png" alt="Phone"></img>
      <a href="tel:+919019944841">+91 9019944841</a>
      </div>

     <div className="Contact">
      <img className="contact-img" src="/linkedin.png" alt="Linkedin"></img>
      <a href="https://www.linkedin.com/in/arun-kumar-r-920841235" target="_blank">
        linkedin.com/in/arun-kumar-r
      </a></div>
  

    <div className="Contact"><img className="contact-img" src="/github.png" alt="GitHub"></img>
      <a href="https://github.com/ArunKumarWebDeveloper" target="_blank">
        github.com/ArunKumarWebDeveloper
      </a></div>

  </div>
</section>
  );
}

export default Contact;