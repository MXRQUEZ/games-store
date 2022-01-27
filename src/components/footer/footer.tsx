import "./footer.css";
import sponsors from "@/components/footer/sponsors";

const Footer = () => (
  <footer className="footer">
    <hr />
    <p>&copy;{new Date().getFullYear()} Games Store | All rights reserved | Terms Of Service | Privacy</p>
    <a className="footer" target="_blank" rel="noopener noreferrer" href={sponsors.activision.url}>
      <img src={sponsors.activision.logo} alt={sponsors.activision.logo} width="100" height="50" />
    </a>
    <a className="footer" target="_blank" rel="noopener noreferrer" href={sponsors.rockstar.url}>
      <img src={sponsors.rockstar.logo} alt={sponsors.rockstar.logo} width="50" height="50" />
    </a>
    <a className="footer" target="_blank" rel="noopener noreferrer" href={sponsors.ubisoft.url}>
      <img src={sponsors.ubisoft.logo} alt={sponsors.ubisoft.logo} width="50" height="50" />
    </a>
    <a className="footer" target="_blank" rel="noopener noreferrer" href={sponsors.cdProject.url}>
      <img src={sponsors.cdProject.logo} alt={sponsors.cdProject.logo} width="100" height="50" />
    </a>
  </footer>
);

export default Footer;
