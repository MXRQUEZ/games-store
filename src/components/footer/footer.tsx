import "./footer.scss";
import sponsors from "@/components/footer/sponsors";
import SponsorLogo from "@/components/footer/sponsorLogo";

const yearNow = new Date().getFullYear();
const copyrights = `&copy;${yearNow} Games Store | All rights reserved | Terms Of Service | Privacy`;

const Footer = () => (
  <footer className="footer">
    <hr />
    <p>{copyrights}</p>
    {Object.keys(sponsors).map((sponsor) => (
      <SponsorLogo key={sponsor} sponsor={sponsors[sponsor]} />
    ))}
  </footer>
);

export default Footer;
