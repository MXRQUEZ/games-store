import Container from "@/components/ui/container/container";
import classes from "@/pages/about/about.module.scss";
import { about, gitHubLink, gitHubRepoLink, gmail } from "@/constants/constants";

const About = () => (
  <Container id={classes.about} title="About us">
    <div className={classes.about}>
      <p>{about}</p>
    </div>
    <div className={classes.contacts}>
      <hr />
      <p className={classes.contacts__author}>This project was made by Svistun Sergey</p>
      <p className={classes.contacts__title}>Contact me:</p>
      <p>{gmail}</p>
      <p className={classes.contacts__title}>GitHub:</p>
      <a className={classes.link} href={gitHubLink} target="_blank" rel="noopener noreferrer">
        My GitHub
      </a>
      <a className={classes.link} href={gitHubRepoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  </Container>
);
export default About;
