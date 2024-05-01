import LinkButton from "@/components/ui/link-button/LinkButton";
import "./style.scss";

const AboutHero = () => {
  return (
    <section id="about">
      <h1>About</h1>
      <LinkButton className="red" href="/about/apply">
        Apply Now
      </LinkButton>
    </section>
  );
};

export default AboutHero;
