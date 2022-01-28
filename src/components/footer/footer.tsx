import "./footer.scss";
import sponsors from "@/components/footer/sponsors";
import SponsorLogos from "@/components/footer/sponsorLogos";

const yearNow = new Date().getFullYear();
const copyrights = `${yearNow} Games Store | All rights reserved | Terms Of Service | Privacy`;

const Footer = () => (
  <footer className="footer">
    <hr />
    <p>&copy;{copyrights}</p>
    <SponsorLogos sponsorsList={sponsors} />
  </footer>
);

export default Footer;
