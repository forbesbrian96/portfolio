import "./App.css";
import linkedinImage from "./linkedin.jpeg";

const App = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700;800&display=swap');
      </style>

      <div className="overlay">
        <div className="page-head">
          <p className="name">Brian Forbes</p>
          <p className="title">Software Engineer</p>
          <p className="text, brand-statement">
            A developer with a passion for tackling challenges head on
          </p>
        </div>

        <div className="white-section">
          <p className="section-title">ABOUT ME</p>

          <div className="about-me">
            <img src={linkedinImage} alt="LinkedIn" className="li-photo"/>

            <div className="about-me-text">

            <p className="text, am-1">
              I’m a driven software engineer with expertise in programming
              languages, frameworks, and databases, including JavaScript,
              Python, React, Django, Java, PostgreSQL, and MongoDB. My
              collaborative nature and strong problem-solving skills enable me
              to work well in a team environment and approach challenges with a
              strategic mindset
            </p>

            <p className="text, am-2">
              As a self-motivated and adaptable individual, I thrive in dynamic
              work environments and welcome opportunities to expand my knowledge
              and skill set. With a positive attitude and a commitment to
              excellence, I am eager to contribute to innovative software
              development projects that make a real impact
            </p>
            </div>
          </div>
        </div>

        <div className="gray-section">
        <p className="section-title">SKILLS</p>

        <p className="text">Languages - JavaScript, HTML, CSS, Java, Python, SQL, Mongo, JSON | Libraries and Frameworks - React, Express.js, Django, Jquery, Spring Boot, Bootstrap | Database -  PostgreSQL, MongoDB | Other - RESTful Routing, JSON api | Interpersonal Skills - Highly collaborative, strategic problem solver, strong written and verbal communicator</p>
        </div>

        <div className="white-section">
        <p className="section-title">PROJECTS</p>

          <div className="resume-box">
            <a href="https://docs.google.com/document/d/1FJlrP-NRLSSrXJuH9fXd9pMgiTZnUgFjlfMrylIi3-k/edit#heading=h.gjdgxs" className="resume">
              RESUME
            </a>
          </div>
        </div>

        <div className="gray-section">
        <p className="section-title">GET IN TOUCH</p>

          <p className="text">
            Please don’t hesitate to reach out if you have any questions, or
            opportunities. I listen to all voicemails, and respond to all texts.
            Any of the below listed contact methods will see a swift response
          </p>

          <br />

          <h3>Call or Text</h3>
          <p>(843)-666-2070</p>

          <h3>Email</h3>
          <p>forbesbrian96@gmail.com</p>

          <a href="https://github.com/forbesbrian96">GitHub</a>

          <br />

          <a href="https://www.linkedin.com/in/brian-forbes-swe/">LinkedIn</a>
        </div>
      </div>
    </>
  );
};

export default App;
