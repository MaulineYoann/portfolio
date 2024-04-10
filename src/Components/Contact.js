import "../styles/Contact.scss";
import { links } from "../assets/Link/Link";

const Contact = () => {
  return (
    <section className="Contact">
      <p>
        Envie de discuter de projets excitants ou d'opportunités
        professionnelles ? Connectons-nous sur{" "}
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn !
        </a>
      </p>
    </section>
  );
};

export default Contact;
