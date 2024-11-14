import Resume from "../assets/Boluwatife Lambe with portfolio.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="grid">
        <div className="about-content">
          <h1>About</h1>
          <ul>
            <li>
              <strong>Name:</strong> Lambe Boluwatife
            </li>
            <li>
              <strong>Email:</strong> boluwatifelambe@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> (+234) 80 8364 7531
            </li>
            <li>
              <strong>Address:</strong> Lagos, Nigeria
            </li>
            <li>
              <strong>Nationality:</strong> Nigerian
            </li>
          </ul>

          <h3>PROFESSIONAL PROFILE</h3>
          <h6>
            I am a dedicated and versatile software developer with front-end and
            back-end development expertise. I specialize in the MERN stack
            (MongoDB, Express, React, and Node.js). With a background in
            building and maintaining scalable web applications, I bring a
            balanced approach to software development that prioritizes
            performance, user experience, and maintainability.
            <br /> <br />
            My technical proficiency spans HTML, CSS, JavaScript, React, and
            backend technologies, enabling me to develop end-to-end solutions
            for various applications. In addition to technical skills, I am
            passionate about continuous learning and contributing to the
            developer community. A former Andela intern, I now collaborate
            within the developer ecosystem, offering mentorship and insight to
            emerging developers. Known for a proactive problem-solving mindset,
          </h6>

          <a href={Resume} rel="noreferrer" target="_blank">
            DOWNLOAD RESUME
          </a>
        </div>
        <div className="about-img"></div>
      </div>
    </div>
  );
};

export default About;
