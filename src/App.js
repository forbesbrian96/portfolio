import "./App.css";
import linkedinImage from "./linkedin.jpeg";
import reMEMBER from "./reMEMBER.png";
import SLASHR from "./SLASHR.png";
import fleur from "./fleur.png";
import github from "./GitHub-Mark.png";
import linkedinlogo from "./linkedin-small-logo.png";

const App = () => {
  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700;800&display=swap');
        </style>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </head>

      <body>
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
              <img src={linkedinImage} alt="LinkedIn" className="li-photo" />

              <div className="about-me-text">
                <p className="text, am-1">
                  I’m a driven software engineer with expertise in programming
                  languages, frameworks, and databases, including JavaScript,
                  Python, React, Django, Java, PostgreSQL, and MongoDB. My
                  collaborative nature and strong problem-solving skills enable
                  me to work well in a team environment and approach challenges
                  with a strategic mindset
                </p>

                <p className="text, am-2">
                  As a self-motivated and adaptable individual, I thrive in
                  dynamic work environments and welcome opportunities to expand
                  my knowledge and skill set. With a positive attitude and a
                  commitment to excellence, I am eager to contribute to
                  innovative software development projects that make a real
                  impact
                </p>
              </div>
            </div>
          </div>

          <div className="gray-section">
            <p className="section-title">SKILLS</p>

            <div className="skills">
              <p className="text">
                <div className="text-bold">Languages</div> JavaScript, HTML,
                CSS, Java, Python, SQL
                <div className="text-bold">Libraries and Frameworks</div>React.js, React Native,
                Express.js, Django, jQuery, Spring Boot, Mongoose, Bootstrap
                <div className="text-bold">Databases</div>PostgreSQL, MongoDB
                <div className="text-bold">Other</div>RESTful Routing, JSON api,
                Git
                <div className="text-bold">Interpersonal Skills</div>Highly
                collaborative, strategic problem solver, strong written and
                verbal communicator
              </p>
            </div>
          </div>

          <div className="white-section">
            <div className="projects">
              <p className="section-title">PROJECTS</p>
              <p className="project-text-bold">Click the images below to see the live sites</p>
              <div className="project-box">

                <div className="project">
                <a href="https://powerful-badlands-84110.herokuapp.com/" target="_blank">
                <img src={reMEMBER} alt="re:MEMBER" className="project-photo" />
                </a>
                <div className="project-description">
                <p className="text-bold">
                  re:MEMBER
                  </p>
                  <p>
                  Web-based CRM that enables personalized customer interactions and meets the specific needs of service providers
                </p>
                <p className="text-bold">
                  Technologies Used
                </p>
                <p>
                  Java | Spring Boot | PSQL | JavaScript | React | GitHub | Heroku 
                </p>
                <img src={github} className="contact-logo-gh"></img>
                  <a
                    href="https://github.com/forbesbrian96/reMEMBER_front-end"
                    className="project-text-title"
                  >
                    Front End
                  </a>
                  <a href="https://github.com/forbesbrian96/reMEMBER_back-end" className="project-text-title">
                    Back End
                  </a>
                  </div>
                </div>

                <div className="project">
                <a href="https://agile-meadow-78400.herokuapp.com/">
                <img src={SLASHR} alt="SLASHR" className="project-photo" />
                </a>
                <div className="project-description">
                <p className="text-bold">
                  SLASHR
                  </p>
                  <p>
                  Web application for displaying and tracking horror films using the MERN stack, as well as the TMDB API
                </p>
                <p className="text-bold">
                  Technologies Used
                </p>
                <p>
                  Python | Express | Mongo | Mongoose | TMDB (API) | JavaScript | React | GitHub | Heroku 
                </p>
                <img src={github} className="contact-logo-gh"></img>
                  <a
                    href="https://github.com/forbesbrian96/Slashr_front-end"
                    className="project-text-title"
                  >
                    Front End
                  </a>
                  <a href="https://github.com/forbesbrian96/Slashr_back-end" className="project-text-title">
                    Back End
                  </a>
                  </div>
                </div>

                <div className="project">
                <a href="https://agile-bastion-78512.herokuapp.com/api/plants">
                <img src={fleur} alt="fleur" className="project-photo" />
                </a>
                <div className="project-description">
                <p className="text-bold">
                  fleur
                  </p>
                  <p>
                  Web-based application for logging plants and tracking gardening activities, implemented with React Routers
                </p>
                <p className="text-bold">
                  Technologies Used
                </p>
                <p>
                  Python | Django | PSQL | JavaScript | React | GitHub | Heroku 
                </p>
                <img src={github} className="contact-logo-gh"></img>
                  <a
                    href="https://github.com/forbesbrian96/Fleur_front-end"
                    className="project-text-title"
                  >
                    Front End
                  </a>
                  <a href="https://github.com/forbesbrian96/Fleur_back-end" className="project-text-title">
                    Back End
                  </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="gray-section">
            <div className="resume-box">
              <a
                href="https://docs.google.com/document/d/1FJlrP-NRLSSrXJuH9fXd9pMgiTZnUgFjlfMrylIi3-k/edit#heading=h.gjdgxs"
                className="resume"
              >
                RESUME
              </a>
            </div>
          </div>

          <div className="white-section">
            <p className="contact-section-title">GET IN TOUCH</p>
            <div className="contact">
              <p className="contact-text-blurb">
                Please don’t hesitate to reach out if you have any questions, or
                opportunities. I listen to all voicemails, and respond to all
                texts. Follow the links below to see my GitHub and LinkedIn
              </p>

              <div className="contact-info">
                <div className="contact-section">
                  <span class="material-symbols-outlined">call</span>
                  <p className="contact-text">(843)-666-2070</p>
                </div>

                <div className="contact-section">
                  <span class="material-symbols-outlined">mail</span>
                  <p className="contact-text">forbesbrian96@gmail.com</p>
                </div>

                <div className="contact-section">
                  <img src={github} className="contact-logo-gh"></img>
                  <a
                    href="https://github.com/forbesbrian96"
                    className="text-title"
                  >
                    GitHub
                  </a>
                </div>

                <div className="contact-section">
                  <img src={linkedinlogo} className="contact-logo-li"></img>
                  <a
                    href="https://www.linkedin.com/in/brian-forbes-swe/"
                    className="text-title"
                  >
                    LinkedIn
                  </a>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default App;
