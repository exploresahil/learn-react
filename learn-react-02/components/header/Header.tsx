import Link from "next/link";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <Link className="logo" href="/">
        Logo
      </Link>
      <nav>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
