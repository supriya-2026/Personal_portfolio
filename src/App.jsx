import React,{useState} from "react";

// import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    alert("Please fill all fields");
    return;
  }

  console.log("Form Data:", formData);

  alert("Message submitted successfully!");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
};
  return (
    <>
      <Navbar />

      {/* ================= HOME ================= */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small-text">Hello, I'm</p>

          <h1>Supriya Sahoo</h1>

          <h2>Frontend Developer</h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly websites
            using HTML, CSS, JavaScript and React JS.
          </p>
           <div className="hero-buttons">

  <a
    href="/Supriya_CV.pdf"
    download
    className="btn primary-btn"
  >
    Download CV
  </a>

  <a
    href="#contact"
    className="btn secondary-btn"
  >
    Contact Me
  </a>

</div>

        
        </div>

        <div className="hero-image">
          <img
            src="/my image1.jpg"
            alt="Supriya Sahoo"
            className="profile-image"
          />
        </div>
       
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section" id="about">
        <div className="about-container">

          <div className="about-image">
            <img
              src="/my image1.jpg"
              alt="About Supriya"
            />
          </div>

          <div className="about-content">
            <p className="section-subtitle">About Me</p>

            <h2>I'm a Passionate Frontend Developer</h2>

            <p>
              Hello! I'm Supriya Sahoo, a passionate Frontend Developer
              who enjoys creating beautiful and responsive websites.
            </p>

            <p>
              I have experience working with HTML, CSS, JavaScript and
              React JS. I love learning new technologies and building
              projects that provide a great user experience.
            </p>

            <a href="#contact" className="btn primary-btn">
              Hire Me
            </a>
          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p className="section-subtitle">My Skills</p>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="skills-container">
           <div className="skill-card">

  <div className="skill-icon">🌐</div>

  <h3>HTML</h3>

  <p>Semantic and accessible web structure.</p>

  <div className="skill-progress">
    <div className="skill-progress-bar html"></div>
  </div>

  <span className="skill-percentage">90%</span>

</div>

<div className="skill-card">

  <div className="skill-icon">🎨</div>

  <h3>CSS</h3>

  <p> Creating responsive layouts, modern designs, animations and
  user-friendly interfaces.</p>

  <div className="skill-progress">
    <div className="skill-progress-bar html"></div>
  </div>

  <span className="skill-percentage">90%</span>

</div>

<div className="skill-card">

  <div className="skill-icon">⚡</div>

  <h3>JavaScript</h3>
   <p>Building interactive and dynamic web applications.</p>

  <div className="skill-progress">
    <div className="skill-progress-bar html"></div>
  </div>

  <span className="skill-percentage">80%</span>

</div>

<div className="skill-card">

  <div className="skill-icon">✡️</div>

  <h3>ReactJs</h3>

 <p>Developing reusable components and modern web applications.</p>

  <div className="skill-progress">
    <div className="skill-progress-bar html"></div>
  </div>

  <span className="skill-percentage">75%</span>

</div>
         
          </div>
      </section>

      {/* ================= PROJECTS ================= */}

<section className="projects-section" id="projects">

  <div className="section-heading">
    <p className="section-subtitle">My Projects</p>
    <h2>Recent Projects</h2>
  </div>

  <div className="projects-container">

    {/* Project 1 */}
    <div className="project-card">
      

      <div className="project-image">
        <img
    src="/projects/movie.jpg"
    alt="Movie Browser App"
  />
      </div>

       <div className="project-content">

        <h3>Movie Browser App</h3>

        <p>
          A movie search application where users can search
          for movies and view movie information using an API.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>API</span>
        </div>

        <div className="project-buttons">
          {/* <a href="#"  target="_blank" rel="noreferrer" className="project-btn">
            Live Demo
          </a> */}

          <a href="https://github.com/supriya-2026/Movie_browser_app"  target="_blank" rel="noreferrer" className="project-btn github-btn">
            GitHub
          </a>
        </div>

      </div>
    </div>


    {/* Project 2 */}
    <div className="project-card">

      <div className="project-image">
         <img
    src="/projects/Receipe.jfif"
    alt="Movie Browser App"
  />
      </div>

      <div className="project-content">

        <h3>Recipe Finder App</h3>

        <p>
          A recipe finder application that allows users to
          search recipes and view ingredients and instructions.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>CSS</span>
          <span>API</span>
        </div>

        <div className="project-buttons">
          {/* <a href="#"  target="_blank" rel="noreferrer" className="project-btn">
            Live Demo
          </a> */}

          <a href="https://github.com/supriya-2026/Recipe_finder_app"  target="_blank" rel="noreferrer" className="project-btn github-btn">
            GitHub
          </a>
        </div>

      </div>
    </div>


    {/* Project 3 */}
    <div className="project-card">

      <div className="project-image">
        <img
    src="/projects/weather.jfif"
    alt="Weather App"
  />
      </div>

      <div className="project-content">

        <h3>Weather App</h3>

        <p>
          A weather application that displays current weather
          information based on the searched city.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>API</span>
        </div>

        <div className="project-buttons">
          {/* <a href="#"  target="_blank" rel="noreferrer" className="project-btn">
            Live Demo
          </a> */}

          <a href="https://github.com/supriya-2026/Weather_App"  target="_blank" rel="noreferrer" className="project-btn github-btn">
            GitHub
          </a>
        </div>

      </div>
    </div>


    {/* Project 4 */}
    <div className="project-card">

      <div className="project-image">
        <img
    src="/projects/todo.jpg"
    alt="Todo App"
  />
      </div>

      <div className="project-content">

        <h3>Todo App</h3>

        <p>
          A simple and interactive Todo application where
          users can add, complete and delete tasks.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="project-buttons">
          {/* <a href="#" className="project-btn">
            Live Demo
          </a> */}

          <a href="https://github.com/supriya-2026/TODO_App" className="project-btn github-btn">
            GitHub
          </a>
        </div>

      </div>
    </div>


    {/* Project 5 */}
    <div className="project-card">

      <div className="project-image">
        <img
    src="/projects/product.jfif"
    alt="Movie Browser App"
  />
      </div>

      <div className="project-content">

        <h3>Product Catalog App</h3>

       <p>A responsive product catalog application featuring product cards, search functionality, category-based filtering, and a clean, user-friendly interface.</p>

        <div className="project-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
        </div>

        <div className="project-buttons">
          {/* <a href="#" className="project-btn">
            Live Demo
          </a> */}

          <a href="https://github.com/supriya-2026/Product_Catalog_App" className="project-btn github-btn">
            GitHub
          </a>
        </div>

      </div>
    </div>


    {/* Project 6 */}
    <div className="project-card">

      <div className="project-image">
        <img
    src="/projects/amazon.jpg"
    alt="Personal_portfolio App"
  />
      </div>

      <div className="project-content">

        <h3>Amazon Clone</h3>

        <p>
        Amazon-inspired e-commerce website with product listings, search, category filtering, cart functionality, and responsive design.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className="project-buttons">
          {/* <a href="#" className="project-btn">
            Live Demo
          </a> */}

          <a href="https://github.com/supriya-2026/Amazon_clone" className="project-btn github-btn">
            GitHub
          </a>
        </div>

      </div>
    </div>

  </div> 

</section>

{/* ================= SERVICES ================= */}

{/* <section className="services-section" id="services">

  <div className="section-heading">
    <p className="section-subtitle">My Services</p>
    <h3>What I Can Do</h3>
  </div>

  <div className="services-container">

    <div className="service-card">
      <div className="service-icon">💻</div>

      <h3>Frontend Development</h3> */}

      {/* <p>
        I build modern and interactive websites using
        HTML, CSS, JavaScript and React JS.
      </p>
    </div>

    <div className="service-card">
      <div className="service-icon">📱</div>

      <h3>Responsive Design</h3>

      <p>
        I create responsive websites that work smoothly
        on mobile, tablet and desktop devices.
      </p>
    </div> */}

    {/* <div className="service-card">
      <div className="service-icon">⚛️</div>

      <h3>React Development</h3>

      <p>
        I develop reusable React components and
        interactive web applications.
      </p>
    </div>

  </div>

</section> */}

{/* ================= CONTACT ================= */}

<section className="contact-section" id="contact">

  <div className="section-heading">
    <p className="section-subtitle">Contact Me</p>

    <h2>Let's Work Together</h2>
  </div>

  <div className="contact-container">

    {/* Contact Information */}

    <div className="contact-info">

      <h3>Get In Touch</h3>

      <p>
        If you have a project or job opportunity,
        feel free to contact me.
      </p>

      <div className="contact-item">
        <span>📧</span>
         <div>
          <h4>Email</h4>
           <a href="mailto:sahoosupriya0002@gmail.com">
  sahoosupriya0002@gmail.com
</a>
          {/* <p>sahoosupriya0002@gmail.com</p> */}
        </div> 
       
      </div>

      <div className="contact-item">
        <span>📱</span>
        <div>
          <h4>Phone</h4>
          <a href="tel:+918114902393">
  +91 8114902393
</a>
          {/* <p>+91 8114902393</p> */}
        </div>
      </div>

      <div className="contact-item">
        <span>📍</span>
        <div>
          <h4>Location</h4>
          <p>Bhubaneswar, Odisha, India</p>
        </div>
      </div>

    </div>


    {/* Contact Form */}

    <form className="contact-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}

      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />

      <textarea
      name="message"
        rows="6"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="send-btn">
        Send Message
      </button>

    </form>

  </div>

</section>
<Footer/>
    </>
  );
}

export default App;