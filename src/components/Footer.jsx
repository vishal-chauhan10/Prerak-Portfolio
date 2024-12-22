import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-logo">FemiBlaq</p>
        <div className="social-icons">
          <a href="#" target="_blank">
            <FaInstagram />
          </a>
          <a href="#" target="_blank">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank">
            <FaGithub />
          </a>
          <a href="#" target="_blank">
            <FaTwitter />
          </a>
        </div>
      </div>
      <p className="copyright">© FemiBlaq 2022</p>
    </div>
  );
};

export default Footer;