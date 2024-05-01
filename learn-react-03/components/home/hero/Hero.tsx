import LinkButton from "@/components/ui/link-button/LinkButton";
import "./style.scss";

const Hero = () => {
  return (
    <section id="hero">
      <h2>Home</h2>
      <LinkButton href="/shop">Shop Now</LinkButton>
    </section>
  );
};

export default Hero;
