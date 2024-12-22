import Profile from "../assets/profile.svg";
import Card from "./Card";
import projects from "../mock/projects.json";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-intro">
          <p className="home-name">ADEYEMO OLUFEMI</p>
          <p className="home-title">FRONTEND DEVELOPER</p>
          <p className="home-description">
            I implement user interface design and solve user problems with HTML,
            CSS AND Javascript. I have 2 years of making products that solve
            user problems and implementing responsive website.
          </p>
          <div className="contact-button">Contact Me</div>
        </div>
        <div>
          <img className="image1" src={Profile} />
        </div>
      </div>
      <div>
        <p className="section-title">Get to know me</p>
        <div className="about-section">
          <img className="profile-image" src={Profile} />
          <div className="about-description">
            <p className="about-description">
              I implement user interface design and solve user problems with
              HTML, CSS AND Javascript. I have 2 years of making products that
              solve user problems and implementing responsive website. I
              implement user interface design and solve user problems with HTML,
              CSS AND Javascript. I have 2 years of making products that solve
              user problems and implementing responsive website.I implement user
              interface design and solve user problems with HTML, CSS AND
              Javascript. I have 2 years of making products that solve user
              problems and implementing responsive website.
            </p>
            <div className="contact-button">Contact Me</div>
          </div>
        </div>
      </div>

      <div className="projects-section">
        <p className="section-title">Projects</p>
        <div className="projects-container">
          {projects.map((project) => (
            <Card key={project.id} source={project.source} title={project.title} tags={project.tags} />
          ))}
        </div>
      </div>
      
      <div className="contact-section">
        <p className="contact-question">Do you have a project in mind?</p>
        <p className="contact-title">Contact me</p>
        <p className="contact-email">adeyemotolulope2@gmail.com</p>
      </div>
    </div>
  );
};

export default Home;
