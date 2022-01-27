import "./footer.scss";
import sponsors from "@/components/footer/sponsors";

const yearNow = new Date().getFullYear();
const footerPrivacy = `&copy;${yearNow} Games Store | All rights reserved | Terms Of Service | Privacy`;

const Footer = () => (
  <footer className="footer">
    <hr />
    <p>{footerPrivacy}</p>
    <a className="logo__large" target="_blank" rel="noopener noreferrer" href={sponsors.activision.url}>
      <img src={sponsors.activision.logo} alt={sponsors.activision.description} />
    </a>
    <a className="logo" target="_blank" rel="noopener noreferrer" href={sponsors.rockstar.url}>
      <img src={sponsors.rockstar.logo} alt={sponsors.rockstar.description} />
    </a>
    <a className="logo" target="_blank" rel="noopener noreferrer" href={sponsors.ubisoft.url}>
      <img src={sponsors.ubisoft.logo} alt={sponsors.ubisoft.description} />
    </a>
    <a className="logo__large" target="_blank" rel="noopener noreferrer" href={sponsors.cdProject.url}>
      <img src={sponsors.cdProject.logo} alt={sponsors.cdProject.description} />
    </a>
  </footer>
);

export default Footer;
