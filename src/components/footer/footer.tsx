import "./footer.css";
import activisionLogo from "images/activision-1.png";
import rockstarLogo from "images/rockstar-1.png";
import ubisoftLogo from "images/ubisoft-1.png";
import cdProjLogo from "images/cd-project-red-1.png";
import sponsorLinks from "@/components/footer/sponsorLinks";

const Footer = () => (
  <footer className="footer">
    <hr />
    <p>&copy;{new Date().getFullYear()} Games Store | All rights reserved | Terms Of Service | Privacy</p>
    <a className="footer" target="_blank" rel="noopener noreferrer" href={sponsorLinks.activision}>
      <img src={activisionLogo} alt={activisionLogo} width="100" height="50" />
    </a>
    <a className="footer" target="_blank" rel="noopener noreferrer" href={sponsorLinks.rockstar}>
      <img src={rockstarLogo} alt={rockstarLogo} width="50" height="50" />
    </a>
    <a className="footer" target="_blank" rel="noopener noreferrer" href={sponsorLinks.ubisoft}>
      <img src={ubisoftLogo} alt={ubisoftLogo} width="50" height="50" />
    </a>
    <a className="footer" target="_blank" rel="noopener noreferrer" href={sponsorLinks.cdProject}>
      <img src={cdProjLogo} alt={cdProjLogo} width="100" height="50" />
    </a>
  </footer>
);

export default Footer;
